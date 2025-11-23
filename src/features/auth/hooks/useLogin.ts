import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import { router } from "expo-router";
import { useAuth } from "./useAuth";

export function useLogin() {
        const authStore = useAuth((s) => s.login);

        return useMutation({
                mutationFn: ({username, password}: {username: string, password: string}) => 
                        authApi.login(username, password),

                onSuccess: (data) => {
                        authStore(data.token, data.userId);
                        router.replace("/(shop)/shop")
                }
        })
}