import React, {Children} from 'react'

export const CustomLayout : React.FC<{children:JSX.Element[]}> = (props) => {
  return (
    <div style={{width: '100vw', height:'100vh'}}>{props.children}</div>
  )
}
