import { colorToCss } from "@/lib/utils";
import { RectangleLayer } from "@/types/canvas";

interface RectangleProps {
  id: string;
  layer: RectangleLayer;
  selectionColor?: string;
  onPointerDown: (e: React.PointerEvent, is: string) => void
}

export const Rectangle = ({
  id,
  layer,
  selectionColor,
  onPointerDown
}: RectangleProps) => {
  const {x, y, width, height, fill} = layer

  return (
    <rect 
      className="drop-shadow-md"
      style={{
        transform: `translate(${x}px, ${y}px)`
      }}
      x={0}
      y={0}
      width={width}
      height={height}
      stroke={selectionColor ?? "transparent"}
      strokeWidth={1}
      fill={fill ? colorToCss(fill) : "#000"}
      onPointerDown={e => onPointerDown(e, id)}
    />
  )
}