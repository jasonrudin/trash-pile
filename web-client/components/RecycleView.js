import { ContentWrapper } from "./ContentWrapper";
import ViewWrapper from "./ViewWrapper";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import WalletNotConnectedView from "./WalletNotConnectedView";
import Button from "./Button";

function RecycleView() {
    const { wallet, publicKey } = useWallet();

    if (publicKey === null) {
        return (
            <WalletNotConnectedView />
        );
    }

    return (
        <ViewWrapper>
            <ContentWrapper>
                <div className="w-2/3 mb-2">
                    <h1 className="text-3xl font-bold pt-2" >Go dumpster diving!</h1>
                    <h2>One person's $TRASH is another person's treasure. Burn 2,000 $TRASH to receive one random NFT that's in the dump.</h2>
                </div>
                <div>
                    <p>You have 5,000 $TRASH</p>
                    <p>Cost to dive: 2,000 $TRASH</p>
                    <Button buttonName= "Recycle" onClick=""></Button>
                </div>
            </ContentWrapper>
        </ViewWrapper>
    );
}

export default RecycleView;