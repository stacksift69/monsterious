import React from 'react'
import './SearchBox.css'

export default function SearchBox( {placeholder , handleChanges} ) {
  return (
    <React.Fragment>
          <input 
                  className='search'
                  type="search" 
                  placeholder={placeholder}
                  onChange={handleChanges} />
    </React.Fragment>
  )
}
