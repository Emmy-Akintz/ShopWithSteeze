import { LiaTimesSolid } from "react-icons/lia";
import { useGeneralAppContext } from "../../functions/useGeneralAppContext"

import { useState } from 'react'
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import MiniLoader from "../MiniLoader";

export default function Account() {

    const { showAccount, generalAppDispatch, currentUser } = useGeneralAppContext()

    const [errorMessage, setErrorMessage] = useState({
        type: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)

    function closeAuthPage() {
        generalAppDispatch({
            type: 'setShowAccount',
            payload: {
                showAccountPayload: false
            }
        })

        setErrorMessage({
            type: '',
            message: ''
        })
    }

    async function resetPassword() {

        setLoading(true)
        setErrorMessage({
            type: '',
            message: ''
        })
        try {
            await sendPasswordResetEmail(auth, currentUser?.email || '')
            setErrorMessage({
                type: 'Email sent',
                message: 'Reset Email Sent'
            })
        } catch (error) {
            console.error(error)
            setErrorMessage({
                type: 'Error',
                message: 'Error Sending Email'
            })
        } finally {
            setLoading(false)
        }
    }

    async function signOutUser() {
        setLoading(true)
        await signOut(auth)
        localStorage.removeItem('user')
        setLoading(false)
        generalAppDispatch({
            type: 'setShowAccount',
            payload: {
                showAccountPayload: false
            }
        })
    }

    return (
        <div className={`bg-white z-[999999] ${showAccount ? '' : 'hidden'} shadow-md px-6 py-10 w-full max-w-[500px] absolute`}>
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
            <h3 className='font-medium text-center text-[1.5rem] font-Lora'>Account Info</h3>
            <div className="flex gap-4 items-center tracking-wide mt-6">
                <p>Email :</p>
                <div className="bg-[#f4f5fd] p-3 flex-1">{currentUser?.email}</div>
            </div>
            <div className="mt-6 flex flex-col gap-4 mb-6">
                <p className='text-start underline' onClick={resetPassword}>Reset Password</p>
                <button onClick={signOutUser} className='w-full p-4 text-white bg-black  transition-all duration-200 ease-in hover:bg-[#00000089] tracking-wider flex items-center justify-center'>
                    {loading ? <MiniLoader /> : 'LOGOUT'}
                </button>
            </div>
            <p className={`${errorMessage.message === '' ? 'hidden' : errorMessage.type === 'Error' ? 'bg-red-500 p-3 tracking-wide text-white' : errorMessage.type === 'Email sent' ? 'bg-green-500 p-3 tracking-wide text-white' : ''}`}>{errorMessage.message}</p>
        </div>
    )
}