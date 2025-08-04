import React from "react";

const packages = [
  {
    color: "bg-gradient-to-r from-green-400 to-cyan-400",
    icon: "🟢",
    title: "Starter – Best for Simple Sites",
    features: [
      "1-Page Static Website",
      "Mobile Responsive",
      "WhatsApp Button",
      "Delivery: 2–3 Days"
    ]
  },
  {
    color: "bg-gradient-to-r from-blue-500 to-cyan-400",
    icon: "🔵",
    title: "Standard – Most Popular",
    features: [
      "3–5 Pages",
      "Modern UI",
      "SEO + WhatsApp Integration",
      "Domain Setup Help",
      "Delivery: 4–6 Days"
    ]
  },
  {
    color: "bg-gradient-to-r from-fuchsia-500 to-blue-400",
    icon: "🟣",
    title: "Premium – For Growing Brands",
    features: [
      "Full Stack Website (Next.js + Tailwind CSS)",
      "Admin Panel in React.js",
      "Backend: Node.js + Express + MongoDB",
      "Hosting + Live Deployment",
      "Custom features available"
    ]
  }
];

export default function PackagesSection() {
  return (
    <section className="w-full py-16 flex flex-col items-center gradient-bg-box rounded-3xl shadow-neon-blue border-2 border-accent-blue my-10">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 gradient-logo uppercase tracking-wide">Website Packages</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch">
        {packages.map((pkg, idx) => (
          <div key={pkg.title} className={`flex-1 min-w-[260px] max-w-sm p-6 rounded-2xl glass-card border-2 border-accent-blue shadow-neon-blue flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_32px_8px_#00FFFF99] ${pkg.color}`}>
            <div className="text-4xl mb-2">{pkg.icon}</div>
            <h3 className="text-xl font-bold mb-3 gradient-logo text-center">{pkg.title}</h3>
            <ul className="text-sm text-white/90 mb-4 space-y-2 text-center">
              {pkg.features.map((feature, i) => (
                <li key={i} className="text-center">{feature}</li>
              ))}
            </ul>
            <button className="neon-btn w-full mt-auto">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}
