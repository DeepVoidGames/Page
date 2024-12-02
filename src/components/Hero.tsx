import { motion } from "framer-motion";
import { Rocket, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/50 to-primary-dark" />
      <div className="container mx-auto px-4 pt-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <Rocket className="w-12 h-12 md:w-16 md:h-16 text-primary" />
          <h1 className="text-4xl md:text-7xl font-bold gradient-text px-4">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full px-4 md:px-0 md:w-auto">
            <a
              href="#games"
              className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full transition-colors text-center"
            >
              {t("hero.cta")}
            </a>
            <a
              href="#about"
              className="w-full md:w-auto border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-full transition-colors text-center"
            >
              {t("hero.about")}
            </a>
          </div>
          <div className="flex items-center gap-2 mt-12 text-gray-300">
            <Star className="w-5 h-5 text-primary" />
            <span>{t("hero.players")}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
