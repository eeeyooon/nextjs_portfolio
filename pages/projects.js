import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>eeeyoon's projects</title>
        <meta name="description" content="오늘도 빡코딩" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>프로젝트</h1>
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
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  //응답값을 json으로 만들어줌.
  const result = await res.json();

  console.log(result);

  return {
    props: {},
  };
}
