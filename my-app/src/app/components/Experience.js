import ExperienceBox from "./ExperienceBox.js";

export default function Experience() {
  const KodelyDes = [
    "Developing, in a team of four, a full-stack management app for school managers using React, TypeScript, and 		\
		Nest.js, collaborating in an Agile environment to ensure efficient development cycles, clean code reviews, and	\
		rapid feature deployment.",
    "Managing a PostgreSQL database handling data for over 1,000 schools, ensuring efficient storage, retrieval, 		\
		and security of large-scale educational data.",
    "Maintain and update a React Native mobile application designed to assist teachers with lecture inspiration and \
		classroom organization, decreasing administrative workload by 8 hours per week.",
  ];

  const KodelySkill = [
    "Javascript",
    "React.js",
    "Node.js",
    "Nest.js",
    "PostgresSQL",
    "ShadCN",
    "React Native",
    "Docker",
  ];

  const HongKongDes = [
    "Led the full-stack development of the company’s first website with React.js and Node.js; the website attracted \
		over 1,500 unique visits in the first month and boosted sales by 4.5%.",
    "Created and managed an SQLite3 database that stored over 200 product informations with search functionality,  	\
		enabling users to query for products with efficient and accurate data delivery to frontend.",
    "Streamlined deployment process using Docker and Google Cloud Run to seamlessly serve the backend, and set up 	\
		Digital Ocean droplet with Nginx to serve frontend, achieving 99.9% uptime.",
    "Configured DNS and optimized SEO to improve Google page rankings and tracked performance through Google Search \
		Console. Implemented HTTPS with Certbot to ensure secure and reliable API access.",
  ];

  const HongKongSkill = [
    "Javascript",
    "React.js",
    "Node.js",
    "Express.js",
    "SQLite3",
    "Docker",
    "Google Run",
    "Nginx",
  ];

  return (
    <div className="flex flex-col">
      <div className="OrangeFont font-bold text-sm pb-8">
        TECHNICAL EXPERIENCE
      </div>
      <div className="space-y-8">
        <ExperienceBox
          date="SEPT 2024 - PRESENT"
          company="Kodely"
          role="Software Engineer, Intern"
          description={KodelyDes}
          skills={KodelySkill}
        />
        <ExperienceBox
          date="JUNE 2024 - AUG 2024"
          company="Hong Kong Asian Supermarket"
          role="Full-Stack Engineer, Intern"
          description={HongKongDes}
          skills={HongKongSkill}
        />
      </div>
    </div>
  );
}
