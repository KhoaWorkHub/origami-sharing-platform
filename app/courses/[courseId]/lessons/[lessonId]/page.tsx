import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Volume2,
  Settings,
  Maximize,
  ThumbsUp,
  MessageCircle,
  Share2,
  Download,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function LessonPage({
  params,
}: {
  params: { courseId: string; lessonId: string }
}) {
  const lesson = {
    id: params.lessonId,
    title: "Introduction to Paper Folding",
    description:
      "Learn the fundamental concepts of origami and basic paper folding techniques that form the foundation of all origami projects.",
    duration: "8:30",
    videoUrl: "/placeholder-video.mp4",
    completed: false,
    courseTitle: "Origami Crane Mastery",
    instructor: "Akira Yoshizawa",
  }

  const courseProgress = {
    currentLesson: 1,
    totalLessons: 12,
    completedLessons: 0,
    progressPercentage: 8,
  }

  const comments = [
    {
      id: 1,
      user: "Minh Nguyen",
      avatar: "/placeholder.svg?height=32&width=32",
      timestamp: "2:45",
      time: "2 hours ago",
      comment: "Great explanation of the valley fold technique! This really helped me understand the difference.",
      likes: 12,
      replies: 2,
    },
    {
      id: 2,
      user: "Sarah Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      timestamp: "5:20",
      time: "1 day ago",
      comment: "Could you show this step a bit slower? I'm having trouble following the hand movements.",
      likes: 8,
      replies: 1,
    },
    {
      id: 3,
      user: "Tran Van Duc",
      avatar: "/placeholder.svg?height=32&width=32",
      timestamp: "7:15",
      time: "3 days ago",
      comment: "Perfect! I finally got it right after watching this section multiple times. Thank you sensei!",
      likes: 15,
      replies: 0,
    },
  ]

  const nextLessons = [
    { id: 2, title: "Basic Valley and Mountain Folds", duration: "12:45", completed: false },
    { id: 3, title: "Creating the Base Square", duration: "10:20", completed: false },
    { id: 4, title: "Forming the Bird Base", duration: "15:30", completed: false },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Video Player Section */}
      <div className="relative bg-black">
        {/* Video Player */}
        <div className="aspect-video relative">
          <video className="w-full h-full object-cover" poster="/origami-paper-crane-step-by-step.png" controls>
            <source src={lesson.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Custom Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Play className="h-4 w-4" />
                </Button>
                <div className="flex items-center gap-2">
                  <span className="text-sm">2:45</span>
                  <Progress value={32} className="w-32" />
                  <span className="text-sm">8:30</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Volume2 className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Header */}
        <div className="bg-gray-900 text-white p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <Link
                href={`/courses/${params.courseId}`}
                className="flex items-center text-amber-400 hover:text-amber-300"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Course
              </Link>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
            <p className="text-gray-300 mb-4">{lesson.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>AY</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{lesson.instructor}</p>
                  <p className="text-sm text-gray-400">{lesson.courseTitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-400">Lesson Progress</p>
                  <div className="flex items-center gap-2">
                    <Progress value={courseProgress.progressPercentage} className="w-24" />
                    <span className="text-sm">
                      {courseProgress.currentLesson}/{courseProgress.totalLessons}
                    </span>
                  </div>
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark Complete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="comments">Comments ({comments.length})</TabsTrigger>
                  <TabsTrigger value="notes">My Notes</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Lesson Overview</CardTitle>
                      <CardDescription>What you'll learn in this lesson</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Learning Objectives</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              Understand the basic principles of origami
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              Learn proper paper selection and preparation
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              Master valley and mountain fold techniques
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              Practice basic folding patterns
                            </li>
                          </ul>
                        </div>

                        <Separator />

                        <div>
                          <h4 className="font-medium mb-2">Materials Needed</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Square origami paper (15cm x 15cm recommended)</li>
                            <li>• Clean, flat working surface</li>
                            <li>• Good lighting</li>
                          </ul>
                        </div>

                        <Separator />

                        <div>
                          <h4 className="font-medium mb-2">Key Timestamps</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                              <span>Introduction to Origami History</span>
                              <span className="text-amber-600 font-medium">0:00</span>
                            </div>
                            <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                              <span>Paper Selection Guide</span>
                              <span className="text-amber-600 font-medium">1:30</span>
                            </div>
                            <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                              <span>Valley Fold Demonstration</span>
                              <span className="text-amber-600 font-medium">3:15</span>
                            </div>
                            <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                              <span>Mountain Fold Technique</span>
                              <span className="text-amber-600 font-medium">5:45</span>
                            </div>
                            <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                              <span>Practice Exercise</span>
                              <span className="text-amber-600 font-medium">7:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="comments" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Discussion</CardTitle>
                      <CardDescription>Ask questions and share your progress with other students</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Add Comment Form */}
                      <div className="mb-6 p-4 border rounded-lg">
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback>You</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <Textarea
                              placeholder="Ask a question or share your thoughts about this lesson..."
                              rows={3}
                              className="mb-3"
                            />
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-gray-500">
                                Tip: Include a timestamp (e.g., 2:30) to reference specific parts of the video
                              </div>
                              <Button className="bg-amber-600 hover:bg-amber-700">Post Comment</Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Comments List */}
                      <div className="space-y-6">
                        {comments.map((comment) => (
                          <div key={comment.id} className="flex items-start gap-3">
                            <Avatar>
                              <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-sm">{comment.user}</span>
                                <Badge variant="outline" className="text-xs">
                                  {comment.timestamp}
                                </Badge>
                                <span className="text-xs text-gray-500">{comment.time}</span>
                              </div>
                              <p className="text-sm text-gray-700 mb-3">{comment.comment}</p>
                              <div className="flex items-center gap-4">
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <ThumbsUp className="h-3 w-3 mr-1" />
                                  {comment.likes}
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <MessageCircle className="h-3 w-3 mr-1" />
                                  Reply
                                </Button>
                                {comment.replies > 0 && (
                                  <Button variant="ghost" size="sm" className="h-8 px-2 text-amber-600">
                                    View {comment.replies} {comment.replies === 1 ? "reply" : "replies"}
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notes" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Notes</CardTitle>
                      <CardDescription>Take notes while watching the lesson</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Textarea placeholder="Write your notes here..." rows={10} className="mb-4" />
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">Your notes are automatically saved</p>
                        <Button variant="outline">Export Notes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Navigation */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Lesson Navigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Button variant="outline" size="sm" disabled>
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Button>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">Course Progress</p>
                    <Progress value={courseProgress.progressPercentage} className="mb-2" />
                    <p className="text-sm font-medium">
                      {courseProgress.currentLesson} of {courseProgress.totalLessons} lessons
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Up Next */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Up Next</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {nextLessons.map((nextLesson) => (
                      <div
                        key={nextLesson.id}
                        className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <Play className="h-4 w-4 text-amber-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{nextLesson.title}</h4>
                          <p className="text-xs text-gray-500">{nextLesson.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    View All Lessons
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
