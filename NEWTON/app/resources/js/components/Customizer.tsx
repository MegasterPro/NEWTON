import React from 'react';

const colors = ['#0f172a', '#2563eb', '#ea580c'];

const Customizer = () => {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 z-20">
      {colors.map((color, i) => (
        <button
          key={i}
          className="w-6 h-6 rounded-full shadow-md"
          style={{ backgroundColor: color }}
        ></button>
      ))}
    </div>
  );
};

export default Customizer;
