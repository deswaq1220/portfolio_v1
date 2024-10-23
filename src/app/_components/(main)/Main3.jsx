import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Main3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // 한 번만 애니메이션 실행
    amount: 0.5, // 50% 이상 보이면 애니메이션 시작
  });

  const text = "Project.";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center bg-bgblack">
      <div className="p-9">
        <motion.div
          ref={ref}
          className="text-9xl flex items-left flex-col text-white"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="font-leferi font-bold flex lg:text-[150px] text-8xl">
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={item}>
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Main3;
