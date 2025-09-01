import {
    getAuthenticatedAppForUser,
    getAuthenticatedAppForUser as getUser,
} from "@/src/lib/firebase/serverApp.js";
import { SignIn } from "@/src/components/SignIn.jsx";
import { getFirestore } from "firebase/firestore";

export default async function signIn() {
  
  return (
    <main className="main__signIn">
        <div>
            <h2>Sign-In Page Added Successfully</h2>
        </div>
    </main>
  );
}
