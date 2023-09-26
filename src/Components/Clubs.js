import React from 'react'
import Photography from './Photography';
import Singer from "./Singer"
import Dancecard from "./Dancecard"
import Literary from "./Literary"
import Sport from './Sport';
import Gdsc from "./Gdsc"

export default function Clubs() {
    return (
        <div className='flex  flex-col  justify-center  items-center p-4' id='clubSection'>
       
        <div className="text-4xl font-bold p-1 ">CLUBS IN UIET KURUKSHETRA</div>
            <div className='text-[#637282]'>If you like it, you can shoot it</div>
       
            
            <div>
                <Gdsc />
                <Photography />
                <Singer />
                <Dancecard />
                <Literary />
                <Sport />
            </div>
        </div>




    )
}
