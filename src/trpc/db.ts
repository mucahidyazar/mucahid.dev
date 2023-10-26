import { PrismaClient } from '@prisma/client'

import { configs } from '@/configs';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      configs.isDevelopment ? ["query", "error", "warn"] : ["error"],
  });

if (!configs.isProduction) globalForPrisma.prisma = prisma;
