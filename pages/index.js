import React, { useState } from "react";

import AlertCard from '../components/alert-card'
import Breadcrumb from "../components/breadcrumb";
import ButtonRegular from '../components/button-regular'
import Card from '../components/card'
import Footer from '../components/footer'
import Head from 'next/head'
import Modal from '../components/modal'
import NavBar from '../components/navbar'

export default function Home() {

  const [show, setShow] = useState(false)

  const buttonClickHandler = () => {
    setShow(true)
  }

  const modalCloseHandler = (result) => {
    setShow(false)
    console.log(result.message)
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal show={show} onClose={modalCloseHandler} />

      <main >

        <NavBar />
        <Breadcrumb />

        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

          <AlertCard title="Alert" body="Hurricane warning"></AlertCard>

          <ButtonRegular label="Click here for a scary dialog" onClick={buttonClickHandler} />

          <br />
          <br />

          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-purple-600" href="https://nextjs.org">
              This is Next.js!
            </a>
          </h1>
          <Card>
            <p>HELLO <b>WORLD</b></p>
          </Card>

          <p className="mt-3 text-2xl">
            Get started by editing{' '}
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
              pages/index.js
            </code>
          </p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-red-400 focus:text-red-400"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </div>
      </main>

      <Footer />


    </div>
  )
}
