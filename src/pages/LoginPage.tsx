import logo from "../assets/logo.png"


function LoginPage() {
  return (
    <div className='text-white  flex  justify-center items-center min-h-screen'>
        <div className='bg-violet-900/20 px-20 pt-10 pb-20 flex flex-col items-center rounded-xl shadow-4xl'>
   
        <div className='mb-10 flex items-center gap-3'>
            <img src={logo} className="w-10" alt="" />
            <p className='text-2xl'>Welcome Back Hunter!</p>
        </div>
        <div className='flex flex-col gap-4 w-full'>
            <input type="email" placeholder='Enter email address' className='bg-white text-black px-2 py-1' />
            <input type="password" placeholder='Enter password' className='bg-white text-black px-2 py-1' />
        </div>
        <div className='mt-4 w-full'>
            <button className='bg-violet-900 px-2 rounded w-full py-1 '>Login</button>
        </div>
            <div className="w-full mt-4 text-gray-400">
                <p className="text-start">Don't have an account ? <span className="text-violet-300">Sign Up</span></p>
            </div>
        </div>
    </div>
  )
}

export default LoginPage