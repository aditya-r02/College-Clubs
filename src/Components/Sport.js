import React, { useState } from 'react'
import Temp from "./Temp"
import photo from "./sports.png"

export default function Sport() {
    const clubName="SPORTS CLUB";
    const objective="Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development"
    
    return (
        <div className='flex  flex-col  justify-center bg-[#fafafa] items-center p-4'>
           
            <div className='flex flex-row w-full px-36'>
                <div className='w-[50%]'>
                    <img alt="sport" src={photo} className="h-[475px]"></img>
                </div>
                <div className='flex flex-col justify-center w-[50%] space-y-3'>
                    <h1 className="text-3xl font-bold p-1 ">SPORTS CLUB</h1>
                    <p className='text-[#637282]'>
                    Excellent facilities including a well-equipped gymnasium, the impressive Sports Complex, a vast stadium and a high-tech wood-floored multipurpose indoor stadium are available in the University.

                    </p>
                    <Temp  clubName={clubName} objective={objective} />
              
                    
                </div>
            </div>
            
        </div>
    )
}
