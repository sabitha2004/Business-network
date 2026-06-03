import { FiCheck, FiX, FiZap } from "react-icons/fi";

const PLANS = [
  {
    name: "Associate",
    price: "299",
    desc: "For emerging professionals ready to expand their network.",
    highlight: false,
    features: [
      { t: "Monthly networking events", y: true },
      { t: "Digital member directory", y: true },
      { t: "Online masterclasses (5/yr)", y: true },
      { t: "Business referral program", y: true },
      { t: "Dedicated relationship manager", y: false },
      { t: "Executive round tables", y: false },
    ],
  },
  {
    name: "Executive",
    price: "799",
    desc: "For established leaders serious about growth and impact.",
    highlight: true,
    badge: "Most Popular",
    features: [
      { t: "All networking events", y: true },
      { t: "Priority member directory", y: true },
      { t: "Unlimited masterclasses", y: true },
      { t: "Business referral program", y: true },
      { t: "Dedicated relationship manager", y: true },
      { t: "Executive round tables", y: true },
    ],
  },
  {
    name: "Platinum",
    price: "1999",
    desc: "For visionary executives demanding world-class access.",
    highlight: false,
    features: [
      { t: "All networking events", y: true },
      { t: "Priority member directory", y: true },
      { t: "Unlimited masterclasses", y: true },
      { t: "Business referral program", y: true },
      { t: "VIP event access", y: true },
      { t: "Investment network access", y: true },
    ],
  },
];

export default function Membership() {
  return (
    <section id="membership">
    <section className="relative py-24 bg-white overflow-hidden">

      {/* 🔥 Soft background glow like your image */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-red-200 opacity-30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-yellow-200 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-red-100 opacity-20 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Membership Plans
          </h2>
          <p className="text-gray-500 mt-2">
            Choose the plan that fits your growth
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white border p-6 transition hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight
                  ? "border-red-300 shadow-md"
                  : "border-gray-200"
              }`}
            >

              {/* Badge */}
              {plan.badge && (
                <span className="inline-flex items-center gap-1 text-xs bg-red-50 text-red-600 px-3 py-1 rounded-full mb-4">
                  <FiZap size={12} /> {plan.badge}
                </span>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>

              <p className="text-gray-500 text-sm mt-1">{plan.desc}</p>

              {/* Price */}
              <div className="mt-5 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-gray-500 text-sm"> / month</span>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <div key={f.t} className="flex items-center gap-2 text-sm">
                    {f.y ? (
                      <FiCheck className="text-red-500" size={14} />
                    ) : (
                      <FiX className="text-gray-300" size={14} />
                    )}
                    <span
                      className={f.y ? "text-gray-700" : "text-gray-400"}
                    >
                      {f.t}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`w-full py-2.5 rounded-lg text-sm font-medium transition ${
                  plan.highlight
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>
  );
}