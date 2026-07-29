import { useState } from 'react';
import './App.css';
// ex challenge 5f is done here;

      function App() {
        const [showPassword, setShowPassword] = useState(true);

        function renderPassword() {
          const showHideBtn = document.getElementById("showHideButton");
          showPassword
            ? ((showHideBtn.innerHTML = "Hide"), setShowPassword(false))
            : ((showHideBtn.innerHTML = "Show"), setShowPassword(true));
        }
        return (
          <div>
            <p className="paragraph">
              Assalamu Alaikum, welcome to my website.
            </p>

            <div className="email-container">
              <input type="text" placeholder="Email" className="inputs" />
            </div>

            <div className="pass-container">
              <input
                type={showPassword ? "password" : "text"}
                placeholder="Password"
                className="inputs"
              />
              <button id="showHideButton" onClick={renderPassword}>
                show
              </button>
            </div>

            <div className="buttons-container">
              <button className="buttons">Login</button>
              <button className="buttons">Sign up</button>
            </div>
          </div>
        );
      }

export default App
