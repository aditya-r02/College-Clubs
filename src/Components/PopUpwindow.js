import React from 'react'
import DemoCarousel from "./DemoCarousel"
import img from "./2.png";
import close from "./close.png"
function PopUpwindow(props) {
  return (

    <>
      {props.show !== 'close' &&
        <div className='absolute bg-red-100 flex flex-col items-center  h-[550px] w-[60%] ' >
          <img alt={close} className='h-8 absolute top-0 right-0 hover:cursor-pointer p-2' src={close} onClick={props.changePopup} />
          <div className='text-3xl font-bold p-4 pb-5'>{props.clubName}</div>
          <div className='flex gap-20'>
            <div className=''>
              <DemoCarousel />
            </div>
            <div className='flex flex-col '>
              <div className='h-[14rem] '>
                <div className='text-2xl font-bold'>OBJECTIVE</div>
                <div><p className='w-[25rem]'>{props.objective}</p></div>
              </div>
              <div className='space-y-1'>
                <div className="text-2xl font-bold ">CLUB COORDINATOR</div>
                {
                  props.teacherName.map((name) =>
                    <div className='flex items-center '><img alt={img} src={img} className="h-10 w-10 rounded-full" /> <span className='px-2'>{name}</span></div>)
                }
              </div>
            </div>
          </div>

        </div>}

    </>
  )
}

export default PopUpwindow
