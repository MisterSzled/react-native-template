import { useForm } from "react-hook-form";
import { loginSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const useLoginForm = () =>
        useForm<z.infer<typeof loginSchema>>({
                resolver: zodResolver(loginSchema)
        });