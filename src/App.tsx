import Sidebar from "./Sidebar";
import About from "./About";
import Education from "./Education";
import Work from "./Work";
import Projects from "./Projects";

import "./App.css";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections: Record<string, React.ReactNode> = {
    about: <About />,
    education: <Education />,
    work: <Work />,
    projects: <Projects />,
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* 🔥 Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 border-b">
        <h1 className="font-semibold">My Portfolio</h1>

        <button
          onClick={() => setMenuOpen(true)}
          className="px-3 py-1 border rounded-lg"
        >
          ☰
        </button>
      </div>

      {/* 🔥 Sidebar */}
      <Sidebar
        onSelect={(val: string) => {
          setActive(val);
          setMenuOpen(false);
        }}
        active={active}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* 🔥 Main Content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%]">
        <main className="max-w-4xl mx-auto">
          {sections[active] ?? <About />}
        </main>
      </div>
    </div>
  );
}

export default App;
