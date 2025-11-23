import { z } from "zod";

export const AuthResponse = z.object({
        token: z.string(),
        userId: z.string().or(z.number()),
        username: z.string()
});

export type AuthResponse = z.infer<typeof AuthResponse>;