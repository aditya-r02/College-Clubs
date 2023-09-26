

function Card3(props){
    let data = props.data;

    return (
        <div className="flex flex-col w-72 p-5 shadow-md hover:shadow-lg rounded-md bg-white">
            <span className="text-4xl">{data.icon}</span>
            <p className="font-semibold text-lg">{data.heading}</p>
            <p className="text-base">{data.desc}</p>

        </div>
    );
}


export default Card3;