import ProjectBox from "./ProjectBox.js";
import typechallenger from "./../../../public/images/typechallenger.png";
import sql from "./../../../public/images/sql.png";
import chess from "./../../../public/images/Chess.jpg";
import tictactoe from "./../../../public/images/tictactoe.png";
import mdstLogo from "./../../../public/images/mdst.png";

export default function Projects() {
  const TypeDes =
    "Collaborated in a team to develop and maintain a web application in React.js and Node.js for tracking  \
    typing speed of the user. We designed a simple and intuitive UI to ensure positive user experience      \
    and engagement. We implemented our server-side functionality in Express and optimized data storage and  \
    retrieval of word requests with SQLite3. Codes were reviewed to uphold quality standards. We managed    \
    version control with Git, ensuring streamlined development and collaboration.";

  const TypeSkills = [
    "Javascript",
    "React.js",
    "Node.js",
    "Express.js",
    "SQLite3",
    "Git",
  ];

  const MDST = [
    "Leveraged Reddit API and web scraping technique to gather data in over 120 Reddit posts, analyzing in 	\
		teams to extract key features and transforming it into a structured dataset format for machine learning \
		model training. Developed, trained, and evaluated the machine learning models to generate predictions 	\
		and insights based on extracted Reddit data. Created data visualizations of our findings using Matplot.",
  ];

  const MDSTSkills = ["Python", "Pandas", "ML", "Jupyter Nbk", "Data Visuals"];

  const SQLDes =
    "Wrote a program in C++ to emulate a basic relational database with an interface based on a subset of a \
    standard query language.The program creates a shell that allows users to interact with a single database\
    that is processed in memory and destroyed when the program is quit by the user.";

  const SQLSkills = ["C++", "Algorithm", "Database", "Programming"];

  const ChessDes =
    "Recreated chess with Pass-and-Play game mode, used React.js as framework and Tailwind/CSS for styling.";

  const ChessSkills = ["React.js", "Tailwind"];

  const TTTDes =
    "Completed the official tutorial project given by React for practice.";

  const TTTSkills = ["React.js"];

  return (
    <div className="flex flex-col">
      <div className="OrangeFont font-bold text-sm pb-8">PROJECTS</div>
      <div className="space-y-8">
        <ProjectBox
          image={mdstLogo}
          project="Data-Mine Reddit"
          link="nolink"
          date="PRESENT"
          description={MDST}
          skills={MDSTSkills}
        />
        <ProjectBox
          image={typechallenger}
          project="Type Challenger"
          link="https://type-challenger-frontend.vercel.app/singleplayer"
          date="JUNE 2024"
          description={TypeDes}
          skills={TypeSkills}
        />
        <ProjectBox
          image={sql}
          project="SillySQL"
          link="nolink"
          date="MAR 2024"
          description={SQLDes}
          skills={SQLSkills}
        />
        <ProjectBox
          image={chess}
          project="Chess"
          link="https://chess-9kokno1yv-jhongli91s-projects.vercel.app/game/pass-and-play"
          date="MAY 2024"
          description={ChessDes}
          skills={ChessSkills}
        />
        <ProjectBox
          image={tictactoe}
          project="Tic-Tac-Toe"
          link="https://portfolio-five-ivory-67.vercel.app/Projects/TicTacToe"
          date="MAY 2024"
          description={TTTDes}
          skills={TTTSkills}
        />
      </div>
    </div>
  );
}
