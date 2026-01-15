import { Youtube, BookOpen } from 'lucide-react';

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@sgjewels';

function Knowledge() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#C9A24D] mb-4 font-serif">
          Knowledge Center
        </h2>
        <p className="text-[#F3EAD7]/90 text-lg">
          Learn about gold, silver, and jewelry care from our experts
        </p>
      </div>

      {/* EDUCATIONAL RESOURCES */}
      <div className="mb-12 max-w-4xl mx-auto">
        <div className="bg-[#FFF6E8] p-8 rounded-2xl border border-[#E6D2A3] shadow-md">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="bg-[#F1E2B8] p-4 rounded-full">
                <BookOpen className="text-[#8B6A1F]" size={32} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#5A3A14] mb-4 font-serif">
                Educational Resources
              </h3>
              <p className="text-[#5F4A2E] leading-relaxed mb-4">
                We believe in empowering our customers with knowledge. Our Knowledge Center provides
                comprehensive information about gold and silver jewelry, helping you make informed
                decisions about your precious metal investments.
              </p>

              <div className="space-y-2 text-[#5F4A2E]">
                <div className="flex items-center gap-3">
                  <span className="text-[#C9A24D]">✦</span>
                  <span>Understanding gold purity and hallmarks</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#C9A24D]">✦</span>
                  <span>Silver jewelry care and maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#C9A24D]">✦</span>
                  <span>Investment tips and market insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#C9A24D]">✦</span>
                  <span>Traditional jewelry designs and their significance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YOUTUBE SECTION (UNCHANGED RED BRANDING) */}
      <div className="max-w-3xl mx-auto">
  <div className="bg-[#FFF6E8] p-12 rounded-2xl border border-[#E6D2A3] shadow-md text-center space-y-6">
    
    <div className="bg-[#F1E2B8] w-24 h-24 rounded-full flex items-center justify-center mx-auto">
      <Youtube className="text-red-600" size={56} />
    </div>

    <h3 className="text-3xl font-bold text-[#5A3A14] font-serif">
      Watch & Learn on YouTube
    </h3>

    <p className="text-[#5F4A2E] text-lg leading-relaxed">
      Subscribe to our YouTube channel for exclusive jewelry care tips, gold & silver buying guides,
      traditional jewelry designs, and market insights. Stay updated with our latest collections
      and expert advice.
    </p>

    <a
      href={YOUTUBE_CHANNEL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
    >
      <Youtube size={32} />
      <span>Visit Our YouTube Channel</span>
    </a>

    <p className="text-[#8B6A1F] text-sm pt-4">
      Don't forget to like, subscribe, and turn on notifications
    </p>

  </div>
</div>


    </div>
  );
}

export default Knowledge;
