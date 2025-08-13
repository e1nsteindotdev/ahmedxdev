import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { LoadingImage } from "@/components/ui/loading-image";

export function MyCV() {
  return (
    <Dialog>
      <DialogTrigger className="text-black uppercase font-extrabold text-[14px] lg:text-[20px] px-6 py-1.5 bg-[#08A000]">
        OPEN MY CV
      </DialogTrigger>
      <DialogContent className="lg:h-screen lg:w-[1000px] bg-transparent  border-0 ring-0">
        <LoadingImage
          src="/cv.png"
          className="h-full lg:h-[90%] object-contain"
          width={2480}
          height={3509}
          alt="cv"
        />
      </DialogContent>
    </Dialog>
  );
}
