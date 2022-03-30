import { auth, googleAuthProvider } from "../lib/firebase"
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage(props) {
    const {user, username } = useContext(UserContext)
    //three states user can be in

    //1 user is signed out /signinButton/
    //2 user is signed in without a username /usernameForm/
    //3 user is signed in with a username /sign out button/

    return (
        <main>
            {user ?
                !username ? <UsernameForm /> : <SignOutButton />
                :
                <SignInButton />
            }
        </main>
    );
}

//sign in with google button
//should wrap in try/catch
function SignInButton() {
    //popup modal sign in
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
    };
    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={"./google-logo.png"} /> Sign in with Google
        </button>
    );
}

// sign out button
function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            Sign Out
        </button>
    );
}

function UsernameForm() {
    return null;
}