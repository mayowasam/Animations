import { createContext, useContext, useState} from "react";
import { darkTheme, lightTheme } from '../styles/globalStyles';
import { useDarkMode } from './useDarkMode'

const StateContext = createContext()

function StateProvider({ children }) {
    const { theme, Toggle } = useDarkMode()
      const [loading, setLoading] = useState(true)

    const themeMode = (theme === "dark") ? darkTheme : lightTheme
    console.log(themeMode);
    console.log(theme);

    return (
        <StateContext.Provider
            value={{
                darkTheme,
                lightTheme,
                theme,
                themeMode,
                Toggle,
                loading, 
                setLoading

            }}
        >
            {children}

        </StateContext.Provider>
    )
}

export const useStateVal = () => useContext(StateContext)

export default StateProvider