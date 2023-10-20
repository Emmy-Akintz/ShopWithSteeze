import { useGeneralAppContext } from "../../functions/useGeneralAppContext"

import { LiaTimesSolid } from "react-icons/lia";

export default function Login() {

    const { showLogin, generalAppDispatch } = useGeneralAppContext()

    function closeAuthPage() {
        generalAppDispatch({
            type: 'setShowLogin',
            payload: {
                showLoginPayload: false
            }
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
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
            <h3 className='font-medium text-center text-[1.5rem] font-Lora'>Sign In</h3>
            <form className='mt-6 flex flex-col gap-6 md:gap-4' onSubmit={handleSubmit}>
                <input
                    type='email'
                    className='w-full bg-transparent p-4 border-[1px] border-[#808080] outline-none'
                    placeholder='Email*'
                />
                <input
                    type='password'
                    className='w-full bg-transparent p-4 border-[1px] border-[#808080] outline-none'
                    placeholder='Password*'
                />
                <div className='flex flex-col gap-6 md:gap-4'>
                    <button type='submit' className='w-full p-4 text-white bg-black  transition-all duration-200 ease-in hover:bg-[#00000089] tracking-wider'>SIGN IN</button>
                    <button type='button' onClick={goToRegister} className='w-full p-4 text-white bg-[#27262659] transition-all duration-200 ease-in hover:bg-[#00000089] tracking-wider'>CREATE ACCOUNT</button>

                </div>
            </form>
        </div>
    )
}
