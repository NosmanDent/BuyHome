import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Slide = ({ item }) => {
  const styles = {
    backgroundImage: `url(${item.img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    display: "absolute",
    opacity: 1,
  };
  return (
    <div className="relative inline-block w-full h-[480px]" style={styles}>
      <div className="w-full h-[480px] absolute top-0 left-0 bg-black/50">
        <div className="flex flex-col flex-1  md:ml-16 md:items-start items-center md:mt-[300px] mt-[200px] ">
          <h1 className="md:text-4xl text-2xl font-bold text-white">
            {item.title}
          </h1>
          <h1 className=" font-bold text-white md:text-normal text-sm ">
            {item.titleSecond}
          </h1>
          <Link to="shop">
            <button
              className="bg-[#2D8B95] hover:bg-black text-white text-bold py-3 rounded-md px-6 text-sm
                w-[200px] flex flex-1  font-bold tracking-tighter items-center justify-center"
            >
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const handlseDotClick = (index) => {
    setCurrentIndex(index);
    if (index === 0) {
      setTranslateValue(0);
    } else {
      let t = index * 100;
      setTranslateValue(-t);
    }
  };

  useEffect(() => {
    let slider = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setTranslateValue(-(currentIndex + 1) * 100);
      } else {
        setCurrentIndex(0);
        setTranslateValue(0);
      }
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);
  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap">
      <div
        className="realtive w-[100%]"
        style={{
          transform: `translateX(${translateValue}%)`,
          transition: "transform ease-out 0.4s",
          display: "hidden",
        }}
      >
        {slides.map((item) => {
          return <Slide key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
