import { ContentWrapper } from "./ContentWrapper";
import React, { useEffect, useState } from 'react';


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
                <div className="flex justify-between">
                    <span className="text-white">{time.toLocaleDateString([], { dateStyle: "long" }) + " " + time.toLocaleTimeString([], { timeStyle: "medium" })}</span>
                    <span className="text-white">Connect Wallet</span>
                </div>
            </ContentWrapper>
        </div>
    );
}

export default TopBanner;