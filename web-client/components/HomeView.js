import { ContentWrapper } from "./ContentWrapper";
import Image from "next/image";
import ViewWrapper from "./ViewWrapper";
import Button from "./Button";

function HomeContainer() {
    return (
        <ViewWrapper>
            <ContentWrapper>
                <div className="flex py-24 items-center">
                    <div className="w-2/3 pr-8">
                        <div className="mt-0 h-2 w-40 bg-lime-500"></div>
                        <div className="my-6">
                            <h1 className="text-5xl font-bold mb-2">Waste Collection, availble 24/7</h1>
                            <p className="text-xl">The internet now has dump. Get your worthless junk out of your wallet and into the trash.</p>
                        </div>
                        <Button buttonName="Deposit Trash" />
                    </div>
                    <div className="w-1/3">
                        <Image
                            src="/rob.png"
                            layout={'responsive'}
                            width={600}
                            height={800}
                        />
                    </div>
                </div>
            </ContentWrapper>
        </ViewWrapper>
    );
}

export default HomeContainer;