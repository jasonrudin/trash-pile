import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import React, { useState, useEffect, useMemo } from "react";
import PropTypes from 'prop-types';
import { clusterApiUrl, Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { ContentWrapper } from "./ContentWrapper";
import ViewWrapper from "./ViewWrapper";
import NFTSelectionCard from "./NFTSelectionCard";
import Button from "./Button";
import DepositConfirmationView from "./DepositConfirmationView";
import WalletNotConnectedView from "./WalletNotConnectedView";


const DepositTrashContainer = () => {
    const { wallet, publicKey } = useWallet();
    const [nfts_to_trash, setNFTs_To_Trash] = useState([]);
    const [isConfirming, setIsConfirming] = useState(false);

    const [fullNFTList, setFullNFTList] = useState([]);
    useEffect(async () => {
        if (publicKey) {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            let response = await fetch(`https://api-mainnet.magiceden.dev/v2/wallets/${publicKey.toBase58()}/tokens`, requestOptions);
            let data = await response.text();
            let dataJSON = JSON.parse(data);

            setFullNFTList(dataJSON);
        }
    });

    const addNFTToTrash = nft => {
        console.log(nfts_to_trash);
        if (nfts_to_trash.some(element => element.mintAddress === nft.mintAddress)) {
            console.log('To Trash does include the NFT already');
            return;
        }
        else {
            console.log('To Trash does NOT include the NFT');
            const placeholder = nfts_to_trash.concat(nft);
            setNFTs_To_Trash(placeholder);
        }
    }

    const removeNFTFromTrash= nft => {
        const placeholder = nfts_to_trash.filter((element) => element != nft);
        setNFTs_To_Trash(placeholder);
    }

    const changeConfirmationScreen = () => {
        setIsConfirming(!isConfirming);
    }

    if (publicKey === null) {
        return (
            <WalletNotConnectedView/>
        );
    }

    if (!isConfirming) {
        return (
            <ViewWrapper>
                <div className="max-h-[600px] overflow-auto">
                    <ContentWrapper>
                        <div className="bg-white sticky top-0 z-10 mb-2">
                            <h1 className="text-3xl font-bold pt-2">Your NFTs</h1>
                            <h2 className=""> Select the NFTs to add to the trash pile.</h2>
                        </div>
                        <div className="grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center">
                            {
                                fullNFTList.map((nft, index) => (
                                    <NFTSelectionCard
                                        nft={nft}
                                        key={index}
                                        addNFTToTrash={addNFTToTrash}
                                        removeNFTFromTrash={removeNFTFromTrash}
                                    />
                                ))
                            }
                        </div>
                    </ContentWrapper>
                    <div className="flex justify-center py-6 bg-gradient-to-t from-white to-transparent sticky bottom-0">
                        <Button
                            buttonName="Review Your Selection"
                            clickable={(nfts_to_trash.length > 0) ? true : false}
                            onClick={() => setIsConfirming(true)}
                        />
                    </div>
                </div>
            </ViewWrapper>

        );
    }
    else {
        return (
            <DepositConfirmationView nftsToTrash={nfts_to_trash} changeConfirmationScreen={changeConfirmationScreen} removeNFTFromTrash={removeNFTFromTrash} />
        );
    }
}

export default DepositTrashContainer;

DepositTrashContainer.propTypes = {
    wallet: PropTypes.shape({}),
    publicKey: PropTypes.string
};

DepositTrashContainer.defaultProps = {
    wallet: {},
    publicKey: ''
}

// async function getBalance() {
//     if (publicKey) {
//         try {
//             balance = await connection.getBalance(
//                 publicKey,
//                 'confirmed'
//             );
//             let response = await connection.getParsedTokenAccountsByOwner(publicKey, { programId: TOKEN_PROGRAM_ID });
//             response.value.forEach((accountInfo) => {
//                 console.log(`pubkey: ${accountInfo.pubkey.toBase58()}`)
//                 console.log(`mint: ${accountInfo.account.data["parsed"]["info"]["mint"]}`);
//                 console.log(`owner: ${accountInfo.account.data["parsed"]["info"]["owner"]}`);
//                 console.log(`decimals: ${accountInfo.account.data["parsed"]["info"]["tokenAmount"]["decimals"]}`);
//                 console.log(`amount: ${accountInfo.account.data["parsed"]["info"]["tokenAmount"]["amount"]}`);
//                 console.log("====================")
//             });
//             balance = balance / LAMPORTS_PER_SOL;
//             console.log(balance);
//         } catch (e) {
//             console.log(`error getting balance: `, e);
//         }
//     }
// }