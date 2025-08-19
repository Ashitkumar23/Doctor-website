import image from '../../assets/Form_image.png'

export default function Contact_form() {
  return (
    <div className="bg-[#FFF8E6] py-8 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3A643C]">
          Let’s Connect
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We’re here to help you on your wellness journey. Reach out to us for
          any questions, product inquiries, or personalized advice.
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Ayurveda"
            className="rounded-lg shadow-md w-full h-95 object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 border-2 border-[#00000026] rounded-lg shadow-sm p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  defaultValue="Vikas Kumar"
                  className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Contact Number
                </label>
                <input
                  type="text"
                  defaultValue="8743414476"
                  className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:ring-0 outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                defaultValue="vikass@gmail.com"
                className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:ring-0 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message (Optional)
              </label>
              <textarea
                defaultValue="I want to On-board as a Doctor"
                rows="3"
                className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:ring-0 outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#3A643C] text-white px-6 py-2 rounded-md font-medium hover:bg-green-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
