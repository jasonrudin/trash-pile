function Button(props) {
    return (
        <button className="bg-lime-700 hover:bg-lime-900 text-white px-6 py-3 font-bold rounded">
            {props.buttonName}
        </button>
    );
}

export default Button;