import React from "react";
import pic5 from "../../images/pic5.png";

import "./Showtext.css";

export default function Showtext() {
  return (
    <>
      <div className=" container-fluid mt-5 mb-5  owner">
        <div className="row">
          <div className="col-12 col-xl-5 col-lg-5 col-sm-12 bgimage align-items-center text-center "></div>
          <div className="col-12 col-xl-7 col-lg-7 col-sm- bgColor">
            <div className="row">
              <div className="col-6 text-end wordm">
                <p className="words">" Hii...</p>
                <p className="words">I am SHUBHAM GAWADE,</p>
                <p className="words">Welcome to our Workshop..."</p>
              </div>
              <div className="col-6 align-items-center text-center">
                <img className="ownerImg img-fluid " src={pic5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
