import { useState } from "react";

const LoginForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleLoginButton = (e) => {
    e.preventDefault()
    setIsSignInForm(!isSignInForm)
  }


    return (
        <div className="">
            <form action="" className="w-1/4 flex flex-col m-auto my-8 border bg-gray-100 p-8 rounded-lg">
                <h2 className="text-center font-bold text-2xl">{isSignInForm ? "Login" : "Sign Up"}</h2>
                <label for="Email" className="m-2">Email/Number : </label>
                <input type="text" id="Email" placeholder="Email or mobile number " className=" m-2 p-2 rounded-md"/>
                {!isSignInForm && <>
                    <label for="Name" className="m-2">Name :</label>
                    <input type="text" id="Name" placeholder="userName" className="m-2 p-2 rounded-md" />
                    </> }
                <label className="m-2" for="Pass">Password :</label>
                <input type="text" placeholder="password" id="Pass" className="m-2 p-2 rounded-md" />
                <button className="my-6 rounded-lg bg-red-600 p-2 text-lg m-2 font-semibold hover:bg-red-500" onClick={(e) => e.preventDefault()}>{isSignInForm ? "LOGIN" : "CONTINUE"}</button>

                <p>{isSignInForm ? "New User?" : "Have already account ?"} <button className="text-red-500 my-4 hover:underline" onClick={handleLoginButton}>{isSignInForm ? "create an account": "Login"}</button></p>
            </form>
        </div>
    )
}
export default LoginForm
