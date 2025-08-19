import bg from '../../assets/photo.png';
import consultant from '../../assets/Consultations.png'

export default function Join() {
  return (
    <div className="p-5 bg-[#FFF8E6]">
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl text-[#3A643C] font-semibold">
      Join Our Circle of Care
    </h2>
    <p className="text-sm md:text-base">
      Becoming a part of Amrutam is simple
    </p>
  </div>

  <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-8">
    <div className="max-w-xl md:w-1/2">
      <div className="rounded-xl border-2 pl-5 py-5 my-2 border-[#3a643c6d]">
        <h3 className="text-[#3A643C] font-medium text-lg md:text-xl">
          Step 1: Get your referral code
        </h3>
        <p className="text-[#3A643C] text-sm">
          Contact us to receive your unique referral code.
        </p>
      </div>
      <div className="rounded-xl border-2 pl-5 py-5 my-2 border-[#3a643c6d]">
        <h3 className="text-[#3A643C] font-medium text-lg md:text-xl">
          Step 2: Register on Amrutam
        </h3>
        <p className="text-[#3A643C] text-sm">
          Sign up on the Amrutam Doctors app or website to join our specialist network.
        </p>
      </div>
      <div className="rounded-xl border-2 pl-5 py-5 my-2 border-[#3a643c6d]">
        <h3 className="text-[#3A643C] font-medium text-lg md:text-xl">
          Step 3: Complete KYC
        </h3>
        <p className="text-[#3A643C] text-sm">
          Fill in your details and upload the required documents for verification.
        </p>
      </div>
      <div className="rounded-xl border-2 pl-5 py-5 my-2 border-[#3a643c6d]">
        <h3 className="text-[#3A643C] font-medium text-lg md:text-xl">
          Step 4: Start consulting
        </h3>
        <p className="text-[#3A643C] text-sm">
          Once verified, begin offering consultations and helping patients.
        </p>
      </div>
    </div>

    <div className="max-w-xl md:w-1/2 flex justify-center items-center">
      <img
        src={bg}
        alt="doctor"
        className="max-w-sm md:max-w-lg rounded-xl"
      />
    </div>
  </div>
  <div className='flex justify-center mt-8'>
    <button className='hover:bg-[#3A643C] hover:text-white border-1 border-[#3A643C] text-[#3A643C] px-2 py-1 rounded-md mx-2'>Consultants</button>
    <button className='hover:bg-[#3A643C] hover:text-white border-1 border-[#3A643C] text-[#3A643C] px-2 py-1 rounded-md mx-2'>Payment withdrawal </button>
    <button className='hover:bg-[#3A643C] hover:text-white border-1 border-[#3A643C] text-[#3A643C] px-2 py-1 rounded-md mx-2'>Schedule</button>
  </div>
  <div className='flex justify-center'>
    <img src={consultant} alt="" />
  </div>
  <div className='text-center'>
    <button className='bg-[#3A643C] text-white px-3 py-2 rounded-lg text-lg'>Join Now</button>
  </div>
</div>

  );
}
