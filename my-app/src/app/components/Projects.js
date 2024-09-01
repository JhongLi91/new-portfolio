import ProjectBox from './ProjectBox.js';
import typechallenger from './../../../public/images/typechallenger.png';

export default function Projects() {
  
  const TypeDes = 
    'Collaborated in a team to develop and maintain a web application in React.js and Node.js for tracking  \
    typing speed of the user. We designed a simple and intuitive UI to ensure positive user experience      \
    and engagement. We implemented our server-side functionality in Express and optimized data storage and  \
    retrieval of word requests with SQLite3. Codes were reviewed to uphold quality standards. We managed    \
    version control with Git, ensuring streamlined development and collaboration.';

	const TypeSkills = [
		'Javascript', 'React.js', 'Node.js', 'Express.js', 'SQLite3', 'Git',
	]

  return (
    <div className = 'flex flex-col'>
      <div className = 'OrangeFont font-bold text-sm pb-8'>
          PROJECTS
      </div>
      <div className = 'space-y-8'>
        <ProjectBox image = {typechallenger} project = 'Type Challenger'
            link = 'https://type-challenger-frontend.vercel.app/singleplayer'
            date = 'June 2024' description = {TypeDes} skills = {TypeSkills} />
      </div>
    </div>
  );
}
