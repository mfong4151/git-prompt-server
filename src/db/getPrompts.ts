import { prisma } from '@/db/db';

export const getPrompts = ()=> (
    prisma.prompt.findMany({
        select:{
            id: true,
            title: true,
            desc: true,
            price: true,
        },

    })
)
