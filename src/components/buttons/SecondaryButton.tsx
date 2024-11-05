import React from 'react'
import {Button} from 'react-bootstrap'

export const SecondaryButton : React.FC<{title:string, onClick: () => void}> = (props) => {
  return (
    <Button onClick={props.onClick} style={{backgroundColor: '#5F1B8C'}}>{props.title}</Button>
  )
}