import ExperienceBox from "./ExperienceBox.js";

export default function Experience() {
  const AmazonDes = [
    "Built a CLI tool in Go for interfacing multiple service APIs; accelerated the development process by assisting \
    engineers with configuring virtual networks and troubleshooting network connectivity.",
    "Implemented and deployed a production-ready feature to display real-time network traffic metrics on the        \
    customer dashboard. Designed a Smithy-defined REST API and Kotlin backend to query AWS CloudWatch with          \
    sub-second latency.",
    "Achieved 95% test coverage by writing comprehensive unit and end-to-end tests using JUnit and MockK (Kotlin    \
    backend) and Cypress and Playwright (frontend).",
    "Automated customer onboarding by configuring IAM role creation with internal permissions using AWS CDK,        \
    reducing manual setup time by 80%.",
    "Collaborated with functional teams in Agile sprints with iterative feature delivery, leveraging Git-based code \
    reviews for quality and version control.",
  ];

  const AmazonSkill = [
    "Kotlin",
    "Go",
    "AWS",
    "UnitJ/MockK",
    "Cypress/Playwright",
    "Agile",
  ];

  const KodelyDes = [
    "Led full-stack development of NalaAI, an AI-powered classroom platform, building advanced features like        \
    real-time AI avatar lip-sync, a LeetCode-style coding editor, intelligent quiz generator, and AI image          \
    generator using React.js, Nest.js, and Typescript.",
    "Scaled and maintained Kodely’s management apps, automating 45% of administrative workflows for school managers \
    overseeing classroom scheduling and program coordination.",
    "Upgraded platform authentication systems by migrating from self-managed JWTs to Firebase Auth across all       \
    applications, improving security, scalability, and user experience.",
    "Managed a production-scale PostgreSQL database supporting 200+ schools and 800+ instructors, optimizing for    \
    performance, scalability, and data integrity across core services.",
    "Collaborating in a cross-functional team of four in Agile sprints with Git-based code reviews and rapid        \
    feature delivery.",
  ];

  const KodelySkill = [
    "Javascript",
    "React.js",
    "Nest.js",
    "PostgresSQL",
    "Rive React",
    "Firebase",
    "MikroORM",
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
          date="MAY 2025 - AUG 2025"
          company="Amazon"
          role="Software Dev Engineer, Intern"
          description={AmazonDes}
          skills={AmazonDes}
        />
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
