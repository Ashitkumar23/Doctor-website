import { Star } from "lucide-react";
export default function Auyerjedic() {
  const reviews = [
    {
      name: "Dr. Pooja Deshmukh",
      title: "BAMS",
      text: `"Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."`,
      img: "https://i.pravatar.cc/80?img=1",
    },
    {
      name: "Dr. Rajesh Iyer",
      title: "Ayurvedic Practitioner",
      text: `"Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."`,
      img: "https://i.pravatar.cc/80?img=2",
    },
    {
      name: "Dr. Ananya Sharma",
      title: "BAMS",
      text: `"As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I’ve personally seen positive results in my patients using their products."`,
      img: "https://i.pravatar.cc/80?img=3",
    },
  ];

  return (
    <div className="bg-[#FFF8E6] py-16 px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3A643C]">
          What other Ayurvedic Doctors are Saying
        </h2>
        <p className="text-gray-600 mt-2">
          Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-[#FFEEC3] rounded-2xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-12 h-12 rounded-full border-2 border-green-700"
              />
              <div>
                <h3 className="text-lg font-semibold text-[#3A643C]">
                  {review.name}
                </h3>
                <p className="text-gray-600 text-sm">{review.title}</p>
              </div>
            </div>
            <div className="flex gap-1 text-yellow-500 mb-3">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={16} fill="gold" stroke="none" />
              ))}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
