import Animation from "../animation";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 font-saeeum title-font sm:text-4xl">
          Hello! I&apos;m eeeyooon <span> </span>
          {/* <br className="hidden lg:inline-block" />
          Let me show you */}
          <Image
            className="inline"
            src="/smile.png"
            alt="smile-icon"
            width={30}
            height={30}
          />
        </h1>
        <p className="mb-8 leading-relaxed">
          안녕하세요! 성실하게 성장하는 개발자 강지윤입니다. 😀 <br /> 관심이
          생기면 일단 도전부터 해보는, 경험을 해봐야 알 수 있다고 믿는
          사람입니다. 중간에 포기 하지 않고 끝을 봐야 하는 끈기 있는 성격 덕분에
          항상 성실하게 성장하는 중입니다. 밝고 긍정적인 태도로, 항상 적극적이고
          능동적인 개발자가 되겠습니다.
        </p>
        <div className="flex justify-center ">
          <Link legacyBehavior href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Animation />
      </div>
    </>
  );
}
