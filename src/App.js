
import logoCustom from './assets/logo-variable.svg';
import circleCustom from './assets/circle-variable.svg';
// SVGR caste les .svg en composants. Ici, c'est un par un donc ça va
// import atomique de SVG, ça va
import { ReactComponent as LogoCustom } from './assets/logo-variable.svg';
import { ReactComponent as CircleCustom } from './assets/circle-variable.svg';


// SVGR caste les .svg en composants. Ici, c'est un par un donc ça va
// et on peut aussi extraire l'URL directement
import logo, { ReactComponent as Logo } from './assets/logo-currentcolor.svg';
import circle, { ReactComponent as Circle } from './assets/circle-currentcolor.svg';

// Import de SVG groupés : on embarque donc même les SVG inutilisés du fichier
import iconsCustom from './assets/icons-variable.svg';
import icons from './assets/icons-currentcolor.svg';

// import depuis la sortie SVGR
// même avec cette syntaxe, le fichier unusedSettings.js est embarqué dans le bundle
//
import {LogoCurrentcolor, LogoVariable} from 'svgr-out'

import React, { useState } from 'react';


import './App.css';

function App() {
  const [color, setColor] = useState('pink');
  const [customColor1, setCustomColor1] = useState('pink');
  const [customColor2, setCustomColor2] = useState('green');

  const changeColor = () => {
    setColor(color === 'pink' ? 'blue' : 'pink');
  };
  const changeCustomColor = () => {
    setCustomColor1(customColor1 === 'pink' ? 'blue' : 'pink');
    setCustomColor2(customColor2 === 'green' ? 'yellow' : 'green');
  };

  return (
    <div className="App">
    <h1>Utilisation de currentColor</h1>
    { // génère style="color:pink;"
    }
    <div  style={{ color }}>
      <div>Circle : stroke=green , fill=currentColor, <br />
      Logo : centre fill=currentColor<br />
      <button onClick={changeColor}>Changer la couleur</button>

        <header className="App-header">
          <h2>SVG en tag IMG simple</h2>
          <p>Avantage : fichier unique, accès à <code>fechpriority</code> ou <code>loading=lazy</code>, alt, pas de JS
          <br />Désavantage : pas d'accès à la couleur</p>
          <img style={{ color }} src={logo} className="App-logo" alt="logo" fetchPriority='high' />
          <img style={{ color }} src={circle} className="App-circle" width="200" fetchPriority='high' alt='' />

          <h2>SVG en tant que ReactComponent</h2>
          <p><code>import  ReactComponent as Logo from './assets/circle.svg';</code>
            <br />Désavantage : les SVG alourdissent le bundle JS
            <br />Avantage : injection de variables JS (ex: un texte), code inliné si SSR
          </p>
          <Logo style={{ color }} className="App-logo" />
          <Circle style={{ width: '200px', color }}  />
          <LogoCurrentcolor style={{ color }}  />
        </header>

          <h2>SVG façon sprites avec  <code>xlink:href=fichier.svg#id</code></h2>
          <p>Avantage : fichier unique ou multiple, pas de JS, accès à la couleur, choix inliné ou pas
          Désavantage : pas de <code>fechpriority</code> ou de <code>loading=lazy</code>
            <br />
          </p>
          <svg className="App-logo" >
            <use xlinkHref={`${icons}#icon-logo`} />
          </svg>
          <svg>
            <use xlinkHref={`${icons}#icon-circle`} />
          </svg>
        </div>
      </div>




      <h1>Utilisation des CSS custom properties</h1>
      <div style={{ '--logo-fill': customColor1, '--logo-stroke': customColor2, '--circle-fill': customColor2, '--circle-stroke': customColor1 }}>
        <div>
          Circle : <code>--circle-fill: {customColor2};</code> , <code>--circle-stroke: {customColor1};</code> <br />
          Logo : centre <code>--logo-fill: {customColor1};</code><br />
          <button onClick={changeCustomColor}>Changer les couleurs</button>
        </div>
        <header className="App-header">
          <h2>SVG en tag IMG simple</h2>
            <p>Avantage : IDEM
            <br />Désavantage : IDEM</p>
          <img src={logoCustom} className="App-logo" alt="logo" loading='lazy' />
          <img src={circleCustom} className="App-circle" width="200" loading='lazy' alt='' />

          <h2>SVG en tant que ReactComponent</h2>
          <p><code>import  ReactComponent as Logo from './assets/circle.svg';</code>
            <br />Désavantage : IDEM
            <br />Avantage : IDEM
          </p>
          <LogoCustom className="App-logo" />
          <CircleCustom style={{ width: '200px' }} />
          <LogoVariable />
        </header>

        <div style={{ '--logo-fill': customColor1, '--logo-stroke': customColor2, '--circle-fill': customColor2, '--circle-stroke': customColor1 }}>
          <h2>SVG façon sprites avec  <code>xlink:href=fichier.svg#id</code></h2>
            <p>Avantage : IDEM + propriétés autre que currentColor
              <br />Désavantage : IDEM
            </p>
          <svg className="App-logo">
            <use xlinkHref={`${iconsCustom}#icon-logo`} />
          </svg>
          <svg>
            <use xlinkHref={`${iconsCustom}#icon-circle`} />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
