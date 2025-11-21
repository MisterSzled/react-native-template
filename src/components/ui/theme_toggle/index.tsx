import { Button } from "@src/components/ui/button/index";
import { Moon, Sun } from "lucide-react-native";
import { useColorScheme } from 'nativewind';
import React, { useCallback } from 'react';

const ThemeToggle = () => {
        const { colorScheme, setColorScheme } = useColorScheme();

        const next = useCallback(() => {
                if (colorScheme === "light") return setColorScheme("dark");
                return setColorScheme("light")
        }, [colorScheme]);

        const renderIcon = () => {
                if (colorScheme === "light") {
                        return <Moon size={20} className="text-primary-foreground" />
                }
                return <Sun size={20} className="text-primary-foreground" />
        }

        return (
                <Button
                        onPress={next}
                        size="sm"
                >
                        {renderIcon()}
                </Button>
        )
}

export default ThemeToggle
