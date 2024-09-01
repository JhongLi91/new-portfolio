import Experience from './components/Experience.js'
import Projects from './components/Projects.js'

export default function Home() {


	return (
		<div className = 'flexContainer'>
			<div className = 'leftPage'>
        <div className = 'leftInner'>
          <div className = 'flex flex-col p-5'>
            <div className = 'Name font-bold py-2'>
              Jianhong Li
            </div>  
            <div className = 'Role OrangeFont pb-4'>
              Full-Stack Developer
            </div>
            <div className = 'Description SlateFont'>
              Aspired software developer at the University of Michigan.
            </div>
          </div>
        </div>

      </div>

			<div className = 'rightPage p-5 space-y-20'>
        <div className = 'flex flex-col'>
          <div className = 'OrangeFont font-bold text-sm pb-8'>
            ABOUT
          </div>
          <div className = 'SlateFont text-base'>
            Hi, this is Jian Hong Li. I&apos;m currently studying computer science at the University of Michigan.
            Don&apos;t worry, I&apos;m not going to write big paragraphs here. I started coding Sophomore year of High School
            and continued since. I enjoy both learning and making interesting projects. My career interest is
            ML, cybersecuity, Web Dev and Game Dev.
          </div>
        </div>

        <Experience />
        <Projects />
      </div>
		</div>
  );
}
