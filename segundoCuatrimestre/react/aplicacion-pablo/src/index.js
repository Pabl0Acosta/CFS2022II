import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {useState} from 'react';
import {sculptureList} from './data';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);

  function handleNextClick() {
    if (index <= 10) {
        setIndex(index + 1)
    }
    else {
        console.log("no more buttonito funcation")
    };
  }
  function handlePreviousClick() {
    if (index > 0) {
        setIndex(index - 1)
    }
    else {
        console.log("no few botonsito que le anda")
    };
  }

  function handleMoreClick() {
      setShowMore(!showMore);
  }
  function handleLessClick() {
      setShowLess(!showLess);
  }

  let sculpture = sculptureList[index];
  return (
      <section>
            <h1>ESCULTURAS!!!</h1>
            <button onClick={handlePreviousClick}>
              Previous
          </button>
          <button onClick={handleNextClick}>
              Next
          </button>
          <h2>
              <i>{sculpture.name} </i>
              por {sculpture.artist}
          </h2>
          <h3>
              ({index + 1} de {sculptureList.length})
          </h3>
          <button onClick={handleMoreClick}>
              {showMore ? 'Ocultar' : 'Mostrar'} detalles
          </button>
          {showMore && <p>{sculpture.description}</p>}
          <img
          src={sculpture.url}
          alt={sculpture.alt}
          />
      </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);