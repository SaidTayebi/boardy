import { getStroke } from "perfect-freehand"
import { getSvgPathFromStroke } from "@/lib/utils";

interface PathProps {
  x: number;
  y: number;
  points: number[][];
  fill: string;
  stroke?: string;
  onPointerDown?: (e: React.PointerEvent) => void;
}

export const Path = ({
  x, y, points, fill, stroke, onPointerDown
}: PathProps) => {
  return (
    <path 
      className="drop-shadow-md"
      d={getSvgPathFromStroke(
        getStroke(points, {
          size: 16,
          thinning: 0.5,
          smoothing: 0.5,
          streamline: 0.5
        })
      )}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      x={0}
      y={0}
      fill={fill}
      stroke={stroke}
      strokeWidth={1}
      onPointerDown={onPointerDown}
    />
  )
}