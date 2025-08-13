import { MyCV } from "@/components/cv-dialog";
import { TerminalSection } from "@/components/terminal-animation/terminal-section";
import { Clock } from "@/components/ui/clock";
import { Project } from "@/components/ui/project";
import { loadAllTerminalFiles } from "@/lib/fetch-terminal-content";
import Image from "next/image";
import { LoadingImage } from "@/components/ui/loading-image";

export default async function Home() {
  const terminalData = await loadAllTerminalFiles("/home");

  const projectsData = [
    {
      title: "Interspe",
      description:
        "This website powers a real-time quiz competition between 15 specialties at my school (ENP), with four teams competing simultaneously. The most challenging aspect of the project is maintaining absolute reliability—over 300 attendees gather to support their teams, and even a single bug that affects results could cause significant frustration.",
      points: [
        "Organizer Dashboard – Allows event staff to manage all quizzes, teams, and competition logistics.",
        "Real-Time Scoring – Tracks submission times for each team to calculate scores instantly.",
        "Dual Display Modes – Spectator Mode projects the competition to the audience, while Player Mode is presented to each team for answering questions. Both modes are synchronized across all teams and viewers.",
        "High-Performance Networking – Built on WebSockets to ensure zero latency, stable connectivity, and uninterrupted gameplay.",
      ],
      techstack: ["nextjs", "socket.io", "postgresql", "tailwindcss"],
      sources: [
        "/interspe/1.png",
        "/interspe/2.png",
        "/interspe/3.png",
        "/interspe/4.png",
        "/interspe/5.png",
      ],
    },
    {
      title: "Studying platform",
      description:
        "A comprehensive study platform that provides students with all essential academic resources, including exercises, lectures, and past exams, while enabling them to track progress and performance in real time.",
      points: [
        "Seamless PDF navigation with fast search, eliminating time wasted switching tabs or browsing slow Google Drive folders.",
        "Integrated time tracking for each module to help students stay organized and avoid losing focus.",
        "Daily content updates managed by an editorial team through a dedicated admin interface.",
        "Premium, distraction-free user experience designed for long and productive study sessions.",
      ],
      techstack: ["NEXT.JS", "TAILWINDCSS", "CONVEX"],
      sources: ["/polybook/1.png", "/polybook/2.png"],
    },
    {
      title: "Event landing page",
      description:
        "AWS was an event hosted by U-builders corp group, and I was responsible for desiging and coding the landing page of their event.",
      points: [],
      techstack: ["NEXT.JS", "TAILWINDCSS", "FIGMA"],
      sources: ["/aws/1.png"],
    },
    {
      title: "Other side projects I worked on",
      description: "",
      points: [],
      techstack: [],
      sources: [
        "/tft/1.png",
        "/sideprojects/1.png",
        "/sideprojects/2.png",
        "/sideprojects/3.png",
        "/sideprojects/4.png",
        "/sideprojects/5.png",
        "/sideprojects/6.png",
      ],
    },
  ];

  return (
    <main className="h-screen bg-black text-white font-mono mx-auto w-full px-4 py-4 sm:px-4 flex flex-col">
      {/* Outer frame */}
      <div className="flex-1 border border-b-0 border-dashed border-[var(--brand-color)] lg:overflow-hidden">
        <Header />
        {/* Two-column responsive layout */}
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left column */}
          <section className="flex-1 space-y-4 lg:max-w-[420px] xl:max-w-[350px]">
            <div className="flex-1  space-x-5 space-y-4 p-4 sm:p-5 mb-0">
              {/* Profile/photo */}
              <LoadingImage
                className="border-[var(--brand-color)] border-[1px] grow-0 mb-3"
                src={"/me.png"}
                height={264}
                width={220}
                alt={"me"}
              />

              {/* Intro */}
              <div className="border-0 p-0">
                <div className="text-[var(--brand-color)] text-[20px] font-meduim font-mono">
                  [~]$ whoam I
                </div>
                <div className="flex flex-col gap-0">
                  <h1 className="mt-1 text-[25px] lg:text-[31px] font-mono font-medium leading-tight">
                    AHMED HASSAINE
                  </h1>
                  <p className="text-[16px] lg:text-[20px] xl:text-[20px] font-semibold font-mono text-[var(--brand-color)]">
                    {"> A FULL-STACK DEVELOPER"}
                  </p>
                </div>

                <p className="mt-1 lg:mt-2 text-[14px] lg:text-[18px] font-sans max-w-[350px] font-meduim text-white/90">
                  I’m 21, a third-year engineering student at the National
                  Polytechnic School, passionate about building beautiful
                  full-stack applications.
                </p>
              </div>

              <MyCV />
              {/* Ghostty terminal */}
            </div>
            <div className="border-t-[1px] hidden lg:flex border-dashed border-[var(--brand-color)]  overflow-hidden pt-[80px]  w-full  justify-center items-center">
              <TerminalSection terminalData={terminalData} />
            </div>
          </section>

          {/* Right column */}
          <section
            className="flex-1 space-y-6 
            border-t-1 lg:border-t-0 mt-5 lg:mt-0 lg:border-l-1 border-[var(--brand-color)] border-dashed h-full scrollbar-none lg:overflow-scroll"
          >
            <div className="p-4">
              <h2 className="mb-4 text-[var(--brand-color)] text-[35px] lg:text-[51px] font-bold tracking-wide">
                <span className="">&gt; </span>MY WORK{" "}
              </h2>

              {/* Project: Studying platform */}
              <div className="space-y-6 lg:space-y-14 pb-10">
                {projectsData.map((p, i) => (
                  <Project
                    key={i}
                    title={p.title}
                    description={p.description}
                    points={p.points}
                    techstack={p.techstack}
                    sources={p.sources}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <div className="relative w-full flex justify-between px-4 py-2 text-[#08A000] text-[12px] font-meduim border-b-1 border-dashed border-[#08A000]">
      <Clock />
      <p className="absolute hidden lg:inline left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        NEOVIM
      </p>
      <p>MACOS</p>
    </div>
  );
}
function Footer() {
  return (
    <div className="w-full flex justify-center px-4 py-1 text-black bg-[#15B90C] text-[14px] font-bold">
      <p>ahmedxdev.vercel.app</p>
    </div>
  );
}
