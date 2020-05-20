function Nav() {
  return (
    <>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li className="logo">
            <a href="" className="nav-link">
              <span className='logo-text'>Niko Roberts</span>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="terminal" className="svg-inline--fa fa-terminal fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"></path></svg>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice-d20" className="svg-inline--fa fa-dice-d20 fa-w-15" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path fill="currentColor" d="M106.75 215.06L1.2 370.95c-3.08 5 .1 11.5 5.93 12.14l208.26 22.07-108.64-190.1zM7.41 315.43L82.7 193.08 6.06 147.1c-2.67-1.6-6.06.32-6.06 3.43v162.81c0 4.03 5.29 5.53 7.41 2.09zM18.25 423.6l194.4 87.66c5.3 2.45 11.35-1.43 11.35-7.26v-65.67l-203.55-22.3c-4.45-.5-6.23 5.59-2.2 7.57zm81.22-257.78L179.4 22.88c4.34-7.06-3.59-15.25-10.78-11.14L17.81 110.35c-2.47 1.62-2.39 5.26.13 6.78l81.53 48.69zM240 176h109.21L253.63 7.62C250.5 2.54 245.25 0 240 0s-10.5 2.54-13.63 7.62L130.79 176H240zm233.94-28.9l-76.64 45.99 75.29 122.35c2.11 3.44 7.41 1.94 7.41-2.1V150.53c0-3.11-3.39-5.03-6.06-3.43zm-93.41 18.72l81.53-48.7c2.53-1.52 2.6-5.16.13-6.78l-150.81-98.6c-7.19-4.11-15.12 4.08-10.78 11.14l79.93 142.94zm79.02 250.21L256 438.32v65.67c0 5.84 6.05 9.71 11.35 7.26l194.4-87.66c4.03-1.97 2.25-8.06-2.2-7.56zm-86.3-200.97l-108.63 190.1 208.26-22.07c5.83-.65 9.01-7.14 5.93-12.14L373.25 215.06zM240 208H139.57L240 383.75 340.43 208H240z"></path></svg>
              <span className='nav-link-text'>Home</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gamepad" className="svg-inline--fa fa-gamepad fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"></path></svg>
              <span className='nav-link-text'>About</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="music" className="svg-inline--fa fa-music fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path></svg>
              <span className='nav-link-text'>Projects</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="js-square" className="svg-inline--fa fa-js-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>
              <span className='nav-link-text'>Contact</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" className="svg-inline--fa fa-sun fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>
              <span className='nav-link-text'>Light/Dark</span>
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          .navbar {
            position: fixed;
            background-color: var(--bg-primary);
            transition: width 200ms ease;
          }

          .nav-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
          }

          .nav-item {
            width: 100%;
          }

          .nav-item:last-child {
            margin-top: auto;
          }

          .nav-link {
            display: flex;
            align-items: center;
            height: 5rem;
            color: var(--text-primary);
            text-decoration: none;
            filter: grayscale(100%) opacity(0.7);
            transition: 600ms;
          }

          .nav-link:hover {
            filter: grayscale(0%) opacity(1);
            background: var(--bg-secondary);
            color: var(--text-secondary);
          }

          .nav-link-text {
            display: none;
            margin-left: 1rem;
          }

          .nav-link svg {
            width: 2rem;
            min-width: 2rem;
            margin: 0 1.5rem;
          }

          .nav-link:hover {
            color: #df49a6;
            transition: 600ms;
          }

          .logo {
            font-family: 'Condiment', cursive;
            margin-bottom: 1rem;
            text-align: center;
            color: var(--text-secondary);
            background: var(--bg-secondary);
            font-size: 1.5rem;
            letter-spacing: 0.3ch;
            width: 100%;
          }

          .logo svg {
            transform: rotate(0deg);
            transition: 600ms;
          }

          .navbar:hover .logo svg {
            transform: rotate(-180deg);
          }

          .logo-text {
            display: none;
            margin-left: 10px;
            margin-right: 0;
            white-space: nowrap;
            transition: 600ms;
          }

          @media only screen and (max-width: 600px) {
            .navbar {
              bottom: 0;
              width: 100vw;
              height: 5rem;
            }

            .nav-list {
              flex-direction: row;
            }

            .nav-link {
              justify-content: center;
            }

            .logo {
              display: none;
            }
          }

          @media only screen and (min-width: 600px) {
            .navbar {
              top: 0;
              width: 5rem;
              height: 100vh;
            }
          
            .navbar:hover {
              width: 16rem;
            }
          
            .navbar:hover .nav-link-text {
              display: inline;
              transition: opacity 600ms;
            }

            .navbar:hover .logo svg {
              // margin-left: 11rem;
            }

            .navbar:hover .logo-text {
              display: inline;
              transition: 600ms;
            }
          }

          .navbar:hover {
            width: 16rem;
          }

          .navbar:hover .nav-link-text {
            display: block;
          }

          .dark {
            --text-primary: #b6b6b6;
            --text-secondary: #ececec;
            --bg-primary: #23232e;
            --bg-secondary: #141418;
          }
          
          .light {
            --text-primary: #1f1f1f;
            --text-secondary: #000000;
            --bg-primary: #ffffff;
            --bg-secondary: #e4e4e4;
          }
          
          .solar {
            --text-primary: #576e75;
            --text-secondary: #35535c;
            --bg-primary: #fdf6e3;
            --bg-secondary: #f5e5b8;
          }

          .theme-icon {
            display: none;
          }

          .dark #darkIcon {
            display: block;
          }
          
          .light #lightIcon {
            display: block;
          }
          
          .solar #solarIcon {
            display: block;
          }
        `}
      </style>
    </>
  );
}

export default Nav;