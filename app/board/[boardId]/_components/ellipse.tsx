import { colorToCss } from "@/lib/utils";
import { EllipseLayer } from "@/types/canvas";

interface EllipseProps {
  id: string;
  layer: EllipseLayer;
  selectionColor?: string;
  onPointerDown: (e: React.PointerEvent, is: string) => void
}

export const Ellipse = ({
  id,
  layer,
  selectionColor,
  onPointerDown
}: EllipseProps) => {
  const {x, y, width, height} = layer

  return (
    <ellipse 
      className="drop-shadow-md"
      style={{
        transform: `translate(${x}px, ${y}px)`
      }}
      cx={width / 2}
      cy={height / 2}
      rx={width / 2}
      ry={height / 2}
      fill={layer.fill ? colorToCss(layer.fill) : "#000"} 
      stroke={selectionColor ||  "transparent"}
      strokeWidth={1}
      onPointerDown={e => onPointerDown(e, id)}
    />
  )
}