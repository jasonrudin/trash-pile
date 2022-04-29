const Button = ({ buttonName, onClick }) => {
    return (
        <button className= "transition duration-700 ease-in-out bg-[#9945FF] hover:bg-gradient-to-tr hover:from-[#9945FF] hover:to-[#14F195] text-white px-6 py-3 font-bold rounded" onClick={onClick}>
            {buttonName}
        </button>
    );

}

export default Button;

//hover:bg-gradient-from-[#9945FF] bg-to-[#14F195] 