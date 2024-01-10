import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MyFooter extends React.Component{
  render(){
    return(
      <>
  <Row className="text-center mt-5">
    <Col xs={6} className="offset-3">
      <Row>
        <div className="col col-12 text-left mb-2">
          <i className="fa fa-facebook footer-icon"></i>
          <i className="fa fa-instagram footer-icon"></i>
          <i className="fa fa-twitter footer-icon"></i>
          <i className="fa fa-youtube footer-icon"></i>
        </div>
      </Row>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
        <Col>
          <Row>
            <div className="col col-12 footer-links">
              <p>
                <a href="#" alt="footer link">
                  Audio and Subtitles
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Media Center
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Privacy
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Contact us
                </a>
              </p>
            </div>
          </Row>
        </Col>
        <Col>
          <Row>
            <div className="col col-12 footer-links">
              <p>
                <a href="#" alt="footer link">
                  Audio Description
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Investor Relations
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Legal Notices
                </a>
              </p>
            </div>
          </Row>
        </Col>
        <Col>
          <Row>
            <div className="col col-12 footer-links">
              <p>
                <a href="#" alt="footer link">
                  Help Center
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Jobs
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Cookie Preferences
                </a>
              </p>
            </div>
          </Row>
        </Col>
        <div className="col">
          <Row>
            <div className="col col-12 footer-links">
              <p>
                <a href="#" alt="footer link">
                  Gift Cards
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Terms of Use
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Corporate Information
                </a>
              </p>
            </div>
          </Row>
        </div>
      </div>
      <Row>
        <div className="col col-12 text-left mb-2">
          <button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
            Service Code
          </button>
        </div>
      </Row>
      <Row>
        <div className="col col-12 text-left mb-2 mt-2 copyright">
          © 1997-2022 Netflix, Inc.
        </div>
      </Row>
    </Col>
  </Row>
</>
    )
  }
}

export default MyFooter
