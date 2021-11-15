import dynamic from 'next/dynamic';
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import { motion } from "framer-motion";

const Header = dynamic(() => import('../components/Header'))
const ZAPCTA = dynamic(() => import('../components/ZAPCTA'))
const About = dynamic(() => import('../components/About'))
const Features = dynamic(() => import('../components/Features'))
const FooterCTA = dynamic(() => import('../components/FooterCTA'))
const Footer = dynamic(() => import('../components/Footer'))

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <body className="flex flex-col min-h-screen bg-gray-800">
        <header className="bg-hero bg-cover h-screen">
          <Header />
        </header>
        <div className="space-y-32 bg-gray-900">
        <ZAPCTA />
        <div className="space-y-32 bg-gray-900">
          <main className="flex-grow space-y-12">
            <div className="space-y-32">
              <About />
              <Features />
            </div>
          </main>
          </div>
          <footer className="bg-gray-800">
            <FooterCTA />
            <Footer />
          </footer>
        </div>
      </body>
    </motion.div>
  )
};
