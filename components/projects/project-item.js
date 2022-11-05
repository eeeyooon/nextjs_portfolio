import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const img = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    // console.log(`startDate: ${startDate}`);
    // console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    // console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="object-cover w-full mb-10 h-2/5 rounded-t-xl"
        src={img}
        width="50"
        height="20"
        alt="cover image"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />

      <div className="flex flex-col p-4 ">
        <h2 className="text-2xl font-bold">{title}</h2>
        <h2 className="mt-4 text-xl">{description}</h2>
        <a href={github}>깃허브 바로가기</a>
        <p className="my-1">
          작업기간: {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        {/* tags */}
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h2
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}
