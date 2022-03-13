import { Alert, message } from "antd";
import { MouseEventHandler, ReactNode } from "react";

interface MyAlertProp {
  afterClose?: () => void;
  type?: "success" | "info" | "warning" | "error";
  banner?: boolean;
  closable?: boolean;
  description?: string;
  showIcon?: boolean;
  message?: string;
  backgroundColor?: string;
  closeText?: string;
  onClose?: () => void; //MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
  action?: ReactNode;
  closeIcon?: ReactNode;
  icon?: ReactNode;
}

const MyAlert = ({ backgroundColor, type, ...props }: MyAlertProp) => {
  return (
    <Alert
      type={type || "success"}
      style={{ backgroundColor }}
      message={message || "this is an alert"}
      {...props}
    >
      {props.children}
    </Alert>
  );
};

export default MyAlert;
