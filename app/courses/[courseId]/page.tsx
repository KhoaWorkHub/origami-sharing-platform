import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Play, Star, Users, CheckCircle, Lock } from "lucide-react"
import Link from "next/link"

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const course = {
    id: params.courseId,
    title: "Origami Crane Mastery",
    instructor: "Akira Yoshizawa",
    description:
      "Learn the traditional art of paper crane folding with step-by-step video tutorials. This comprehensive course covers everything from basic folds to advanced techniques.",
    thumbnail: "/origami-crane-tutorial.png",
    duration: "2h 30m",
    lessons: 12,
    students: 1247,
    rating: 4.8,
    reviews: 156,
    price: 299000,
    level: "Beginner",
    category: "Traditional",
    enrolled: false,
    progress: 0,
  }

  const lessons = [
    { id: 1, title: "Introduction to Paper Folding", duration: "8:30", completed: false, free: true },
    { id: 2, title: "Basic Valley and Mountain Folds", duration: "12:45", completed: false, free: true },
    { id: 3, title: "Creating the Base Square", duration: "10:20", completed: false, free: false },
    { id: 4, title: "Forming the Bird Base", duration: "15:30", completed: false, free: false },
    { id: 5, title: "Shaping the Wings", duration: "18:15", completed: false, free: false },
    { id: 6, title: "Creating the Head and Tail", duration: "14:20", completed: false, free: false },
    { id: 7, title: "Final Assembly Techniques", duration: "16:45", completed: false, free: false },
    { id: 8, title: "Troubleshooting Common Issues", duration: "11:30", completed: false, free: false },
    { id: 9, title: "Advanced Crane Variations", duration: "20:15", completed: false, free: false },
    { id: 10, title: "Paper Selection Tips", duration: "9:45", completed: false, free: false },
    { id: 11, title: "Creating Multiple Cranes", duration: "13:20", completed: false, free: false },
    { id: 12, title: "Final Project and Presentation", duration: "19:40", completed: false, free: false },
  ]

  const reviews = [
    {
      id: 1,
      user: "Minh Nguyen",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2 days ago",
      comment:
        "Excellent course! The step-by-step instructions are very clear and easy to follow. I was able to make my first perfect crane after just a few lessons.",
    },
    {
      id: 2,
      user: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "1 week ago",
      comment:
        "Akira-sensei is an amazing instructor. His techniques are traditional yet easy to understand. Highly recommended for beginners!",
    },
    {
      id: 3,
      user: "Tran Van Duc",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "2 weeks ago",
      comment:
        "Great course overall. The video quality is excellent and the pacing is perfect. Would love to see more advanced techniques in future courses.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-amber-600">
              OrigamiTech
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-amber-600">
                Home
              </Link>
              <Link href="/courses" className="text-gray-600 hover:text-amber-600">
                Courses
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-amber-600">
                Dashboard
              </Link>
            </nav>
            <Button>Sign In</Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-500">{course.level}</Badge>
                <Badge variant="outline">{course.category}</Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.description}</p>

              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Play className="h-4 w-4 mr-1" />
                  {course.lessons} lessons
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {course.students.toLocaleString()} students
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback>AY</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">{course.instructor}</p>
                  <p className="text-sm text-gray-500">Master Origami Artist</p>
                </div>
              </div>
            </div>

            {/* Course Content Tabs */}
            <Tabs defaultValue="lessons" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
              </TabsList>

              <TabsContent value="lessons" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                    <CardDescription>
                      {course.lessons} lessons • {course.duration} total length
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {lessons.map((lesson, index) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                              {lesson.completed ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : lesson.free ? (
                                <Play className="h-5 w-5 text-amber-600" />
                              ) : (
                                <Lock className="h-5 w-5 text-gray-400" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {index + 1}. {lesson.title}
                              </h4>
                              <p className="text-sm text-gray-500">{lesson.duration}</p>
                            </div>
                          </div>
                          <div>
                            {lesson.free ? (
                              <Link href={`/courses/${course.id}/lessons/${lesson.id}`}>
                                <Button variant="outline" size="sm">
                                  {lesson.completed ? "Review" : "Watch"}
                                </Button>
                              </Link>
                            ) : (
                              <Badge variant="secondary">Premium</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(course.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-medium">{course.rating}</span>
                      <span className="text-gray-500">({course.reviews} reviews)</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage src={review.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-medium">{review.user}</h4>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <p className="text-gray-700">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add Review Form */}
                    <div className="mt-8 pt-6 border-t">
                      <h4 className="font-medium mb-4">Write a Review</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Rating</label>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-6 w-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors"
                              />
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Your Review</label>
                          <Textarea placeholder="Share your experience with this course..." rows={4} />
                        </div>
                        <Button className="bg-amber-600 hover:bg-amber-700">Submit Review</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About the Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-6">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" />
                        <AvatarFallback className="text-2xl">AY</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{course.instructor}</h3>
                        <p className="text-gray-600 mb-4">Master Origami Artist & Traditional Paper Folding Expert</p>
                        <p className="text-gray-700 mb-6">
                          Akira Yoshizawa is a renowned origami master with over 30 years of experience in traditional
                          Japanese paper folding. He has taught thousands of students worldwide and is known for his
                          clear, methodical teaching approach that makes complex folding techniques accessible to
                          beginners.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Students:</span> 15,247
                          </div>
                          <div>
                            <span className="font-medium">Courses:</span> 12
                          </div>
                          <div>
                            <span className="font-medium">Rating:</span> 4.9/5
                          </div>
                          <div>
                            <span className="font-medium">Experience:</span> 30+ years
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                      <Play className="h-6 w-6 mr-2" />
                      Preview Course
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{course.price.toLocaleString("vi-VN")}đ</div>
                  <p className="text-sm text-gray-500">One-time payment</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-6">Enroll Now</Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Add to Wishlist
                </Button>

                <div className="pt-4 border-t space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Lessons:</span>
                    <span className="font-medium">{course.lessons}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Level:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Language:</span>
                    <span className="font-medium">Vietnamese</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Certificate:</span>
                    <span className="font-medium">Yes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
