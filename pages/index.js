import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>

      
      <Head>
        <title>eeeyooon portfolio</title>
        <meta name="description" content="오늘도 빡코딩" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <section className="flex items-center justify-center min-h-screen text-gray-600 flex-column body-font">
  <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
    <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
      <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Hello! I'm eeeyooon
        <br className="hidden lg:inline-block"/>Let me show you
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Projects</button>
      </div>
    </div>
    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
    </div>
  </div>
</section>

    </Layout>
  )
}
