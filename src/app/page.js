'use client'
import { motion, useScroll } from "framer-motion";
import Main1 from "./_components/(main)/Main1";
import Main2 from "./_components/(main)/Main2";
import Main3 from "./_components/(main)/Main3";
import Pointer from "./_components/Pointer";
import Project from "./_components/Project";
export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="w-full font-pre">
    <motion.div
      className="fixed top-0 left-0 right-0 h-[10px] bg-customgreen origin-left bg"
      style={{ scaleX: scrollYProgress }}
    />
    <Pointer />
    <div className=" bg-bgblack">
      <Main1 />
      <Main2 />
      <Main3 />
      <Project />
    </div>
  </div>
  );
}
