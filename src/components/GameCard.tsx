import { motion } from "framer-motion";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  releaseDate: string;
  platform: string;
}

export const GameCard = ({
  title,
  description,
  image,
  releaseDate,
  platform,
}: GameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-primary/10 to-primary-dark border border-primary/20"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold gradient-text mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>{releaseDate}</span>
          <span>{platform}</span>
        </div>
      </div>
    </motion.div>
  );
};
