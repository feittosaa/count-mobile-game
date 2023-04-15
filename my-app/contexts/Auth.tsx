import React, { createContext, useState } from "react";

export interface TypeAuthContext {
    name: string
    setName: (name: string) => void
}

export const AuthContext = createContext<TypeAuthContext>({
    name: "",
    setName: (name: string) => { }
})

export const AuthProvider = ({ children }: any) => {

    const [name, setName] = useState<string>("");

    return (
        <AuthContext.Provider
            value={{
                name: name,
                setName: setName
            }}>
            {children}
        </AuthContext.Provider>
    )
}