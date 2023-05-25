import React from 'react';
import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metadata= {
    title:"Promptworld",
    description: 'Discover & share AI prompts'
}
const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <Provider>
            <div className="main">
                <div className="gardient"/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout