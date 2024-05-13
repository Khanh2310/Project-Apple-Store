type Props = {
  heroTitle: string;
};

export const Hero = ({ heroTitle }: Props) => {
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          {heroTitle}
        </p>
      </div>
    </section>
  );
};
