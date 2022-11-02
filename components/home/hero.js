import Animation from "../animation";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
          안녕하세요! eeeyooon입니다.
          <br className="hidden lg:inline-block" />
          오늘도 빡코딩?
        </h1>
        <p className="mb-8 leading-relaxed">
          두손을 황금시대를 그러므로 갑 같이, 주며, 얼마나 위하여서 군영과 있다.
          청춘의 위하여, 그것은 발휘하기 유소년에게서 노년에게서 말이다. 청춘의
          얼마나 대중을 밝은 그들은 크고 바로 위하여서. 무엇을 피에 새 바이며,
          사는가 같이 꽃이 것이다. 실로 청춘 그들에게 소리다.이것은 능히 보라.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
            Projects
          </button>
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Animation />
      </div>
    </>
  );
}
