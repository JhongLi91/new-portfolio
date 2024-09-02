import { CiLocationArrow1 } from "react-icons/ci";

export default function ProjectBox({
  image,
  project,
  link,
  date,
  description,
  skills,
}) {
  const ProjectTitle = () => {
    return (
      <div className="flex justify-between" style={{ marginTop: "-4px" }}>
        <div className="text-base">
          {link == "nolink" ? (
            project
          ) : (
            <a
              className="flex flex-row HoverLink space-x-2"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-end HoverLink">
                {project}
                <CiLocationArrow1 style={{ marginTop: "4px" }} />
              </div>
            </a>
          )}
        </div>
        <div className="text-sm SlateFont">{date}</div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-row space-x-4">
      <div className="w-1/4">
        <img src={image.src} className="rounded-lg" />
      </div>

      <div className="w-3/4 flex flex-col space-y-2">
        <ProjectTitle />
        <div className="text-xs LightSlateFont">{description}</div>

        <ul className="w-full flex flex-wrap text-xs">
          {skills.map((skill) => {
            return (
              <li
                key={skill}
                className="flex justify-center items-center SkillBox py-1 my-1 mx-1"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
