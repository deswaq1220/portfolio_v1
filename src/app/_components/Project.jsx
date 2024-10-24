import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Project = () => {
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const isInView1 = useInView(project1Ref, { once: true, margin: "-100px" });
  const isInView2 = useInView(project2Ref, { once: true, margin: "-100px" });
  const isInView3 = useInView(project3Ref, { once: true, margin: "-100px" });

  const rightFlipVariants = {
    hidden: {
      rotateY: 90,
      opacity: 0,
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const leftFlipVariants = {
    hidden: {
      rotateY: -90,
      opacity: 0,
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="w-screen bg-bgblack p-9 ">
      <div className="flex flex-col gap-10">
        {/* 플젝1 시작 */}
        <div className="w-full">
          <motion.div
            className="lg:w-3/6 px-8 py-10 rounded-3xl font-medium ring-2 ring-inset ring-customgreen font-nexon text-sm relative"
            ref={project1Ref}
            variants={rightFlipVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            style={{ perspective: 1000 }}
          >
            <div className="bg-bgblack text-white p-2 absolute top-[-15px]">
              2024. 09. 02 ~ 2024. 09. 27 ( FE 5명 )
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-dnf text-2xl text-customgreen">
                펄핏 사이즈 B2C 웹 어플리케이션 개발
              </p>
              <p className="text-white">
                LLM기반의 챗봇과 대화를 통해 원하는 신발을 찾는 서비스
              </p>
              <div className="flex gap-1 flex-wrap">
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  React
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Typescript
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Tanstack-Query
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Zustand
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Yarn
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Vanilla-ExtractCSS
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  FireBase
                </div>
              </div>
              <ul className="text-white flex flex-col gap-2">
                <li>AI 챗봇 1:1 채팅 서비스 구현</li>
                <li>채팅 서비스 사진 업로드 리사이징 기능구현</li>
                <li>채팅방 목록 로딩 UX 개선</li>
                <li>내 발 측정 SDK 연동</li>
                <li>Github Action, AWS S3를 이용한 프론트엔드 CI/CD 배포</li>
              </ul>
            </div>
            <div className="flex gap-4 absolute bottom-[-18px] right-10">
              <a
                href="https://github.com/Perfitt-11-supreme/11-supreme"
                target="_blank"
              >
                <div className="fill-customgreen  bg-bgblack cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://11-supreme.vercel.app/" target="_blank">
                <div className="fill-customgreen bg-bgblack cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm3.241 10.5v-.001c-.1-2.708-.992-4.904-1.89-6.452a13.919 13.919 0 0 0-1.304-1.88L12 3.11l-.047.059c-.354.425-.828 1.06-1.304 1.88-.898 1.547-1.79 3.743-1.89 6.451Zm-12.728 0h4.745c.1-3.037 1.1-5.49 2.093-7.204.39-.672.78-1.233 1.119-1.673C6.11 3.329 2.746 7 2.513 11.5Zm18.974 0C21.254 7 17.89 3.329 13.53 2.623c.339.44.729 1.001 1.119 1.673.993 1.714 1.993 4.167 2.093 7.204ZM8.787 13c.182 2.478 1.02 4.5 1.862 5.953.382.661.818 1.29 1.304 1.88l.047.057.047-.059c.354-.425.828-1.06 1.304-1.88.842-1.451 1.679-3.471 1.862-5.951Zm-1.504 0H2.552a9.505 9.505 0 0 0 7.918 8.377 15.773 15.773 0 0 1-1.119-1.673C8.413 18.085 7.47 15.807 7.283 13Zm9.434 0c-.186 2.807-1.13 5.085-2.068 6.704-.39.672-.78 1.233-1.118 1.673A9.506 9.506 0 0 0 21.447 13Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
        {/* 플젝1끝 */}
        {/* 플젝2 시작 */}
        <div className="w-full flex justify-end">
          <motion.div
            className="lg:w-3/6 px-8 py-10 rounded-3xl font-medium ring-2 ring-inset ring-custompurple font-nexon text-sm relative "
            ref={project2Ref}
            variants={leftFlipVariants}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            style={{ perspective: 1000 }}
          >
            <div className="bg-bgblack text-white p-2 absolute top-[-15px]">
              2024. 05. 02 ~ 2024. 05. 31 ( FE 2명 BE 2명 )
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-dnf text-2xl text-custompurple">CoatyCloset</p>
              <p className="text-white">
                구하기 어렵거나 비싼 아이템들을 대여비를 받고 빌려주는 행위를
                통해, 많은 사람들이 다양한 스타일을 즐기 수 있는 옷 대여 서비스
              </p>
              <div className="flex gap-1 flex-wrap">
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  React
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Typescript
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Tanstack-Query
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Zustand
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Yarn
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  MSW
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  TailwindCSS
                </div>
              </div>
              <ul className="text-white flex flex-col gap-2">
                <li>oauth2를 이용한 소셜(카카오,구글,네이버)로그인 구현</li>
                <li>채팅 서비스 사진 업로드 리사이징 기능구현</li>
                <li>실시간 1:N 채팅 서비스 구현</li>
                <li>Eslint 규칙 설정 및 통일화</li>
                <li>msw기반 모킹 데이터 활용 환경 구축</li>
                <li>react-hook-form 기반 폼 최적화</li>
              </ul>
            </div>
            <div className="flex gap-4 justify-center absolute bottom-[-18px] right-10">
              <a
                href="https://github.com/OZ-01-Team3/oz-main_project-fe"
                target="_blank"
              >
                <div className="fill-custompurple  bg-bgblack cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://www.youtube.com/watch?v=ZY1WFfpNE68" target="_blank">
                <div className="fill-custompurple bg-bgblack cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm3.241 10.5v-.001c-.1-2.708-.992-4.904-1.89-6.452a13.919 13.919 0 0 0-1.304-1.88L12 3.11l-.047.059c-.354.425-.828 1.06-1.304 1.88-.898 1.547-1.79 3.743-1.89 6.451Zm-12.728 0h4.745c.1-3.037 1.1-5.49 2.093-7.204.39-.672.78-1.233 1.119-1.673C6.11 3.329 2.746 7 2.513 11.5Zm18.974 0C21.254 7 17.89 3.329 13.53 2.623c.339.44.729 1.001 1.119 1.673.993 1.714 1.993 4.167 2.093 7.204ZM8.787 13c.182 2.478 1.02 4.5 1.862 5.953.382.661.818 1.29 1.304 1.88l.047.057.047-.059c.354-.425.828-1.06 1.304-1.88.842-1.451 1.679-3.471 1.862-5.951Zm-1.504 0H2.552a9.505 9.505 0 0 0 7.918 8.377 15.773 15.773 0 0 1-1.119-1.673C8.413 18.085 7.47 15.807 7.283 13Zm9.434 0c-.186 2.807-1.13 5.085-2.068 6.704-.39.672-.78 1.233-1.118 1.673A9.506 9.506 0 0 0 21.447 13Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
        {/* 플젝2끝 */}
        {/* 플젝3 시작 */}
        <div className="w-full flex justify-start">
          <motion.div
            className="lg:w-3/6 px-8 py-10 rounded-3xl font-medium ring-2 ring-inset ring-custompink font-nexon text-sm relative "
            ref={project3Ref}
            variants={rightFlipVariants}
            initial="hidden"
            animate={isInView3 ? "visible" : "hidden"}
            style={{ perspective: 1000 }}
          >
            <div className="bg-bgblack text-white p-2 absolute top-[-15px]">
              2024. 03. 26 ~ 2024. 04. 30 ( FE 2명 BE 2명 )
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-dnf text-2xl text-custompink">Red-Ribbon</p>
              <p className="text-white">
                자신만의 한달 예산과 고정지출을 정하고 나의 소비습관을 확인할 수
                있는 가계부 서비스
              </p>
              <div className="flex gap-1 flex-wrap">
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  React
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Typescript
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Tanstack-Query
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Zustand
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Yarn
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  MSW
                </div>
                <div className="px-2.5 py-1.5 border border-white-1 rounded-2xl bg-white">
                  Vanilla-ExtractCSS
                </div>
              </div>
              <ul className="text-white flex flex-col gap-2">
                <li>oauth2를 이용한 소셜(카카오)로그인 구현</li>
                <li>예산,고정지출,지출 CRUD</li>
                <li>실시간 1:N 채팅 서비스 구현</li>
                <li>vercel을 이용한 프론트엔드 배포</li>
              </ul>
            </div>
            <div className="flex gap-4 absolute bottom-[-18px] right-10">
              <a
                href="https://github.com/OZ-Coding-School/oz_01_collabo-008"
                target="_blank"
              >
                <div className="fill-custompink  bg-bgblack cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://youtu.be/LRs0TQw6nOc" target="_blank">
                <div className="fill-custompink bg-bgblack cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                  >
                    <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm3.241 10.5v-.001c-.1-2.708-.992-4.904-1.89-6.452a13.919 13.919 0 0 0-1.304-1.88L12 3.11l-.047.059c-.354.425-.828 1.06-1.304 1.88-.898 1.547-1.79 3.743-1.89 6.451Zm-12.728 0h4.745c.1-3.037 1.1-5.49 2.093-7.204.39-.672.78-1.233 1.119-1.673C6.11 3.329 2.746 7 2.513 11.5Zm18.974 0C21.254 7 17.89 3.329 13.53 2.623c.339.44.729 1.001 1.119 1.673.993 1.714 1.993 4.167 2.093 7.204ZM8.787 13c.182 2.478 1.02 4.5 1.862 5.953.382.661.818 1.29 1.304 1.88l.047.057.047-.059c.354-.425.828-1.06 1.304-1.88.842-1.451 1.679-3.471 1.862-5.951Zm-1.504 0H2.552a9.505 9.505 0 0 0 7.918 8.377 15.773 15.773 0 0 1-1.119-1.673C8.413 18.085 7.47 15.807 7.283 13Zm9.434 0c-.186 2.807-1.13 5.085-2.068 6.704-.39.672-.78 1.233-1.118 1.673A9.506 9.506 0 0 0 21.447 13Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-20 border-t border-white/15 text-customgreen py-4 font-dnf flex justify-center">
        <p>Copyright ⓒ 2024. GyeongWon all rights reserved.</p>
      </div>
    </section>
  );
};
export default Project;
