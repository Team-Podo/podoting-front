import {getAuth} from "firebase/auth";


export function getToken() {
    const auth = getAuth()
    auth.onIdTokenChanged(function (user) {
        if(user) {
            user.getIdToken().then((token) => { setToken(token) } )
        } else {

        }
    })
    const token = localStorage.getItem("token") ?? ""
    return token
}

export const setToken = (token:string) => {
    localStorage.setItem("token", token)
}