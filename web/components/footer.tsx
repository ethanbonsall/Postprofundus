export default function Footer() {
  return (
    <footer className="mt-14 border-t border-zinc-200 bg-zinc-800 flex flex-col h-max">
      <div className=" px-5 py-10 text-sm lg:text-xl 2xl:text-2xl text-zinc-200 font-courier">
        <div className="flex flex-row justify-between">
          <div className="mt-6">
            <div className="font-semibold text-zinc-300">Postprofundus™</div>
            <p className="mt-2">Spread the word about our word!</p>
          </div>

          <div className="flex flex-col mt-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-50">
              Contact &amp; Follow
            </div>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="mailto:gabrielukejudy@gmail.com"
                  className="hover:text-pink-400"
                >
                  gabrielukejudy@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/postprofundus/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-400"
                >
                  Postprofundus on Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://ethanbonsall.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:text-purple-500 transition-colors duration-300"
                >
                  Website by Ethan :&#41;
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="items-end pt-[10svh] lg:pt-[10dvh] flex flex-row lg:my-[10dvh] my-[10svh] justify-center">
          <p className="max-w-full text-[11.5dvw] font-sans font-bold text-white tracking-[-0.05em] self-end ">
            POSTPROFUNDUS
            <span className="hidden lg:inline align-super text-[3dvw] font-extralight ml-4 font-mono">
              ™
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
