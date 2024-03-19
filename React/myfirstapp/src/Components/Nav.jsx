import React, { useState } from "react";
import "../Style/Nav.css";

function Nav() {
  const [modal, setModal] = useState(false);

  const [secondModal, setSecondModal] = useState(false);

  function myhandle() {
    setSecondModal(true);
    setModal(false);
  }

  return (
    <>
      <nav className="main">
        <div className="nav-1">
          <h2>
            Yummy<span>.</span>
          </h2>
        </div>
        <div className="nav-2 ">
          <ul className="Ul">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Events</li>
            <li>Chefs</li>
            <li>Gallery</li>
            <li>Drop Down</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="btn">Book a Table</button>
      </nav>
      <div className="main-section">
        <div className="left">
          <h2>ENJOY YOUR HEALTHY DELICIOUS FOOD</h2>
          <p>
            "One cannot think well, love well, sleep well, if one has not dined
            well." - ... Let food be thy medicine and medicine be thy food.
            People who love to eat are always the best people. The only way to
            get rid of a temptation is to yield to it.{" "}
          </p>
          <button>Book a Table</button>
          <span>Watch video</span>
        </div>
        <div className="right">
          <img
            src="https://i0.wp.com/tiffinandteaofficial.com/wp-content/uploads/2020/11/IMG_7652-1.jpg?resize=800%2C1200&ssl=1"
            alt="Paneer"
          />
        </div>
      </div>

      <div className="footer">
        <h3>About us</h3>
        <h2>
          Learn MORE <span>ABOUT US</span>
        </h2>
        {modal && (
          <div className="modal">
            <div className="overlay">
              <div className="overlay-parent">
                <div className="overlay-c1">
                  <h3 style={{ color: "black" }}> Facing Problem ? </h3>
                  <p>
                    Lorem ipsum dolor Est hic deleniti iste temporibus odio
                    sint, rerum dicta possimus pariatur voluptate officiis.
                  </p>
                </div>
                <div className="overlay-c2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYs_q3p34nh3uX60pTM5TdoqeXCDJBgz3uMg&usqp=CAU"
                    alt="error"
                  />
                </div>
              </div>
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  fontSize: "13px",
                }}
              >
                Report Issue
              </p>
              <button className="my-btn" onClick={myhandle}>
                Take a Screensort
              </button>
              <button onClick={() => setModal(false)} className="close-modal">
                X
              </button>
            </div>
          </div>
        )}

        {/* second Modal */}

        {secondModal && (
          <div className="modal2">
            <div className="overlay2">
              <div className="overlay-parent2">
                <button className="rp-c1">Custom Area</button>
                <button className="rp-c2"> Full Screen</button>
                <button className="rp-c3" onClick={() => setSecondModal(false)}>
                  X
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="last">
        <div className="il">
          <img
            src="https://c8.alamy.com/comp/R1R5CK/cozy-warm-yellow-light-edison-light-bulb-hanging-closeup-R1R5CK.jpg"
            alt="bulb"
          />
        </div>
        <div className="pr">
          <p>
            The incandescent light bulb turns electricity into light by sending
            the electric current through a thin wire called a filament.
          </p>
        </div>
        <div className="pv-last">
          <img
            onClick={() => setModal(true)}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqF8D4KXD4qKL_wrHE7GyVvfejF7HHLtXgg&s"
            alt="error"
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
