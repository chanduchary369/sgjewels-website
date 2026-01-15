import { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Shield, MessageCircle } from 'lucide-react';

function Gold() {
  const categories = [
    {
      name: 'Gold Earrings',
      icon: '☺️',
      image: 'https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_4:3,c_auto/Gemini_Generated_Image_88kph688kph688kp_wwev0g.jpg',
    },
    {
      name: 'Necklace',
      icon: '😊',
      image: 'https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_4:3,c_auto,h_800/Gemini_Generated_Image_vgklb1vgklb1vgkl_qihpgd.jpg',
    },
    {
      name: 'Chains',
      icon: '😎',
      image: 'https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_4:3,c_auto,h_800/Gemini_Generated_Image_exleczexleczexle_dk1hrd.jpg',
    },
    {
      name: 'Rings',
      icon: '🥳',
      image: 'https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_4:3,c_auto,h_800/Gemini_Generated_Image_n1tf3qn1tf3qn1tf_zz41ne.jpg',
    },
    {
      name: 'Bracelets',
      icon: '🤝',
      image: 'https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_4:3,c_auto,h_800/Gemini_Generated_Image_7v7m1x7v7m1x7v7m_th74id.jpg',
    },
    {
      name: 'Ear Chains',
      icon: '😍',
      image: 'https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_4:3,c_auto,h_800/Gemini_Generated_Image_j9oqx1j9oqx1j9oq_buw0nf.jpg',
    },
    {
      name: 'Bangles',
      icon: '✨',
      image: 'https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_4:3,c_auto,h_800/Gemini_Generated_Image_m8f7mym8f7mym8f7_nzlk9x.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#C9A24D] mb-4 font-serif">
          Gold Collections
        </h2>
        <p className="text-[#F3EAD7]/90 text-lg">
          Exquisite craftsmanship in every piece
        </p>
      </div>

      {/* SLIDER */}
      <div className="mb-16">
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#3A0E12]/60 rounded-2xl border border-[#C9A24D]/30 overflow-hidden shadow-2xl">
            <div className="relative aspect-[16/9]">
              <img
                src={categories[currentIndex].image}
                alt={categories[currentIndex].name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3A0E12] via-transparent to-transparent"></div>

              <div className="absolute bottom-8 left-0 right-0 text-center">
                <h3 className="text-4xl font-bold text-[#F6E6B5] font-serif">
                  {categories[currentIndex].name}
                </h3>
              </div>

              <button
                onClick={() => setCurrentIndex((i) => (i - 1 + categories.length) % categories.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#F1E2B8] text-[#5A3A14] p-3 rounded-full shadow hover:scale-110 transition"
              >
                <ChevronLeft size={26} />
              </button>

              <button
                onClick={() => setCurrentIndex((i) => (i + 1) % categories.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#F1E2B8] text-[#5A3A14] p-3 rounded-full shadow hover:scale-110 transition"
              >
                <ChevronRight size={26} />
              </button>
            </div>

            <div className="flex justify-center gap-2 py-4 bg-[#3A0E12]/70">
              {categories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#C9A24D] w-8'
                      : 'bg-[#C9A24D]/40 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mt-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-xl border transition-all ${
                index === currentIndex
                  ? 'bg-[#C9A24D] text-[#3A0E12] border-[#C9A24D] shadow-md scale-105'
                  : 'bg-[#FFF6E8] text-[#5A3A14] border-[#E6D2A3] hover:scale-105'
              }`}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <div className="text-xs font-medium">{category.name}</div>
            </button>
          ))}
        </div>

        {/* WHATSAPP CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/918522004399?text=Hello%2C%20I%20would%20like%20to%20view%20your%20gold%20jewelry%20designs
"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-semibold text-lg shadow hover:scale-105 transition"
          >
            <MessageCircle size={26} />
            View Designs on WhatsApp
          </a>
        </div>
      </div>

      {/* QUALITY ASSURANCE */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#FFF6E8] p-8 rounded-2xl border border-[#E6D2A3] shadow-md">
          <div className="flex items-start gap-6">
            <div className="bg-[#F1E2B8] p-4 rounded-full">
              <Award className="text-[#8B6A1F]" size={30} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#5A3A14] mb-4 font-serif">
                Quality Assurance
              </h3>

              <p className="text-[#5F4A2E] text-lg leading-relaxed mb-6">
                We make gold ornaments with <strong>BIS Hallmark</strong> and provide a
                certified card for every ornament. Each piece meets the highest standards
                of purity and craftsmanship.
              </p>

              {/* ✅ RESTORED BIS IMAGE + TEXT */}
              <div className="flex items-center gap-4 bg-[#FDF4E3] px-5 py-3 rounded-xl border border-[#E6D2A3]">
                <img
                  src="https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_4:3,c_auto,h_200/Gemini_Generated_Image_z0v2fvz0v2fvz0v2_lfoe5g.jpg"
                  alt="BIS Hallmark"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-[#8B6A1F] text-sm font-semibold">
                  BIS Hallmark Certified Gold
                </span>
              </div>

              <div className="flex items-center gap-3 mt-4 text-[#5F4A2E]">
                <Shield size={20} />
                <span>100% Certified & Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Gold;
