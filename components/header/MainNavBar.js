import { ContentWrapper } from '../ContentWrapper';
import MainNavButton from "./MainNavButton";

const MainNavBar = () => {
    return (
        <div className=" bg-gradient-to-b from-white to-gray-200 via-white border-y-[1px] border-gray-300">
            <ContentWrapper>
                <div className="flex justify-between">
                    <MainNavButton name="Home" route="/" isExternal = "false"/>
                    <MainNavButton name="About" route="/about" isExternal = "false"/>
                    <MainNavButton name="Deposit Trash" route="/deposit_trash" isExternal = "false"/>
                    <MainNavButton name="Visit Dump" route="/viewdump" isExternal = "false"/>
                    <MainNavButton name="Recycle" route="/recycle" isExternal = "false"/>
                    <MainNavButton name="Twitter" route="https://twitter.com/jasonrudin" isExternal = "true" />
                    <MainNavButton name="Discord" route="https://twitter.com/jasonrudin" isExternal = "true" />
                </div>
            </ContentWrapper>
        </div>
    );
}

export default MainNavBar;