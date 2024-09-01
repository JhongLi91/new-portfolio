import ProjectBox from './ProjectBox.js';
import typechallenger from './../../../public/images/typechallenger.png';
import mdst from './../../../public/images/mdst.png';
import sql from './../../../public/images/sql.png';

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

  const MDSTDes = 
    'Developed advanced machine learning models in a team that predicted trends from data collected by the  \
    National Health and Nutrition Examination Survey (NHANS). Designed data visualizations using Python and \
    Pandas to effectively present insights and findings.';

	const MDSTSkills = [
		'Python', 'Pandas', 'Jupyter Nbk', 'Data Visual',
	]

  const SQLDes = 
    'Wrote a program in C++ to emulate a basic relational database with an interface based on a subset of a \
    standard query language.The program creates a shell that allows users to interact with a single database\
    that is processed in memory and destroyed when the program is quit by the user.';

	const SQLSkills = [
		'C++', 'Algorithm', 'Database', 'Programming'
	]

  return (
    <div className = 'flex flex-col'>
      <div className = 'OrangeFont font-bold text-sm pb-8'>
          PROJECTS
      </div>
      <div className = 'space-y-8'>
        <ProjectBox image = {typechallenger} project = 'Type Challenger'
            link = 'https://type-challenger-frontend.vercel.app/singleplayer'
            date = 'JUNE 2024' description = {TypeDes} skills = {TypeSkills} />
        <ProjectBox image = {mdst} project = 'Michigan Data Science Team'
            link = 'nolink'
            date = 'SEPT 2023 - DEC 2023' description = {MDSTDes} skills = {MDSTSkills} />
        <ProjectBox image = {sql} project = 'SillySQL'
            link = 'nolink'
            date = 'MAR 2024' description = {SQLDes} skills = {SQLSkills} />
      </div>

      
    </div>
  );
}
