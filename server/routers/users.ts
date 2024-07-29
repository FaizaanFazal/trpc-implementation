import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const usersRouter = router({
    getUsers: publicProcedure.query(() => {
        return [
            { name: "Golmar", race: "Orc" },
            { name: "Grom", race: "Orc" },
        ];
    }),

    addUser: publicProcedure
        .input(z.object({ name: z.string(), race: z.string() }))
        .mutation((opts) => {
            const { input } = opts;
            // TODO: Call prisma add user method
        }),
});