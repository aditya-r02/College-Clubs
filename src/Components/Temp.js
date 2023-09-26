import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
// import "./Temp.css";
import DemoCarousel from "./DemoCarousel";
import img from "./2.png";

const name = "name of the teacher";

function Temp(props) {
  return (
    <div className="rounded-md w-[150px] inline-flex items-center justify-center  text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700  shadow-xl shadow-blue-500/50 hover:bg-[#007bff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600">
      <Popup
        trigger={<button className="button px-4 py-2"> Read More  </button>}
        modal
        nested
        lockScroll
      >
        {(close) => (
          <div className=" bg-slate-600 text-white flex flex-col w-fit p-4 rounded-md">
            
            <div className="text-3xl font-bold text-center py-4 underline ">{props.clubName}</div>
            <div className="flex gap-20">
              <div className="flex justify-center items-center">
                <DemoCarousel />
              </div>
              <div className="flex flex-col ">
                <div className="h-[14rem] ">
                  <div className="text-2xl font-bold">OBJECTIVE</div>
                  <div>
                    <p className="">{props.objective}</p>
                  </div>
                </div>
                <div className="space-y-1 ">
                  <div className="text-2xl font-bold ">CLUB COORDINATOR</div>
                  
                  <div className="flex items-center">
                    <img alt={img} src={img} className="h-10 w-10 rounded-full" />
                    <span className="px-2">{name}</span>
                  </div>
                  <div className="flex items-center">
                    <img alt={img} src={img} className="h-10 w-10 rounded-full" />
                    <span className="px-2">{name}</span>
                  </div>
                  <div className="flex items-center">
                    <img alt={img} src={img} className="h-10 w-10 rounded-full" />
                    <span className="px-2">{name}</span>
                  </div>
                  </div>
                
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default Temp;

// <div className="modal">
//         <button className="close" onClick={close}>
//           &times;
//         </button>
//         <div className="header"> Modal Title </div>
//         <div className="content">
//           {' '}
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
//           Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
//           delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
//           <br />
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
//           commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
//           explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
//         </div>
//         <div className="actions">
//           <Popup
//             trigger={<button className="button"> Trigger </button>}
//             position="top center"
//             nested
//           >
//             <span>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
//               magni omnis delectus nemo, maxime molestiae dolorem numquam
//               mollitia, voluptate ea, accusamus excepturi deleniti ratione
//               sapiente! Laudantium, aperiam doloribus. Odit, aut.
//             </span>
//           </Popup>

//         </div>
//       </div>
