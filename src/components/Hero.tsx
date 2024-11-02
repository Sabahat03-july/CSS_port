import Image from "next/image";
import "../style/hero.css";
import React from 'react';
import Link from "next/link";

const Hero = () => {
  return (
    <div className="header-container" id="Hero">
        <div className="header-boxes-container">
            {/* Left */}
            <div>
                 <Image src="/sabahat.jpeg" alt="profile" height={200} width={200} className="header-image" />
            </div>
            {/* Right */}
            <div className="hero-right-div">
                <h1 className="title-head">
                    I`M <span className="name">SABAHAT</span> FRONT-END DEVELOPER
                </h1>
                <p className="des-header">
                    I`m Sabahat, a Front-End Developer who loves turning ideas into reality. With experience in HTML, CSS, JavaScript, and frameworks like React, I strive to create user-centric applications that are both functional and aesthetically pleasing.
                </p>
                <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_pr">
                <button className="hero-button">HIRE ME</button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Hero;
