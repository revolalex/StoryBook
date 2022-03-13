import { Row, Col } from "antd";
import { CSSProperties } from "react";
import React from "react";

interface MyRowProps {
  numberOfElement: 1 | 2 | 3 | 4;
  children1: React.ReactNode;
  children2?: React.ReactNode;
  children3?: React.ReactNode;
  children4?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

const MyRow = (props: MyRowProps) => {
  const {
    numberOfElement,
    children1,
    children2,
    children3,
    children4,
    style,
    className,
  } = props;
  return (
    <span>
      {numberOfElement === 1 && (
        <Row style={style} className={className}>
          <Col span={24}>{children1}</Col>
        </Row>
      )}
      {numberOfElement === 2 && (
        <Row style={style} className={className}>
          <Col span={12}>{children1}</Col>
          <Col span={12}>{children2}</Col>
        </Row>
      )}
      {numberOfElement === 3 && (
        <Row style={style} className={className}>
          <Col span={8}>{children1}</Col>
          <Col span={8}>{children2}</Col>
          <Col span={8}>{children3}</Col>
        </Row>
      )}
      {numberOfElement === 4 && (
        <Row style={style} className={className}>
          <Col span={6}>{children1}</Col>
          <Col span={6}>{children2}</Col>
          <Col span={6}>{children3}</Col>
          <Col span={6}>{children4}</Col>
        </Row>
      )}
    </span>
  );
};
export default MyRow;
