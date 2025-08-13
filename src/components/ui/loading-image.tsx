"use client";

import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

interface LoadingImageProps extends Omit<ImageProps, "placeholder"> {
  className?: string;
}

export function LoadingImage({ className = "", ...props }: LoadingImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      <Image
        {...props}
        className={`w-full block border-[var(--brand-color)] border-[1px]`}
        onLoadingComplete={() => setIsLoaded(true)}
      />

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#08A000]/32">
          <div className="h-6 w-6 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
