'use server'

import { WishList } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { db } from "../lib/db"

import { creatorMiddleware } from "./utils"

type CreateWishListBody = Partial<Pick<WishList, 'minPrice' | 'maxPrice'>> & {
  productUrl: string,
}
async function createWishList(body: CreateWishListBody) {
  const user = await creatorMiddleware()

  await db.wishList.create({
    data: {
      ...body,
      user: { connect: { id: user.id } },
    }
  })

  await revalidatePath('/dashboard/stock');
  await redirect(`/dashboard/stock`);
}

type UpdateWishListBody = Partial<Pick<WishList, 'status'>> & {
  wishlistId: string,
}
async function updateWishList(body: UpdateWishListBody) {
  const user = await creatorMiddleware()
  const { status, wishlistId, ...rest } = body

  const response = await db.wishList.findUnique({ where: { id: wishlistId } })
  if (!response) return { message: 'wishlist not found.' };

  if (user.role !== "ADMIN" && response.userId !== user.id) return { message: 'user not authorized.' };


  await db.wishList.update({
    where: { id: response.id },
    data: {
      ...rest,
      status
    }
  })

  await revalidatePath('/dashboard/stock');
  await redirect(`/dashboard/stock`);
}

type ActionRemoveWishList = {
  id: string,
}
async function removeWishList(passedData: ActionRemoveWishList) {
  const { id } = passedData;
  const wishList = await db.wishList.findUnique({ where: { id } });
  if (!wishList) return { message: 'wishList not found.' };

  const user = await creatorMiddleware()
  if (user.role !== "ADMIN" && wishList.userId !== user.id) return { message: 'user not authorized.' };

  await db.wishList.delete({ where: { id } })
  await revalidatePath('/dashboard/stock');
  await redirect(`/dashboard/stock`);
}

export {
  createWishList,
  removeWishList,
  updateWishList
}
