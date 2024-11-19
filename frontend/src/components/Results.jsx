import React from 'react';

const Results = ({ data }) => {
  console.log('Results Component Data:', data);

  return (
    <div className="container mx-auto p-4 bg-bodyColor">
      <h1 className="text-4xl font-bold mb-4 text-center mt-32 font-giga bg-navItemsColor text-whiteColor mx-auto w-fit p-2">Analysis Results</h1>

      <div className="bg-bodyColor shadow-md rounded-lg p-4 bg-transparent font-giga">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full h-[400px] p-2 bg-gray-100 mb-10"> 
            <div className="w-full h-full mb-6">
              <img
                src="http://localhost:8000/static/attack_normal_traffic.png"
                alt="Attack and Normal Traffic"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <h3 className="text-xl text-center">Fig. 1 Attack and Normal Traffic</h3>
          </div>

          <div className="w-full h-[400px] p-2 bg-gray-100 mb-10">           
            <div className="w-full h-full mb-6">
              <img
                src="http://localhost:8000/static/source_ip_packet_count.png"
                alt="Source IP Packet Count"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <h3 className="text-xl text-center">Fig. 2 Source IP Packet Count</h3>
          </div>

          <div className="w-full h-[400px] p-2 bg-gray-100 mb-6">            
            <div className="w-full h-full -mb-6">
              <img
                src="http://localhost:8000/static/traffic_volume_over_time.png"
                alt="Traffic Volume Over Time"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <h3 className="text-xl text-center">Fig. 3 Traffic Volume Over Time</h3>
          </div>

          <div className="w-full h-[400px] p-2 bg-gray-100 mb-6">
            <div className="w-full h-full -mb-6">
              <img
                src="http://localhost:8000/static/traffic_bandwidth_over_time.png"
                alt="Traffic Bandwidth Over Time"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <h3 className="text-xl text-center">Fig. 4 Traffic Bandwidth Over Time</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;