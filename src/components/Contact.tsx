import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text px-4">
            {t("contact.title")}
          </h2>
          <p className="text-gray-300 mb-8 px-4">{t("contact.subtitle")}</p>
          <div className="flex justify-center space-x-4 px-4">
            <a
              href="https://www.linkedin.com/in/jakub-buciuto/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-primary hover:text-primary-hover transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:jakub.buciuto@gmail.com"
              className="text-3xl text-primary hover:text-primary-hover transition-colors"
            >
              <Mail />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
