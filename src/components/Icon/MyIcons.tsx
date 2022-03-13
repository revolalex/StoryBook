import { Space } from "antd";
import {
  HomeOutlined,
  HeartTwoTone,
  QuestionCircleTwoTone,
  QuestionCircleOutlined,
  AppleFilled,
  MessageFilled
} from "@ant-design/icons";

interface MyIconsProp {
  className?: string;
  rotate?: number;
  spin?: boolean;
  twoToneColor?: string;
  backgroundColor?: string;
}

const MyIcons = ({
  className,
  rotate,
  spin,
  twoToneColor,
  backgroundColor,
  ...props
}: MyIconsProp) => {
  return (
    <Space>
      <QuestionCircleOutlined
        className={className}
        rotate={rotate}
        spin={spin}
        twoToneColor={twoToneColor}
        style={{ backgroundColor }}
      />
      <HomeOutlined
        className={className}
        rotate={rotate}
        spin={spin}
        twoToneColor={twoToneColor}
        style={{ backgroundColor }}
      />
      <HeartTwoTone
        className={className}
        rotate={rotate}
        spin={spin}
        twoToneColor={twoToneColor}
        style={{ backgroundColor }}
      />
      <QuestionCircleTwoTone
        className={className}
        rotate={rotate}
        spin={spin}
        twoToneColor={twoToneColor}
        style={{ backgroundColor }}
      />
      <AppleFilled
        className={className}
        rotate={rotate}
        spin={spin}
        twoToneColor={twoToneColor}
        style={{ backgroundColor }}
      />

      <MessageFilled
        className={className}
        rotate={rotate}
        spin={spin}
        twoToneColor={twoToneColor}
        style={{ backgroundColor }}
      />
    </Space>
  );
};

export default MyIcons;
