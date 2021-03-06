import { useState, useEffect } from "react";

export function useDarkMode() {
    const [theme, setTheme] = useState("light")

    const setMode = (mode) => {
        localStorage.setItem("theme", mode)
        setTheme(mode)
    }

    const Toggle = () => (theme === "dark") ? setMode("light") : setMode("dark")

    useEffect(() => {

        //get the theme in the localstorage 
        const themeVal = localStorage.getItem("theme")

    //if there is a theme in the localStrage use it else set it as light
        themeVal ? setTheme(themeVal) : setMode("light")

    }, [])

    return{
        theme,
        Toggle
    }

}