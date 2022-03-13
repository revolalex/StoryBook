import React from "react";
import "./App.css";
import { Row, Col } from "antd";

import LayoutNav from "./components/Layout/LayoutNav";
import MyGraphicCard from "./components/Card/MyGraphicCard";
import Mycard from "./components/Card/MyCard";

function App() {
  return (
    <div className="App">
      <LayoutNav>
        <Row gutter={8}>
          <Col className="gutter-row" span={12}>
            <MyGraphicCard
              title="First Row 1"
              style={{ minWidth: "90%" }}
              imgUrl="https://tuttonet.com/wp-content/uploads/2019/04/high-tech1.jpg"
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <MyGraphicCard
              title="First Row 2"
              style={{ minWidth: "90%" }}
              imgUrl="https://tuttonet.com/wp-content/uploads/2019/04/high-tech1.jpg"
            />
          </Col>
        </Row>
        <br />
        <Row gutter={8}>
          <Col className="gutter-row" span={12}>
            <Mycard
              style={{ minWidth: "90%" }}
              title="Second Row 1"
              displayMeta={true}
              metaDescription="description 1"
              metaTitle="title 1"
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <Mycard
              style={{ minWidth: "90%" }}
              title="Second Row 2"
              displayMeta={true}
              metaDescription="description 2"
              metaTitle="title 2"
            />
          </Col>
        </Row>
      </LayoutNav>
    </div>
  );
}

export default App;
