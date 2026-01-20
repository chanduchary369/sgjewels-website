import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT COLUMN */}
        <div className="space-y-8">
          {/* ABOUT US */}
          <div className="bg-[#F7EFE1] p-8 rounded-2xl border border-[#E8D8B0]">
            <h2 className="text-3xl font-bold text-[#B8892D] mb-6 font-serif">
              About Us
            </h2>
            <div className="space-y-4 text-[#3A2A1A] leading-relaxed">
              <p className="text-lg">
                Welcome to{' '}
                <span className="text-[#B8892D] font-semibold">
                  Sri Ganesh Jewellers
                </span>
                , where tradition meets excellence.
              </p>
              <p>
                Founded on trust, quality, and craftsmanship, we have been offering
                authentic gold and silver ornaments with certified purity and
                transparent pricing since 1993.
              </p>
              <p>
                Under visionary leadership, we have built lasting relationships
                by serving customers with honesty and dedication.
              </p>
            </div>
          </div>

          {/* OUR PROMISE */}
          <div className="bg-[#F7EFE1] p-8 rounded-2xl border border-[#E8D8B0]">
            <h3 className="text-2xl font-bold text-[#B8892D] mb-6 font-serif">
              Our Promise
            </h3>
            <ul className="space-y-3 text-[#3A2A1A]">
              <li>✦ 100% Certified BIS Hallmark Gold</li>
              <li>✦ Premium Silver Craftsmanship</li>
              <li>✦ Transparent Pricing</li>
              <li>✦ Customer-First Service</li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          {/* FOUNDER */}
          <div className="bg-[#F7EFE1] rounded-2xl overflow-hidden border border-[#E8D8B0] shadow-xl">
            {/* FLOATING IMAGE FRAME */}
            <div className="relative p-4">
              <div className="absolute inset-0 rounded-2xl border-2 border-[#D9A538] shadow-[0_0_25px_rgba(217,165,56,0.25)]"></div>

              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl">
                <img
                  src="https://res.cloudinary.com/dzjuo6uxx/image/upload/ar_1:1,c_auto,w_1098/IMG_0389_fevxrd.jpg"
                  alt="Brahma Chary Chennoji - Founder"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="p-6 text-center">
              <p className="text-[#B8892D] text-2xl font-bold font-serif">
                Brahma Chary Chennoji
              </p>
              <p className="text-[#6B4E1E]">Founder</p>
              <p className="text-[#6B6B6B] text-sm">
                Sri Ganesh Jewellers
              </p>
            </div>
          </div>

          {/* VISIT US */}
          <div className="bg-[#F7EFE1] p-8 rounded-2xl border border-[#E8D8B0]">
            <h3 className="text-2xl font-bold text-[#B8892D] mb-6 font-serif">
              Visit Us
            </h3>

            <div className="space-y-5 text-[#3A2A1A]">

             <a
  href="https://maps.app.goo.gl/sXJ8r4GaL9t44fSt9"
  target="_blank"
  rel="noopener noreferrer"
  className="flex gap-4 cursor-pointer group"
>
  <MapPin className="text-[#B8892D] mt-1" />

  <div>
    <p className="font-semibold text-[#B8892D]">
      Address
    </p>

    {/* Address text */}
    <p className="text-[#6B4E1E] leading-relaxed
                  group-hover:text-[#B8892D]
                  transition-colors">
      Doulthabad, Ramayampet Road
    </p>
    <p className="text-[#6B4E1E]
                  group-hover:text-[#B8892D]
                  transition-colors">
      Siddipet, Telangana – 502247
    </p>

    {/* Navigate CTA */}
    <p className="mt-2 text-sm font-semibold text-[#B8892D]
                  underline
                  group-hover:text-[#E0B860]
                  transition-colors">
     📍 Open in Google Maps
    </p>
  </div>
</a>


              <div className="flex gap-4">
                <Phone className="text-[#B8892D]" />
                <div>
                  <p className="font-semibold text-[#B8892D]">Phone</p>
                  <a href="tel:+919542541195">+91 95425 41195</a>
                  <br />
                  <a href="tel:+919441617864">+91 94416 17864</a>
                </div>
              </div>

              <a
                href="mailto:care@sgjewels.in"
                className="flex gap-4 hover:text-[#B8892D]"
              >
                <Mail className="text-[#B8892D]" />
                <div>
                  <p className="font-semibold text-[#B8892D]">Email</p>
                  <p>care@sgjewels.in</p>
                </div>
              </a>

              <div className="flex gap-4">
                <Clock className="text-[#B8892D]" />
                <div>
                  <p className="font-semibold text-[#B8892D]">Opening Hours</p>
                  <p>Mon–Sat: 9:00 AM – 8:00 PM</p>
                  <p>Sun: 10:00 AM – 7:00 PM</p>
                </div>
              </div>

             <div>
  <p className="font-semibold text-[#B8892D] mb-3">
    Follow Us
  </p>

  <div className="flex gap-5 items-center">
    
    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=61578744869719"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Sri Ganesh Jewellers on Facebook"
      className="text-[#1877F2] hover:scale-110 transition-transform cursor-pointer"
    >
      <Facebook size={28} />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/sgjewellers_/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Sri Ganesh Jewellers on Instagram"
      className="text-[#E4405F] hover:scale-110 transition-transform cursor-pointer"
    >
      <Instagram size={28} />
    </a>

    {/* Twitter / X */}
    <a
      href="https://twitter.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Sri Ganesh Jewellers on Twitter"
      className="text-black hover:scale-110 transition-transform cursor-pointer"
    >
      <Twitter size={28} />
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/@sgjewels"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Sri Ganesh Jewellers on YouTube"
      className="text-[#FF0000] hover:scale-110 transition-transform cursor-pointer"
    >
      <Youtube size={28} />
    </a>

  </div>
</div>


            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
