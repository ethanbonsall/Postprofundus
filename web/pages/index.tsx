/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import homeImage from "../public/home.webp";
import Footer from "@/components/footer";
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Postprofundus</title>
        <meta
          name="description"
          content="Postprofundus is a groundbreaking term capturing the inexplicable feeling experienced after something life-changing or perspective-altering."
        />
      </Head>
      <Header />
      <div className="min-h-screen pt-[10svh] md:pt-[4dvh]">
        <div className="flex flex-row text-center items-center justify-center mx-[2dvw]">
          <p className="max-w-full text-[11.5dvw] font-bold text-black tracking-[-0.05em]">
            POSTPROFUNDUS
            <span className="hidden lg:inline align-super text-[3dvw] font-extralight ml-4 font-mono">
              ™
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-x-[10%]">
          <img
            src={homeImage.src}
            alt="Man sitting on edge of rocky pier"
            className="
            aspect-video        
            md:aspect-[11/16]
                    object-cover
                    md:w-1/3
                w-full
                px-4
                md:px-0
                    filter
                    grayscale
                "
          />
          <div className="flex flex-col font-courier w-full lg:w-1/3 px-4 lg:px-0 pt-8 lg:pt-0 gap-y-4 text-zinc-700">
            <p className="font-semibold text-[5svw] lg:text-[1.5dvw] font-courier flex-row flex ">
              Postprofundus &nbsp; &nbsp;
              <span className="italic font-light"> noun</span>{" "}
            </p>
            <p className="text-zinc-700 font-courier">post·pro·fun·dus</p>
            <p className="text-zinc-700">
              [&apos;post-pr<span className="text-xs font-extralight">ə</span>
              -f<span className="text-xs font-extralight">ə</span>n-d
              <span className="text-xs font-extralight">ə</span>s]
            </p>
            <p className="text-zinc-700">noun </p>
            <p>
              <span className="font-semibold">1.</span> The inexplicable feeling
              you get after watching or experiencing something life-changing or
              perspective-altering:
            </p>
            <p className="italic mt-2">
              &quot;I was hit by a wave of postprofundus after I finished the
              Truman Show.&quot;
            </p>
            <p className="mt-[10svh] lg:mt-[10dvh]">
              <span className="font-bold">Postprofunding</span> [post-pr
              <span className="text-xs font-extralight">ə</span>-f
              <span className="text-xs font-extralight">ə</span>n-diŋ] - agj.
            </p>
            <p className="ml-[2dvw]">
              &quot;The event was postprofunding&quot;
            </p>
            <p className="mt-[10svh] lg:mt-[20dvh]">
              &quot;Postprofundus&quot; is a groundbreaking term capturing the
              inexplicable feeling experienced after something life-changing or
              perspective-altering. Derived from the Latin &quot;post&quot;
              (after) and &quot;profundus&quot; (deep), this word innovatively
              bridges the gap in our emotional lexicon. It articulates the
              unique, transformative resonance that lingers beyond profound
              insights, providing a new dimension of expression for those
              moments that redefine our understanding and perception of the
              world.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-[2dvh] w-full justify-center items-center border-t-2 mt-[3dvh] pb-[5dvh] border-t-zinc-700">
        <p className="text-zinc-700 text-[4dvw] lg:text-[2dvw] font-courier">
          Want to feel postprofundus? Click one.
        </p>
        <div className="mt-3 flex flex-wrap gap-x-[4dvw] text-[3dvw] lg:text-[1dvw] font-mono">
          <div className="flex flex-row gap-x-[2dvw]">
            <Link
              href="/movies"
              className=" border-2 px-[4dvw] py-[2dvw] lg:px-[4dvw] lg:py-[1dvw] border-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-300"
            >
              Movies
            </Link>
            <Link
              href="/albums"
              className=" border-2 px-[4dvw] py-[2dvw] lg:px-[4dvw] lg:py-[1dvw] border-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-300"
            >
              Albums
            </Link>
          </div>
          <div className="flex flex-row gap-x-[2dvw]">
            <Link
              href="/tv-shows"
              className=" border-2 px-[4dvw] py-[2dvw] lg:px-[4dvw] lg:py-[1dvw] border-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-300"
            >
              TV Shows
            </Link>
            <Link
              href="/literature"
              className=" border-2 px-[4dvw] py-[2dvw] lg:px-[4dvw] lg:py-[1dvw] border-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-300"
            >
              Literature
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
