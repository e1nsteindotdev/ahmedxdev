'use client'
import { useState, useEffect } from "react"
import AnimatedTerminal from "@/components/terminal-animation";
import { TerminalFontSize } from "@/components/terminal-animation";

import {
  type TerminalsMap,
} from "@/lib/fetch-terminal-content";
import s from "./Home.module.css";

interface HomePageProps {
  terminalData: TerminalsMap;
}

export function TerminalSection({ terminalData }: HomePageProps) {
  const animationFrames = Object.keys(terminalData)
    .filter((k) => {
      return k.startsWith("home/animation_frames");
    })
    .map((k) => terminalData[k]);

  const [windowWidth, windowHeight] = useWindowSize();
  const widthSize =
    windowWidth > 1100 ? "small" : windowWidth > 674 ? "tiny" : "xtiny";
  const heightSize =
    windowHeight > 900 ? "small" : windowHeight > 750 ? "tiny" : "xtiny";
  let fontSize: TerminalFontSize = "small";
  const sizePriority = ["xtiny", "tiny", "small"];
  for (const size of sizePriority) {
    if (widthSize === size || heightSize === size) {
      fontSize = size;
      break;
    }
  }

  if (windowWidth > 0) return (

    <section className={s.terminalWrapper} aria-hidden={true}>
      <AnimatedTerminal
        title={"👻 Ghostty"}
        fontSize={fontSize}
        whitespacePadding={
          windowWidth > 950 ? 20 : windowWidth > 850 ? 10 : 0
        }
        className={s.animatedTerminal}
        columns={100}
        rows={41}
        frames={animationFrames}
        frameLengthMs={31}
      />
    </section>

  )
  else return <></>
}

function useWindowSize() {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return [width, height];
}
