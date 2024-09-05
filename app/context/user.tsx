import React, { useContext, createContext, ReactNode, useState } from "react";

interface AppState {
    fullname: string;
    email: string;
    password: string;
    image: string
}

interface AppContextType extends AppState {
    setFullName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setImage: React.Dispatch<React.SetStateAction<string>>;
}
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [ fullname, setFullName ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ image, setImage ] = useState<string>("");

    const contextValue: AppContextType = {
        fullname, setFullName,
        email, setEmail,
        password, setPassword,
        image, setImage
    }

    return (
        <AppContext.Provider value={contextValue}>
            {
                children
            }
        </AppContext.Provider>
    )
}

const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if(!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
}

export { AppProvider, useAppContext };