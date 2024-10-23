import { motion, useScroll, useTransform } from "framer-motion";

const TextHover = ({ children, y }) => {
  return (
    <motion.p
      className="relative overflow-hidden"
      style={{ y }}
      whileHover="hover"
    >
      <motion.span
        className="inline-block"
        variants={{
          hover: {
            x: "1%",
          },
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className="inline-block absolute left-0 top-full"
        variants={{
          hover: {
            x: "-1%",
          },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
        }}
      >
        {children}
      </motion.span>
    </motion.p>
  );
};

const Main1 = () => {
  const { scrollYProgress } = useScroll();

  const yRange = [-1500, 1500]; // 텍스트가 움직일 범위 (픽셀 단위)
  const yText1 = useTransform(scrollYProgress, [0, 1], [0, yRange[0]]);
  const yText2 = useTransform(scrollYProgress, [0, 1], [0, yRange[1]]);
  const yText3 = useTransform(scrollYProgress, [0, 1], [0, yRange[0]]);
  const yText4 = useTransform(scrollYProgress, [0, 1], [0, yRange[1]]);

  return (
    <section className="w-screen h-[200vh] flex justify-center items-start pt-[50vh]">
      <div className="lg:text-[150px] text-[50px] md:text-[100px] flex items-center flex-col text-white font-leferi leading-relaxed fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <TextHover y={yText1}>HELLO! I'M</TextHover>
        <TextHover y={yText2}>GYEONGWON</TextHover>
        <TextHover y={yText3}>FRONTEND</TextHover>
        <TextHover y={yText4}>DEVELOPER</TextHover>
      </div>
    </section>
  );
};

export default Main1;
