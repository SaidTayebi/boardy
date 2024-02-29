"use client"

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutations";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean
}

const NewBoardButton = ({orgId, disabled}: NewBoardButtonProps) => {
  const { mutate, pending} = useApiMutation(api.board.create)

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled"
    }).then(id => {
      toast.success("Board created")
      // TODO: Redirect to /board/{id}
    })
    .catch(() => toast.error("Failed to create board"))
  }
  return (
    <button
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (pending || disabled) && "opacicy-75 hover:bg-blue-600 cursor-not-allowed"
      )}  
      disabled={pending || disabled}
      onClick={onClick}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">
        New board
      </p>
    </button>
  )
}

export default NewBoardButton