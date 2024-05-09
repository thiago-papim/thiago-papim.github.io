/* eslint-disable react/prop-types */
import React from 'react';

function Segment({ medida }) {
  return (
    <div>
      <svg
        className="divider bg-[#201c24] h-[20px] md:h-[35px]"
        viewBox={ medida }
        preserveAspectRatio="none"
      >
        <path d="M0 0 L50 100 L100 0 Z" />
      </svg>
      <div className="segment" />
    </div>
  );
}

export default Segment;
