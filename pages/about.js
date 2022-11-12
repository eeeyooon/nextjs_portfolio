import Layout from "../components/layout";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout>
      <div className="mt-10">
        <h1 className="text-4xl text-center font-power">
          About <span className="text-violet-400"> Me</span>
        </h1>
        <Image
          className="m-auto mt-5 "
          src="/profile_emoji.png"
          alt="smile-icon"
          width={200}
          height={200}
        />
        <div className="m-10 mb-10 text-center">
          <div>
            <span className="text-lg font-bold font_bumsuk ">Name</span>
            <span className="text-2xl font_edu"> 강지윤</span>
          </div>

          <div>
            <span className="text-lg font-bold font_bumsuk">Birth</span>
            <span className="text-2xl font_edu"> 1999.07.08</span>
          </div>
          <div>
            <span className="text-lg font-bold font_bumsuk">E-mail</span>
            <span className="text-2xl font_edu"> vywns4569@gmail.com</span>
          </div>
        </div>

        <div className="flex justify-center mb-20">
          <a
            href="https://github.com/eeeyooon"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-gray-500 dark:fill-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://eeeyooon.notion.site/eeeyooon-618d4893cc98476fae89771ae3f748b3"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-gray-500 dark:fill-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path d="M5.948 5.609c0.99 0.807 1.365 0.75 3.234 0.625l17.62-1.057c0.375 0 0.063-0.375-0.063-0.438l-2.927-2.115c-0.557-0.438-1.307-0.932-2.74-0.813l-17.057 1.25c-0.625 0.057-0.75 0.37-0.5 0.62zM7.005 9.719v18.536c0 0.995 0.495 1.37 1.615 1.307l19.365-1.12c1.12-0.063 1.25-0.745 1.25-1.557v-18.411c0-0.813-0.313-1.245-1-1.182l-20.234 1.182c-0.75 0.063-0.995 0.432-0.995 1.24zM26.12 10.708c0.125 0.563 0 1.12-0.563 1.188l-0.932 0.188v13.682c-0.813 0.438-1.557 0.688-2.177 0.688-1 0-1.25-0.313-1.995-1.245l-6.104-9.583v9.271l1.932 0.438c0 0 0 1.12-1.557 1.12l-4.297 0.25c-0.125-0.25 0-0.875 0.438-0.995l1.12-0.313v-12.255l-1.557-0.125c-0.125-0.563 0.188-1.37 1.057-1.432l4.609-0.313 6.354 9.708v-8.589l-1.62-0.188c-0.125-0.682 0.37-1.182 0.995-1.24zM2.583 1.38l17.745-1.307c2.177-0.188 2.74-0.063 4.109 0.932l5.667 3.984c0.932 0.682 1.245 0.87 1.245 1.615v21.839c0 1.37-0.5 2.177-2.24 2.302l-20.615 1.245c-1.302 0.063-1.927-0.125-2.615-0.995l-4.172-5.417c-0.745-0.995-1.057-1.74-1.057-2.609v-19.411c0-1.12 0.5-2.052 1.932-2.177z" />
            </svg>
          </a>
          <a
            href="https://velog.io/@miiruuu"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 fill-black dark:fill-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path d="M31.969 8.552c-0.141 3.12-2.319 7.396-6.527 12.812-4.355 5.667-8.031 8.496-11.052 8.496-1.88 0-3.437-1.724-4.74-5.172l-2.557-9.491c-0.957-3.443-1.979-5.167-3.077-5.167-0.24 0-1.079 0.5-2.511 1.505l-1.505-1.943c1.579-1.391 3.136-2.776 4.667-4.167 2.104-1.828 3.688-2.781 4.74-2.88 2.489-0.24 4.020 1.469 4.599 5.115 0.62 3.937 1.047 6.385 1.292 7.344 0.719 3.265 1.509 4.901 2.369 4.901 0.667 0 1.672-1.063 3.021-3.183 1.339-2.12 2.052-3.729 2.145-4.839 0.193-1.823-0.527-2.745-2.151-2.745-0.765 0-1.557 0.163-2.371 0.521 1.584-5.156 4.579-7.677 9.016-7.516 3.297 0.079 4.839 2.219 4.656 6.396z" />
            </svg>
          </a>
        </div>
      </div>
    </Layout>
  );
}
