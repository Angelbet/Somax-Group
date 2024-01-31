import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from '@/styles/Home.module.scss'

// Components
import Navbar from '@/Components/navbar'
import FirstSection from '@/Components/Home/fisrtSection'
import SecondSection from '@/Components/Home/secondSection'
import ThirdSection from '@/Components/Home/thirdSection'
import FourSection from '@/Components/Home/fourSection'
import FifthSection from '@/Components/Home/fifthSection'
import Footer from '@/Components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Somax Group</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={`${style.main}`}>

        <div className={`${style.hero_container} ${style.fl_wrap} ${style.full_height}`}>

          <Navbar />

          <FirstSection />

          <div className={style.element}>
            <div
              className={style.element_item}
              style={{ transform: "translate(-50%, -50%) matrix(1, 0, 0, 1, 819, 49)" }}
            />
          </div>

        </div>

        <SecondSection />

        <ThirdSection />

        <FourSection />

        <FifthSection />

        {/* <Footer /> */}

      </main>
    </>
  )
}
