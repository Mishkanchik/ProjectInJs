import React from "react";
import { Container, margin } from "@mui/system";
import "container/Footer/Footer.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <>
      <footer className="footer-last-content">
        <Container>
          <div className="row">
            <div className="footer-2021">
              © 2021 Betheme by <a href=""> Muffin group</a> | All Rights
              Reserved | Powered by <a href=""> WordPress </a>
            </div>
            <div className="social">
              <FacebookOutlinedIcon className="facebook" />
              <TwitterIcon className="twitter" />
              <PinterestIcon className="pinterest" />
              <InstagramIcon className="instagram" />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};