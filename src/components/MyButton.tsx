import { Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';

interface MyButtonProp {
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: boolean;
  size?: "large" | "middle" | "small";
  type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
  onClick?: () => void;
  backgroundColor?: string;
  ghost?: boolean;
  shape?: "circle" | "round" | "default";
}

const MyButton = ({
  shape,
  label,
  type,
  disabled,
  ghost,
  loading,
  icon,
  backgroundColor,
  ...props
}: MyButtonProp) => {
  return (
    <Button
      disabled={disabled || false}
      loading={loading || false}
      ghost={ghost}
      type={type|| 'primary'}
      style={{ backgroundColor }}
      icon={icon && <SearchOutlined />}
      shape={shape}
      {...props}
    >
      {label}
    </Button>
  );
};

export default MyButton;
