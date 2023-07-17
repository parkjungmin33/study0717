import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <h1 className="nav-logo">
            <a href="./index.html">JUICY</a>
          </h1>
          <div className="nav-menu">
            <ul className="nav-btn">
              <li>HOME</li>
              <li>MENU</li>
              <li>INSTA</li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hd">
        <div className="container">
          <h2>DO WANNA SWEET?</h2>
          <p>THE ANSWER IS JUICY</p>
        </div>
      </header>

      <section className="sec">
        <div className="container">
          <article className="atc">
            <div className="card-img">
              <img src="./이미지2.jpg" alt="이미지2" />
              <p>JUICY<br />5,000won</p>
            </div>
          </article>
          <article className="atc">
            <div className="card-img">
              <img src="./이미지2.jpg" alt="이미지2" />
              <p>JUICY<br />5,000won</p>
            </div>
          </article>
          <article className="atc">
            <div className="card-img">
              <img src="./이미지2.jpg" alt="이미지2" />
              <p>JUICY<br />5,000won</p>
            </div>
          </article>
        </div>
        <div className="container">
          <article className="atc">
            <div className="card-img">
              <img src="./이미지2.jpg" alt="이미지2" />
              <p>JUICY<br />5,000won</p>
            </div>
          </article>
          <article className="atc">
            <div className="card-img">
              <img src="./이미지2.jpg" alt="이미지2" />
              <p>JUICY<br />5,000won</p>
            </div>
          </article>
          <article className="atc">
            <div className="card-img">
              <img src="./이미지2.jpg" alt="이미지2" />
              <p>JUICY<br />5,000won</p>
            </div>
          </article>
        </div>
        <div className="container">
          <article className="atc">
            <div className="card-img">
              <img src="./이미지2.jpg" alt="이미지2" />
              <p>JUICY<br />5,000won</p>
            </div>
          </article>
          <article className="atc">
            <div className="card-img">
              <img src="./이미지2.jpg" alt="이미지2" />
              <p>JUICY<br />5,000won</p>
            </div>
          </article>
          <article className="atc">
            <div className="card-img">
              <img src="./이미지2.jpg" alt="이미지2" />
              <p>JUICY<br />5,000won</p>
            </div>
          </article>
        </div>
      </section>

      <footer className="ft">
        <div className="container">
          <p>&copy;JUICY IS ALWAYS SWEEEET!</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
