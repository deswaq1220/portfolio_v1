import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillSection = ({ title, children, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay, // 각 섹션별 딜레이 적용
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-y-4 text-white mt-20"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const Main2 = () => {
  return (
    <section className="w-screen min-h-screen flex justify-left items-center  bg-bgblack">
      <div className="p-9">
        <div className="md:text-7xl text-6xl flex items-left flex-col text-white">
          <p>안녕하세요!</p>
          <p>
            <span className="font-extrabold">배움</span>을 좋아하는 개발자
          </p>
          <p>변경원입니다</p>
        </div>
        <div className="w-64 flex justify-between mt-6 text-xl font-nexon font-light text-customgreen">
          <a href="https://github.com/deswaq1220" target="_blank">
            github
          </a>
          <a href="https://deswaq.tistory.com/" target="_blank">
            blog
          </a>
          <a
            href="https://www.rallit.com/resumes/32883@qusruddnjs25/%EB%B3%80%EA%B2%BD%EC%9B%90?theme=MINT_SORBET"
            target="_blank"
          >
            resume
          </a>
        </div>

        <div className="text-white font-nexon mt-20 flex flex-col gap-y-4">
          <div>
            Email. <span>deswaq789@naver.com</span>
          </div>
          <div>
            Birth. <span>2000.12.20</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 ">
          <SkillSection delay={0}>
            <span className="text-2xl font-leferi">Skill.</span>
            <div className="flex gap-1">
              <span className="inline-flex items-center rounded-2xl bg-customgreen/10 px-2 py-1 text-xs font-medium text-customgreen ring-1 ring-inset ring-customgreen">
                <span className="w-2 h-2 bg-customgreen rounded-full mr-1"></span>
                익숙해요
              </span>
              <span className="inline-flex items-center rounded-2xl bg-custompink/10 px-2 py-1 text-xs font-medium text-custompink ring-1 ring-inset ring-custompink">
                <span className="w-2 h-2 bg-custompink rounded-full mr-1"></span>
                어느정도 사용할 수 있어요
              </span>
              <span className="inline-flex items-center rounded-2xl bg-[#ffd628]/10 px-2 py-1 text-xs font-medium text-[#ffd628] ring-1 ring-inset ring-[#ffd628]">
                <span className="w-2 h-2 bg-[#ffd628] rounded-full mr-1"></span>
                사용해봤어요
              </span>
            </div>
            <div className="font-nexon flex flex-wrap gap-4">
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-customgreen rounded-full mr-1 block"></span>
                React
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-custompink rounded-full mr-1 block"></span>
                TypeScript
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-customgreen rounded-full mr-1 block"></span>
                Javascript
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-[#ffd628] rounded-full mr-1 block"></span>
                Next.js
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-custompink rounded-full mr-1 block"></span>
                zustand
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-custompink rounded-full mr-1 block"></span>
                TanStack Query(react-query)
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-customgreen rounded-full mr-1"></span>
                React-Hook-Form
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-custompink rounded-full mr-1 block"></span>
                vanilla-extract
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-customgreen rounded-full mr-1"></span>
                Tailwind CSS
              </div>
            </div>
          </SkillSection>

          <SkillSection delay={0.2}>
            <span className="text-2xl font-leferi">Version Control</span>
            <div className="flex gap-1">
              <span className="inline-flex items-center rounded-2xl bg-custompink/10 px-2 py-1 text-xs font-medium text-custompink ring-1 ring-inset ring-custompink">
                <span className="w-2 h-2 bg-custompink rounded-full mr-1"></span>
                어느정도 사용할 수 있어요
              </span>
            </div>
            <div className="font-nexon flex flex-wrap gap-4">
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-custompink rounded-full mr-1 block"></span>
                git
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-custompink rounded-full mr-1 block"></span>
                github
              </div>
            </div>
          </SkillSection>

          <SkillSection delay={0.4}>
            <span className="text-2xl font-leferi">Communication</span>
            <div className="flex gap-1">
              <span className="inline-flex items-center rounded-2xl bg-customgreen/10 px-2 py-1 text-xs font-medium text-customgreen ring-1 ring-inset ring-customgreen">
                <span className="w-2 h-2 bg-customgreen rounded-full mr-1"></span>
                익숙해요
              </span>
              <span className="inline-flex items-center rounded-2xl bg-custompink/10 px-2 py-1 text-xs font-medium text-custompink ring-1 ring-inset ring-custompink">
                <span className="w-2 h-2 bg-custompink rounded-full mr-1"></span>
                어느정도 사용할 수 있어요
              </span>
            </div>
            <div className="font-nexon flex flex-wrap gap-4">
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-customgreen rounded-full mr-1"></span>
                Notion
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-custompink rounded-full mr-1"></span>
                Figma
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-customgreen rounded-full mr-1"></span>
                Discord
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-customgreen rounded-full mr-1"></span>
                Slack
              </div>
            </div>
          </SkillSection>

          <SkillSection delay={0.6}>
            <span className="text-2xl font-leferi">Deployment</span>
            <div className="flex gap-1">
              <span className="inline-flex items-center rounded-2xl bg-customgreen/10 px-2 py-1 text-xs font-medium text-customgreen ring-1 ring-inset ring-customgreen">
                <span className="w-2 h-2 bg-customgreen rounded-full mr-1"></span>
                익숙해요
              </span>
              <span className="inline-flex items-center rounded-2xl bg-[#ffd628]/10 px-2 py-1 text-xs font-medium text-[#ffd628] ring-1 ring-inset ring-[#ffd628]">
                <span className="w-2 h-2 bg-[#ffd628] rounded-full mr-1"></span>
                사용해봤어요
              </span>
            </div>
            <div className="font-nexon flex flex-wrap gap-4">
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-[#ffd628] rounded-full mr-1"></span>
                AWS Web Service
              </div>
              <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl flex items-center">
                <span className="w-2 h-2 bg-customgreen rounded-full mr-1"></span>
                Vercel
              </div>
            </div>
          </SkillSection>
        </div>
      </div>
    </section>
  );
};
export default Main2;
