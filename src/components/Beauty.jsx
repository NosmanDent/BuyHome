import React from "react";
import { motion } from "framer-motion";

const Beauty = () => {
  return (
    <section className="mt-32 mb-10 font-serif">
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-center text-stone-500 font-bold">
          Beauty inspired by real life.
        </h1>
        <h1 className="text-sm text-stone-400 font-semibold italic text-center lg:mx-40 mx-10 ">
          Because we're from Sweden we have different view on beauty. For us,
          it's not only how you look, but how you live, feel and act. It's a way
          of life: to be healthy, enjoy beautiful skin, express yourself and
          have fun.
        </h1>
        <div className="flex  border-b-4 p-4 w-24 border-[#2d8b95] "></div>
      </div>
    </section>
  );
};

export default Beauty;
