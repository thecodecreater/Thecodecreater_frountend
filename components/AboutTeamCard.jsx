import { FaUserTie } from 'react-icons/fa';

export default function AboutTeamCard({ name, role, img, desc }) {
  return (
    <div className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-6 w-full md:w-72 mx-auto hover:scale-105 hover:shadow-neon-blue transition-all duration-300 flex flex-col items-center">
      {img ? (
        <img src={img} alt={name} className="w-24 h-24 rounded-full border-4 border-accent-blue object-cover mb-3 shadow-neon-blue" />
      ) : (
        <FaUserTie className="w-16 h-16 text-accent-blue mb-3 neon-glow" />
      )}
      <h3 className="text-xl font-extrabold text-white mb-1 neon-glow heading-glow">{name}</h3>
      <p className="text-accent-blue font-semibold mb-2">{role}</p>
      <p className="subtext-premium text-center text-sm">{desc}</p>
    </div>
  );
}
