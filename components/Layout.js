import Head from 'next/head';
import Nav from './Nav';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Niko Roberts</title>
        <link href="https://fonts.googleapis.com/css2?family=Condiment&family=PT+Mono&display=swap" rel="stylesheet" />
      </Head>
      <Nav />
      <main>{children}</main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          color: #333333;
          background-color: #eeeeee;
          scrollbar-color: #1e1e24 #6649b8;
          scrollbar-width: thin;
        }

        * {
          box-sizing: border-box;
        }

        :root {
          font-size: 16px;
          font-family: 'PT Mono', monospace;
          --text-primary: #b6b6b6;
          --text-secondary: #ececec;
          --bg-primary: #23232e;
          --bg-secondary: #141418;
        }

        main {
          margin-left: 5rem;
          padding: 1rem;
        }

        body::-webkit-scrollbar {
          width: 0.25rem;
        }

        body::-webkit-scrollbar-track {
          background: #1e1e24;
        }

        body::-webkit-scrollbar-thumb {
          background: #6649b8;
        }

        @media only screen and (max-width: 600px) {
          main {
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Layout;