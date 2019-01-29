import React, {Component} from 'react';
import './resources/styles.css';
import {Element}          from 'react-scroll';

import Header    from './components/header_footer/Header';
import Footer    from './components/header_footer/Footer';
import Featured  from './components/featured';
import VenueInfo from './components/VenueInfo';
import Highlight from './components/Highlights';
import Pricing   from './components/Pricing';
import Location  from './components/Location';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Element name='featured'>
          <Featured/>
        </Element>
        <Element name='venueinfo'>
          <VenueInfo/>
        </Element>
        <Element name='highlights'>
          <Highlight/>
        </Element>
        <Element name='pricing'>
          <Pricing/>
        </Element>
        <Element name='location'>
          <Location/>
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;
