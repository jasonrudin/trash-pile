import { ContentWrapper } from '../ContentWrapper';
import MainNavButton from "./MainNavButton";

const MainNavBar = () => {
    return (
        <div className=" bg-gradient-to-b from-white to-gray-200 via-white border-y-[1px] border-gray-300">
            <ContentWrapper>
                <div className="flex justify-between">
                    <MainNavButton name="Home" route="" />
                    <MainNavButton name="About" route="" />
                    <MainNavButton name="Deposit Trash" route="" />
                    <MainNavButton name="Visit Dump" route="" />
                    <MainNavButton name="Recycle" route="" />
                    <MainNavButton name="Twitter" route="" />
                    <MainNavButton name="Discord" route="" />
                </div>
            </ContentWrapper>
        </div>
    );
}

export default MainNavBar;