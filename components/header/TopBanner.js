import { ContentWrapper } from '../ContentWrapper';
import React, { useEffect, useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


const TopBanner = () => {
    const [time, setTime] = useState(new Date());

    function updateTime() {
        setTime(new Date());
    }

    useEffect(() => {
        setInterval(updateTime, 1000);
    }
    );

    return (
        <div className="bg-black">
            <ContentWrapper>
                <div className="flex justify-between text-sm font-bold">
                    <p className="text-white leading-normal h-auto py-2">{time.toLocaleDateString([], { dateStyle: "long" }) + " " + time.toLocaleTimeString([], { timeStyle: "medium" })}</p>
                    <WalletMultiButton className = "font-sans text-sm font-bold h-auto leading-normal py-2 px-1"></WalletMultiButton>
                </div>
            </ContentWrapper>
        </div>
    );
}

export default TopBanner;