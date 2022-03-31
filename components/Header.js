import LogoInHeader from "./LogoInHeader";
import MainNavBar from "./MainNavBar";
import TopBanner from "./TopBanner";

export function Header(){
    return (
        <header>
            <TopBanner/>
            <LogoInHeader/>
            <MainNavBar/>
        </header>
    );
}