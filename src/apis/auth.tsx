import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {initializeApp} from "firebase/app";
import {setToken} from "../utils/token";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function join(data: {email:string, password: string}) {
    return createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            return 200
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            return errorCode
        });
}

export async function login(data: { email: string, password: string }) {
    return signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            user.getIdToken().then((token) => { setToken(token)})
            return 200

        })
        .catch((error) => {
            console.log(error)
            return 400
        });
}

export async function logout() {
    signOut(auth).then((res) => {
        localStorage.removeItem("token")
        return 200
    }).catch((e) => {
        console.log(e)
    })

}