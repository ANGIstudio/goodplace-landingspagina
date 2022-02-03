import React from 'react';

export const Th: React.FC = ({ children }) => {
  return (
    <th
      scope="col"
      className="text-sm font-medium text-gray-900 pr-4 py-2 text-left w-40"
    >
      {children}
    </th>
  );
};
