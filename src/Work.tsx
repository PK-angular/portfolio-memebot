import { useState } from "react";

const Work = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const workData = [
    {
      role: "Engineer",
      company: "Telstra Health",
      period: "01/2025 – Present",
      highlights: [
        "Built and maintained distributed healthcare applications aligned with FHIR standards, supporting secure and interoperable clinical workflows.",
        "Implemented device agnostic and WCAG 2.1 compliant reusable UI components for accessibility",
        "Worked across frontend and backend to improve performance and reliability",
        "Collaborated with clinicians and product teams to improve real-world workflows",
      ],
     tech: "React, TypeScript, Stencil | Java (Spring Boot), .NET (C#) | Azure, AWS | Kafka | FHIR, HL7, Smile CDR | OAuth 2.0, PL/SQL"
    },
    
    {
      role: "Junior Software Engineer",
      company: "Telstra Health",
      period: "03/2022 - 12/2024",
      highlights: [
    "Supported development and maintenance of hospital-grade device-agnostic EMR software named Amaroo, a cloud-based Hospital Management System",
    "Assisted senior engineers in implementing features, fixing bugs, and resolving client-reported issues across multiple application versions",
    "Wrote unit tests using Jest and Karma to improve code quality",
    "Gained experience with TypeScript, React, Stencil, Tailwind, Ionic, Java, Spring Boot while adhering to FHIR standards and WCAG 2.1 accessibility",
    "Contributed to Azure CI/CD deployments, version control (Git/Azure Repos), and documentation using JIRA and Confluence",
    "Acted as the sole support for St. Vincent, handling data inconsistencies and critical application issues and resolving all reported incidents within the defined SLAs."
  ],
  tech: "React, TypeScript, Stencil, Tailwind, Ionic | Java (Spring Boot) | Azure | Git/Azure Repos | Jest, Karma | FHIR, WCAG 2.1 | JIRA, Confluence"
    },

    {
      role: "Application Developer",
      company: "Bank of New York Mellon Technology",
      period: "06/2017 to 11/2019",
     highlights: [
    "Maintained and enhanced the client onboarding application by implementing new features for diverse client requirements",
    "Served as Subject Matter Expert for the OnlineBalancing web application, revamping screens with modern Angular technologies and integrating backend REST APIs using Angular services and HTTP module",
    "Tested applications using unit tests with Jasmine and Karma, deployed to cloud-based environments, and supported client production moves while communicating effectively with stakeholders",
    "Supported various production moves and interacted with business and clients for resolving the issues in production region.",
    "Received the 'Help Client Succeed' award for effectively resolving client issues and supporting production environments"
  ],
  tech: "Angular | Core Java, REST APIs | Jasmine, Karma | JXL API | Cloud deployments | Client support & production moves"
    },

     {
      role: "Application Developer Trainee",
      company: "Bank of New York Mellon Technology",
      period: "01/2017 – 04/2017",
     highlights: [
    "Worked on front end and Backend technologies such as Angular, JavaScript, Java.",
    "Fixing incidents and defects in existing codebase by understanding the flow of existing applications.",
    "Designed (Database Designing, Use-case stories), documented (UML Diagrams, Use- Case Diagram,ERD Diagram) and developed (Ajax ,jQuery, RESTful services, Angular, HTML5,CSS3, LESS, SQL) fully functional website named “WALLe” to illustrate user’s income and spending using pie charts."
  ],
  tech: "Angular | Core Java, REST APIs | SQL"
    },

     {
      role: "Software Engineer Intern",
      company: "Tivo Corporation",
      period: "07/2016 – 01/2017",
     highlights: [
    "Major responsibility included developing user Interface guides for north and south American clients.",
    "Special recognition by clients for developing custom testing automation tool for Set Top Box build testing in TIVO Corporation, which drastically reduced testing effort and improved product quality."
  ],
  tech: "C , C++ | HTML, CSS | SQL"
    }
  ];

  return (
    <div>
      {/* Section heading */}
      <div className="flex gap-3 text-xl font-semibold items-center p-1">
        <i className="fa-solid fa-briefcase text-slate-700"></i>
        Work Experience
      </div>

      <div className="mt-4 space-y-4 p-3 ">
        {workData.map((job, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-xl shadow-sm"
          >
            {/* Header */}
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
              className="w-full flex justify-between items-center p-4 text-left
                         hover:bg-slate-50 transition-colors rounded-xl"
            >
              <div>
                <p className="font-medium text-slate-800">{job.role}</p>
                <p className="text-sm text-slate-500">{job.company}</p>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>{job.period}</span>
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
              <div className="overflow-hidden">
                <div className="px-6 pb-4 pt-2 text-slate-700">
                  <ul className="list-disc list-inside space-y-2">
                    {job.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <p className="mt-3 text-sm text-slate-500">
                    <span className="font-medium text-slate-600">Tech:</span>{" "}
                    {job.tech}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
