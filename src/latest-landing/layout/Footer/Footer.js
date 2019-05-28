import React, { Component } from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";
import Icon from "../../../components/core/Icon";
import { Col, Container, Row } from "reactstrap";

import "../Footer/slick/slick/slick.css";
import "../Footer/slick/slick/slick-theme.css";

import BBC from "./../../../latest-landing/assets/img/footer/BBC.png";
import campusparty from "./../../../latest-landing/assets/img/footer/campusparty";
import oneworld from "./../../../latest-landing/assets/img/footer/oneworld";
import trendwatching from "./../../../latest-landing/assets/img/footer/trendwatching";
import bnr1 from "./../../../latest-landing/assets/img/footer/bnr1";
import African from "./../../../latest-landing/assets/img/footer/African.png";
import NABC from "./../../../latest-landing/assets/img/footer/NABC.png";
import Detelegraph from "./../../../latest-landing/assets/img/footer/Detelegraph.png";
import "../Footer/slick/slick/slick.css";
import "../Footer/slick/slick/slick-theme.css";
import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        rows:1
      };
    return (
            <footer>
                {/*------------ Press------------- */}
                <Row>
                    
                        <Col md="3" sm="6">
                        <div className="also-featured">
                            <h5>ALSO FEATURED IN</h5>
                            </div>
                        </Col>
                        
                        
                        <Col md="9" sm="6">
                        <div className="also-featured">
                            <Slider {...settings}>
                            <div className="item">
                                <a href="#">
                                    <img   height="50px" width="50px" title="bbc news" src={BBC} />
                                </a>
                                </div>
                                <div className="item">
                                <a href="#">
                                    <img  height="30px" width="85px"
                                    src={campusparty} />
                                </a>
                                </div>
                                <div className="item">
                                <a href="#">
                                    <img   height="40px" width="40px" src={oneworld} />
                                </a>
                                </div>
                                <div className="item">
                                <a href="#">
                                    <img  height="40px" width="90px"
                                    src={trendwatching} />
                                </a>
                                </div>
                                <div className="item">
                                <a href="#">
                                    <img   height="40px" width="110px" src={African} />
                                </a>
                                </div>
                                <div className="item">
                                <a href="#">
                                    <img  height="40px" width="40px" src={NABC} />
                                </a>
                                </div>
                                <div className="item">
                                <a href="#">
                                    <img   height="50px" width="40px" src={bnr1} />
                                </a>
                                </div>
                                <div className="item">
                                <a href="#">
                                    <img  height="30px" width="100px" src={Detelegraph}
                                    />
                                </a>
                                </div>
                                
                            </Slider>
                            </div>
                        </Col>
                    
                </Row>

                <hr className="line2"/>
                {/*------------------Our Offices------------------- */}
                <Row>
                    <Col md="3" sm="6">
                        <div className="tunga-offices">
                            <div className="tunga-kampala">
                                <h4>OFFICES</h4>
                                <h5>KAMPALA</h5>
                                <p>Design Hub Kampala</p>
                                <p>5th Street, Industrial Area</p>
                            </div>

                            <div className="tunga-amsterdam">
                                <h5>AMSTERDAM</h5>
                                <p>The Collab Wibautstraat 131</p>
                                <p>1091 GL Amsterdam</p>
                                <p>The Netherlands</p>
                            </div>
                        </div>
                    </Col>

                    {/*--------------------------Connect With Us---------------------- */}
                    
                    <Col md="3" sm="6">
                        <div className="connect">
                        <h4>CONNECT</h4>
                            <div className="hello-tunga">
                                
                                <p>
                                    <a href="mailto:hello@tunga.io">
                                        hello@tunga.io
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:+31615955194">+31615955194</a>
                                </p>
                            </div>

                            {/* social networks */}
                            <div className="social-networks">
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/company/tunga"
                                    id="fb"
                                    title="LinkedIn"
                                >
                                    <Icon
                                        className="linkedin"
                                        name="linkedin"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/tunga.io"
                                    id="fb"
                                    title="Facebook"
                                >
                                    <Icon className="fb" name="facebook" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://twitter.com/tunga_io"
                                    id="twitter"
                                    title="Twitter"
                                >
                                    <Icon className="twitter" name="twitter" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://blog.tunga.io"
                                    id="medium"
                                    title="Medium"
                                >
                                    <Icon className="medium" name="medium" />
                                </a>
                            </div>
                        </div>
                    </Col>
                    
            
                    {/*-----------------explore-------------- -- */}
                    <Col md="3" sm="6">
                        <div className="explore">
                            <h4>EXPLORE</h4>
                            <ul>
                                <li>
                                    <a href="#">Our Team</a>
                                </li>
                                <li>
                                    <a href="#">Our Story</a>
                                </li>
                                <li>
                                    <a href="#">News</a>
                                </li>
                                <li>
                                    <a href="#">Effortless software projects</a>
                                </li>
                                <li>
                                    <a href="#">Dedicated Developers</a>
                                </li>
                                <li>
                                    <a href="#">Recruitment Services</a>
                                </li>
                                <li>
                                    <a href="#">iOS Developers</a>
                                </li>
                                <li>
                                    <a href="#">Android developers</a>
                                </li>
                                <li>
                                    <a href="#">Remote teams</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    
                    {/*--------------------Latest From Our Blog---------------------------- */}
                    
                    <Col md="3" sm="6">
                        <div className="latest-from-our-blog">
                            <h4>LATEST FROM OUR BLOG</h4>
                            <li>
                                <a href="#">
                                    Reknown newspaper Het Parool interviews
                                    Ernesto Spruyt and David Semakula.
                                </a>{" "}
                            </li>
                            <li>
                                <a href="#">Women in tech courses.</a>{" "}
                            </li>
                            <li>
                                <a href="#">Quality time in Nigeria.</a>{" "}
                            </li>
                            <li>
                                <a href="#">
                                    Best African countries for sourcing software
                                    developers in 2019.
                                </a>{" "}
                            </li>
                        </div>
                    </Col>
                </Row>
                <hr className="line2"/>
                <Row>
                    {/*-----------------------Footer Bottom-------------------------------- */}
                   
                    <Col md="6" sm="6">
                    <div className="bottom-line">
                        <p className="text-xs-left">
                            {new Date().getFullYear()} Tunga Bv - All rights
                            reserved
                        </p>
                        </div>
                    </Col>
                    <Col md="2" sm="4">
                    <div className="bottom-line">
                        <p className="text-xs-right text-white">
                            <a href="#">Privacy policy</a>
                        </p>
                        </div>
                    </Col>
                    <Col md="2" sm="4">
                    <div className="bottom-line">
                        <p className="text-xs-right text-white">
                            <a href="#">User Agreement</a>
                        </p>
                        </div>
                    </Col>
                    <Col md="2" sm="4">
                    <div className="bottom-line">
                        <p className="text-xs-right white-text">
                            <a href="#">Code of conduct</a>
                        </p>
                        </div>
                    </Col>
                    
                </Row>
            </footer>
      );
  }
}
Footer.propTypes = {};

export default Footer;
