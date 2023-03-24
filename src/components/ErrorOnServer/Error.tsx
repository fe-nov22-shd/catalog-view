import './Error.scss'
import {ReactComponent as WarningIcon} from '../../img/warning-icon.svg'
import React from 'react';


export const Error:React.FC = () => {
  return (
    <div className='message message-container'>
      <div className='message_icon-container'>
        <WarningIcon stroke='#89939a'className='message-icon'/>
      </div>
      <h1 className='message__title'>
        Error
      </h1>
      <p className='message__text'>
        Oops, Something went wrong.
      </p>
      <p className='message__text'>
        Please, try again later.
      </p>

    </div>
  )
}
