type Props = {
  appleImg: string;
  searchImg: string;
  bagImg: string;
  device: string[];
};

export const Tab = ({ appleImg, searchImg, bagImg, device }: Props) => {
  return (
    <nav className="flex w-full screen-max-width  ">
      <img src={appleImg} alt="Apple" width={14} height={18} />
      <div className="flex flex-1 justify-center max-sm:hidden">
        {device.map((tabItem) => (
          <div
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            key={tabItem}
          >
            {tabItem}
          </div>
        ))}
      </div>

      <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
        <img src={searchImg} alt="search" width={14} height={18} />
        <img src={bagImg} alt="search" width={14} height={18} />
      </div>
    </nav>
  );
};
