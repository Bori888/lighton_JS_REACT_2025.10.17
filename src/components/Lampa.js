import React from 'react'
import "./Lampa.css"
export default function Lampa(props) {
  return (
    <div className="Lampa" style={{ backgroundColor: props.szin }}></div>
  )
}
