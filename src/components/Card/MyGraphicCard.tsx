import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { ReactNode } from "react";
import { CSSProperties } from "react";
const { Meta } = Card;

interface MyGraphicCardProps {
  imgUrl: string;
  title?: string;
  style?: object;
  extra?: ReactNode;
  loading?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  size?: "default" | "small";
  headStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  actions?: Array<ReactNode>;
  cover?: ReactNode;
  activeTabKey?: string;
  defaultActiveTabKey?: string;
  tabBarExtraContent?: ReactNode;
  tabList?: Array<{ key: string; tab: ReactNode }>;
  onTabChange?: (key: string) => void;
  displayMeta?: true;
  metaTitle?: string;
  metaDescription?: string;
}

const MyGraphicCard = (props: MyGraphicCardProps) => {
  return (
    <Card
    cover={
      <img
        alt="example"
        src={
          props.imgUrl ||
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        }
      />
    }
    title={props.title || "Default size card"}
    extra={props.extra}
    style={props.style || { width: 300 }}
    actions={props.actions ||[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
    {...props}
  >
    {props.displayMeta && (
      <Meta
        title={props.metaTitle || "metaTitle"}
        description={props.metaDescription || "metaDescription"}
      />
    )}
  </Card>
  );
};

export default MyGraphicCard;

