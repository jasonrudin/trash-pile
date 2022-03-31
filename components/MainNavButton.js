import Link from "next/link";

function MainNavButton(props) {
    return (
            <Link href="" >
                <a className="border-x-[0.5px] first:border-l-[1px] last:border-r-[1px] h-16 border-gray-300 grow flex items-center justify-center font-bold hover:bg-black hover:text-white">{props.name}</a>
            </Link>
    );
}

export default MainNavButton;