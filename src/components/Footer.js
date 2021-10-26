import React from "react";
import "./Footer.css";
import 'font-awesome/css/font-awesome.min.css';

export default function Footer(props) {
  return (
    <footer className="site-footer" style={{backgroundColor:props.switchMode==='light'?'#f8f9fa':'#26272b'}}>
      <div className="container">
        <div className="row" style={{justifyContent:"center"}}>
          <div className="col-sm-12 col-md-6">
            <h6 style={{textAlign: "center",color:props.switchMode==='light'?'black':'white'}}>About</h6>
            <p className="text-justify" style={{color:props.switchMode==='light'?'black':'white'}}>
              TextUtils is a word counter or character counter utility which can
              be used to manipulate your text in the way you want. You can
              remove extra spaces, copy the manipulated text as well as convert
              text from Uppercase to Lowercase and Lowercase to Uppercase
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="#"> Kamal Pandey </a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12" style={{textAlign:"center"}}>
            <ul className="social-icons">
              <li>
                <a className="linkedin" href="https://www.linkedin.com/in/kamal-pandey-505471124">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
