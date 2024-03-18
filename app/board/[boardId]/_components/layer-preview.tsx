"use client";

import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import { memo } from "react";
import { Rectangle } from "./rectangle";
import { Ellipse } from "./ellipse";

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
    default:
      console.log("Unknown layer type")
      return null
    
  }


})

LayerPreview.displayName = "LayerPreview"