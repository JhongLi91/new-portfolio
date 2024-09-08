import ExperienceBox from "./ExperienceBox.js";

export default function Experience() {
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

  const MDST = [
    "Developed advanced machine learning models in a team that predicted trends from data collected by the National \
    Health and Nutrition Examination Survey (NHANS).",
    "Designed and created data visualizations including the relationship between types of seafood consumed and      \
    demographics using Python and Pandas to effectively present insights and findings.",
  ];

  const MDSTSkills = ["Python", "Pandas", "ML", "Jupyter Nbk", "Data Visuals"];

  return (
    <div className="flex flex-col">
      <div className="OrangeFont font-bold text-sm pb-8">
        TECHNICAL EXPERIENCE
      </div>
      <div className="space-y-8">
        <ExperienceBox
          date="JUNE 2024 - AUG 2024"
          company="Hong Kong Asian Supermarket"
          role="Full-Stack Engineer, Intern"
          description={HongKongDes}
          skills={HongKongSkill}
        />
        <ExperienceBox
          date="SEPT 2023 - PRESENT"
          company="Michigan Data Science Team"
          role="Project Team Member"
          description={MDST}
          skills={MDSTSkills}
        />
      </div>
    </div>
  );
}
