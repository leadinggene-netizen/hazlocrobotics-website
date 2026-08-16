import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Users, Globe, Award, TrendingUp } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const values = [
  {
    icon: Award,
    title: 'Safety is non-negotiable',
    desc: 'Every product decision starts with safety. If a design cannot be certified for the environment it will operate in, it does not ship.',
  },
  {
    icon: TrendingUp,
    title: 'Transparency over marketing',
    desc: 'We publish our full certification status — including what is in progress, not just what is complete. No marketing badges without documentation.',
  },
  {
    icon: Users,
    title: 'Built with operators',
    desc: 'Our robots are designed alongside the HSE directors, plant managers, and inspection teams who use them. Operational relevance is the benchmark.',
  },
  {
    icon: Globe,
    title: 'Global deployment, local support',
    desc: 'Deployed in 40+ countries with on-the-ground support teams in the Middle East, Southeast Asia, and North America.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Hazloc Robotics"
        title="Making Hazardous-Area Inspection Safer and More Effective"
        subtitle="We build explosion-proof inspection robots for the world's most demanding industrial environments — because the people who inspect those environments deserve to go home safely."
        image="https://images.pexels.com/photos/35082106/pexels-photo-35082106.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex items-center gap-3">
                <Target size={24} className="text-teal-600" />
                <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Our Mission</p>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                Replace risky human inspection with certified robotic patrol
              </h2>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">
                Every year, industrial personnel are injured or killed inspecting hazardous areas that could have been monitored by robots. We exist to change that — by building robots that are certified for the environments where the risk is highest, and making them accessible to operators worldwide.
              </p>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">
  Hazlocrobotics LLC is the North & Latin America commercial partner for Qiteng Robotics' explosion-proof inspection robot line, combining regional sales, compliance, and site-support expertise with Qiteng's robotics engineering and manufacturing capability. Our robots are deployed in 40+ countries across oil & gas, power generation, marine, mining, and emergency response.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '40+', label: 'Countries Deployed' },
                  { value: '14+', label: 'Robot Models' },
                  { value: 'IIC T6', label: 'Highest Ex Rating' },
                  { value: '24/7', label: 'Autonomous Patrol' },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 p-6 text-center">
                    <div className="font-display text-3xl font-bold text-gold-400">{s.value}</div>
                    <div className="mt-1 text-sm text-ink-300">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3">
              <Eye size={24} className="text-teal-600" />
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">What We Stand For</p>
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink-900 sm:text-3xl">Our Values</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={i} delay={(i % 2) * 100}>
                <div className="card h-full p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <v.icon size={24} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-ink-600 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Global Presence</h2>
            <p className="mt-4 text-lg text-ink-600 leading-relaxed">
              Hazlocrobotics LLC handles sales, compliance, and support for North and Latin America from Houston, TX, while Qiteng Robotics — our manufacturing partner — engineers and builds the robot line in Shenzhen, China. Our on-the-ground support teams serve operators across the Middle East, Southeast Asia, and North America.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { city: 'Houston, TX', role: 'North & Latin America Office', desc: 'Business operations, sales, and compliance for North and Latin American markets.' },
              { city: 'Shenzhen, China', role: 'Manufacturing Partner — Qiteng Robotics', desc: 'Robotics engineering, product development, and manufacturing quality control.' },
              { city: 'Basra, Iraq', role: 'Middle East Operations', desc: 'On-site deployment and support for oil & gas operators in the region.' },
            ].map((office, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card h-full p-6">
                  <div className="flex items-center gap-2 text-teal-600">
                    <Globe size={18} />
                    <span className="text-sm font-semibold">{office.role}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink-900">{office.city}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{office.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 py-16 lg:py-24">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Let's make your hazardous-area inspection safer
            </h2>
            <p className="mt-4 text-lg text-ink-300">
              Schedule a demo or site assessment. Our team will help you identify the right robot and deployment plan.
            </p>
            <Link to="/contact" className="mt-8 btn-primary text-base">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
