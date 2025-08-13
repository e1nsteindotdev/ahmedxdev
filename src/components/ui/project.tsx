import { Tag } from "@/components/ui/tag";
import { LoadingImage } from "@/components/ui/loading-image";

interface ProjectProps {
  title: string;
  description: string;
  points?: string[];
  techstack: string[];
  sources: string[];
  children?: React.ReactNode;
}

export function Project({
  title,
  description,
  points,
  techstack,
  sources,
  children,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-0">
          <h3 className="text-[25px] lg:text-[31px] font-bold uppercase">{title}</h3>
          {description && (
            <p className="text-[16px] lg:text-[20px] font-sans font-meduim text-white lg:max-w-[90%]">
              {description}
            </p>
          )}
        </div>
        {/* Points list */}
        {points && points.length > 0 && (
          <ul className="space-y-1 max-w-[90%]">
            {points.map((point, index) => (
              <li key={index} className="text-[14px] lg:text-[18px] font-sans text-white/80">
                <span className="text-[#08A000] font-bold mr-2 ">{">"}</span>{" "}
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Tags */}
      {techstack.length > 0 && (
        <div className="flex flex-wrap gap-2 text-xs">
          {techstack.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      )}

      {/* Responsive images */}
      <div className="space-y-4 overflow-hidden">
        {sources.map((source, index) => (
          <LoadingImage
            key={index}
            className="grow-0"
            src={source}
            height={525}
            width={935}
            alt={`${title} screenshot ${index + 1}`}
          />
        ))}
      </div>

      {/* Children content */}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
