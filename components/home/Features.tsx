import { motion } from 'framer-motion';
import React from 'react';
import { FeatureItemData, FeaturesData } from '../../config/config';

const FeatureItem: React.FC<FeatureItemData> = ({ title, description, FeatureIcon }) => {
  return (
    <div className='flex bg-neutral-800 group transform duration-200 ease-in-out hover:scale-105 rounded-2xl'>
      <div className='space-y-2 mx-auto p-7'>
        <FeatureIcon className='flex mx-auto justify-center h-14 w-14 bg-txgreen duration-200 ease-in-out group-hover:bg-green-500 text-gray-800 rounded-2xl p-3' />
        <h4 className='text-center font-medium text-2xl text-white'>{title}</h4>
        <p className='text-gray-400'>{description}</p>
      </div>
    </div>
  );
};

export default function Features() {
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
        <div className='text-center space-y-2 m-8'>
          <h3 className='text-3xl font-bold text-white'>
            Everything you need to manage your server
          </h3>
          <p className='text-gray-400 text-base'>
            txAdmin has everything you need to manage your server, ranging from moderation
            to monitoring.
          </p>
        </div>
        <div className='mx-auto justify-center text-center w-9/12 gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
          {FeaturesData.map((item) => (
            <FeatureItem
              key={item.title}
              title={item.title}
              description={item.description}
              FeatureIcon={item.FeatureIcon}
            />
          ))}
        </div>
    </motion.div>
  );
}
