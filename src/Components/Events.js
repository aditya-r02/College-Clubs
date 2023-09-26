import React, { Component } from "react";
import Slider from "react-slick";




export default class Events extends Component {
  render() {
    const settings = {
      
      infinite: true,
      pauseOnHover: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 8000,
      autoplaySpeed:60,
      cssEase: "linear",
      centerPadding: "60px",
      
    };
    return (
      <div className="h-[300px] w-[95vw] mx-auto">
        <h2 className="text-3xl font-bold text-center p-6">UP COMING EVENTS</h2>
        <Slider {...settings}>
        <div className=" w-96 h-[12rem] shadow-md border border-gray-300 rounded-sm ">
            <p className=" pt-2 text-center font-semibold text-2xl">Applications for joining GDSC open!</p>
            <p className="p-4  text-xl">Last date of submitting application is 31st May, 2023</p>
            <a className="p-4  text-xl text-sky-600" href="https://docs.google.com/forms/d/e/1FAIpQLSfR0n1VnBfdqcepXGi17zvQoSM8yi9lIj1G2VipvR_iUBLvRw/viewform">Google form link</a>
        </div>
        <div className=" w-96 h-[12rem] shadow-md border border-gray-300 rounded-sm ">
            <p className=" pt-2 text-center font-semibold text-2xl">Applications for joining ECell open!</p>
            <p className="p-4  text-xl">Last date of submitting application is 31st july, 2023</p>
            <a className="p-4  text-xl text-sky-600" href="https://docs.google.com/forms/d/e/1FAIpQLSfR0n1VnBfdqcepXGi17zvQoSM8yi9lIj1G2VipvR_iUBLvRw/viewform">Google form link</a>
       
        </div>
        <div className=" w-96 h-[12rem] shadow-md border border-gray-300 rounded-sm ">
            <p className=" pt-2 text-center font-semibold text-2xl">Applications for joining GDSC open!</p>
            <p className="p-4  text-xl">Last date of submitting application is 31st May, 2023</p>
            <a className="p-4  text-xl text-sky-600" href="https://docs.google.com/forms/d/e/1FAIpQLSfR0n1VnBfdqcepXGi17zvQoSM8yi9lIj1G2VipvR_iUBLvRw/viewform">Google form link</a>
       
        </div>
        <div className=" w-96 h-[12rem] shadow-md border border-gray-300 rounded-sm ">
            <p className=" pt-2 text-center font-semibold text-2xl">Applications for joining ECell open!</p>
            <p className="p-4  text-xl">Last date of submitting application is 31st july, 2023</p>
            <a className="p-4  text-xl text-sky-600" href="https://docs.google.com/forms/d/e/1FAIpQLSfR0n1VnBfdqcepXGi17zvQoSM8yi9lIj1G2VipvR_iUBLvRw/viewform">Google form link</a>
       
        </div>
        <div className=" w-96 h-[12rem] shadow-md border border-gray-300 rounded-sm ">
            <p className=" pt-2 text-center font-semibold text-2xl">Applications for joining GDSC open!</p>
            <p className="p-4  text-xl">Last date of submitting application is 31st May, 2023</p>
            <a className="p-4  text-xl text-sky-600" href="https://docs.google.com/forms/d/e/1FAIpQLSfR0n1VnBfdqcepXGi17zvQoSM8yi9lIj1G2VipvR_iUBLvRw/viewform">Google form link</a>
       
        </div>
        <div className=" w-96 h-[12rem] shadow-md border border-gray-300 rounded-sm ">
            <p className=" pt-2 text-center font-semibold text-2xl">Applications for joining ECell open!</p>
            <p className="p-4  text-xl">Last date of submitting application is 31st july, 2023</p>
            <a className="p-4  text-xl text-sky-600" href="https://docs.google.com/forms/d/e/1FAIpQLSfR0n1VnBfdqcepXGi17zvQoSM8yi9lIj1G2VipvR_iUBLvRw/viewform">Google form link</a>
       
        </div>
          
          
        </Slider>
      </div>
    );
  }
}