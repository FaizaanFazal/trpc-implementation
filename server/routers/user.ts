import { z } from "zod";
import { procedure, router } from "../trpc";

export const userRouter = router({
    getUsers: procedure.query(() => {
        return [
            { name: "Golmar", race: "Orc" },
            { name: "Grom", race: "Orc" },
        ];
    }),

    addUser: procedure
        .input(z.object({ name: z.string(), race: z.string() }))
        .mutation((opts) => {
            const { input } = opts;
            // TODO: Call prisma add user method
        }),
});