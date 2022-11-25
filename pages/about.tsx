import PageTitle from "../components/PageTitle"
import Section from "../components/Section";
import SummaryItem from "../components/SummaryItem";
import {about as content} from '../content/about'



const About = () => {
    const { about, education, experience, projects, skills } = content;

    return (
        <>

            <PageTitle title="About" />
            <Section title="About Me">
                {/* eslint-disable-next-line react/jsx-key */}
                {about.map(item => <p className="mb-3">{item}</p>
                )}
            </Section>
            <Section title="Experience">

                {/* eslint-disable-next-line react/jsx-key */}
                {experience.map(({name, link, technologies, description, bio}) =>  <SummaryItem name={name} shortDesc={description} link={link} longDesc={bio} tags={technologies}/> )}
                    </Section>

            <Section title="Projects">

                {/* eslint-disable-next-line react/jsx-key */}
                {projects.map(({name,  description, link}) =>  <SummaryItem tags={undefined} name={name} shortDesc={description}  longDesc={undefined} link={link}/> )}
            </Section>
            <Section title="Skills">

                {/* eslint-disable-next-line react/jsx-key */}
                {skills.map(({name,  description}) =>  <SummaryItem tags={undefined} name={name} shortDesc={description}  longDesc={undefined} link={undefined}/> )}
            </Section>
            <Section title="Education">

                {/* eslint-disable-next-line react/jsx-key */}
                {education.map(({name,  description, bio}) =>  <SummaryItem tags={undefined} name={name} shortDesc={description}  longDesc={bio} link={undefined}/> )}
            </Section>


                    </>
  )

}

      export default About
