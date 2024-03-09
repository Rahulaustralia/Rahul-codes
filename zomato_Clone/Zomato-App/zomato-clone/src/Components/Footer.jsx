import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <>
      <div className="footer-rp-main">
        <div className="main">
          <div className="FHead">
            <img
              className="Flogo"
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="zomoto-logo"
            />

            <button className="india">
              <img
                src="data:image/png;base64,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"
                alt="error"
                style={{ width: "18px" }}
              />
              India
            </button>
            <button className="india" style={{ marginLeft: "25px" }}>
              <LanguageIcon style={{ fontSize: "15px" }} /> English
            </button>

            <div className="fullFoot">
              <div className="insideFull">
                <h4>ABOUT ZOMATO</h4>
                <p className="wor">Who We Are</p>
                <p className="wor">Blog</p>
                <p className="wor">Work With Us</p>
                <p className="wor">Investor Relations</p>
                <p className="wor">Report Fraud</p>
                <p className="wor">Contact Us</p>
              </div>
              <div className="insideFull">
                <h4>ZOMAVERSE</h4>
                <p className="wor">Zomato</p>
                <p className="wor">Blog</p>
                <p className="wor">Blinkit</p>
                <p className="wor">Feeding India</p>
                <p className="wor">Hyperpure</p>
                <p className="wor">Zomaland</p>
              </div>
              <div className="insideFull">
                <h4>FOR RESTAURANTS</h4>
                <p className="wor">Partner With Us</p>
                <p className="wor">Apps For You</p>
                <p style={{ marginLeft: "9px", marginTop: "30px" }}>
                  FOR ENTERPRISES
                </p>
                <p className="wor">Zomato For Enterprise</p>
              </div>
              <div className="insideFull">
                <h4>LEARN MORE</h4>
                <p className="wor">Privacy</p>
                <p className="wor">Security</p>
                <p className="wor">Terms</p>
                <p className="wor">Sitemap</p>
              </div>
              <div className="insideFull">
                <h4 style={{ marginLeft: "26px" }}>SOCIAL LINKS</h4>
                <p className="miniIcons">
                  <LinkedInIcon className="rp-miniIcons" />
                </p>
                <p className="miniIcons">
                  <InstagramIcon />
                </p>
                <p className="miniIcons">
                  <TwitterIcon />
                </p>
                <p className="miniIcons">
                  <YouTubeIcon />
                </p>
                <p className="miniIcons">
                  <FacebookIcon />
                </p>

                <img
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  alt="error"
                  style={{
                    width: "130px",
                    marginLeft: "20px",
                    marginTop: "15px",
                  }}
                />
                <br />
                <img
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  alt="error"
                  style={{
                    width: "130px",
                    marginLeft: "20px",
                    marginTop: "15px",
                  }}
                />
              </div>
            </div>
            <div className="last">
              <br />
              <p>
                By continuing past this page, you agree to our Terms of Service,
                Cookie Policy, Privacy Policy and Content Policies. All
                trademarks are properties of their respective owners. 2008-2023
                © Zomato™ Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
