import Head from "next/head";
import Header from "../components/header";
import Footer from "@/components/footer";
import Card3DCarousel, { CardItem } from "@/components/card-3d-carousel";

const items: CardItem[] = [
  {
    title: "The Truman Show",
    description:
      "Explores reality and self-discovery as Truman realizes his entire life is a carefully constructed illusion.",
    imageUrl: "/movies/truman.webp",
  },
  {
    title: "Interstellar",
    description:
      "A profound exploration of love, sacrifice, and time, reflecting on human connection across space and dimensions.",
    imageUrl: "/movies/interstellar.webp",
  },
  {
    title: "Everything Everywhere All at Once",
    description:
      "A chaotic journey through parallel universes that examines identity, family, and the meaning of existence.",
    imageUrl: "/movies/everything.webp",
  },
  {
    title: "Fight Club",
    description:
      "A sharp critique of consumerism and modern identity, following an insomniac’s descent into rebellion and self-destruction.",
    imageUrl: "/movies/fight.webp",
  },
  {
    title: "Life of Pi",
    description:
      "A story of survival and faith that invites reflection on belief, truth, and the power of storytelling.",
    imageUrl: "/movies/pi.webp",
  },
  {
    title: "Into the Wild",
    description:
      "Follows a young man’s pursuit of freedom and meaning through isolation and self-discovery in nature.",
    imageUrl: "/movies/wild.webp",
  },
  {
    title: "Amélie",
    description:
      "A whimsical celebration of everyday beauty and the profound impact of small acts of kindness.",
    imageUrl: "/movies/amelie.webp",
  },
  {
    title: "The Secret Life of Walter Mitty",
    description:
      "Encourages stepping beyond comfort zones and embracing adventure, imagination, and possibility.",
    imageUrl: "/movies/mitty.webp",
  },
  {
    title: "The Perks of Being a Wallflower",
    description:
      "A heartfelt exploration of adolescence, trauma, friendship, and personal growth.",
    imageUrl: "/movies/wallflower.webp",
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    description:
      "A rebellious challenge to authority that sparks transformation and self-awareness among institutionalized patients.",
    imageUrl: "/movies/cuckoo.webp",
  },
  {
    title: "The Fountain",
    description:
      "A meditative reflection on love, mortality, and humanity’s obsession with eternal life across time.",
    imageUrl: "/movies/fountain.webp",
  },
  {
    title: "Synecdoche, New York",
    description:
      "A deeply introspective examination of life, art, identity, and the fear of impermanence.",
    imageUrl: "/movies/new york.webp",
  },
  {
    title: "Frankenstein",
    description:
      "A haunting adaptation of Mary Shelley’s novel, exploring creation, responsibility, and what it means to be human.",
    imageUrl: "/movies/frankenstein.webp",
  },
  {
    title: "Arrival",
    description:
      "A thought-provoking meditation on time, communication, and how our choices shape our lives.",
    imageUrl: "/movies/arrival.webp",
  },
  {
    title: "The Tree of Life",
    description:
      "A poetic exploration of existence, memory, and personal growth woven through cosmic and intimate moments.",
    imageUrl: "/movies/tree.webp",
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    description:
      "An emotional examination of love and memory, questioning whether forgetting pain erases meaning.",
    imageUrl: "/movies/sunshine.webp",
  },
  {
    title: "A Ghost Story",
    description:
      "A quiet, meditative reflection on time, loss, legacy, and the fleeting nature of existence.",
    imageUrl: "/movies/ghost.webp",
  },
  {
    title: "Boyhood",
    description:
      "Chronicles twelve years of growing up, capturing the beauty and subtlety of ordinary life.",
    imageUrl: "/movies/boyhood.webp",
  },
  {
    title: "Her",
    description:
      "Explores intimacy and loneliness in a technologically driven world where love blurs the line between human and artificial.",
    imageUrl: "/movies/her.webp",
  },
  {
    title: "The Pursuit of Happyness",
    description:
      "A powerful story of resilience, determination, and personal growth through adversity.",
    imageUrl: "/movies/pursuit.webp",
  },
  {
    title: "Inside Out",
    description:
      "A thoughtful dive into emotions and memory, revealing the emotional complexity of growing up.",
    imageUrl: "/movies/inside.jpeg",
  },
  {
    title: "Don't Look Up",
    description:
      "A dark satire where two astronomers struggle to warn humanity about an approaching, world-ending comet.",
    imageUrl: "/movies/up.webp",
  },
  {
    title: "The Prestige",
    description:
      "A psychological exploration of obsession and illusion, culminating in a mind-bending and unsettling conclusion.",
    imageUrl: "/movies/prestige.webp",
  },
];

export default function Movies() {
  return (
    <div>
      <Head>
        <title>Postprofound Movies</title>
      </Head>
      <Header />
      <div className="min-h-screen pt-4[svh] lg:pt-[4dvh] flex flex-row items-center bg-gradient-to-b from-white via-zinc-300 to-white">
        <Card3DCarousel items={items} durationS={200} />
      </div>
      <Footer />
    </div>
  );
}
