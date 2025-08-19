import Timesofindia from "../../assets/Timesofindia.png";
import Youstory from "../../assets/Yourstory.png"
import Vogue from "../../assets/Vogue.png"
import Travler from "../../assets/Travler.png"
import Living from "../../assets/Living.png"
import Gq from "../../assets/Gq.png"
import Fobes from "../../assets/Fobes.png"
import Lifestyle from "../../assets/Lifestyle.png"
import Fashionchoice from "../../assets/Fashionchoice.png"
const logo = [
  {
    name: "the times of india",
    src: Timesofindia,
  },
  {
    name: "Your story",
    src: Youstory,
  },
  {
    name: "Condo nest",
    src: Travler,
  },
  {
    name: "",
    src: Living,
  },
  {
    name: "",
    src: Fashionchoice,
  },
  {
    name: "",
    src: Gq,
  },
  {
    name: "",
    src: Lifestyle,
  },
  {
    name: "",
    src: Vogue,
  },
  {
    name: "",
    src: Fobes,
  },
];

function Main() {
  return (
    <div className="p-8 bg-[#FFF8E6]">
      <h2 className="text-4xl font-semibold text-[#3A643C] text-center">
        Featured
      </h2>
      <p className="text-center">
        Recognized and celebrated by leading publications – Amrutam in the
        spotlight!
      </p>

      <div className="mt-6 flex flex-wrap justify-center">
        {logo.map((item, index) =>
          item.src ? (
            <img
              key={index}
              src={item.src}
              alt={item.name}
              className="max-h-20 object-contain mx-2"
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default Main;
