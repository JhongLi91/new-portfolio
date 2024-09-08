export default function ExperienceBox({
  date,
  company,
  role,
  description,
  skills,
}) {
  return (
    <div className="w-full flex flex-row space-x-4 HoverExperience">
      <div className="w-1/4 SlateFont text-xs">{date}</div>
      <div className="w-3/4 flex flex-col">
        <div className="text-base" style={{ marginTop: "-4px" }}>
          {company}
        </div>
        <div className="SlateFont text-sm pb-1">{role}</div>
        <ul>
          {description.map((bullet) => {
            return (
              <li key={bullet} className="LightSlateFont text-xs pb-1">
                &#8226; {bullet}
              </li>
            );
          })}
        </ul>

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
