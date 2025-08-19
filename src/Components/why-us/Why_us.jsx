import first from '../../assets/first.png'
import second from '../../assets/second.png'
import third from '../../assets/Third.png'
import fourth from '../../assets/Fourth.png'
import fifth from '../../assets/Fifth.png'

export default function Why_us() {
  return (
    <div className="bg-[#FFF7E2] py-8 px-6 md:px-12">
  <div className="text-center mb-10">
    <h2 className="text-[#3A643C] text-4xl font-semibold">Why Doctors Choose Us?</h2>
    <p>
      Unlock the Benefits of Smarter Healthcare Management and Patient Care
    </p>
  </div>

  <div className="space-y-16">
    {/* -------- Section 1 -------- */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      <img src={first} alt="" className="w-full md:w-1/2 max-w-sm" />
      <div className="md:w-1/2 sm:max-w-100">
        <h2 className="text-2xl font-bold text-green-800">
          Instant FREE 5–Mins Call
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We understand the importance of building trust with your patients.
          That’s why Amrutam offers a{" "}
          <span className="font-semibold">free 5–minute call</span>, helping
          you connect instantly and foster lasting patient relationships
          with ease.
        </p>
      </div>
    </div>

    {/* -------- Section 2 -------- */}
    <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8">
      <img src={second} alt="" className="w-full md:w-1/2 max-w-sm" />
      <div className="md:w-1/2 sm:max-w-100">
        <h2 className="text-2xl font-bold text-green-800">
          Forum for Meaningful Connections
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We value your journey in Ayurveda. The Amrutam Forum helps you engage
          with patients, answer questions, while the "Thoughts" section allows you
          to share deeper Ayurvedic wisdom.
        </p>
      </div>
    </div>

    {/* -------- Section 3 -------- */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      <img src={third} alt="" className="w-full md:w-1/2 max-w-sm" />
      <div className="md:w-1/2 sm:max-w-100">
        <h2 className="text-2xl font-bold text-green-800">
          Choose Your Session Mode
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Amrutam offers you to connect with patients via Instant Chat,
          Instant Call, or Schedule Video call. Each option offers flexibility
          and personalized care to suit individual needs.
        </p>
      </div>
    </div>

    {/* -------- Section 4 -------- */}
    <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8">
      <img src={fourth} alt="" className="w-full md:w-1/2 max-w-sm" />
      <div className="md:w-1/2 sm:max-w-100">
        <h2 className="text-2xl font-bold text-green-800">
          Smart Wallet
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We understand the need for seamless transactions. With Amrutam Wallet,
          you can easily withdraw payments, and for your security, a one-time
          password is sent to your registered mobile number during withdrawals.
        </p>
      </div>
    </div>

    {/* -------- Section 5 -------- */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      <img src={fifth} alt="" className="w-full md:w-1/2 max-w-sm" />
      <div className="md:w-1/2 sm:max-w-100">
        <h2 className="text-2xl font-bold text-green-800">
          Flexible Work Timing
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We recognize the importance of managing your time. With the availability
          toggle in the doctor’s app, you control when patients can book
          consultations, ensuring a balanced and stress-free practice.
        </p>
      </div>
    </div>
  </div>
</div>

  );
}
