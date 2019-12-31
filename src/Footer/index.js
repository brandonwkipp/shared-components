import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const Footer = () => (
  <>
    <footer id="footer">
      <Container className="w-100" fluid>
        <Row>
          <Col md={3}>
            <h5>ABOUT THE MUSEUM</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.smm.org/about">
                  About Ussssss
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/donations">
                  Donations to Non-Profits
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/ideal-center">
                  IDEAL Center Professional Development
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/kaysc">
                  Kitty Andersen Youth Science Center
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/educators/lending-library">
                  Lending Library
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/media">
                  Media Room
                </a>
              </li>
              <li>
                <a href="http://www.nps.gov/miss/planyourvisit/mrvcabou.htm">
                  Mississippi River Visitor Center
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/pluggedin">
                  Plugged In Blog
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/collections">
                  Our Collections
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/scientists">
                  Our Scientists
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/scwrs">
                  St. Croix Watershed Research Station
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>JOIN OUR TEAM</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.smm.org/jobs">
                  Jobs & Internships
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/volunteer">
                  Volunteer
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>FOR MUSEUM PROFESSIONALS</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.smm.org/exhibitservices">
                  Exhibit Services
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/exhibitrental">
                  Exhibit Rental
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/evaluation">
                  Evaluation & Learning Research
                </a>
              </li>
              <li>
                <a href="https://www.smm.org/ipage">
                  iPAGE Community
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>CONNECT WITH US</h5>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" md={12}>
            <h5>PREMIER PARTNERS</h5>
            <p>
              <a
                href="https://www.3m.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="3M"
                  src="https://smm-bit-test.s3.amazonaws.com/footer-3m.png"
                />
              </a>
              <a
                href="https://www.healthpartners.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="HealthPartners"
                  src="https://smm-bit-test.s3.amazonaws.com/footer-healthpartners.png"
                />
              </a>
              <a
                href="https://www.target.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="Target"
                  src="https://smm-bit-test.s3.amazonaws.com/footer-target.png"
                />
              </a>
            </p>
            <p className="mb-0">
              © 2019 Science Museum of Minnesota • 120 W. Kellogg Blvd.
              • Saint Paul, MN 55102 • (651) 221-9444 •
              {' '}
              <a href="mailto:info@smm.org">info@smm.org</a>
            </p>
            <p>
              <a href="https://www.smm.org/privacy">Privacy Policy</a>
              {' '}
              •
              {' '}
              <a href="https://www.smm.org/legal">Legal Notice</a>
            </p>
            <p>
              <a
                href="https://www.smm.org/legacy"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="Legacy Logo"
                  id="legacyImage"
                  src="https://smm-bit-test.s3.amazonaws.com/legacy.png"
                />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  </>
);

export default Footer;
