import Head from "next/head";
import Header from "../components/header";
import Footer from "@/components/footer";
import Card3DCarousel, { CardItem } from "@/components/card-3d-carousel";

const items: CardItem[] = [
  {
    title: "Appaloosa Bones",
    description:
      "A hauntingly beautiful exploration of self-reflection and the fleeting nature of life, wrapped in poetic imagery.",
    imageUrl: "/albums/gregory.webp",
  },
  {
    title: "Strange Trails",
    description:
      "A captivating journey through love, loss, and the unknown, infused with adventure and haunting melodies.",
    imageUrl: "/albums/lord.webp",
  },
  {
    title: "OK Computer",
    description:
      "A chilling exploration of modern alienation and existential dread, defined by innovative sound and emotional distance.",
    imageUrl: "/albums/radiohead.webp",
  },
  {
    title: "For Emma, Forever Ago",
    description:
      "A beautifully raw reflection on love and heartbreak, capturing solitude, vulnerability, and personal transformation.",
    imageUrl: "/albums/boniver.webp",
  },
  {
    title: "In the Aeroplane Over the Sea",
    description:
      "An emotionally charged journey weaving together life, death, memory, and human connection.",
    imageUrl: "/albums/milk.webp",
  },
  {
    title: "A Moon Shaped Pool",
    description:
      "A deeply reflective album navigating heartbreak and emotional complexity through lush, restrained instrumentation.",
    imageUrl: "/albums/moon.webp",
  },
  {
    title: "Reprieve",
    description:
      "Sensitive and reminiscent—an album best experienced while walking through nature or sitting with fresh heartbreak.",
    imageUrl: "/albums/reprieve.webp",
  },
  {
    title: "Carrie & Lowell",
    description:
      "A tender meditation on family, grief, and memory that lingers quietly long after the final note.",
    imageUrl: "/albums/sufjan.webp",
  },
  {
    title: "Channel Orange",
    description:
      "A deeply personal exploration of love, identity, and longing told through soulful, evocative storytelling.",
    imageUrl: "/albums/frank.webp",
  },
  {
    title: "The Suburbs",
    description:
      "A reflective examination of suburban life, nostalgia, and growing older—inviting listeners to revisit their past.",
    imageUrl: "/albums/suburbs.webp",
  },
  {
    title: "Folklore",
    description:
      "A mystical, introspective collection blending heartbreak and nostalgia—perfect for rainy days and solitary walks.",
    imageUrl: "/albums/taylor.webp",
  },
  {
    title: "Funeral",
    description:
      "A powerful exploration of grief, community, and emotional intensity, capturing life at its most fragile and loud.",
    imageUrl: "/albums/arcade.webp",
  },
  {
    title: "Norman Fucking Rockwell!",
    description:
      "A raw and poetic critique of modern romance and identity, carried by striking lyricism and emotional honesty.",
    imageUrl: "/albums/lana.webp",
  },
  {
    title: "Utopia",
    description:
      "An ambitious, layered exploration of ambition and self-discovery wrapped in expansive, immersive production.",
    imageUrl: "/albums/travis.webp",
  },
  {
    title: "My Beautiful Dark Twisted Fantasy",
    description:
      "A grand and introspective narrative on fame, ego, and inner conflict, defined by maximalist production.",
    imageUrl: "/albums/kanye.webp",
  },
  {
    title: "Hurry Up, We’re Dreaming",
    description:
      "A sweeping, transformative symphony—an essential postprofundus experience that evolves with each listen.",
    imageUrl: "/albums/m83.webp",
  },
  {
    title: "Wanderer",
    description:
      "A road-bound soundtrack best enjoyed with rain, reflection, and movement—gentle, warm, and cinematic.",
    imageUrl: "/albums/mogli.webp",
  },
  {
    title: "22, A Million",
    description:
      "A fragmented, experimental listen that slowly unfolds—study music, existential music, and emotional abstraction.",
    imageUrl: "/albums/22.webp",
  },
];

export default function Albums() {
  return (
    <div>
      <Head>
        <title>Postprofound Albums</title>
      </Head>
      <Header />
      <div className="min-h-screen pt-[4svh] lg:pt-[4dvh] flex flex-row items-center bg-gradient-to-b from-white via-zinc-300 to-white">
        <Card3DCarousel items={items} durationS={200} />
      </div>
      <Footer />
    </div>
  );
}
