import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import Footer from "./Footer";

const LoginForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isMessage, setIsMessage] = useState()
  const email = useRef(null)
  const password = useRef(null)

  const handleLoginButton = (e) => {
    e.preventDefault()
    setIsSignInForm(!isSignInForm)
  }

  const handleValidData = (e) => {
    // validate the form data
    e.preventDefault()

    const message = checkValidData(email.current.value,password.current.value)
    setIsMessage(message)

    if(message) return  // if messsage is present then return 

    // write sign up & signIn logic

    if(!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsMessage(errorCode + "-" + errorMessage)
      });
    }
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      setIsMessage(errorCode+ " " + errorMessage)
    });

  }

    return (
        <div className="overflow-hidden">
            <form action="" className="w-1/4 flex flex-col m-auto my-8 border bg-gray-100 p-8 rounded-lg">
                <h2 className="text-center font-bold text-2xl">{isSignInForm ? "Login" : "Sign Up"}</h2>
                <label for="Email" className="m-2">Email/Number : </label>
                <input type="text" id="Email" ref={email} placeholder="Email or mobile number " className=" m-2 p-2 rounded-md"/>

                {!isSignInForm && <>
                    <label for="Name" className="m-2">Name :</label>
                    <input type="text" id="Name" placeholder="userName" className="m-2 p-2 rounded-md" />
                    </> }

                <label className="m-2" for="Pass" >Password :</label>
                <input type="text" placeholder="password" id="Pass" ref={password} className="m-2 p-2 rounded-md" />
                <p className="text-red-600 mx-2 font-semibold">{isMessage}</p>
                <button className="my-6 rounded-lg bg-red-600 p-2 text-lg m-2 font-semibold hover:bg-red-500" onClick={handleValidData}>{isSignInForm ? "LOGIN" : "CONTINUE"}</button>

                <p>{isSignInForm ? "New User?" : "Have already account ?"} <button className="text-red-500 my-4 hover:underline" onClick={handleLoginButton}>{isSignInForm ? "create an account": "Login"}</button></p>
            </form>
            <Footer/>
        </div>
        
    )
}
export default LoginForm
