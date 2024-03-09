"use client"

import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}

export const ToolButton = ({
  label,
  icon: Icon,
  isActive,
  isDisabled,
  onClick
}: ToolButtonProps) => {
  return (
    <Hint label={label} side="right" sideOffset={14}>
      <Button
        disabled={isDisabled}
        size="icon"
        variant={isActive ? "boardActive" : "board"}
        onClick={onClick}
      >
        <Icon />
      </Button>
    </Hint>
  )
}