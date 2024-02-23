import React from 'react'
import './style.scss';

export function Card({title,children}) {
  return (
    <article id='container__card'>
      <header>{title}</header>
      {children}
    </article>
  )
}
