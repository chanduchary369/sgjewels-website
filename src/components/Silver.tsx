import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

function Silver() {
  const designs = [
    {
      name: 'Silver Anklets',
      icon: '😮‍💨',
      image: 'https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_4:3,c_auto/ar_4:3,c_auto,h_800/ar_4:3,c_auto,g_north,w_1080/Gemini_Generated_Image_dgmh93dgmh93dgmh_amdugi.jpg',
    },
    {
      name: 'Silver Utensils',
      icon: '🥄',
      image: 'https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_4:3,c_auto/ar_4:3,c_auto,h_800/ar_4:3,c_auto,g_north,w_1080/Gemini_Generated_Image_o8tw8wo8tw8wo8tw_qvsaxo.jpg',
    },
    {
      name: 'Silver Coins',
      icon: '🪙',
      image: 'https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_4:3,c_auto/ar_4:3,c_auto,h_800/ar_4:3,c_auto,g_north,w_1080/Gemini_Generated_Image_vd1i40vd1i40vd1i_yplb6w.jpg',
    },
    {
      name: 'Silver Idols',
      icon: '🕉️',
      image: 'https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_4:3,c_auto/ar_4:3,c_auto,h_800/ar_4:3,c_auto,g_north,w_1080/Gemini_Generated_Image_xjsf2xjsf2xjsf2x_ku43ho.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#F6E6B5] mb-4 font-serif">
          Silver Collections
        </h2>
        <p className="text-[#F3EAD7]/90 text-lg">
          Timeless elegance in pure silver
        </p>
      </div>

      {/* SLIDER */}
      <div className="mb-16">
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#3A0E12]/60 rounded-2xl border border-[#E6D2A3]/30 overflow-hidden shadow-2xl">
            <div className="relative aspect-[16/9]">
              <img
                src={designs[currentIndex].image}
                alt={designs[currentIndex].name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3A0E12] via-transparent to-transparent" />

              <div className="absolute bottom-8 left-0 right-0 text-center">
                <h3 className="text-4xl font-bold text-[#F6E6B5] font-serif">
                  {designs[currentIndex].name}
                </h3>
              </div>

              {/* NAV */}
              <button
                onClick={() =>
                  setCurrentIndex((i) => (i - 1 + designs.length) % designs.length)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#F1E2B8] text-[#5A3A14] p-3 rounded-full shadow hover:scale-110 transition"
              >
                <ChevronLeft size={26} />
              </button>

              <button
                onClick={() =>
                  setCurrentIndex((i) => (i + 1) % designs.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#F1E2B8] text-[#5A3A14] p-3 rounded-full shadow hover:scale-110 transition"
              >
                <ChevronRight size={26} />
              </button>
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 py-4 bg-[#3A0E12]/70">
              {designs.map((_, index) => (
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {designs.map((design, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-xl border transition-all ${
                index === currentIndex
                  ? 'bg-[#F1E2B8] text-[#3A0E12] border-[#C9A24D] shadow-md scale-105'
                  : 'bg-[#FFF6E8] text-[#5A3A14] border-[#E6D2A3] hover:scale-105'
              }`}
            >
              <div className="text-3xl mb-2">{design.icon}</div>
              <div className="text-xs font-medium">{design.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* GUARANTEE */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#FFF6E8] p-8 rounded-2xl border border-[#E6D2A3] shadow-md">
          <div className="flex items-start gap-6">
            <div className="bg-[#F1E2B8] p-4 rounded-full">
              <Sparkles className="text-[#8B6A1F]" size={30} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#5A3A14] mb-4 font-serif">
                Craftsmanship Guarantee
              </h3>

              <p className="text-[#5F4A2E] text-lg leading-relaxed mb-6">
                We craft every silver item with assured quality. From ornaments
                to idols and utensils, each piece is tested for purity and durability.
              </p>

              <div className="space-y-3 text-[#5F4A2E]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  <span>Pure 925 Sterling Silver</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  <span>Traditional Handcrafted Techniques</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  <span>Quality Tested for Purity</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Silver;
