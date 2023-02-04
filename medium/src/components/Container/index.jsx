import React from 'react'
import s from './index.module.css'

export default function Container(props) {
  return (
    <div className={s.container}>{props.children}</div>
  )
}
