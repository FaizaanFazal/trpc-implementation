import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const usersRouter = router({
    getUsers: publicProcedure.query(() => {
        return prisma.profile.findMany();
    }),

    addUser: publicProcedure
        .input(z.object({ name: z.string(), race: z.string() }))
        .mutation(async (opts) => {
            const { input } = opts;
            await prisma.profile.create({
                data:{
                    name:input.name,
                    race:input.race
                }
            })
        }),
});