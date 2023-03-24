import './NoItemsFound.scss'
import {ReactComponent as SearchIcon} from '../../img/search-icon.svg'
import React from 'react';


export const NoItemOnSearch:React.FC = () => {
  return (
    <div className='message message-container'>
      <div className='message_icon-container'>
        <SearchIcon stroke='#89939a'className='message-icon'/>
      </div>
      <h1 className='message__title'>
        No matching items found
      </h1>
      <p className='message__text'>
        Try changing your search criteria.
      </p>

    </div>
  )
}
