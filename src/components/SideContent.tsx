import {  CgArrowTopRight } from 'react-icons/cg'

function SideContent() {

    const activity = [{
        title:"Achevement Hunter completed !",
        icon:"🏆",
        date:"26 June 2026",
        status:"Completed"
    },
    {
        title:"Create a new component and deploy the project",
        icon:"✅",
        date:"25 June 2026",
        status:"Completed"
    },
    {
        title:"Resolve a bug in any software",
        icon:"🪲",
        date:"24 June 2026",
        status:"Completed"
    },
    {
        title:"Add a new API, Add test cases and use postman to test the API",
        icon:"✅",
        date:"24 June 2026",
        status:"Completed"
    },
    {
        title:"Achevement Hunter completed !",
        icon:"🏆",
        date:"26 June 2026",
        status:"Completed"
    },
    {
        title:"Achevement Hunter completed !",
        icon:"🏆",
        date:"26 June 2026",
        status:"Completed"
    },
    {
        title:"Achevement Hunter completed !",
        icon:"🏆",
        date:"26 June 2026",
        status:"Completed"
    },
    {
        title:"Achevement Hunter completed !",
        icon:"🏆",
        date:"26 June 2026",
        status:"Completed"
    }
    ,
    {
        title:"Achevement Hunter completed !",
        icon:"🏆",
        date:"26 June 2026",
        status:"Completed"
    }
    ,
    {
        title:"Achevement Hunter completed !",
        icon:"🏆",
        date:"26 June 2026",
        status:"Completed"
    },
    
    {
        title:"Achevement Hunter completed !",
        icon:"🏆",
        date:"26 June 2026",
        status:"Completed"
    }
]


  return (
    <div className='bg-purple-900/40 text-white rounded-xl p-4 max-w-120 inline max-h-90 lg:max-h-dvh my-scrollbar'>
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
        {
            activity.map((a,index)=>
                 <div key={index} className='flex gap-2 items-center  border-b-2 border-white/10 py-4'>
                <div className='w-8 h-8 rounded-full'>
                    {a.icon}
                </div>
                <div className='w-full'>
                    <div className='flex justify-between text-sm gap-5 items-center'>

                    <p >
                        {a.title}
                    </p>
                    <div className='bg-green-400/80 px-2 flex items-center text-[10px] rounded-full text-black' >
                        {a.status}
                    </div>
                    </div>
                    <p className='text-[10px] text-white/70'>
                        {a.date}
                    </p>
                </div>
            </div>   
            )
        }

        </div>
    </div>
  )
}

export default SideContent