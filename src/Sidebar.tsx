type SidebarProps = {
  onSelect: (key: string) => void;
  active: string;
  isOpen?: boolean;
  onClose?: () => void;
};

const Sidebar = ({
  onSelect,
  active,
  isOpen = false,
  onClose,
}: SidebarProps) => {
  const navItems = [
    { key: "about", label: "About" },
    { key: "work", label: "Work Experience" },
    { key: "education", label: "Education" },
    { key: "projects", label: "Projects" },
  ];

  return (
    <>
      {/* 🔥 Mobile Overlay */}
      {isOpen && (
        <div
          className="
            fixed inset-0
            bg-black/40 backdrop-blur-sm
            z-40 md:hidden
          "
          onClick={onClose}
        />
      )}

      {/* 🔥 Sidebar */}
      <aside
        className={`
    fixed top-0 right-0
    h-screen
    w-[280px]
    bg-white
    z-50
    shadow-2xl
    flex flex-col
    p-5 gap-6
    transition-transform duration-300 ease-in-out

    ${isOpen ? "translate-x-0" : "translate-x-full"}

    md:left-0
    md:right-auto
    md:translate-x-0
    md:w-[280px]
    md:shadow-none
    md:border-r
  `}
      >
        {/* 🔥 Mobile Close Button */}
        <div className="flex justify-end md:hidden">
          <button
            onClick={onClose}
            className="
              text-xl
              px-2 py-1
              rounded-md
              hover:bg-gray-100
              transition-colors
            "
          >
            ✕
          </button>
        </div>

        {/* 🔥 Profile */}
        <div className="flex flex-col items-center text-center gap-4">
          <img
            src="/profile.jpg"
            alt="Profile"
            loading="lazy"
            className="
              w-24 h-24
              sm:w-28 sm:h-28
              md:w-32 md:h-32
              lg:w-36 lg:h-36
              rounded-full
              object-cover object-top
              border-4 border-white
              shadow-xl
              ring-1 ring-black/10
              transition-transform duration-300
              hover:scale-105
            "
          />

          <div className="flex flex-col gap-1">
            <span className="font-semibold text-lg">Parmeet Kaur</span>

            <span className="text-sm text-gray-600">Full Stack Developer</span>

            <span className="text-xs italic text-gray-500 max-w-[220px]">
              "I fix bugs professionally and create them recreationally."
            </span>
          </div>
        </div>

        {/* 🔥 Navigation */}
        <nav className="mt-2">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => {
                    onSelect(item.key);
                    onClose?.();
                  }}
                  className={`
                    w-full text-left
                    px-4 py-3
                    rounded-xl
                    text-sm sm:text-base
                    transition-all duration-200

                    ${
                      active === item.key
                        ? "bg-black text-white shadow-md"
                        : "hover:bg-gray-100 text-gray-700"
                    }
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
