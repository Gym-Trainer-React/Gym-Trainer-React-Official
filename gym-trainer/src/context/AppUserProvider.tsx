import React, {useState} from "react";

export interface AppUser {
    "id": number,
    "username": string,
    "firstName": string,
    "lastName": string,
    "height": string,
    "weight": number,
    "age": number,
    "gender": string,
    "bio": string
}

export const AppUserContext = React.createContext<AppUser | null>(null);
export const AppUserUpdateContext = React.createContext<Function | null>(null);


export default function AppUserProvider({children}: any){

    const [appUser, setAppUser] = useState<AppUser | null>(null)

    return <>
        <AppUserContext.Provider value={appUser}>
            <AppUserUpdateContext.Provider value={setAppUser}>
                {children}
            </AppUserUpdateContext.Provider>
        </AppUserContext.Provider>
    </>
}