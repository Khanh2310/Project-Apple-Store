import { HighLightSession } from "@/components/atoms/HighLightSession";


type Props = {
    className: string,
    title: string
    watchImg: string
}
export const HighLightSessionWithGsap = ({className, title, watchImg}: Props) => {
    return (
        <HighLightSession className={className} title={title} watchImg={watchImg} />
        
    );
}; 
