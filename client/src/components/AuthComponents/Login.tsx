import { getIdToken, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useGeneralAppContext } from "../../functions/useGeneralAppContext"

import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
import { auth } from "../../firebase";
import React, { useEffect, useState } from "react";
import MiniLoader from '../MiniLoader';

export default function Login() {

    const { showLogin, generalAppDispatch } = useGeneralAppContext()

    const [authDetails, setAuthDetails] = useState({
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState({
        type: '',
        message: ''
    })
    const [showForgotPassword, setShowForgotPassword] = useState(false)

    useEffect(() => {
        setShowForgotPassword(false)
        setAuthDetails({
            email: '',
            password: ''
        })
    }, [])

    function closeAuthPage() {
        generalAppDispatch({
            type: 'setShowLogin',
            payload: {
                showLoginPayload: false
            }
        })
    }

    console.log(authDetails)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const { email, password } = authDetails
        if (email !== '' && password !== '') {
            setLoading(true)
            try {
                // Create the user with Firebase Authentication
                const userCredential = await signInWithEmailAndPassword(auth, email, password);

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

    function goToRegister() {
        generalAppDispatch({
            type: 'setShowLogin',
            payload: {
                showLoginPayload: false
            }
        })
        generalAppDispatch({
            type: 'setShowSignup',
            payload: {
                showSignupPayload: true
            }
        })
    }

    async function resetPassword(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const { email } = authDetails

        setLoading(true)
        await sendPasswordResetEmail(auth, email).
            then(() => {
                setErrorMessage({
                    type: 'Email sent',
                    message: 'Reset email sent'
                })
            }).catch((error) => {
                console.error(error)
                setErrorMessage({
                    type: 'Error',
                    message: 'Error sending email'
                })
            }).finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className={`bg-white z-[999999] ${showLogin ? '' : 'hidden'} shadow-md px-6 py-10 w-full max-w-[500px] absolute`}>
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
            <h3 className='font-medium text-center text-[1.5rem] font-Lora'>{showForgotPassword ? 'Reset Password' : 'Sign In'}</h3>
            {showForgotPassword ?
                <form className='mt-6 flex flex-col gap-6 md:gap-4' onSubmit={resetPassword}>
                    <input
                        type='email'
                        className='w-full bg-transparent p-4 border-[1px] border-[#808080] outline-none'
                        placeholder='Email*'
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
                    <div className='flex flex-col gap-6 md:gap-4'>
                        <button type='submit' className='w-full p-4 text-white bg-black  transition-all duration-200 ease-in hover:bg-[#00000089] tracking-wider flex items-center justify-center'>
                            {loading ? <MiniLoader /> : 'SEND EMAIL'}
                        </button>
                        <button type='button' onClick={() => setShowForgotPassword(false)} className='w-full p-4 text-white bg-[#27262659] transition-all duration-200 ease-in hover:bg-[#00000089] tracking-wider'>SIGN IN</button>
                    </div>
                </form> :
                <form className='mt-6 flex flex-col gap-6 md:gap-4' onSubmit={handleSubmit}>
                    <input
                        type='email'
                        className='w-full bg-transparent p-4 border-[1px] border-[#808080] outline-none'
                        placeholder='Email*'
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
                        placeholder='Password*'
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
                    <p onClick={() => setShowForgotPassword(true)} className='text-end underline'>Forgot Password?</p>
                    <div className='flex flex-col gap-6 md:gap-4'>
                        <button type='submit' className='w-full p-4 text-white bg-black  transition-all duration-200 ease-in hover:bg-[#00000089] tracking-wider flex items-center justify-center'>
                            {loading ? <MiniLoader /> : 'SIGN IN'}
                        </button>
                        <button type='button' onClick={goToRegister} className='w-full p-4 text-white bg-[#27262659] transition-all duration-200 ease-in hover:bg-[#00000089] tracking-wider'>CREATE ACCOUNT</button>
                    </div>
                </form>
            }
            <p className={`${errorMessage.message === '' ? 'hidden' : errorMessage.type === 'error' ? '' : errorMessage.type === 'Email sent' ? '' : ''}`}>{errorMessage.message}</p>
        </div>
    )
}
