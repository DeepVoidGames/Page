import { GameCard } from "./GameCard";
import { useTranslation } from "react-i18next";

export const Games = () => {
  const { t } = useTranslation();

  const games = [
    {
      title: t("games.SpaceIdle.title"),
      description: t("games.SpaceIdle.description"),
      image: "https://jakub.buciuto.com/images/space-idle-game.png",
      releaseDate: t("games.SpaceIdle.releaseDate"),
      platform: t("games.SpaceIdle.platform"),
    },
    {
      title: t("games.IdleWorld.title"),
      description: t("games.IdleWorld.description"),
      image:
        "https://img.itch.zone/aW1hZ2UvMjg0Nzg0Ni8xNzc5NTIwNy5wbmc=/original/pSTWjT.png",
      releaseDate: t("games.IdleWorld.releaseDate"),
      platform: t("games.IdleWorld.platform"),
    },
  ];

  return (
    <section id="games" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
          {t("games.title")}
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          {t("games.subtitle")}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};
