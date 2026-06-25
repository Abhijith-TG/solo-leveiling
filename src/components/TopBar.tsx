import { BsQuestionCircle } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'

function TopBar() {

  return (
    <div className=' flex ps-6 pe-2 py-2 text-white bg-purple-900/40 backdrop-blur-xl rounded-full justify-between max-w-200 min-w-150  items-center'>
        <div className='text-xl'>Dashboard</div> 
        <div className='flex items-center gap-3'>
            <div className='p-2.5 bg-purple-900/60 rounded-full' > <BsQuestionCircle size={18}/> </div>
            <div className='p-2.5 bg-purple-900/60 rounded-full'> <IoNotificationsOutline size={18} /> </div>
            <div className='flex items-center gap-3 bg-purple-900/60 px-2.5 py-1.5 rounded-full justify-between '>
                <div>
                    <img className='w-7 h-7 rounded-full' src="https://aniyuki.com/wp-content/uploads/2025/02/aniyuki-solo-leveling-gif-11.gif" alt="" />
                </div>
                < p className='text-sm'>{name}</p>
                <MdKeyboardArrowDown/>
            </div>
            
        </div>
    </div>
  )
}

export default TopBar









const name = "Abhijith TG"
