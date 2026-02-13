import Head from "next/head";
import Header from "../components/header";
import Footer from "@/components/footer";
import Card3DCarousel, { CardItem } from "@/components/card-3d-carousel";

const items: CardItem[] = [
  {
    title: "The Art of Racing in the Rain",
    description:
      "A moving reflection on life, love, and loyalty, told through the eyes of a dog witnessing the human experience.",
    imageUrl: "/literature/garth.jpg",
  },
  {
    title: "The Alchemist",
    description:
      "A philosophical journey of self-discovery that explores destiny, dreams, and the pursuit of one’s personal legend.",
    imageUrl: "/literature/paulo.jpg",
  },
  {
    title: "The Bell Jar",
    description:
      "A poignant and unflinching exploration of identity, mental health, and the struggle for self-acceptance.",
    imageUrl: "/literature/sylvia.jpg",
  },
  {
    title: "Siddhartha",
    description:
      "A profound quest for enlightenment, tracing a man’s search for meaning through lived experience rather than doctrine.",
    imageUrl: "/literature/hermann.jpg",
  },
  {
    title: "A Little Life",
    description:
      "An intimate and devastating exploration of friendship, trauma, love, and the long endurance of human suffering.",
    imageUrl: "/literature/hanya.jpg",
  },
  {
    title: "The Road",
    description:
      "A haunting meditation on survival, love, and hope between a father and son in a desolate, post-apocalyptic world.",
    imageUrl: "/literature/cormac.jpeg",
  },
  {
    title: "The Catcher in the Rye",
    description:
      "A raw exploration of teenage alienation and the longing for authenticity in a world that feels relentlessly phony.",
    imageUrl: "/literature/jd.jpg",
  },
  {
    title: "The Count of Monte Cristo",
    description:
      "A sweeping transformation through betrayal, rebirth, and revenge—ultimately arriving at mercy and perspective beyond words.",
    imageUrl: "/literature/alexandre.jpg",
  },
  {
    title: "Educated",
    description:
      "A powerful memoir about the transformative force of education and the fight to define one’s identity against all odds.",
    imageUrl: "/literature/tara.jpg",
  },
  {
    title: "The Book Thief",
    description:
      "Set during WWII, a reflective story of youth, innocence, and survival amid one of history’s darkest moments.",
    imageUrl: "/literature/markus.jpeg",
  },
  {
    title: "The Midnight Library",
    description:
      "A thought-provoking exploration of regret, choice, and alternate lives through the quiet magic of a limitless library.",
    imageUrl: "/literature/matt.jpg",
  },
  {
    title: "Where the Crawdads Sing",
    description:
      "A story of isolation, resilience, and deep connection to nature that leads to self-discovery and belonging.",
    imageUrl: "/literature/delia.avif",
  },
  {
    title: "Tiny Beautiful Things",
    description:
      "A collection of compassionate, piercing reflections on love, loss, forgiveness, and the human condition.",
    imageUrl: "/literature/cheryl.jpg",
  },
  {
    title: "Anxious People",
    description:
      "A heartfelt and quietly humorous examination of humanity, connection, and empathy born from a chaotic hostage situation.",
    imageUrl: "/literature/fredrik.jpg",
  },
  {
    title: "Slaughterhouse-Five",
    description:
      "A darkly satirical meditation on war, time, trauma, and fate that blurs reality and questions free will.",
    imageUrl: "/literature/kurt.avif",
  },
  {
    title: "Calculating God",
    description:
      "A philosophical encounter between science and faith, exploring profound questions about belief, evidence, and existence.",
    imageUrl: "/literature/robert.jpg",
  },
];

export default function Literature() {
  return (
    <div>
      <Head>
        <title>Postprofound Literature</title>
        <meta
          name="description"
          content="Explore postprofound literature that invites you to live life to be as Postprofound as people. Curated books from Postprofundus."
        />
      </Head>
      <Header />
      <div className="min-h-screen pt-4[svh] lg:pt-[4dvh] flex flex-row items-center bg-gradient-to-b from-white via-zinc-300 to-white">
        <Card3DCarousel items={items} durationS={200} radius={1.8} />
      </div>
      <Footer />
    </div>
  );
}
