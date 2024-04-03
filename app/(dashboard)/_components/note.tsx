import { cn, colorToCss, getContrastingTextColor } from "@/lib/utils";
import { useMutation } from "@/liveblocks.config";
import { NoteLayer } from "@/types/canvas";
import { Kalam } from "next/font/google";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const font = Kalam({
  subsets: ["latin"],
  weight: ["400"]
});

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96
  const scaleFactor = 0.15
  const fontSizeBasedOnHeight = height * scaleFactor
  const fontSizeBasedOnWidth = width * scaleFactor

  return Math.min(maxFontSize, fontSizeBasedOnHeight, fontSizeBasedOnWidth, maxFontSize)
}

interface NoteProps {
  id: string;
  layer: NoteLayer;
  selectionColor?: string;
  onPointerDown: (e: React.PointerEvent, id: string) => void
}

export const Note = ({
  id,
  layer,
  selectionColor,
  onPointerDown
}: NoteProps) => {
  const { x, y, width, height, fill, value } = layer

  const updateValue = useMutation((
    { storage }, 
    newValue: string
  ) => {
    const liveLayers = storage.get("layers")

    liveLayers.get(id)?.set("value", newValue)
  }, [])

  const handleContentChange = (e: ContentEditableEvent) => {
    updateValue(e.target.value)
  }

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      className="shadow-md drop-shadow-xl"
      style={{
        outline: selectionColor ? `21px ${selectionColor}` : "none",
        backgroundColor: fill ? colorToCss(fill) : "#000"
      }}
      onPointerDown={e => onPointerDown(e, id)}
    >
      <ContentEditable
        className={cn(
          "h-full w-full flex items-center justify-center text-center outline-none",
          font.className
        )}
        style={{
          color: fill ? getContrastingTextColor(fill) : "#000",
          fontSize: calculateFontSize(width, height)
        }}
        html={value || "Text"}
        onChange={handleContentChange}
      />
    </foreignObject>
  )
}