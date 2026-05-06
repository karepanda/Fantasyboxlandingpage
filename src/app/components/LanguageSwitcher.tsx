import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Languages } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    // Update document language attribute
    document.documentElement.lang = language;
    // Announce to screen readers
    const announcement = language === 'en' ? 'Language changed to English' : 'Idioma cambiado a Español';
    announceToScreenReader(announcement);
  };

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative inline-block"
    >
      <Select value={i18n.language} onValueChange={handleLanguageChange}>
        <SelectTrigger
          className={cn(
            'w-32 gap-2 border border-[var(--fb-border)] rounded-lg',
            'bg-white text-[var(--fb-text)] hover:bg-gray-50',
            'transition-colors duration-200'
          )}
          aria-label="Change language"
        >
          <Languages className="w-4 h-4" />
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Español</SelectItem>
        </SelectContent>
      </Select>
    </motion.div>
  );
};

