export default function Top() {
  return (
    <>
      <div className="grid z-999 grid-cols-1 md:grid-cols-3 items-center text-white py-2 bg-gray-800 gap-3">
        <p className="text-center font-sans md:col-start-2">
          Register Yourself As An Amrutam Doctor
        </p>
        <button className="justify-self-center md:justify-self-start bg-green-800 rounded-2xl font-bold px-10 md:px-20 py-2">
          Join Now
        </button>
      </div>
      <div className="text-center bg-[#FFF8E6]">
        <h2 className="text-3xl text-green-800">AMRUTAM</h2>
        <div className="py-2">
          <a href="#about" className="hover:text-green-800 mx-3">
            About Us
          </a>
          <a href="#onboarding" className="hover:text-green-800 mx-3">
            Onboarding
          </a>
          <a href="#faq" className="hover:text-green-800 mx-3">
            FAQ
          </a>
          <a href="#testimonials" className="hover:text-green-800 mx-3">
            Testimonials
          </a>
        </div>
      </div>
    </>
  );
}
