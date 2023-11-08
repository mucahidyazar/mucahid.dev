// Authorization function for google one tap custom credential provider
// app/api/auth/[...nextauth]/authorize.ts

import { OAuth2Client } from 'google-auth-library';
import { User } from "next-auth";

import { env } from '@/configs/env.mjs'
import { adapter } from '@/lib/auth';

// import { adapter, googleAuthClient } from "./authOptions";


const googleAuthClient = new OAuth2Client(env.GOOGLE_CLIENT_ID);

export const authorize = async (credentials: Record<"credential", string> | undefined): Promise<User | null> => {
  // These next few lines are simply the recommended way to use the Google Auth Javascript API as seen in the Google Auth docs
  // What is going to happen is that t he Google One Tap UI will make an API call to Google and return a token associated with the user account
  // This token is then passed to the authorize function and used to retrieve the customer information (payload).
  // If this doesn't make sense yet, come back to it after having seen the custom hook.

  const token = credentials!.credential;
  const ticket = await googleAuthClient.verifyIdToken({
    idToken: token,
    audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();
  if (!payload) {
    throw new Error("Cannot extract payload from signin token");
  }

  const { email, sub, given_name, family_name, email_verified, picture: image } = payload;
  if (!email) {
    throw new Error("Email not available");
  }

  // At this point we have deconstructed the payload and we have all the user's info at our disposal.
  // So first we're going to do a check to see if we already have this user in our DB using the email as identifier.
  let user = await adapter.getUserByEmail!(email);

  // If no user is found, then we create one.
  if (!user) {
    user = await adapter.createUser!({
      name: [given_name, family_name].join(" "),
      email,
      image,
      emailVerified: email_verified ? new Date() : null,
    });
  }

  // The user may already exist, but maybe it signed up with a different provider. With the next few lines of code
  // we check if the user already had a Google account associated, and if not we create one.
  let account = await adapter.getUserByAccount!({
    provider: "google",
    providerAccountId: sub,
  });

  if (!account && user) {
    console.log("creating and linking account");
    await adapter.linkAccount!({
      userId: user.id,
      provider: "google",
      providerAccountId: sub,
      type: "credentials",
    });
  }

  return user;
};
