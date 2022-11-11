import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
        <Head>
          <title>eeeyoon's projects</title>
          <meta name="description" content="프로젝트 확인" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2 className="mt-10 mb-8 text-4xl font-semibold sm:text-3xl font-power">
          총 프로젝트 :
          <span className="pl-4 text-violet-400">
            {projects.results.length}
          </span>
        </h2>

        <div className="grid w-4/5 grid-cols-1 m-4 gap-14 px-18 justify-items-center md:grid-cols-2">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// 처음 빌드 될 때 (빌드타임) 호출됨. ->데이터를 가져온 다음에 화면에 렌더링됨.
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  //응답값을 json으로 만들어줌.
  const projects = await res.json();

  //프로젝트 아이디
  //const projectIds = projects.results.map((aProject) => aProject.id);
  //console.log(`projectIds : ${projectIds}`);

  //프로젝트명
  const projectNames = projects.results.map(
    (aProject) => aProject.properties.Name.title[0].plain_text
  );

  // console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects },
  };
}
