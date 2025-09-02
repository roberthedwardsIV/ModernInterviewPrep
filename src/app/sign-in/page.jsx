// only import needed is for the sign in component
import SignIn from "@/src/components/Signin.jsx";


export default async function Home() {
  
  return (
    <main className="main__signin">
        <div>
            <h2>Sign-In Page Added Successfully</h2>
            <SignIn />
        </div>
    </main>
  );
}
