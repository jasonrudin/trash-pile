import LogoInHeader from "./LogoInHeader";
import MainNavBar from "./MainNavBar";
import TopBanner from "./TopBanner";

const Header = () => {
    return (
        <header>
            <TopBanner/>
            <LogoInHeader/>
            <MainNavBar/>
        </header>
    );
}

export default Header;