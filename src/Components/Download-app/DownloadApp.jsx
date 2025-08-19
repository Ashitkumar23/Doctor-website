import { Wallet, Phone, Users, DollarSign } from "lucide-react";
import Preview from '../../assets/Download.png'

export default function DownloadApp() {
  return (
   <div className="relative bg-[#FFF3D9] p-5">
  <div className="max-w-6xl mx-auto sm:px-10 grid grid-cols-1 md:grid-cols-2 items-center">
    
    {/* Left Section */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-green-800">
        Get Started Today — <br /> Download the App Now!
      </h2>
      <p className="mt-4 text-gray-700 text-lg">
        Simplify consultations, manage patients, and grow your practice—
        all in one place.
      </p>

      {/* Features */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 border-1 border-[#0000003d] rounded-lg p-3 shadow-sm">
          <Users className="text-green-800" size={20} />
          <p className="text-sm text-gray-700">
            Build Trust and Community with Forum
          </p>
        </div>
        <div className="flex items-center gap-3 border-1 border-[#0000003d] rounded-lg p-3 shadow-sm">
          <DollarSign className="text-green-800" size={20} />
          <p className="text-sm text-gray-700">
            Earn More with Per Consultation
          </p>
        </div>
        <div className="flex items-center gap-3  border-1 border-[#0000003d] rounded-lg p-3 shadow-sm">
          <Phone className="text-green-800" size={20} />
          <p className="text-sm text-gray-700">
            Attract Patients with 5-Minute Free Call
          </p>
        </div>
        <div className="flex items-center gap-3 border-1 border-[#0000003d] rounded-lg p-3 shadow-sm">
          <Wallet className="text-green-800" size={20} />
          <p className="text-sm text-gray-700">
            Instant Access to Your Earnings with Wallet
          </p>
        </div>
      </div>

      {/* Store Buttons */}
      <div className="mt-8 flex gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="h-12 hover:cursor-pointer"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          className="h-12 hover:cursor-pointer"
        />
      </div>
    </div>

    {/* Right Section */}
    <div className="relative flex justify-center items-end">
      <img
        src={Preview}
        alt="App Preview"
        className="w-60 sm:w-72 md:w-96 lg:w-[28rem] relative sm:-mt-15 -mb-8 "
      />
    </div>
  </div>
</div>

  );
}
