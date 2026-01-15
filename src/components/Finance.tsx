import {
  Coins,
  Shield,
  Clock,
  Sparkles,
  Wrench,
} from 'lucide-react';

function Finance() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#C9A24D] mb-4 font-serif">
          Customer Services
        </h2>
        <p className="text-[#F3EAD7]/90 text-lg max-w-3xl mx-auto">
          Professional jewellery care and trusted support, delivered with integrity
          and craftsmanship.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
        <ServiceCard
          icon={<Wrench size={28} />}
          title="Gold & Silver Repair"
          desc="Expert repair of chains, bangles, rings, and damaged ornaments with precision workmanship."
        />

        <ServiceCard
          icon={<Sparkles size={28} />}
          title="Polishing & Finishing"
          desc="Professional polishing to restore shine and elegance to gold and silver jewellery."
        />

        <ServiceCard
          icon={<Coins size={28} />}
          title="Stone Fixing & Resizing"
          desc="Secure stone fixing and accurate resizing to ensure comfort and durability."
        />

        <ServiceCard
          icon={<Shield size={28} />}
          title="Safe Jewellery Handling"
          desc="All ornaments are handled with care, transparency, and complete responsibility."
        />

        <ServiceCard
          icon={<Clock size={28} />}
          title="Timely Service"
          desc="Most services are completed within a short time depending on work complexity."
        />

        <ServiceCard
          icon={<Coins size={28} />}
          title="Gold & Silver Support"
          desc="Limited financial assistance against gold or silver for trusted customers only."
        />
      </div>

      {/* NOTE */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#3A0E12]/60 border border-[#C9A24D]/30 rounded-xl p-6 text-center">
          <p className="text-[#F3EAD7]/90 leading-relaxed">
            <span className="text-[#C9A24D] font-semibold">Note:</span>{' '}
            These services are provided based on mutual trust and long-standing
            relationships. Availability and timelines may vary depending on ornament
            condition and craftsmanship requirements.
          </p>
        </div>
      </div>
    </div>
  );
}

/* SERVICE CARD COMPONENT */
function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-[#FFF6E8] p-6 rounded-2xl border border-[#E6D2A3] shadow-md hover:shadow-lg transition">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-[#F1E2B8] text-[#8B6A1F] p-3 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold font-serif text-[#5A3A14]">
          {title}
        </h3>
      </div>
      <p className="text-[#5F4A2E] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default Finance;
