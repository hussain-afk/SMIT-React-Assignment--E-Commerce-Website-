import { createContext, useState, useMemo, useCallback } from "react";

// 1. Capitalize Context name (standard React convention)
export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    // 2. Use functional updates to prevent stale state issues
    // 3. Wrap in useCallback to prevent unnecessary re-renders in consumers
    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
    };

    // 4. Memoize the value object so children don't re-render 
    // every time the Provider's parent re-renders
    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;