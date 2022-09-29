import "./NavBar.scss";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Text } from "react-bootstrap";

function NavBar() {
  return (
    <div className="a">
      <div className="selected">
        <p>Hello</p>
      </div>
      <div className="selectLine"></div>

      <div className="line"></div>
      <div className="pageItem" style={{ display: "inline-block" }}>
        <div className="circle" style={{ float: "left" }}></div>
        <p
          style={{
            position: "absolute",
            float: "left",
            display: "inline-block",
          }}
        >
          About
        </p>
      </div>
      <div className="line"></div>
      <div className="pageItem" style={{ display: "inline-block" }}>
        <div className="circle" style={{ float: "left" }}></div>
        <p
          style={{
            position: "absolute",
            float: "left",
            display: "inline-block",
          }}
        >
          Experience
        </p>
      </div>
      <div className="line"></div>
      <div className="pageItem" style={{ display: "inline-block" }}>
        <div className="circle" style={{ float: "left" }}></div>
        <p
          style={{
            position: "absolute",
            float: "left",
            display: "inline-block",
          }}
        >
          Projects
        </p>
      </div>
    </div>
  );
}

export default NavBar;
