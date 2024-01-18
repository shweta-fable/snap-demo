import React, { lazy } from 'react'

export default function Layout(props) {
  const {
    headerComp: Header,
    sidepanelComp: Sidepanel,
    footerComp: Footer,
    tocComp: Toc,
  } = props;


  const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

  function getCharacter(index) {
    return hexCharacters[index]
  }

  function generateNewColor() {
    let hexColorRep = "#"

    for (let index = 0; index < 6; index++) {
      const randomPosition = Math.floor(Math.random() * hexCharacters.length)
      hexColorRep += getCharacter(randomPosition)
    }

    return hexColorRep
  }


  return (
    <div className='con' key='a'>
      <Header />
      <div className='main-wrapper'>
        <Sidepanel />
        <main className='main-con' style={{ backgroundColor: generateNewColor() }}>
          {props.children}
          {/* <LazyTemp/> */}
        </main>
        {props.config.props.toc.show && <Toc />}
      </div>
      <Footer />
    </div>

  )
}