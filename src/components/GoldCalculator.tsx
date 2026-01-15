import { useEffect, useState } from 'react';
import { Calculator, TrendingUp, TrendingDown } from 'lucide-react';


function GoldCalculator() {
  const [rate, setRate] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState<any>(null);
  const [goldRate, setGoldRate] = useState<number | null>(null);


useEffect(() => {
  fetch('/gold-rate.json')
    .then(res => res.json())
    .then(data => {
      setGoldRate(data.gold22k);
      setRate(data.gold22k.toString()); // auto-fill calculator rate
    })
    .catch(() => {
      setGoldRate(null);
    });
}, []);


  const formatINR = (num: number) => {
    num = Math.round(num);
    const s = num.toString();
    const last3 = s.substring(s.length - 3);
    const other = s.substring(0, s.length - 3);
    const formattedLast3 = other !== '' ? ',' + last3 : last3;
    const formatted =
      other.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + formattedLast3;
    return '₹' + formatted;
  };

  const calculateGold = () => {
    const rateInput = rate.replace(/,/g, '').trim();
    const weightNum = parseFloat(weight);

    if (!rateInput || !weightNum) {
      setResult({ error: 'Please enter both rate and weight.' });
      return;
    }

    const rateNum = parseFloat(rateInput);
    const ratePerGram = rateNum / 10;

    const rates = {
      '24K': ratePerGram,
      '22K': ratePerGram * (22 / 24),
      '18K': ratePerGram * (18 / 24),
      '14K': ratePerGram * (14 / 24),
    };

    const prices: any = {};
    for (const k in rates) {
      prices[k] = rates[k as keyof typeof rates] * weightNum;
    }

    const diff24_22 = prices['24K'] - prices['22K'];
    const diff18_22 = prices['22K'] - prices['18K'];
    const diff14_22 = prices['22K'] - prices['14K'];

    setResult({
      weight: weightNum,
      prices,
      differences: {
        diff24_22,
        diff18_22,
        diff14_22,
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#C9A24D] mb-4 font-serif">
          Gold Price Calculator
        </h2>
        <p className="text-[#F3EAD7]/90 text-lg">
          Calculate the value of your gold jewelry
        </p>
      </div>

      <div className="max-w-2xl mx-auto">

        {/* LIVE GOLD RATE SLIDE */}
        <div className="mb-6 overflow-hidden rounded-xl border border-[#C9A24D]/30 bg-[#3A0E12]/60">
          <div className="whitespace-nowrap animate-marquee px-4 py-2 text-sm sm:text-base">
            <span className="mr-12 text-[white]/80 font-bold">
              Live Gold Rate Today (24K • per 10g):
            </span>
            <span className="font-bold text-[#f5b833] text-lg">
             {goldRate ? `₹${goldRate.toLocaleString('en-IN')}` : 'Loading...'}

            </span>
            <span className="ml-12 text-[#F3EAD7]/60">
              • Rates may vary by market conditions
            </span>
          </div>
        </div>

        {/* MAIN CALCULATOR CONTAINER */}
        <div className="bg-[#FFF6E8] rounded-2xl border border-[#E6D2A3] overflow-hidden shadow-md">

          {/* TOP BAR */}
          <div className="bg-[#F1E2B8] p-6 border-b border-[#E6D2A3]">
            <div className="flex items-center justify-center gap-3">
              <Calculator className="text-[#8B6A1F]" size={32} />
              <h3 className="text-2xl font-bold text-[#5A3A14] font-serif">
                Calculate Gold Value
              </h3>
            </div>
            <p className="text-center text-[#5F4A2E] text-sm mt-2">
              Sri Ganesh Jewellers | Since 1993
            </p>
          </div>

          {/* FORM */}
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-[#5A3A14] font-semibold mb-2">
                  24K Rate (per 10 grams)
                </label>
                <input
                  type="text"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="e.g. 1,26,000"
                  className="w-full px-4 py-3 rounded-xl border border-[#E6D2A3] bg-[#FDF4E3] text-[#5A3A14] placeholder-[#8B6A1F]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
                />
              </div>

              <div>
                <label className="block text-[#5A3A14] font-semibold mb-2">
                  Weight (in grams)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 55"
                  className="w-full px-4 py-3 rounded-xl border border-[#E6D2A3] bg-[#FDF4E3] text-[#5A3A14] placeholder-[#8B6A1F]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
                />
              </div>

              <button
                onClick={calculateGold}
                className="w-full bg-[#C9A24D] text-[#3A0E12] font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 text-lg hover:scale-105 transition"
              >
                <Calculator size={24} />
                Calculate Price
              </button>
            </div>

            {/* RESULT */}
            {result && (
              <div className="mt-8 space-y-4">
                {result.error ? (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                    <p className="text-red-400">{result.error}</p>
                  </div>
                ) : (
                  <>
                    <div className="bg-[#FDF4E3] border border-[#E6D2A3] rounded-xl p-6">
                      <h4 className="text-xl font-bold text-[#5A3A14] mb-4 font-serif">
                        Gold Rate Calculation
                      </h4>

                      <div className="space-y-3 text-[#5F4A2E]">
                        <div className="flex justify-between border-b border-[#E6D2A3] pb-2">
                          <span className="font-semibold">Weight:</span>
                          <span className="font-semibold">
                            {result.weight} grams
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span>24K Gold:</span>
                          <span className="font-bold">
                            {formatINR(result.prices['24K'])}
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span>22K Gold:</span>
                          <span className="font-bold">
                            {formatINR(result.prices['22K'])}
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span>18K Gold:</span>
                          <span className="font-bold">
                            {formatINR(result.prices['18K'])}
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span>14K Gold:</span>
                          <span className="font-bold">
                            {formatINR(result.prices['14K'])}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* DIFFERENCE BOX – COLORS KEPT AS IS */}
                    <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                        <TrendingUp size={24} />
                        Price Differences (from 22K)
                      </h4>

                      <div className="space-y-3 text-#3a2a1a/90">
                        <div className="flex justify-between">
                          <span className="flex items-center gap-2">
                            <TrendingUp className="text-red-400" size={18} />
                            24K is higher by:
                          </span>
                          <span className="text-red-400 font-bold">
                            {formatINR(result.differences.diff24_22)}
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="flex items-center gap-2">
                            <TrendingDown className="text-green-400" size={18} />
                            18K → You save:
                          </span>
                          <span className="text-green-400 font-bold">
                            {formatINR(result.differences.diff18_22)}
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="flex items-center gap-2">
                            <TrendingDown className="text-green-400" size={18} />
                            14K → You save:
                          </span>
                          <span className="text-green-400 font-bold">
                            {formatINR(result.differences.diff14_22)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#FDF4E3] border border-[#E6D2A3] rounded-xl p-4">
                      <p className="text-[#5F4A2E] text-sm text-center">
                        <span className="font-semibold text-[#5A3A14]">
                          Note:
                        </span>{' '}
                        These calculations show only the gold value. Jewellery prices may vary based on making charges,
                        wastage, and design.
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-[#FFF6E8] border border-[#E6D2A3] rounded-xl p-4 text-center">
            ✨
            <div className="text-[#5A3A14] font-semibold">
              Accurate Pricing
            </div>
            <div className="text-[#5F4A2E] text-sm">
              Based on current market rates
            </div>
          </div>

          <div className="bg-[#FFF6E8] border border-[#E6D2A3] rounded-xl p-4 text-center">
            💎
            <div className="text-[#5A3A14] font-semibold">
              All Purities
            </div>
            <div className="text-[#5F4A2E] text-sm">
              24K, 22K, 18K & 14K calculations
            </div>
          </div>

          <div className="bg-[#FFF6E8] border border-[#E6D2A3] rounded-xl p-4 text-center">
            📊
            <div className="text-[#5A3A14] font-semibold">
              Price Comparison
            </div>
            <div className="text-[#5F4A2E] text-sm">
              See savings across purities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoldCalculator;
