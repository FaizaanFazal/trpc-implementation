'use server';
 
import { protectedAction } from '@/server/trpc';
import { z } from 'zod';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
 
export const createPost = protectedAction
  .input(z.object({ name: z.string(), race: z.string() }),)
  .mutation(async (opts) => {
    const { input } = opts;
    await prisma.profile.create({
        data:{
            name:input.name,
            race:input.race
        }
    })
});

export const fetchPost = protectedAction.query(()=>{
    return prisma.profile.findMany();
})
