"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageCircle, Flag } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface Comment {
  id: string
  user: {
    name: string
    avatar?: string
  }
  content: string
  timestamp?: string
  createdAt: Date
  likes: number
  replies?: Comment[]
  isLiked?: boolean
}

interface CommentSystemProps {
  comments: Comment[]
  onAddComment?: (content: string, parentId?: string) => void
  onLikeComment?: (commentId: string) => void
  onReportComment?: (commentId: string) => void
  currentUser?: {
    name: string
    avatar?: string
  }
  placeholder?: string
  maxDepth?: number
}

export function CommentSystem({
  comments,
  onAddComment,
  onLikeComment,
  onReportComment,
  currentUser,
  placeholder = "Write a comment...",
  maxDepth = 3,
}: CommentSystemProps) {
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")

  const handleSubmitComment = () => {
    if (!newComment.trim()) return

    onAddComment?.(newComment)
    setNewComment("")
  }

  const handleSubmitReply = (parentId: string) => {
    if (!replyContent.trim()) return

    onAddComment?.(replyContent, parentId)
    setReplyContent("")
    setReplyingTo(null)
  }

  const CommentItem = ({
    comment,
    depth = 0,
  }: {
    comment: Comment
    depth?: number
  }) => (
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={comment.user.avatar || "/placeholder.svg"} />
          <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-sm">{comment.user.name}</span>
            {comment.timestamp && (
              <Badge variant="outline" className="text-xs">
                {comment.timestamp}
              </Badge>
            )}
            <span className="text-xs text-gray-500">{formatDistanceToNow(comment.createdAt, { addSuffix: true })}</span>
          </div>

          <p className="text-sm text-gray-700 mb-3 whitespace-pre-wrap">{comment.content}</p>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => onLikeComment?.(comment.id)}>
              <ThumbsUp className={`h-3 w-3 mr-1 ${comment.isLiked ? "text-blue-600 fill-current" : ""}`} />
              {comment.likes}
            </Button>

            {depth < maxDepth && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2"
                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              >
                <MessageCircle className="h-3 w-3 mr-1" />
                Reply
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-gray-400 hover:text-red-500"
              onClick={() => onReportComment?.(comment.id)}
            >
              <Flag className="h-3 w-3" />
            </Button>
          </div>

          {/* Reply Form */}
          {replyingTo === comment.id && (
            <div className="mt-3 flex items-start gap-3">
              <Avatar className="h-6 w-6">
                <AvatarImage src={currentUser?.avatar || "/placeholder.svg"} />
                <AvatarFallback>{currentUser?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder={`Reply to ${comment.user.name}...`}
                  rows={2}
                  className="mb-2"
                />
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => handleSubmitReply(comment.id)} disabled={!replyContent.trim()}>
                    Reply
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setReplyingTo(null)
                      setReplyContent("")
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Nested Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-11 space-y-3 border-l-2 border-gray-100 pl-4">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Add Comment Form */}
      {currentUser && (
        <div className="flex items-start gap-3 p-4 border rounded-lg">
          <Avatar>
            <AvatarImage src={currentUser.avatar || "/placeholder.svg"} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={placeholder}
              rows={3}
              className="mb-3"
            />
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Tip: Be respectful and constructive in your comments</div>
              <Button
                onClick={handleSubmitComment}
                disabled={!newComment.trim()}
                className="bg-amber-600 hover:bg-amber-700"
              >
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)
        )}
      </div>
    </div>
  )
}
