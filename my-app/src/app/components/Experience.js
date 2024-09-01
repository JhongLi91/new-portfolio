import ExperienceBox from './ExperienceBox.js'

export default function Experience() {

	const HongKongDes = [
		'Led the full-stack development of the company’s first website with React.js and Node.js; the website attracted \
		over 1,500 unique visits in the first month and boosted sales by 4.5%.',
		'Created and managed an SQLite3 database that stored over 200 product informations with search functionality,  	\
		enabling users to query for products with efficient and accurate data delivery to frontend.',
		'Streamlined deployment process using Docker and Google Cloud Run to seamlessly serve the backend, and set up 	\
		Digital Ocean droplet with Nginx to serve frontend, achieving 99.9% uptime.',
		'Configured DNS and optimized SEO to improve Google page rankings and tracked performance through Google Search \
		Console. Implemented HTTPS with Certbot to ensure secure and reliable API access.'
	];

	const HongKongSkill = [
		'Javascript', 'React.js', 'Node.js', 'Express.js', 'SQLite3', 'Docker', 'Google Run', 'Nginx'
	]

	const NYFGDes = [
		'Maintained and updated the company website using modern softwares including HubSpot and generative AI, leading \
		to a 15% increase in click-through rates.',
		'Automated an email marketing campaign with MailerLite, driving a 7% increase in sales.'
	]

	const NYFGSkill = [
		'Generative AI'
	]

  return (
    <div className = 'flex flex-col'>
      <div className = 'OrangeFont font-bold text-sm pb-8'>
          EXPERIENCE
      </div>
      <div className = 'space-y-8'>
        <ExperienceBox  date = 'JUNE 2024 - AUG 2024' company = 'Hong Kong Asian Supermarket'
                role = 'Full-Stack Engineer, Intern' description = {HongKongDes} skills = {HongKongSkill}/>
        <ExperienceBox  date = 'JUNE 2023 - AUG 2023' company = 'New York Fashion Geek'
                role = 'Software and Data Analytic, Intern' description = {NYFGDes} skills = {NYFGSkill}/>
      </div>
    </div>
  );
}
