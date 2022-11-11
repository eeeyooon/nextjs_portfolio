import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <Link legacyBehavior href="/">
            <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 p-2 text-white rounded-full bg-violet-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg> */}
              <h3 className="ml-3 text-xl font_kyobo">eeeyooon's portfolio</h3>
            </a>
          </Link>

          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <Link legacyBehavior href="/">
              <a className="mr-5 hover:text-gray-400 ">Home</a>
            </Link>
            <Link legacyBehavior href="/projects">
              <a className="mr-5 hover:text-gray-400">Projects</a>
            </Link>
            <Link legacyBehavior href="/about">
              <a className="mr-5 hover:text-gray-400">About</a>
            </Link>
          </nav>

          {/* 다크모드 토글 버튼 작업예정 */}

          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
