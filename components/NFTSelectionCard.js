import Image from "next/image";
import { useState } from "react";

function NFTSelectionCard(props) {
    let nft = props.nft;
    const [isSelected, setSelected] = useState(false);

    function handleClick() {
        console.log(isSelected);
        if(isSelected === false){
            props.addNFTToTrash(nft);
        }
        else{
            console.log('here');
            props.removeNFTFromTrash(nft);
        }
        setSelected(!isSelected);
    }

    return (
        <div className={`flex flex-col w-44 p-2 text-sm border-2 rounded-sm hover:cursor-pointer ${isSelected ? 'bg-cyan-50 border-cyan-400' : 'border-transparent'}`}
            >
            <div className="h-[156px] w-[156px]" onClick={
                handleClick
            }>
            <img
                src = {nft.image}
                className="object-contain h-[156px] w-[156px]"
                width= "100%"
                height = "100%"
            />
            </div>
            <label className="pt-1 hover:cursor-pointer block truncate font-bold">
                <input type="checkbox" id={nft.mintAddress} name={nft.name} value={nft.mintAddress}
                    checked={isSelected}
                    onChange={
                        handleClick
                    }
                    className="mr-1 hover:cursor-pointer"></input>{nft.name}
            </label>

        </div>
    );
}

export default NFTSelectionCard;