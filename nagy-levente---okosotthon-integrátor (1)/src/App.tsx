import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Droplets, 
  Lightbulb, 
  Thermometer, 
  Lock, 
  MessageCircle,
  Home,
  Wifi,
  Cpu
} from "lucide-react";
import siteData from "./data.json";

// Helper to map icon names string to Lucide components
const IconMap: { [key: string]: any } = {
  Smartphone, Droplets, Lightbulb, Thermometer, Zap, ShieldCheck, Lock, Wifi, Cpu, MessageCircle, Home
};

export default function App() {
  const { header, features, stats, cta } = siteData;

  return (
    <div className="min-h-screen selection:bg-sky-500/30">
      {/* Visual Decoration */}
      <div className="bg-glow">
        <div className="glow-orb top-[-10%] left-[-10%] bg-sky-500/20" />
        <div className="glow-orb bottom-[-20%] right-[-10%] bg-blue-600/20" />
        <div className="glow-orb top-[20%] right-[-20%] bg-indigo-500/10" />
        <div className="glow-orb bottom-[10%] left-[-20%] bg-cyan-400/10" />
      </div>

      <div className="page-container">
        {/* Header Section */}
        <header className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12"
          >
            <div className="text-center md:text-left flex-1">
              <h1 className="main-heading mb-4">
                {header.title.split(" ").slice(0, 2).join(" ")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500">
                  {header.title.split(" ").slice(2).join(" ")}
                </span>
              </h1>
              <p className="lead-text mx-auto md:mx-0">
                {header.description}
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end shrink-0 gap-4">
              <div className="profile-avatar">
                <img 
                  src={header.profileImage} 
                  alt={header.name}
                  className="w-full h-full object-cover object-top scale-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(header.name) + "&background=0ea5e9&color=fff&size=200";
                  }}
                />
              </div>

              <span className="name-badge">
                {header.name}
              </span>
            </div>
          </motion.div>
        </header>

        {/* Section Divider */}
        <div className="flex items-center gap-4 mb-12 opacity-50">
          <div className="h-px flex-1 bg-slate-800" />
          <div className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
          <div className="h-px w-12 bg-slate-800" />
        </div>

        {/* Feature Grid */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              <Home className="w-6 h-6 text-sky-400" />
              Miben segít az okosotthon?
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {features.map((feature, idx) => {
                const FeatureIcon = IconMap[feature.icon] || CheckCircle2;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="feature-card"
                  >
                    <div className="flex items-start gap-4">
                      <div className="feature-icon">
                        <FeatureIcon className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <p className="text-slate-100 font-medium leading-snug mb-1">
                          "{feature.text}"
                        </p>
                        <p className="text-sm text-slate-500 feature-detail">
                          → {feature.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Section Divider */}
        <div className="flex items-center gap-4 mb-12 opacity-50">
          <div className="h-px w-12 bg-slate-800" />
          <div className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
          <div className="h-px flex-1 bg-slate-800" />
        </div>

        {/* Technical Features */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="tech-card"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-white">
              <Cpu className="w-32 h-32" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-white">
                Miért a Helyi Vezérlésű Rendszer?
              </h2>
              <p className="text-slate-400 mb-8 max-w-2xl leading-relaxed">
                A piacon kapható legtöbb eszközzel ellentétben az általam telepített rendszerek 
                <span className="text-slate-100 italic font-medium"> nem függenek külső felhős szerverektől</span>. 
                A házon belül elhelyezett "helyi agy" garantálja a sebességet és a biztonságot.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {stats.map((stat, idx) => {
                  const StatIcon = IconMap[stat.icon] || Cpu;
                  return (
                    <div key={idx} className="badge-item">
                      <StatIcon className="w-4 h-4" />
                      {stat.text}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-box"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">
              {cta.title}
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              {cta.description}
            </p>
            
            <a 
              href={cta.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="w-5 h-5" />
              {cta.button}
            </a>
          </motion.div>
        </section>

        <footer className="mt-24 pt-8 border-t border-slate-900 text-center text-sm text-slate-600">
          <p>© 2026 Nagy Levente EV. | Rendszerüzemeltetési pontosság az Ön otthonában.</p>
        </footer>
      </div>
    </div>
  );
}
