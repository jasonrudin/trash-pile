import { ContentWrapper } from "./ContentWrapper";
import NFTReviewScreenCard from "./NFTReviewScreenCard";
import ViewWrapper from "./ViewWrapper";
import React, { useState, useEffect } from "react";
import Button from "./Button";

const DepositConfirmationView = props => {
    const { nftsToTrash, changeConfirmationScreen, removeNFTFromTrash } = props;

    if (nftsToTrash != null) {
        return (
            <ViewWrapper>
                <ContentWrapper>
                    <div className="text-sm hover:cursor-pointer" onClick={() => changeConfirmationScreen()}>
                        {`< Back`}
                    </div>
                    <div className="flex">
                        <div className="">
                            <div className="bg-white sticky top-0 z-10 mb-2">
                                <h1 className="text-3xl font-bold pt-2">Review Your Deposit</h1>
                                <h2 className="">Confirm the NFTs you'd like to throw away. This step cannot be undone.</h2>
                            </div>
                            {nftsToTrash.length === 0 ?
                                (
                                    <p>You aren't adding NFTs to the trash! Add some here.</p>
                                ) :
                                (
                                    nftsToTrash.map((nft, index) => (
                                        <NFTReviewScreenCard
                                            nft={nft}
                                            key={nft.id}
                                            removeNFTFromTrash={removeNFTFromTrash}
                                        />
                                    ))
                                )
                            }
                        </div>
                        <div className="">
                            <div className="bg-white sticky top-0 z-10 mb-2">
                                <h1 className="text-3xl font-bold pt-2">What you'll get</h1>
                                <h2 className="">You get $TRASH for depositing your NFTs. Read more about $TRASH here.</h2>
                            </div>
                            <div className="grid grid-cols-3 grid-rows-2">
                                <h3 className="col-span-2">NFTs you're depositing:</h3>
                                <h3 className="text-right">{ nftsToTrash.length }</h3>
                                <h3 className="col-span-2">$TRASH you receive:</h3>
                                <h3 className="text-right">5,000</h3>
                            </div>
                            <Button
                                buttonName="Deposit Trash"
                                clickable={(nftsToTrash.length > 0) ? true : false}
                                onClick={() => true}
                            />
                        </div>
                    </div>
                </ContentWrapper>
            </ViewWrapper>
        );
    }
    else {
        return (
            <div>
                Error!
            </div>
        );
    }



}

export default DepositConfirmationView;