import React from "react";
import { Container } from "@mui/material";
import "container/MainLetsMeet/MainLetsMeet.scss";

export const LetsMeet = () => {
  return (
    <>
      <main className="lets-meet">
        <Container maxWidth="lg">
          <div className="row">
            <div className="lets-meet-content">
              <div className="lets-meet-logo">Let’s meet our specialists</div>
              <div className="lets-meet-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </div>
              <div className="lets-meet-button">
                <a href=""> Contact with us</a>
              </div>
            </div>
            <div className="lets-meet-img-in-content">
              <img
                src="https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-specialist-1.jpg"
                alt=""
              />
              <div className="lets-meet-img-text">
                Dr. Marcus Beloni
                <p> Therapist</p>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};
