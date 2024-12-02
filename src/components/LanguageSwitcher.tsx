import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-primary text-white' : 'text-gray-400 hover:text-primary'}`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('pl')}
        className={`px-2 py-1 rounded ${i18n.language === 'pl' ? 'bg-primary text-white' : 'text-gray-400 hover:text-primary'}`}
      >
        PL
      </button>
    </div>
  );
};