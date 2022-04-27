import { ContentWrapper } from "./ContentWrapper";
import ViewWrapper from "./ViewWrapper";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function WalletNotConnectedView() {
    return (
        <ViewWrapper>
            <ContentWrapper>
                <h1 className="text-3xl font-bold pt-2">Please connect your wallet.</h1>
                <WalletMultiButton className= "transition duration-700 ease-in-out bg-[#9945FF] hover:bg-gradient-to-tr hover:from-[#9945FF] hover:to-[#14F195] text-white px-6 py-3 font-bold rounded"></WalletMultiButton>
            </ContentWrapper>
        </ViewWrapper>
    );
}

export default WalletNotConnectedView;