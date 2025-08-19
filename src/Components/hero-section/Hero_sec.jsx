import "./Hero.css";
import doctor from "../../assets/doctors.png";

export default function Hero_sec() {
  return (
    <>
      <div className="main bg-white px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mt-2 sm:mt-14 mx-auto gap-8">
          {/* Left Content */}
          <div className="text-center md:text-left md:w-2/2 space-y-4">
            <p className="text-lg text-gray-700">Namaste, Welcome to Amrutam</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Join Amrutam -{" "}
              <span className="text-green-700">Grow Your Practice</span>
            </h2>
            <p className="text-gray-600">
              Connect with more patients, set your own schedule,{" "}
              <span>
                <br />
              </span>{" "}
              and grow your Ayurvedic practice effortlessly.
            </p>
            <button className="mt-4 px-6 py-2 bg-green-700 text-white rounded-xl font-semibold hover:bg-green-800 transition">
              Join Now
            </button>
            <div className="flex text-center items-center">
              <p className="">
                <span className="font-medium text-4xl">500+</span>
                <br />
                Average Active User
              </p>
              {/* Separator line */}
              <div className="w-px mx-5 h-12 bg-black"></div>

              <p className="">
                <span className="font-medium text-4xl">40+</span>
                <br />
                Average daily free calls
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={doctor}
              alt="Doctor"
              className="w-120px max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}
