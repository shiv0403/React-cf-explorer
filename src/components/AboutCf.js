import React from "react";
import "./AboutCf.css";

function AboutCf() {
  return (
    <div className="about">
      <div class="about_main" data-aos="fade-left">
        <h2>
          What is <span class="about_span">CODEFORCES?</span>
        </h2>
        <p>
          Codeforces is a website that hosts competitive programming contests.It
          is maintained by a group of competitive programmers from ITMO
          University led by Mikhail Mirzayanov. Since 2013, Codeforces claims to
          surpass Topcoder in terms of active contestants. As of 2018, it has
          over 600,000 registered users.
        </p>
      </div>
      <div class="about_image" data-aos="fade-right">
        <a href="https://www.codeforces.com" target="_blank" rel="noreferrer">
          <img
            src="https://assets.codeforces.com/users/kguseva/comments/cf.png"
            alt="codeforces"
            class="cf-img"
          />
        </a>
      </div>
    </div>
  );
}

export default AboutCf;
