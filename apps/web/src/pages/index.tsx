import React from 'react'
import Image from 'next/image'

import Footer from '../components/Footer'
import ExternalHeader from '../components/ExternalHeader'

const LandingPage = () => {
  return (
    <div className="bg-indigo-50">
      <div className="bg-gradient-to-b from-indigo-950 to-indigo-200">
        <ExternalHeader />
        <div className="flex flex-col items-center max-w-4xl mx-auto h-screen justify-center">
          <h1 className="text-zinc-900 text-6xl font-black tracking-tight text-center">
            Rapidly write book reviews and discuss your favorite redings.
          </h1>
          <p className="text-zinc-800 m-8 text-center">
            Embark on a literary adventure with our platform! Log your reads,
            craft Markdown reviews, and connect with a vibrant community of book
            enthusiasts. Join us in celebrating the joy of reading at
            smoothbookish.com — where every story finds its community! 📚✨
          </p>
          <button className="bg-zinc-900 text-zinc-50 font-bold px-6 py-3 rounded-md">
            Get Started
          </button>
        </div>
      </div>
      <div>
        <div className="max-w-screen-xl mx-auto p-16">
          <div className="flex justify-between flex-col items-center xl:flex-row">
            <Image
              className="bg-rose-50 rounded-3xl shadow-md max-w-lg max-h-lg"
              src="/images/writing.svg"
              alt="Descrição da imagem"
              width={600}
              height={600}
            />
            <div className="flex flex-col justify-center mt-8 mb-8 xl:ml-16">
              <h2 className="text-zinc-900 text-5xl font-black tracking-tight">
                Write reviews of your books easily
              </h2>
              <p className="text-zinc-800">
                Write reviews about your favorite books using Markdown notation.
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-col-reverse items-center xl:flex-row">
            <div className="flex flex-col justify-center mt-8 mb-8 xl:mr-16">
              <h2 className="text-zinc-900 text-5xl font-black tracking-tight">
                Record the history of your readings
              </h2>
              <p className="text-zinc-800">
                Keep a record of all the readings you&apos;ve done and organize
                them according to tags.
              </p>
            </div>
            <Image
              className="bg-lime-50 rounded-3xl shadow-md max-w-lg max-h-lg"
              src="/images/scheduling.svg"
              alt="Descrição da imagem"
              width={600}
              height={600}
            />
          </div>
          <div className="flex justify-between flex-col items-center xl:flex-row">
            <Image
              className="bg-sky-50 rounded-3xl shadow-md max-w-lg max-h-lg"
              src="/images/talking.svg"
              alt="Descrição da imagem"
              width={600}
              height={600}
            />
            <div className="flex flex-col justify-center mt-8 mb-8 xl:ml-16">
              <h2 className="text-zinc-900 text-5xl font-black tracking-tight">
                Discuss your favorite reads with fellow book lovers
              </h2>
              <p className="text-zinc-800">
                Engage in real-time conversations with other readers about books
                you&apos;ve already read or are currently reading.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
