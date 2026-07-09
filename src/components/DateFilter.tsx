import { useState } from 'react'

function DateFilter() {

    const dates = ['24h','7d','30d','All']

    const [date, SetDate] = useState('24h')

  return (
    <div className='flex bg-purple-800/60    rounded-full'>
        {
            dates.map((d,i)=>(
                <div className={`${date===d  ? "bg-purple-700/90  ":"s"} py-1 px-2 rounded-full w-12 sm:w-15 flex items-center justify-center text-white transition-all hover:cursor-pointer`} onClick={()=>SetDate(d)} key={i}>
                    {d}
                </div>
            ))
        }
    </div>
  )
}

export default DateFilter