import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

const Footer = ({title, authorLabel, createdAtLabel, isFavorite, onClick, disabled}: FooterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation()
    event.preventDefault()
    onClick()
  }

  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">
        {title}
      </p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 hover:text-blue-600 text-muted-foreground",
          disabled && "cursor-not-allowed opacity-75"
        )}
        disabled={disabled}
        onClick={handleClick}
      >
        <Star 
          className={cn(
            "h-4 w-4",
            isFavorite && "fill-blue-600 text-blue-600"
          )}
        />
      </button>
    </div>
  )
}

export default Footer