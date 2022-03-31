import { ContentWrapper } from "./ContentWrapper";
import HomeContentWrapper from "./HomeContentWrapper";
import Image from "next/image";

function HomeContainer() {
    return (
        <div className = "bg-white my-16">
            <ContentWrapper>
                <div className="flex py-24 items-center">
                    <HomeContentWrapper />
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
        </div>

    );
}

export default HomeContainer;