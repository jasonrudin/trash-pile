import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import React, { useState, useEffect, useMemo } from "react";
// import { Connection } from '@metaplex/js';
// import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
import { clusterApiUrl, Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { ContentWrapper } from "./ContentWrapper";
import ViewWrapper from "./ViewWrapper";
import { testData } from "./test_nft_data";
import NFTCard from "./NFTCard";


function DepositTrashContainer() {
    const { wallet, publicKey } = useWallet();
    const { connection } = useConnection();
    let balance = 0;
    let nfts_to_trash = [];

    async function getBalance() {
        if (publicKey) {
            try {
                balance = await connection.getBalance(
                    publicKey,
                    'confirmed'
                );
                let response = await connection.getParsedTokenAccountsByOwner(publicKey, { programId: TOKEN_PROGRAM_ID });
                response.value.forEach((accountInfo) => {
                    console.log(`pubkey: ${accountInfo.pubkey.toBase58()}`)
                    console.log(`mint: ${accountInfo.account.data["parsed"]["info"]["mint"]}`);
                    console.log(`owner: ${accountInfo.account.data["parsed"]["info"]["owner"]}`);
                    console.log(`decimals: ${accountInfo.account.data["parsed"]["info"]["tokenAmount"]["decimals"]}`);
                    console.log(`amount: ${accountInfo.account.data["parsed"]["info"]["tokenAmount"]["amount"]}`);
                    console.log("====================")
                });
                balance = balance / LAMPORTS_PER_SOL;
                console.log(balance);
            } catch (e) {
                console.log(`error getting balance: `, e);
            }
        }
    }

    function addNFTToTrash(nft){
        nfts_to_trash.push(nft);
        console.log(nfts_to_trash);
        return nfts_to_trash;
    }

    function removeNFTFromTrash(nft){
        const  index = nfts_to_trash.indexOf(nft);
        if(index > -1){
            nfts_to_trash.splice(index, 1);
        }
        console.log(nfts_to_trash);
        return nfts_to_trash;
    }

    // getBalance();

    return (
        <ViewWrapper>
            <ContentWrapper>
                <div>
                    <h1 className = "text-3xl font-bold pt-2">Your NFTs</h1>
                    <h2 className = ""> Select the NFTs that you want to add to the trash pile.</h2>
                    <div className="grid grid-cols-4 justify-items-center">
                        {
                            testData.map((nft, index) => (
                                <NFTCard 
                                nft={nft}
                                key = {nft.id}
                                addNFTToTrash = {addNFTToTrash}
                                removeNFTFromTrash = {removeNFTFromTrash}
                                />
                            ))
                        }
                    </div>
                </div>
                <div>

                </div>
            </ContentWrapper>
        </ViewWrapper>
    );
}

export default DepositTrashContainer;