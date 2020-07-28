import React from "react";

function About() {
  return (
    <>
      <div className="about">
        <h1>about page</h1>
        <About1 />
        <About2 />

        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
      </div>
    </>
  );
}

function About1() {
  return (
    <div className="about-1">
      <p>Hi, i'm Chi.</p>
      <p>
        {" "}
        I am a creative web developer from the North West of England. I like to
        do <span className="ph underline-hover">photography</span> and other
        things
      </p>
    </div>
  );
}
const style2 = {
  backgroundImage: `url(https://res.cloudinary.com/drfbjbnqj/image/upload/v1595946319/4_ixd0x1.jpg)`,
};
const grain = {
  backgroundImage: `url(https://res.cloudinary.com/drfbjbnqj/image/upload/v1595946318/noise_bekfwu.png)`,
};

function About2() {
  return (
    <>
      <div className="about-2">
        <div className="plastic" style={style2}></div>
        <div className="grain" style={grain}></div>
        <div className="about-backtext">
          <div className="tickerContainer">
            <div className="ticker-2">
              <div>
                <span>peak lockdown hair</span>
                <span>peak lockdown hair</span>
              </div>
            </div>
          </div>

          <div className="about-backtext-bottom">
            <div className="tickerContainer">
              <div className="ticker-2">
                <div>
                  <span>peak lockdown hair</span>
                  <span>peak lockdown hair</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-content-container">
          <h5>So what have I been up to recently?</h5>
          <p>
            Throughout lockdown I have been working at ASDA, fulfilling online
            orders as a picker until I find my dream job in Web Development.
          </p>
        </div>
      </div>
      {/* <div id="ticker-1">
    <div id="div1">&nbsp;peak lockdown hair</div>
    <div id="div2">&nbsp;peak lockdown hair</div>
  </div> */}
    </>
  );
}
export default About;
