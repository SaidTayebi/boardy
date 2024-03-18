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
  const {x, y, width} = layer

  return (
    <circle 
      className="drop-shadow-md"
      style={{
        transform: `translate(${x}px, ${y}px)`
      }}
      cx={0}
      cy={0}
      r={width / 2}
      stroke="transparent"
      strokeWidth={1}
      fill="#000"
      onPointerDown={e => onPointerDown(e, id)}
    />
  )
}