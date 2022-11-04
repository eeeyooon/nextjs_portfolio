export default function ProjectItem({ data }) {
  return (
    <div className="p-6 bg-blue-200 rounded-md">
      <h2>{data.properties.Name.title[0].plain_text}</h2>
    </div>
  );
}
