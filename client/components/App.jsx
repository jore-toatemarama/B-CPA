import React from 'react'

import CardList from './CardList'

function App () {
  return (
    <>
      {/* <video autoplay muted loop id="myVideo">
        <source src="rain.mp4" type="video/mp4"/>
      </video> */}
      
      <header className="header">
        <h1>Blitz</h1>
      </header>
      <section className="main">
        <CardList />
      </section>
    </>
  )
}

export default App
