import React from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header: React.FC = () => {
  return (
    <header className=" top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <img
              src="src/imports/FB logo.png"
              alt="FantasyBox logo"
              className="h-12 w-auto md:h-14"
          />
        <LanguageSwitcher />
      </div>
    </header>
  );
};

