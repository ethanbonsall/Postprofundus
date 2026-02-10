import Head from "next/head";
import Header from "../components/header";
import Footer from "@/components/footer";
import Card3DCarousel, { CardItem } from "@/components/card-3d-carousel-2";

const items: CardItem[] = [
  {
    title: "The Good Place",
    description:
      "Explores morality, identity, and the afterlife, encouraging reflection on what it truly means to be good.",
    imageUrl: "/tv/good.webp",
  },
  {
    title: "BoJack Horseman",
    description:
      "A brutally honest dive into mental health, relationships, and the search for meaning through the life of a deeply flawed animated character.",
    imageUrl: "/tv/bojack.webp",
  },
  {
    title: "Lost",
    description:
      "A complex survival narrative that examines fate, choice, and interconnected lives through mystery and philosophy.",
    imageUrl: "/tv/lost.webp",
  },
  {
    title: "Fleabag",
    description:
      "A raw and intimate look at grief, love, and self-sabotage, breaking the fourth wall to confront vulnerability head-on.",
    imageUrl: "/tv/fleabag.webp",
  },
  {
    title: "This Is Us",
    description:
      "Chronicles a family across generations, exploring love, loss, and how small choices ripple through time.",
    imageUrl: "/tv/us.webp",
  },
  {
    title: "Black Mirror",
    description:
      "A chilling anthology that explores humanity’s relationship with technology and the unintended consequences of progress.",
    imageUrl: "/tv/black.webp",
  },
  {
    title: "Rick and Morty",
    description:
      "Blends absurd humor with existential dread, questioning meaning, nihilism, and the vast indifference of the universe.",
    imageUrl: "/tv/rick.webp",
  },
  {
    title: "Dark",
    description:
      "A dense time-travel saga that weaves fate, family, and causality into a haunting exploration of determinism.",
    imageUrl: "/tv/dark.webp",
  },
  {
    title: "The OA",
    description:
      "A mysterious and emotional journey through life, death, and alternate realities that invites deep contemplation.",
    imageUrl: "/tv/oa.webp",
  },
];

export default function TV() {
  return (
    <div>
      <Head>
        <title>Postprofound TV</title>
      </Head>
      <Header />
      <div className="min-h-screen pt-4[svh] lg:pt-[4dvh] flex flex-row items-center justify-center bg-gradient-to-b from-white via-zinc-300 to-white">
        <Card3DCarousel items={items} durationS={80} radius={1} />
      </div>
      <Footer />
    </div>
  );
}
