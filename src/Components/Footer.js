import FooterData from "./allData/FooterData";
import {FaLinkedin} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';

function Footer(){
    let data = FooterData;

    return(
        <div className="bg-blue-500 text-white p-1">
        <h3 className="text-3xl text-center">CONTACT US</h3>
        <div className="flex justify-around my-2">
            
            {
                data.map((card)=>{
                    return (
                        <div className="flex gap-2 items-center text-lg">
                            <span >{card.name}</span>
                            <span className="text-xl hover:text-orange-500"><a href={card.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin/></a></span>

                            <span className="text-xl hover:text-pink-600"><a href={card.instagram} target="_blank" rel="noopener noreferrer">
                                <BsInstagram/>
                            </a></span>
                        </div>
                    );
                })
            }
        </div></div>
    );
}

export default Footer;