import React from 'react';
import bgImage from '../assets/bgLoading.png';

const Spinner = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <style>
        {`
          .spinner {
            height: 75px;
            aspect-ratio: 1;
            --c: no-repeat linear-gradient(#024CAA 0 0);
            background: var(--c), var(--c), var(--c), var(--c);
            background-size: 33.4% 33.4%;
            animation: l7 1.5s infinite linear;
          }

          @keyframes l7 {
            0%, 5%   { background-position: 0 0, 50% 0, 0 50%, 50% 50%; }
            25%      { background-position: 0 0, 100% 0, 0 100%, 50% 50%; }
            50%      { background-position: 50% 0, 100% 0, 0 100%, 0 50%; }
            75%      { background-position: 50% 0, 100% 50%, 0 100%, 0 0; }
            95%, 100% { background-position: 50% 0, 50% 50%, 0 50%, 0 0; }
          }
        `}
      </style>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{
          backgroundImage: `url(${bgImage})`
        }}
      ></div>

      <div className="spinner z-10"></div>
    </div>
  );
};

export default Spinner;