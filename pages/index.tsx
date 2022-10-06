import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Contact from '../components/contact'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ronald Skinner Cardenas - Full-Stack Web Developer</title>
        <meta name="description" content="Ronald Skinner Cardenas - Full-Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <section id="heading" className="h-screen">
          <span>I am</span>
          <h1>Ronald Skinner Cardenas</h1>
          <h2>Full-Stack Web Developer</h2>
          <span>Empowering your company with my ideas!</span>
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default Home
