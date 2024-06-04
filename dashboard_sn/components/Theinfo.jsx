// components/card.jsx

import React from 'react';
import PropTypes from 'prop-types';

const card = ({ title, value, children }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-4 py-9 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-title-md items-end justify-end font-bold text-black dark:text-white">
            {title}
          </h4>
        </div>
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <span className="text-sm font-medium">{value}</span>
        </div>
      </div>
    </div>
  );
};

card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default card;
