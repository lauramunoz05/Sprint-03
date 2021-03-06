import { getAuth, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { google, facebook } from '../firebase/firebaseConfig';
import { types }from '../types/types';

export const LogOut = () => {
    return(dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(user => {
            dispatch(LogOutSincrono())
            console.log('chao')
        })
        .catch(error =>{
            console.log( error )
        })
    }
}

export const LogOutSincrono = () => {
    return{
        type: types.logout
    }
}

export const LoginEmailPassword = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(LoginSincrono(user.uid, user.displayName))
            console.log('Entraste')
        })
        .catch(error =>{
            console.log('El usuario no existe')
        })
    }
}

export const LoginFacebook = () => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
        .then(({user}) => {
            dispatch(LoginSincrono(user.uid, user.displayName))
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const LoginGoogle = () => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({user}) => {
            dispatch(LoginSincrono(user.uid, user.displayName))
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const LoginSincrono = (id, displayName) => {
    return{
        type: types.login,
        payload: {
            id,
            displayName
        }
    }
}