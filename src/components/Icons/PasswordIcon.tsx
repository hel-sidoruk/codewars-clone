import React, { memo } from 'react';

export const PasswordIcon = memo(function PasswordIcon() {
  return (
    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
});
