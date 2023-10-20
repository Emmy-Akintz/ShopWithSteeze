import { LiaTimesSolid } from "react-icons/lia";
import { useGeneralAppContext } from "../../functions/useGeneralAppContext"

export default function Signup() {

    const { showSignup, generalAppDispatch } = useGeneralAppContext()

    function closeAuthPage() {
        generalAppDispatch({
            type: 'setShowSignup',
            payload: {
                showSignupPayload: false
            }
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
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
                />
                <input
                    type='password'
                    className='w-full bg-transparent p-4 border-[1px] border-[#808080] outline-none'
                    placeholder='Password'
                />
                <div className='flex flex-col gap-6 md:gap-4'>
                    <button type='submit' className='w-full p-4 text-white bg-black  transition-all duration-200 ease-in hover:bg-[#00000089] tracking-wider'>REGISTER</button>
                    <button type='button' onClick={goToSignIn} className='w-full p-4 text-white bg-[#27262659] transition-all duration-200 ease-in hover:bg-[#00000089] tracking-wider'>ALREADY HAS AN ACCOUNT</button>

                </div>
            </form>
        </div>
    )
}
