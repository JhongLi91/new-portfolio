import { CiLocationArrow1 } from "react-icons/ci";

export default function ProjectBox( { image, project, link, date, description, skills } ) {
  return (
    <div className = 'w-full flex flex-row space-x-10'>
      <div className = 'w-1/4'>
        <img src = {image.src} />
      </div>

      <div className = 'w-3/4 flex flex-col space-y-2'>
        <div className = 'flex justify-between' style={{marginTop: '-4px'}}>
          <div className = 'text-base'>
            <a className = 'flex flex-row HoverLink space-x-2' href={link} target="_blank" rel="noopener noreferrer">
              <div> {project} </div>
              <div className = ''> <CiLocationArrow1 /> </div>
            </a>
          </div>
          <div className = 'text-sm SlateFont'>
            {date}
          </div>
        </div>

        <div className = 'text-xs LightSlateFont'>
          {description}
        </div>

      </div>
    </div>
  );
}
