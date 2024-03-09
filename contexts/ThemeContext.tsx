"use client";

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

type ThemeProps = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeProps>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof localStorage !== "undefined")
            return localStorage.getItem("theme")
                ? localStorage.getItem("theme")
                : "bumblebee";
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context)
        throw Error(
            "You are trying to access the context outside of its provider"
        );
    return context;
};

export { ThemeProvider, useTheme };
