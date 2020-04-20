import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Tab } from 'react-bootstrap'
import SideBar from './SideBar';

// import { HashLink as Link } from 'react-router-hash-link';
// import { HashLink as Link } from 'react-router-hash-link';
import cupncube from '../cupncube.jpg'

import Weather from './Weather';

export const Home = () => {
  return (
      
    <div className='Home'>


      <Weather/>
      <Jumbotron className="Jumbotron">
        <h1>Welcome to the Campus Forum ™</h1>
      </Jumbotron>

      <div>
        <Tab.Container className="Good" id='list-group-tabs-mods' defaultActiveKey='#link1'>
            <SideBar />
        </Tab.Container>
      </div>
    </div>
  )
}
