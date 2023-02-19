import './main.css';
import './static/sub_main.css';
import {ChatBot} from './chatbot.js';
import React from 'react';
import  ReactDOM from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {sub_main} from './static/sub_main.js';



function App() {
  return (
    <div className="landing is-preload">
      <div id="page-wrapper">

        {/* Header */}
        <header id="header" className="alt">
          <h1><a href="index.html">Mental Health Chat God</a> by: Our Bomb Ass Group</h1>
        </header>

        {/* Banner */}
        <section id="banner">
          <h2>Mental Health God</h2>
          <p>Here to fix all of your down bad issues</p>
          <ul className="actions special">
            <li> <a href="#page-wrapper2" className="button">Start chatting</a></li>
            <li><a href="#main" className="button">Learn More</a></li>
          </ul>
        </section>

        {/* Main */}
        <section id="main" className="container">
          <section className="box special">
            <header className="major">
              <h2>Introducing the ultimate therapy chat bot
                <br />
                for doing stuff with your phone
              </h2>
              <p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc ornare<br />
                adipiscing nunc adipiscing. Condimentum turpis massa.</p>
            </header>
          </section>


          <section className="box special">
            <header className="major">

              <div id="page-wrapper2">

                <header id="header">
                  <h1><a href="index.html">Mental Health Chat God</a> by US</h1>
                  <nav id="nav">
                    <ul>
                      <li><a href="index.html">Home</a></li>
                    </ul>
                  </nav>
                </header>

                <section id="main2">
                  <header>
                    <h2>Mental Health Chat God</h2>
                    <p>A chat God to fix all of your down bad issues lol</p>
                  </header>
                    <div class="row padded_row">
                      <div class="col-md-7">
                        <div class="chat_window">
                          <div class="top_menu">
                            <div class="title">ChatBot</div>
                          </div>
                          <ul class="messages"></ul>
                          <div class="bottom_wrapper">
                            <input id="msg_input" placeholder="Start chatting.." />
                            <div id="send_button" class="app_button_1">Send</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js">
                    </script>
                </section>
              </div>

            </header>
          </section>

        </section>

        {/* Footer */}
        <footer id="footer">
          <ul className="icons">
            <li><a href="https://github.com/kleeio/H4H.git" className="icon brands fa-github"><span className="label">Github</span></a></li>
          </ul>
          <ul className="copyright">
            <li>&copy; Untitled. All rights reserved.</li>
            <li>Design: <a href="http://html5up.net">US</a></li>
          </ul>
        </footer>
      </div>

      {/* Scripts */}
      <script src="%PUBLIC_URL%/js/jquery.min.js"></script>
      <script src="%PUBLIC_URL%/js/jquery.dropotron.min.js"></script>
      <script src="%PUBLIC_URL%/js/jquery.scrollex.min.js"></script>
      <script src="%PUBLIC_URL%/js/browser.min.js"></script>
      <script src="%PUBLIC_URL%/js/breakpoints.min.js"></script> 
      <script src="%PUBLIC_URL%/js/util.js"></script>
      <script src="%PUBLIC_URL%/js/main.js"></script>
      <script src="./static/sub_main.js"></script>
    </div>
  );
}

export default App;
