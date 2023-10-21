import { LiaTimesSolid } from "react-icons/lia";
import { useGeneralAppContext } from "../../functions/useGeneralAppContext"
import { useState } from "react";
import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import axios from "axios";
import { auth } from "../../firebase";
import MiniLoader from '../MiniLoader';

export default function Signup() {

    const { showSignup, generalAppDispatch } = useGeneralAppContext()

    const [authDetails, setAuthDetails] = useState({
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)

    function closeAuthPage() {
        generalAppDispatch({
            type: 'setShowSignup',
            payload: {
                showSignupPayload: false
            }
        })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const { email, password } = authDetails
        if (email !== '' && password !== '') {
            setLoading(true)
            try {
                // Create the user with Firebase Authentication
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);

                // Get the Firebase ID token
                const idToken = await getIdToken(userCredential.user);

                // Now you have the actual ID token, so you can use it in your Axios request
                await axios.post(`${import.meta.env.VITE_SERVER_URL}user/createUser`, userCredential, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${idToken}`,
                    }
                });

                console.log(userCredential.user)

                generalAppDispatch({
                    type: 'setCurrentUser',
                    payload: {
                        currentUserPayload: userCredential.user
                    }
                });

                generalAppDispatch({
                    type: 'closeAuthPages'
                });

                setAuthDetails({
                    email: '',
                    password: ''
                })

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    }
    function goToSignIn() {
        generalAppDispatch({
            type: 'setShowLogin',
            payload: {
                showLoginPayload: true
            }
        })
        generalAppDispatch({
            type: 'setShowSignup',
            payload: {
                showSignupPayload: false
            }
        })
    }

    return (
        <div className={`bg-white z-[999999] ${showSignup ? '' : 'hidden'} shadow-md px-6 py-10 w-full max-w-[500px] absolute`}>
            <div className='flex justify-end'>
                <button
                    className='bg-white p-2 rounded-full shadow-lg text-[1.2rem]'
                    onClick={(e) => {
                        e.stopPropagation;
                        closeAuthPage()
                    }}
                >
                    <LiaTimesSolid />
                </button>
            </div>
            <h3 className='font-medium text-center text-[1.5rem] font-Lora'>Register</h3>
            <form className='mt-6 flex flex-col gap-6 md:gap-4' onSubmit={handleSubmit}>
                <input
                    type='email'
                    className='w-full bg-transparent p-4 border-[1px] border-[#808080] outline-none'
                    placeholder='Email'
                    required
                    onChange={(e) => {
                        setAuthDetails(prevDetails => {
                            return {
                                ...prevDetails,
                                email: e.target.value
                            }
                        })
                    }}
                />
                <input
                    type='password'
                    className='w-full bg-transparent p-4 border-[1px] border-[#808080] outline-none'
                    placeholder='Password'
                    required
                    onChange={(e) => {
                        setAuthDetails(prevDetails => {
                            return {
                                ...prevDetails,
                                password: e.target.value
                            }
                        })
                    }}
                />
                <div className='flex flex-col gap-6 md:gap-4'>
                    <button type='submit' className='w-full p-4 text-white bg-black  transition-all duration-200 ease-in hover:bg-[#00000089] tracking-wider flex items-center justify-center'>
                        {loading ? <MiniLoader /> : 'REGISTER'}
                    </button>
                    <button type='button' onClick={goToSignIn} className='w-full p-4 text-white bg-[#27262659] transition-all duration-200 ease-in hover:bg-[#00000089] tracking-wider'>ALREADY HAS AN ACCOUNT</button>

                </div>
            </form>
        </div>
    )
}
