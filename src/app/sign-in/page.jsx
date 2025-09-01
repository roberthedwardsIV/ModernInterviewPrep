import {
    getAuthenticatedAppForUser,
    getAuthenticatedAppForUser as getUser,
} from "@/src/lib/firebase/serverApp.js";
import { SignIn } from "@/src/components/SignIn.jsx";
import { getFirestore } from "firebase/firestore";

export default async function Home() {
  
  return (
    <main className="main__sign-in">
      <h2>Sign-In Page Added Successfully</h2>
    </main>
  );
}
