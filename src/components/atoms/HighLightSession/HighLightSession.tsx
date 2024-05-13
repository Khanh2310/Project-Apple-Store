
type Props = {
    className: string
    title: string
    watchImg: string
    rightImg: string
}
export const HighLightSession = ({ className, title, watchImg, rightImg }: Props) => {
    return (
        <section className={className} id="highlights">
            <div className="screen-max-width">
                <div className="mb-12 md:flex w-full items-end justify-between">
                    <h1 id="title" className="section-heading">{title}</h1>
                    <div className="flex flex-wrap items-end gap-5">
                        <p className="link">Watch the film
                        <img src={watchImg} alt="watch" className="ml-2" />
                        </p>
                        <p className="link">Watch the event
                        <img src={rightImg} alt="right" className="ml-2" />
                        
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
