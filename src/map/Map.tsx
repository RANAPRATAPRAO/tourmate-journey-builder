import React from 'react';

const IframeComponent: React.FC = () => {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] overflow-hidden">
      <h1>Embedded Website</h1>
      <div className='flex justify-center mt-20'>
      <iframe
        title="Embedded Website"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15555.74058902639!2d77.61923354999999!3d12.91188975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715193241419!5m2!1sen!2sin"
        width="60%"
        height="400px"
        frameBorder={0}
        allowFullScreen
        
      />
    </div>
    </div>
  );
};

export default IframeComponent;
