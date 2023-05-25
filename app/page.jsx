import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discoevr & share
            <br className="max-md:hidden" />
            <span className="orange_gradient">
                AI-Powered Prompts
            </span>
        </h1>
        <p className="desc text-center">
            Promptworld is an open source AI promting tool for morden world to discover, create and share creative prompts
        </p>

        <Feed/>
    </section>
  )
}

export default Home