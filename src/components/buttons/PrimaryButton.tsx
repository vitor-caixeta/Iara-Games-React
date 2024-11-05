import React from 'react'
import {Button} from 'react-bootstrap'

export const PrimaryButton : React.FC<{title:string, onClick: () => void}> = (props) => {
  return (
    <Button onClick={props.onClick} style={{backgroundColor: '#E01C6A'}}>{props.title}</Button>
  )
}
