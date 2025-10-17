import React from 'react'
import "./Jatekter.css"
import Lampa from './Lampa'
export default function Jatekter(props) {
  return (
    <>
      <h2>Jatéktér</h2>
      <div className="Jatekter">
        {
          props.lista.map((szin, index) => {
            return (
              <Lampa szin={szin} key={index} />
            )
          })
        }

      </div>

    </>
  )

}
