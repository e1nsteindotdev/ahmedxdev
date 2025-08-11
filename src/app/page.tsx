import { TerminalSection } from "@/components/terminal-animation/terminal-section";

import {
  loadAllTerminalFiles,
} from "@/lib/fetch-terminal-content";


export default async function Home() {
  const terminalData = await loadAllTerminalFiles("/home")

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <TerminalSection terminalData={terminalData} />
      </main>
    </div>
  );
}

