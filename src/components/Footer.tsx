import { Link } from 'react-router-dom';
import { Bot, Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white">
                <Bot size={20} />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Hazloc<span className="text-gold-500">Robotics</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Explosion-proof inspection robots for hazardous locations. Deployed in 40+ countries across oil & gas, power, marine, mining, and emergency response.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-400 transition-colors hover:bg-teal-600 hover:text-white" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:info@hazlocrobotics.com" className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-400 transition-colors hover:bg-teal-600 hover:text-white" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Products</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/products/explosion-proof-wheeled-robot-l4s" className="hover:text-gold-400 transition-colors">L4-S Wheeled Robot</Link></li>
              <li><Link to="/products/explosion-proof-quadruped-robot" className="hover:text-gold-400 transition-colors">Quadruped Robot</Link></li>
              <li><Link to="/products/explosion-proof-tracked-robot" className="hover:text-gold-400 transition-colors">Tracked Robot</Link></li>
              <li><Link to="/products/firefighting-reconnaissance-robot" className="hover:text-gold-400 transition-colors">Firefighting Robot</Link></li>
              <li><Link to="/products/asset-tracking-center-software" className="hover:text-gold-400 transition-colors">Tracking Center Software</Link></li>
              <li><Link to="/products" className="text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-1">View all <ArrowRight size={14} /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link to="/certification" className="hover:text-gold-400 transition-colors">Certification & Compliance</Link></li>
              <li><Link to="/case-studies" className="hover:text-gold-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/resources" className="hover:text-gold-400 transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-teal-400" />
                <a href="mailto:info@hazlocrobotics.com" className="hover:text-gold-400 transition-colors">info@hazlocrobotics.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-teal-400" />
                <span>North & Latin America commercial partner<br />for Qiteng Robotics</span>
              </li>
            </ul>
            <Link to="/contact" className="btn-primary mt-5 text-xs">
              Request Online Demo
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Hazloc Robotics. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-ink-500">
            <a href="#" className="hover:text-ink-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-ink-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
