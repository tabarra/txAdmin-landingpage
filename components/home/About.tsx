import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.div 
    viewport={{ once: true }}
    initial={{ 
      opacity: 0,
      y: 50
    }} 
      whileInView={{
      opacity: 1,
      x: 0,
      y: 0
    }}
    transition={{
      duration: 0.9,
      ease: "easeInOut",
    }}>
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 mx-auto justify-evenly items-center">
      <div className="w-4/5 md:w-2/5 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-white">Managing your <span className="text-fivem-red">FiveM</span> server just got <span className="text-transparent bg-clip-text bg-gradient-to-t from-green-300 to-green-500">better</span>.</h2>
            <p className="text-gray-400 text-lg">txAdmin offers a wide range of features designed to make managing a FiveM server as easy as anything. Setting up txAdmin is completely free, begin your journey on using the most simplistic, yet functional FiveM server web panel.</p>
          </div>
      </div>
        <div className="bg-snaily bg-cover flex items-center w-80 h-80 md:w-96 md:h-96 rounded-2xl object-cover">
          <svg className="flex mx-auto opacity-90 h-64 w-64 transform duration-200 hover:scale-110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M29.6 42.8S24.9 22 16.5 22C1.4 22 1 49.8 11.2 59c3.1 2.8 16.1 2.8 43.5 0c2.9-.3 1.8-3.1-2.3-5c-2.7-1.3-15.8-3.7-22.8-11.2" fill="#94d82a" /><g fill="#769e2a"><ellipse cx="27.8" cy="39.8" rx="3.9" ry="6.7" /><ellipse cx="31.5" cy="53.4" rx="2.4" ry="2.7" /><ellipse cx="22.5" cy="48.5" rx="1.8" ry="3.1" /><ellipse cx="20.2" cy="36.4" rx="1.4" ry="2.1" /></g><path d="M9.6 26.1c0 1.2.4 2.3 1.1 2.9c.3.3.7.5 1.1.7c.2.1.4.1.6.1h.7c.9 0 1.8-.3 2.5-.9c.7-.6 1.2-1.6 1.6-2.8c.4 1.2.4 2.6-.4 3.8c-.8 1.2-2.3 1.9-3.7 1.9h-.5c-.2 0-.3 0-.5-.1c-.4-.1-.7-.2-1.1-.3c-.7-.3-1.3-.8-1.6-1.5c-.7-1.2-.6-2.8.2-3.8" fill="#3e4347" /><path d="M58.9 42.3c3.4-4.3 3.9-11.2 2-15.4c-2.8-6.2-8.3-7.1-8.3-7.1c-7.4-11.9-27.8-11.9-34 2.7c5.3 3.1 8.3 11.8 10 16.5c1.6 6.3 4.7 12 9.8 13.5c2.2.6 2.6-1.7 2.6-1.7c1.4 2 4.3 3.4 6.9 2.7c9.7-2.8 11-11.2 11-11.2" fill="#e08828" /><g fill="#94d82a"><path d="M14.5 24.2l-2.6.9l-2.5-6.9l2.6-.9z" /><path d="M20.3 26.8l-2.5-1.1l3.1-6.7l2.5 1.2z" /><path d="M19 12.7c0 4.7-3.8 8.5-8.5 8.5S2 17.4 2 12.7s3.8-8.5 8.5-8.5c4.7.1 8.5 3.9 8.5 8.5" /></g><path d="M15.4 13c0 3.7-2.9 6.6-6.4 6.6c-3.6 0-6.4-3-6.4-6.6c0-3.7 2.9-6.6 6.4-6.6c3.5 0 6.4 3 6.4 6.6" fill="#fcfcfa" /><path d="M14.6 13c0 2.5-2 4.6-4.4 4.6c-2.4 0-4.4-2-4.4-4.6c0-2.5 2-4.6 4.4-4.6c2.5.1 4.4 2.1 4.4 4.6" fill="#3e4347" /><g fill="#93603b"><path d="M41.1 50.7c-1.9-2.9-3.3-6.2-4-9.6c-.7-3.5-.7-7.1.1-10.6c.8-3.5 2.5-6.9 5.3-9.3c1.4-1.2 3.1-2 4.9-2.3c1.8-.3 3.6 0 5.2.8c-1.7-.4-3.4-.4-5 .1s-2.9 1.4-4.1 2.5c-1.1 1.1-2.1 2.5-2.8 4c-.7 1.5-1.3 3-1.6 4.6c-.8 3.2-.9 6.6-.5 9.9c.5 3.4 1.3 6.7 2.5 9.9" /><path d="M58.9 42.3c-.7.9-1.6 1.6-2.6 2.2c-1 .6-2.1 1-3.4 1.1c-1.2.1-2.5-.3-3.6-1S47.4 43 46.7 42c-1.4-2-1.9-4.7-1.6-7.1c.3-2.4 1.4-4.8 3.1-6.6c.9-.9 1.9-1.7 3.2-2.1c1.2-.5 2.6-.6 3.9-.2c1.4.4 2.5 1.4 3.1 2.5c.6 1.2.9 2.5.8 3.8c-.1 1.3-.5 2.6-1.5 3.5c-.9 1-2.5 1.5-3.8.8c-1.3-.7-1.9-2.1-1.6-3.4c.2-.7.6-1.2 1.2-1.5c.3-.1.7-.2 1 0c.3.1.5.3.7.6c-1-.9-2 .3-2.1 1.1c-.1.9.5 1.9 1.3 2.2c.4.2.8.1 1.3 0c.4-.1.8-.4 1.1-.7c.6-.7.9-1.7.9-2.7c0-1-.2-2-.7-2.8c-.5-.8-1.2-1.4-2.1-1.6c-1.8-.5-3.8.4-5.2 1.9c-2.8 2.9-3.7 7.9-1.6 11.5c1 1.8 2.7 3.3 4.8 3.4c2.1.1 4.3-1 6-2.3" /></g><path d="M34.3 12.7c0 5.4-4.4 9.7-9.8 9.7s-9.8-4.4-9.8-9.7c0-5.4 4.4-9.7 9.8-9.7s9.8 4.4 9.8 9.7" fill="#94d82a" /><ellipse cx="22.7" cy="13.1" rx="7.4" ry="7.6" fill="#fcfcfa" /><path d="M29.3 13.1c0 2.9-2.3 5.3-5.1 5.3s-5.1-2.4-5.1-5.3s2.3-5.3 5.1-5.3s5.1 2.4 5.1 5.3" fill="#3e4347" /></svg>
        </div>
    </div>
    </motion.div>
  )
};
