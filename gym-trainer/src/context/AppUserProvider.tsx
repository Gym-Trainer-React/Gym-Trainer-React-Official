import React, {useState} from "react";

export interface AppUser {
    id: number|null,
    username: string|null,
    firstName: string|null,
    lastName: string|null,
    height: string|null,
    weight: number|null,
    age: number|null,
    gender: string|null,
    bio: string|null


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