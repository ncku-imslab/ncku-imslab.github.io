import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import './App.css';

import Navigation from './pages/navigation';
import Home from './pages/home';
import Researches from './pages/researches';
import Members from './pages/members';
import Honors from './pages/honors';
import Resources from './pages/resources';
import Contact from './pages/contact';
import Particles from 'react-particles-js';

const particlesParameter = {
  "particles": {
    "color": {
      // gray, green, violet, pink, blue
      "value": ["#4a4e69", "#84a98c", "#9673d3", "#ed80d9", "#64a6bd"]
    },
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 1750
      }
    },
    "line_linked": {
      "enable_auto": true,
      "color": "#8d99ae",
      "enable": true,
      "opacity": 0.03
    },
    "move": {
      "direction": "right",
      "speed": 0.4,
      "random": true,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": true
      },
    },
    "size": {
      "value": 1.6
    },
    "opacity": {
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0.1
      }
    },
  },
  "retina_detect": true
}

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/researches',
    component: Researches
  },
  {
    path: '/members',
    component: Members
  },
  {
    path: '/honors',
    component: Honors
  },
  {
    path: '/resources',
    component: Resources
  },
  {
    path: '/contact',
    component: Contact
  }
]

// Too few lines
const Footer = () => {
  return (
    <footer class="pt4 mt2 pb3 mid-gray">
      <small class="f6 db tc">© <b>IMS Lab</b> 2020 </small>
    </footer>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="App pa3">
        <div>
          <Particles className="particles" params={particlesParameter} />
          <Navigation />
          {renderRoutes(routes)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
