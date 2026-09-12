import React from 'react';
import logo56 from "../../imports/fb-logo-56.webp";
import logo112 from "../../imports/fb-logo-112.webp";
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header: React.FC = () => {
  return (
    <header className=" top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <picture className="block">
            <source
              type="image/webp"
              srcSet={`${logo56} 56w, ${logo112} 112w`}
              sizes="(min-width: 48rem) 56px, 48px"
            />
            <img
                src={logo112}
                srcSet={`${logo56} 56w, ${logo112} 112w`}
                sizes="(min-width: 48rem) 56px, 48px"
                width={375}
                height={375}
                alt="FantasyBox logo"
                className="h-12 w-auto md:h-14"
            />
          </picture>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

