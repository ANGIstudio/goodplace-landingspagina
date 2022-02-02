import React from 'react';

export const Td: React.FC = ({ children }) => {
  return (
    <td className="text-sm text-gray-900 font-light pr-4 py-2 align-top w-40">
      {children}
    </td>
  );
};
