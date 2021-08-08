import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col flex-wrap min-h-screen py-2 px-10 lg:px-96 bg-white dark:bg-purple-137 overflow-x-hidden">
      <Head>
        <title>Juan Matus</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="grid grid-cols-1 md:grid-cols-2 min-w-full flex-1 mt-10 md:mt-24 md:gap-x-10 lg:gap-x-36">
        <div className="min-w-full lg:max-w-lg lg:w-72">
          <h1 className="text-6xl font-bold mb-5 dark:text-white font-sans">
            Hi there!
          </h1>
          <h3 className="text-3xl font-bold mb-5 dark:text-white font-sans">
            Thank you for being here!
          </h3>
          <p className="text-xl mb-5 dark:text-white font-sans">
            I’m a <a className="font-semibold">Software Developer</a> and{" "}
            <a className="font-semibold">Youtube Content Creator.</a>
          </p>
          <img src="/images/line.svg" className="mb-5" />
          <p className="text-xl mb-5 dark:text-white font-sans">
            Here you’ll find many of the work I’ve done and projects I’ve
            collaborated with.
          </p>
          <img src="/images/circle.svg" className="mb-5" />
          <p className="text-xl mb-5 dark:text-white font-sans">
            If you like what I do, feel free to join our community:
          </p>
          <a
            href="/about"
            className="button p-3 rounded-md bg-blue-137 text-white font-semibold"
          >
            Join Here
          </a>
        </div>
        <div>
          <img src="/images/face.png" className="hidden md:block md:max-w-sm lg:max-w-lg" />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 ">
        <a
          className="flex items-center justify-center dark:text-white"
          href="/about"
          target="_blank"
        >
          Powered by
          <img src="/favicon.svg" className="w-7 mx-3" />
        </a>
      </footer>
    </div>
  );
}
