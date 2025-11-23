import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import { router } from "expo-router";
import { useAuth } from "./useAuth";

export function useLogout() {
        const authStore = useAuth((s) => s.logout);

        return useMutation({
                mutationFn: () => 
                        authApi.logout(),

                onSuccess: (data) => {
                        authStore();
                        router.replace("/(shop)/shop")
                }
        })
}