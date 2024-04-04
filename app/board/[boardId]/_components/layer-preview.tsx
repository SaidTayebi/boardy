"use client";

import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import { memo } from "react";
import { Rectangle } from "./rectangle";
import { Ellipse } from "./ellipse";
import { Text } from "@/app/(dashboard)/_components/text";
import { Note } from "@/app/(dashboard)/_components/note";
import { Path } from "./path";
import { colorToCss } from "@/lib/utils";

interface LayerPreviewProps {
  id :string;
  selectionColor?: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void
}

export const LayerPreview = memo(({
  id, selectionColor, onLayerPointerDown
}: LayerPreviewProps)  => {
  const layer = useStorage((root) => root.layers.get(id))

  if (!layer) {
    return null
  }

  switch (layer.type) {
    case LayerType.Path:
      return (
        <Path 
          key={id}
          x={layer.x}
          y={layer.y}
          points={layer.points}
          stroke={selectionColor}
          fill={layer.fill ? colorToCss(layer.fill) : "#000"}
          onPointerDown={e => onLayerPointerDown(e, id)}
        />
      )
    case LayerType.Rectangle:
      return (
        <Rectangle
          id={id}
          selectionColor={selectionColor}
          layer={layer}
          onPointerDown={onLayerPointerDown}
        />
      )
    case LayerType.Ellipse:
      return (
        <Ellipse 
          id={id}
          selectionColor={selectionColor}
          layer={layer}
          onPointerDown={onLayerPointerDown}
        />
      )
    case LayerType.Text:
      return (
        <Text 
          id={id}
          layer={layer}
          selectionColor={selectionColor}
          onPointerDown={onLayerPointerDown}
        />
      )
    case LayerType.Note:
      return (
        <Note 
          id={id}
          layer={layer}
          selectionColor={selectionColor}
          onPointerDown={onLayerPointerDown}
        />
      )
    default:
      console.log("Unknown layer type")
      return null
  }
})

LayerPreview.displayName = "LayerPreview"