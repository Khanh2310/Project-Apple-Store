type Props = {
  appleImg: string;
  searchImg: string;
  bagImg: string;
  device: string[];
};

export const Tab = ({ appleImg, searchImg, bagImg, device }: Props) => {
  return (
    <nav>
      <img src={appleImg} alt="Apple" width={14} height={18} />
      <div>
        {device.map((tabItem) => (
          <div className="" key={tabItem}>
            {tabItem}
          </div>
        ))}
      </div>

      <div>
        <img src={searchImg} alt="search" width={14} height={18} />
        <img src={bagImg} alt="search" width={14} height={18} />
      </div>
    </nav>
  );
};
