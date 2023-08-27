import { PrismaClient } from "@prisma/client";

//Prevents hot reloading and overriding our prisma client by instantiating a singleton primsa client


const globalForPrisma = global as  unknown as {
    prisma: PrismaClient | undefined
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ['query'],
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;