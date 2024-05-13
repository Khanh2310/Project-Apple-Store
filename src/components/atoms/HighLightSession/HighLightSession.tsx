
type Props = {
    className: string
    title: string
    watchImg: string
}
export const HighLightSession = ({ className, title, watchImg }: Props) => {
    return (
        <section className={className} id="highlights">
            <div className="screen-max-width">
                <div className="mb-12 w-full items-end justify-between">
                    <h1 id="title" className="section-heading">{title}</h1>
                    <div className="flex flex-wrap items-end gap-5">
                        <p className="link">Watch the film</p>
                        <img src={watchImg} alt="watch" className="ml-2" />
                    </div>
                </div>
            </div>
        </section>
    );
};
