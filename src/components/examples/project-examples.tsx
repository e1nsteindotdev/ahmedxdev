import { Project } from "@/components/ui/project";

// Example usage of the Project component
export function ProjectExamples() {
  return (
    <div className="space-y-8">
      {/* Basic project */}
      <Project
        title="Basic Project"
        description="A simple project with just the essential information."
        techstack={["REACT", "TYPESCRIPT", "TAILWIND"]}
        sources={["/project1-screenshot.png"]}
      />

      {/* Project with points */}
      <Project
        title="Project with Features"
        description="A project that showcases specific features and capabilities."
        points={[
          "Real-time collaboration features",
          "Advanced search functionality",
          "Mobile-responsive design",
          "Dark mode support",
        ]}
        techstack={["NEXT.JS", "SOCKET.IO", "MONGODB", "REDIS"]}
        sources={["/project2-main.png", "/project2-mobile.png"]}
      />

      {/* Project with children content */}
      <Project
        title="Project with Custom Content"
        description="A project that includes additional custom content below the images."
        techstack={["VUE.JS", "FIREBASE", "VUETIFY"]}
        sources={["/project3-dashboard.png"]}
      >
        <div className="mt-6 p-4 border border-[var(--brand-color)] border-dashed">
          <h4 className="text-[18px] font-bold mb-2">Additional Information</h4>
          <p className="text-[14px] text-white/80 mb-3">
            This project was built as part of a hackathon and won first place.
            It demonstrates advanced state management and real-time data
            synchronization.
          </p>
          <div className="flex gap-2">
            <a
              href="https://github.com/username/project"
              className="text-[var(--brand-color)] text-[12px] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
            <a
              href="https://project-demo.com"
              className="text-[var(--brand-color)] text-[12px] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </Project>

      {/* Complex project with everything */}
      <Project
        title="Full-Stack E-commerce Platform"
        description="A comprehensive e-commerce solution with admin dashboard, payment processing, and inventory management."
        points={[
          "Multi-vendor marketplace support",
          "Advanced payment gateway integration",
          "Real-time inventory tracking",
          "Analytics and reporting dashboard",
          "Mobile app for vendors and customers",
          "Automated email marketing campaigns",
        ]}
        techstack={[
          "NEXT.JS",
          "NODE.JS",
          "POSTGRESQL",
          "STRIPE",
          "REDIS",
          "AWS",
        ]}
        sources={[
          "/ecommerce-home.png",
          "/ecommerce-dashboard.png",
          "/ecommerce-mobile.png",
        ]}
      >
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 border border-[var(--brand-color)] border-dashed">
            <h5 className="text-[14px] font-bold mb-2">Performance</h5>
            <p className="text-[12px] text-white/70">
              99.9% uptime, 2s load times, handles 10k+ concurrent users
            </p>
          </div>
          <div className="p-3 border border-[var(--brand-color)] border-dashed">
            <h5 className="text-[14px] font-bold mb-2">Revenue Impact</h5>
            <p className="text-[12px] text-white/70">
              $2M+ in processed transactions, 50k+ active users
            </p>
          </div>
        </div>
      </Project>
    </div>
  );
}
