import { type NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="dark m-auto flex h-screen w-screen items-center justify-center dark:bg-black dark:text-white">
      <div className="flex w-full flex-col items-center px-4">
        <div className="mt-24 lg:mt-5">
          <Image
            src="/white.svg"
            alt="Sumbox"
            width={150}
            height={150}
            className="mb-2 p-1"
          />
        </div>
        <h1 className="z-30 mb-3 px-2 text-center text-4xl font-black leading-tight text-white md:text-6xl">
          Go Beyond note taking.
        </h1>
        <p className="text-md leading-2 text-gray-450 z-30 mt-1 max-w-4xl text-center lg:text-lg lg:leading-8">
          Unleash your creativity with our revolutionary note taking app that
          goes beyond text to capture your thoughts, ideas, and inspirations in
          voice and visuals.
          <br />
          <span className="hidden sm:block">
            Designed for creators, students and the overorganized.
          </span>
          {/* Coming soon button */}
        </p>
        <div className="mt-8">
          <a className="text-center text-4xl font-black">Coming Soon...</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
