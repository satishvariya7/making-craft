import { Button, Card, Row, Col } from "antd";
import Loader from "react-loader-spinner";
import { AppLink, LogoSVG } from "../../app/components";
const Main = () => {
  return (
    <>
      <Row>
        <Col md={24} className="row-layer">
          <Row className="1">
            <Col md={12} lg={12}>
              {/* <span className="logo-text">ArtRegistry</span> */}
              <div>
                <LogoSVG />
              </div>
            </Col>
            <Col md={12} lg={12} className="button-row">
              <AppLink
                href="/signin"
                children={<Button className="login-btn">Log In</Button>}
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Card
                className="card-info"
                bordered={null}
                style={{ backgroundColor: "transparent" }}
              >
                <h1 className="title-text">Welcome to Art Registry</h1>
                <p className="main-title-sub-text">
                  Lorem ipsum sit amet, consectetur adipiscing elit ut aliquam,
                  <br /> purus sit amet lucts venenatis
                </p>
                <AppLink
                  href="/register/getstarted"
                  children={<Button className="singin-btn">Sign Up</Button>}
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Main;
