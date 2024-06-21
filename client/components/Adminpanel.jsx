import React from 'react'
import {Dashboard} from './Dashboard'
import {Nav} from './Nav'


export const Adminpanel = () => {
  return (
    <div className= "d-flex flex-row">
        <Nav/>
      <Dashboard/>
    </div>
  )
}

