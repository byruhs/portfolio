import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function contact() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handlePress = () => {
    fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: state.name, email: state.email }),
    });
  };

  const router = useRouter();
  return (
    <div className="flex flex-col flex-wrap min-h-screen py-2 px-5 lg:px-96 bg-white dark:bg-purple-137 overflow-x-hidden">
      <Head>
        <title>Juan Matus</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="grid grid-cols-1 md:grid-cols-2 min-w-max flex-1 mt-10 md:mt-24 justify-center">
        <div className="max-w-sm md:max-w-lg">
          <h1 className="text-4xl font-bold mb-5 dark:text-white font-sans">
            For business inquiries or collaborations
          </h1>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3 md:max-w-2xl max-h-full min-w-max">
            <input
              className="p-3 w-full bg-gray-136 dark:bg-transparent border dark:border-gray-137 dark:text-white dark:placeholder-gray-138 border-gray-138 placeholder-gray-139 text-black rounded-md"
              placeholder="First Name"
              id="firstname"
              onChange={handleChange}
            />
            <input
              className="p-3 w-full bg-gray-136 dark:bg-transparent border dark:border-gray-137 dark:text-white dark:placeholder-gray-138 border-gray-138 placeholder-gray-139 text-black rounded-md"
              placeholder="Last Name"
              id="lastname"
              onChange={handleChange}
            />
            <input
              className="p-3 w-full bg-gray-136 dark:bg-transparent border dark:border-gray-137 dark:text-white dark:placeholder-gray-138 border-gray-138 placeholder-gray-139 text-black rounded-md md:col-span-2"
              placeholder="Email"
              id="email"
              type="email"
              onChange={handleChange}
            />
            <textarea
              className="p-3 w-full bg-gray-136 dark:bg-transparent border dark:border-gray-137 dark:text-white dark:placeholder-gray-138 border-gray-138 placeholder-gray-139 text-black rounded-md md:col-span-2 h-36"
              placeholder="Message"
              id="message"
              onChange={handleChange}
            />
            <button
              className="bg-blue-137 text-white font-bold min-w-max p-3 w-2 rounded-md"
              type="submit"
              onClick={handlePress}
            >
              Submit Form
            </button>
          </form>
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
