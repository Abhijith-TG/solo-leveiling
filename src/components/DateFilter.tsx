import React, { useState } from 'react'

function DateFilter() {

    const dates = ['24h','7d','30d','All']
    

    const [date, SetDate] = useState('7d')

  return (
    <div className='flex bg-purple-800/60    rounded-full'>
        {
            dates.map((d,i)=>(
                <div className={`${date===d  ? "bg-purple-700/90  ":"s"} py-1 px-2 rounded-full w-15 flex items-center justify-center text-white transition-all`} onClick={()=>SetDate(d)} key={i}>
                    {d}
                </div>
            ))
        }
    </div>
  )
}

export default DateFilter