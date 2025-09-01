"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingWidgetProps {
  initialRating?: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
  readonly?: boolean
  showValue?: boolean
  onRatingChange?: (rating: number) => void
  className?: string
}

export function RatingWidget({
  initialRating = 0,
  maxRating = 5,
  size = "md",
  readonly = false,
  showValue = false,
  onRatingChange,
  className,
}: RatingWidgetProps) {
  const [rating, setRating] = useState(initialRating)
  const [hoverRating, setHoverRating] = useState(0)

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  const handleRatingClick = (value: number) => {
    if (readonly) return

    setRating(value)
    onRatingChange?.(value)
  }

  const handleMouseEnter = (value: number) => {
    if (readonly) return
    setHoverRating(value)
  }

  const handleMouseLeave = () => {
    if (readonly) return
    setHoverRating(0)
  }

  const displayRating = hoverRating || rating

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center">
        {[...Array(maxRating)].map((_, index) => {
          const starValue = index + 1
          const isFilled = starValue <= displayRating

          return (
            <button
              key={index}
              type="button"
              className={cn("transition-colors", readonly ? "cursor-default" : "cursor-pointer hover:scale-110")}
              onClick={() => handleRatingClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              disabled={readonly}
            >
              <Star
                className={cn(
                  sizeClasses[size],
                  isFilled ? "text-yellow-400 fill-current" : "text-gray-300",
                  !readonly && "hover:text-yellow-400",
                )}
              />
            </button>
          )
        })}
      </div>

      {showValue && (
        <span className="text-sm font-medium ml-2">{rating > 0 ? `${rating}/${maxRating}` : "No rating"}</span>
      )}
    </div>
  )
}

// Preset rating display component
export function RatingDisplay({
  rating,
  maxRating = 5,
  size = "sm",
  showValue = true,
  reviewCount,
  className,
}: {
  rating: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
  showValue?: boolean
  reviewCount?: number
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <RatingWidget initialRating={rating} maxRating={maxRating} size={size} readonly={true} />
      {showValue && (
        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium">{rating.toFixed(1)}</span>
          {reviewCount && <span className="text-gray-500">({reviewCount.toLocaleString()})</span>}
        </div>
      )}
    </div>
  )
}
