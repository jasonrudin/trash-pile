import Image from "next/image";
import { useState } from "react";

function NFTCard(props) {
    let nft = props.nft;
    const [isSelected, setSelected] = useState(false);

    function handleClick() {
        if(isSelected === false){
            props.addNFTToTrash(nft);
        }
        else{
            props.removeNFTFromTrash(nft);
        }
        setSelected(!isSelected);
    }

    return (
        <div className={`flex flex-col w-44 text-sm border-2 rounded-sm hover:cursor-pointer ${isSelected ? 'bg-cyan-50 border-cyan-400' : 'border-transparent'}`}
            >
            <div className="h-[176px]" onClick={
                handleClick
            }>
                <Image
                    src={nft.uri}
                    className="object-cover object-center"
                    width={250}
                    height={250}
                />
            </div>
            <label className="pt-1 hover:cursor-pointer block truncate font-bold">
                <input type="checkbox" id={nft.id} name={nft.name} value={nft.id}
                    checked={isSelected}
                    onChange={
                        handleClick
                    }
                    className="mr-1 hover:cursor-pointer"></input>{nft.name}
            </label>

        </div>
    );
}

export default NFTCard;