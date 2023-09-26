import React, { useState } from 'react'
import Temp from "./Temp"
import photo from "./photographer.png"

export default function Photography() {
    const clubName="PHOTOGRAPHY CLUB";
    const objective="Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development"
    
    return (
        <div className='flex  flex-col  justify-center bg-[#fafafa] items-center p-4'>
            
            <div className='flex flex-row w-full px-36'>
                <div className='w-[50%]'>
                    <img alt="photography" src={photo} className="w-[75%]"></img>
                </div>
                <div className='flex flex-col justify-center w-[50%] space-y-3'>
                    <h1 className="text-3xl font-bold p-1 ">PHOTOGRAPHY CLUB</h1>
                    <p className='text-[#637282]'>
                    Photography and Film Club is one of the most integral and popular clubs of the UIET. A heaven for the creative. The club will also be conducting various workshops and learning sessions on image-editing and video-editing softwares. 
                    

                    </p>
                     <Temp  clubName={clubName} objective={objective} />
               
                    
                </div>
            </div>
            

        </div>
    )
}
