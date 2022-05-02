import PropTypes from 'prop-types';
import Image from "next/image";
import { useState } from "react";

const NFTSelectionCard = props => {
    const { nft, addNFTToTrash, removeNFTFromTrash} = props;
    const [isSelected, setSelected] = useState(false);

    const handleClick = () => {
        console.log(isSelected);
        
        if (isSelected === false) {
            addNFTToTrash(nft);
        } else {
            console.log('here');
            removeNFTFromTrash(nft);
        }

        setSelected(!isSelected);
    }

    return (
        <div className={`flex flex-col w-44 p-2 text-sm border-2 rounded-sm hover:cursor-pointer ${isSelected ? 'bg-cyan-50 border-cyan-400' : 'border-transparent'}`} >
            <div className="h-[156px] w-[156px]" onClick={handleClick}>
            <img src = {nft.image}
                className="object-contain h-[156px] w-[156px]"
                width= "100%"
                height = "100%"
            />
            </div>
            <label className="pt-1 hover:cursor-pointer block truncate font-bold">
                <input type="checkbox"
                    id={nft.mintAddress}
                    name={nft.name}
                    value={nft.mintAddress}
                    checked={isSelected}
                    onChange={handleClick}
                    className="mr-1 hover:cursor-pointer">
                </input>
                {nft.name}
            </label>
        </div>
    );
}

export default NFTSelectionCard;

NFTSelectionCard.propTypes = {
    nft: PropTypes.shape({
        image: PropTypes.string,
        mintAddress: PropTypes.string,
        name: PropTypes.string
    }),
    addNFTToTrash: PropTypes.func,
    removeNFTFromTrash: PropTypes.func
};

NFTSelectionCard.defaultProps = {
    nft: PropTypes.shape({
        image: PropTypes.string,
        mintAddress: PropTypes.string,
        name: PropTypes.string
    }),
    addNFTToTrash: () => {},
    removeNFTFromTrash: () => {}
}