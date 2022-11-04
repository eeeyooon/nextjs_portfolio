import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>eeeyoon's projects</title>
        <meta name="description" content="프로젝트 확인" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>총 프로젝트 : {projects.results.length} </h2>

      {projects.results.map((aProject) => (
        <h2>{aProject.properties.Name.title[0].plain_text}</h2>
      ))}
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

  console.log(projects);

  //프로젝트 아이디
  //const projectIds = projects.results.map((aProject) => aProject.id);
  //console.log(`projectIds : ${projectIds}`);

  //프로젝트명
  const projectNames = projects.results.map(
    (aProject) => aProject.properties.Name.title[0].plain_text
  );

  console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects },
  };
}
