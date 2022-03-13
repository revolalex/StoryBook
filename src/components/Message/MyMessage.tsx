import { message, Button } from "antd";






interface MyMessageProps {
  message?: string;
  buttonText?: string;
  messageType: "info" | "success" | "error" | "warning";
  duration?:3|4|5|6|7|8|9|10;
  backgroundColor?: string;
}

const MyMessage = ({backgroundColor,...props }:MyMessageProps) => {
  const info = (messageType:string) => {
    switch (messageType) {
      case "info":
        message.info(props.message || "This is a info message", props.duration);
        break;
      case "success":
        message.success(props.message || "This is a succes message", props.duration);
        break;
      case "error":
        message.error(props.message || "This is a error message", props.duration);
        break;
      case "warning":
        message.warning(props.message || "This is a warning message", props.duration);
        break;
      default:
        message.info(props.message || "This is a normal message", props.duration);
    }
  };
  return (

    <Button type="primary" onClick={()=>info(props.messageType)}       style={{ backgroundColor }} >
      {props.buttonText || "Click me"}
    </Button>
  );
};
export default MyMessage;
