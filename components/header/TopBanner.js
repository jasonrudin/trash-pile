import { ContentWrapper } from '../ContentWrapper';
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
                <div className="flex justify-between text-sm font-bold py-1">
                    <p className="text-white">{time.toLocaleDateString([], { dateStyle: "long" }) + " " + time.toLocaleTimeString([], { timeStyle: "medium" })}</p>
                    <a className="text-white hover:cursor-pointer">Connect Wallet</a>
                </div>
            </ContentWrapper>
        </div>
    );
}

export default TopBanner;