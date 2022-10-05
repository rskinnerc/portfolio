import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Skills from '../components/skills'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Ronald Skinner Cardenas - Full-Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="heading">
          <span>I am</span>
          <h1>Ronald Skinner Cardenas</h1>
          <h2>Full-Stack Web Developer</h2>
          <span>Empowering your company with my ideas!</span>
        </section>
        <About />
        <Skills />
      </main>
    </div>
  )
}

export default Home
