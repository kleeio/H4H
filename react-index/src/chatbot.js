import React from 'react';
// import '%PUBLIC_URL%/static/sub_main.css';
import './main.css';

function ChatBot() {
  return (
    <div className="is-preload">
      <div id="page-wrapper">
        {/* Header */}
        <header id="header">
          <h1><a href="index.html">Mental Health Chat God</a> by US</h1>
          <nav id="nav">
            <ul>
              <li><a href="index.html">Home</a></li>
            </ul>
          </nav>
        </header>

        {/* Main */}
        <section id="main">
          <header>
            <h2>Mental Health Chat God</h2>
            <p>A chat God to fix all of your down bad issues lol</p>
          </header>
          <div className="row padded_row">
            {/* right side content */}
            <div className="col-md-7">
              <div className="chat_window">
                <div className="top_menu">
                  <div className="title">ChatBot</div>
                </div>
                {/* dynamically rendered */}
                <ul className="messages"></ul>
                {/* input */}
                <div className="bottom_wrapper">
                  <input id="msg_input" placeholder="Start chatting.." />
                  <div id="send_button" className="app_button_1">Send</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer id="footer">
            <ul className="icons">
              <li><a href="https://twitter.com" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="https://www.facebook.com" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
              <li><a href="https://www.instagram.com" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="https://github.com/kleeio/H4H.git" className="icon brands fa-github"><span className="label">Github</span></a></li>
              <li><a href="https://dribbble.com" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
              <li><a href="https://www.google.com" className="icon brands fa-google-plus"><span className="label">Google+</span></a></li>
            </ul>
            <ul className="copyright">
              <li>&copy; Untitled. All rights reserved.</li>
              <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </footer>
        </section>
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

export default ChatBot;
