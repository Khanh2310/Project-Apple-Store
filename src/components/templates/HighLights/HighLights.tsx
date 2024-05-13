import { HighLightSessionWithGsap } from "@/components/organisms/HighLightSessionWithGsap";
import { watchImg } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const HighLights = () => {
    useGSAP(() => {
        gsap.to("#title", { opacity: 1, y: 0 })
        gsap.to(".link", {opacity: 1, y: 0})
    }, []);

    return (
        <HighLightSessionWithGsap className="w-screen overflow-hidden h-full common-padding bg-zinc" title="Get the highlights" watchImg={watchImg} />
    );
};
