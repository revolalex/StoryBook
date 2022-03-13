import { Progress } from "antd";

interface ProgressProps {
  percent?: number;
  showInfo?: boolean;
  status?: "success" | "exception" | "normal" | "active";
  strokeLinecap?: "round" | "square";
  succes?: { percent: number; strokeColor: string };
  // The color of unfilled part
  trailColor?: string;
  format?: (percent?: number) => string;
  type?: "line" | "circle" | "dashboard";
  // only if type is line
  steps?: number;
  // only if type is circle
  strokeColor?: string | { from: string; to: string; direction: string };
  strokeWidth?: number;
  width?: number;

  // only if type dashboard
  gapDegree?: number;
  gapPosition?: "top" | "bottom" | "left" | "right";
}


const MyProgress = ({ percent, status, type, showInfo, ...props }: ProgressProps) => {
  return (
    <Progress
      percent={percent || 50}
      status={status || "normal"}
      type={type || "line"}
      showInfo={showInfo || false}
      {...props}
    />
  );
};
export default MyProgress;
