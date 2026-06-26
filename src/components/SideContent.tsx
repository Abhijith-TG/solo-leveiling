import {  CgArrowTopRight } from 'react-icons/cg'

function SideContent() {
  return (
    <div className='bg-purple-900/40 text-white rounded-xl p-4 max-w-120'>
        <div className='flex mb-5 items-top justify-between'>
            <div className='flex flex-col gap-1'>
                <p className='text-xl'>Recent Activity</p>
                <p className='text-xs  text-white/70'>Activities history done along the app</p>
            </div>
            <div className='bg-purple-900/80 text-white/80 flex justify-center items-center w-8 h-8 rounded-full'>
                <CgArrowTopRight size={25}/> 
            </div>
        </div>
        <div>
            <div className='flex gap-2 items-center  border-b-2 border-white/10 py-4'>
                <div className='w-8 h-8 rounded-full'>
                    🏆
                </div>
                <div className='w-full'>
                    <div className='flex justify-between text-sm gap-5 items-center'>

                    <p >
                        Achevement Hunter completed !
                    </p>
                    <div className='bg-green-400/80 px-2 flex items-center text-[10px] rounded-full text-black' >
                        Completed
                    </div>
                    </div>
                    <p className='text-[10px] text-white/70'>
                        26 June 2026
                    </p>
                </div>
            </div>

            <div className='flex gap-2 items-center border-b-2 border-white/10 py-4'>
                <div className='w-8 h-8 rounded-full items-center justify-center'>
                    <p className='w-8 h-8'>✅</p>
                </div>
                <div className='w-full'>
                    <div className='flex justify-between text-sm gap-5 items-center'>

                    <p >
                        Create a new component and deploy the project
                    </p>
                    <div className='bg-green-400/80 px-2 flex items-center text-[10px] rounded-full text-black' >
                        Completed
                    </div>
                    </div>
                    <p className='text-[10px] text-white/70'>
                        25 June 2026
                    </p>
                </div>
            </div>

            <div className='flex gap-2 items-center border-b-2 border-white/10 py-4'>
                <div className='w-8 h-8 rounded-full '>
                    🪲
                </div>
                <div className='w-full'>
                    <div className='flex justify-between text-sm gap-5 items-center'>

                    <p >
                        Resolve a bug in any software
                    </p>
                    <div className='bg-blue-400/80 px-2 flex items-center text-[10px] rounded-full text-black' >
                        In Progress
                    </div>
                    </div>
                    <p className='text-[10px] text-white/70'>
                        24 June 2026
                    </p>
                </div>
            </div>

            <div className='flex gap-2 items-center border-b-2 border-white/10 py-4'>
                <div className='w-8 h-8 rounded-full '>
                    🪲
                </div>
                <div className='w-full'>
                    <div className='flex justify-between text-sm gap-5 items-center'>

                    <p >
                        Add a new API, Add test cases and use postman to test the API
                    </p>
                    <div className='bg-red-400/80 px-2 flex items-center text-[10px] rounded-full text-black' >
                        Incomplete
                    </div>
                    </div>
                    <p className='text-[10px] text-white/70'>
                        24 June 2026
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideContent