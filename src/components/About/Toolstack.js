import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiVim,
  SiVercel,
} from "react-icons/si";

import {
  RiWechatPayFill,
} from "react-icons/ri";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiWechatPayFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVim />
      </Col>
    </Row>
  );
}

export default Toolstack;
