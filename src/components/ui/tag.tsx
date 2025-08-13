export function Tag({ children }: { children: string }) {
  return (
    <span className="border border-[var(--brand-color)] bg-[#08A000]/32 text-white px-2 py-1 uppercase text-[14px]">
      {children}
    </span>
  )
}
