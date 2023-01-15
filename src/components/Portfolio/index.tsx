import Title from '@components/Title'
import Projects from './Projects'

const Qualification = () => {
  return (
    <section id='portfolio' className='container section'>
      <Title title='Portfolio' desc='Most recent work' />
      <Projects projects={[]} />
    </section>
  )
}

export default Qualification
