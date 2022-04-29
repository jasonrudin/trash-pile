import Link from "next/link";

function MainNavButton(props) {
    let navButtonStyle = "border-x-[0.5px] first:border-l-[1px] last:border-r-[1px] h-16 border-gray-300 grow flex items-center justify-center font-bold hover:bg-black hover:text-white"

    if (props.isExternal) {
        return (
            <a className={navButtonStyle} href = {props.route} target = "_blank">{props.name}</a>
        )
    }
    else {
        return (
            <Link href={props.route}>
                <a className={navButtonStyle}>{props.name}</a>
            </Link>
        );
    }
}

export default MainNavButton;