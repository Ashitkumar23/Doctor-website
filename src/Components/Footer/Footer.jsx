

export default function Footer() {
  return (
    <footer className="bg-[#E6E8D9] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <h2 className="text-3xl font-semibold text-green-800 tracking-widest">
            A M R U T A M
          </h2>
          <h3 className="mt-4 text-green-800 font-medium">Get in touch</h3>
          <p className="mt-2 text-gray-700 text-sm">
            support@amrutam.global
          </p>
          <p className="mt-2 text-gray-700 text-sm">
            Amrutam Pharmaceuticals Pvt Ltd, <br />
            chitragupt ganj, Nai Sadak, Lashkar, <br />
            Gwalior – 474001
          </p>
          <p className="mt-2 text-gray-700 text-sm">+91 9713717999</p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-green-800 font-medium">Information</h3>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li><a href="#" className="hover:text-green-800">About Us</a></li>
            <li><a href="#" className="hover:text-green-800">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-green-800">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-800">Privacy Policy for Mobile App</a></li>
            <li><a href="#" className="hover:text-green-800">Shipping and Return Policy</a></li>
            <li><a href="#" className="hover:text-green-800">International Delivery</a></li>
            <li><a href="#" className="hover:text-green-800">For Business, Hotels and Resorts</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-green-800 font-medium">Follow Us</h3>
           <div className="mt-4 flex gap-4 text-green-800">
           
          </div>
        </div>
      </div>
    </footer>
  );
}
