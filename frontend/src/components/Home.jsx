import React from 'react';
import homeImage from '../assets/homeImage.jpg';
import ddosAttack from '../assets/ddosAttack.jpg';
import ml from '../assets/ml.jpg';

const Home = () => {
    return (
      <div className="bg-bodyColor min-h-screen flex flex-col items-center justify-center space-y-60 py-60">
        <div className="flex w-5/6 max-w-10xl space-x-4">
          <div className="w-1/2 flex justify-center">
            <img 
              src={ddosAttack} 
              alt="Home" 
              className="w-3/4 h-auto rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,1)]"
            />
          </div>
          <div className="w-1/2 px-4 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 font-giga">What is DDoS Attack Detection using Machine Learning?</h1>
            <p className="text-base text-fontColor font-poppins text-justify">
            Machine learning detects DDoS attacks by analyzing historical network data to understand normal traffic patterns. It examines features like IP addresses, packet counts and connection durations to learn what typical behavior looks like. When the model detects unusual activity, like a sudden increase in packet counts or repeated access from one IP, it flags it as suspicious. This approach helps improve detection accuracy over time, making it easier to identify new and complex attacks.
            </p>
          </div>
        </div>

        <div className="flex w-5/6 max-w-10xl space-x-4">
          <div className="w-1/2 px-4 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 font-giga">What is a DDoS Attack?</h1>
            <p className="text-base text-fontColor font-poppins text-justify">
              Distributed Denial of Service (DDoS) attacks are malicious attempts to disrupt the normal functioning of targeted servers, services, or networks by overwhelming them with a flood of Internet traffic. These attacks are typically orchestrated by multiple compromised computers or devices, often forming a network known as a botnet. DDoS attacks can cause significant harm to businesses and organizations, impacting their online services, reputation and financial stability.
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img 
              src={homeImage} 
              alt="Home" 
              className="w-3/4 h-auto rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,1)]"
            />
          </div> 
        </div>

        <div className="flex w-5/6 max-w-10xl space-x-4">
          <div className="w-1/2 flex justify-center">
            <img 
              src={ml} 
              alt="Home" 
              className="w-3/4 h-auto rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,1)]"
            />
          </div>
          <div className="w-1/2 px-4 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 font-giga">Why Machine Learning?</h1>
            <p className="text-base text-fontColor font-poppins text-justify">
            In the context of DDoS attack detection, machine learning models can analyze vast amounts of network traffic data to identify patterns and anomalies that may indicate an attack. Unlike traditional methods, which rely on predefined rules, machine learning can adapt to evolving attack strategies, recognizing new threats and minimizing false positives. This capability allows organizations to enhance their security measures proactively and effectively respond to potential risks.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Home;