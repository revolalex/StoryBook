import { Card, Empty } from "antd";
import { CSSProperties, ReactNode } from "react";
const { Meta } = Card;

interface MyCardProp {
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
  empty?: boolean;
  children?: ReactNode;
}

const Mycard = ({
  style,
  extra,
  title,
  metaTitle,
  displayMeta,
  metaDescription,
  ...props
}: MyCardProp) => {
  return (
    <Card
      title={title || "Default size card"}
      extra={extra}
      style={style || { width: 300 }}
      {...props}
    >
      {displayMeta && (
        <Meta 
        title={metaTitle || "metaTitle"} 
        description={metaDescription||"metaDescription"} 
        />
      )}
    {props.empty&&<Empty />}
    {props.children}
    </Card>
  );
};

export default Mycard;
