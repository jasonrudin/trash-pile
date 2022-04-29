import Link from "next/link";

const  MainNavButton = props => {
    const { isExternal, route, name } = props;
    const navButtonStyle = "border-x-[0.5px] first:border-l-[1px] last:border-r-[1px] h-16 border-gray-300 grow flex items-center justify-center font-bold hover:bg-black hover:text-white"

    return (
        isExternal ?
            <a className={navButtonStyle} href = {route} target = "_blank">{name}</a>
            :
            (<Link href={route}>
                <a className={navButtonStyle}>{name}</a>
            </Link>)
    );
}

export default MainNavButton;