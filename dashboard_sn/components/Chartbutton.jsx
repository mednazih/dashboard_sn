import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import Chart from './Chart';



const ChartButton = ({ label, isOpen, onToggle }) => {
  return (
    <div className='relative flex flex-col items-center w-full mb-4'>
      <button
        onClick={onToggle}
        className='rounded-sm border border-stroke bg-white p-4 w-full flex items-center justify-between font-bold text-lg tracking-wider shadow-default dark:border-strokedark dark:bg-boxdark'
      >
        {label}
        {!isOpen ? (
          <AiOutlineCaretDown className='h-8' />
        ) : (
          <AiOutlineCaretUp className='h-8' />
        )}
      </button>
      {isOpen && <Chart />}
    </div>
  );
};

export default ChartButton;
