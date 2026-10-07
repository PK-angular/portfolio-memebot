import { useState } from "react";

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const projectData = [
    {
      title: "Open-Source ATS Resume Analyzer",
      period: "2025",
      highlights: [
        "Developed an AI-driven tool to analyze resumes and match them to job descriptions",
        "Implemented NLP techniques to extract key skills, experience, and achievements",
        "Designed a clean UI to visualize recommendations and improvements",
      ],
      tech: "Angular, TypeScript, Python, NLP, Tailwind, AWS",
      weblink: "https://www.confirmresume.com/",
    },
    {
      title: "Determine Robustness of Supply chain Network",
      period: "06/2021 – 09/2021",
      highlights: [
        "Analyzed supply chain network robustness using centrality-based disruption models",
        "Simulated network failures by removing critical nodes to evaluate resilience",
        "Calculated maximum viable supply chain configurations using the Schneider robustness formula",
      ],
      tech: "Angular, TypeScript, Java (Spring Boot)",
      // private / client project, no public link
    },
    {
      title: "Personal Expense Tracker",
      period: "2017",
      highlights: [
        "Built a web app to track personal expenses and visualize spending habits",
        "Implemented user authentication and CRUD operations for transactions",
        "Integrated charts for visual representation of monthly spending",
      ],
      tech: "Angular, Sql , Java, Spring Boot, Chart.js",
      github: null,
    },
    {
      title: "Angular Forms, Pagination, and AG Grid Simulation",
      period: "2017",
      highlights: [
        "Designed and simulated dynamic Angular forms with client-side validation and pagination",
        "Implemented tabular data handling using AG Grid for sorting, filtering, and efficient data display",
        "Integrated backend services to fetch and persist data for form-driven workflows",
      ],
      tech: "Angular, Angular Forms, AG Grid",
      github: "https://github.com/PK-angular/dev-logger",
    },
  ];

  return (
    <div>
      <div className="flex gap-3 text-xl font-semibold items-center p-1">
        <i className="fa-solid fa-flask text-slate-700"></i>
        Projects
      </div>

      <div className="mt-4 space-y-4 p-3">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-xl shadow-sm"
          >
            {/* Header */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex justify-between items-center p-4 text-left
                         hover:bg-slate-50 transition-colors rounded-xl"
            >
              <div className="flex w-full items-center justify-between pr-4">
                <p className="font-medium text-slate-800">{project.title}</p>
                <p className="text-sm text-slate-500 whitespace-nowrap">
                  {project.period}
                </p>
              </div>

              <div>
                <i
                  className={`fa-solid fa-chevron-down transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                ></i>
              </div>
            </button>

            {/* Expandable content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-6 pb-4 pt-2 text-slate-700">
                <ul className="list-disc list-inside space-y-2">
                  {project.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <p className="mt-2 text-sm text-slate-500">
                  <span className="font-medium text-slate-600">Tech:</span>{" "}
                  {project.tech}
                </p>
                {project.github && (
                  <p className="mt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View on GitHub
                    </a>
                  </p>
                )}
                {project?.weblink && (
                  <p className="mt-1">
                    <a
                      href={project.weblink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit Website
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
