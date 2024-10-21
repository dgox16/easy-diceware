import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/ThemeProvider.tsx";
import { useLanguageStore } from "@/store/languageStore";

export function ButtonToggleTheme() {
    const { isSpanish } = useLanguageStore();
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun
                        className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon
                        className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only"> {isSpanish ? "Cambia el tema" : "Toggle theme"} </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    {isSpanish ? "Claro" : "Light"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    {isSpanish ? "Oscuro" : "Dark"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    {isSpanish ? "Sistema" : "System"}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
