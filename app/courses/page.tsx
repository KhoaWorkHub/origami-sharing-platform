import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Play, Search, Star, Users } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const courses = [
    {
      id: "1",
      title: "Origami Crane Mastery",
      instructor: "Akira Yoshizawa",
      description: "Learn the traditional art of paper crane folding with step-by-step video tutorials",
      thumbnail: "/origami-crane-tutorial.png",
      duration: "2h 30m",
      lessons: 12,
      students: 1247,
      rating: 4.8,
      reviews: 156,
      price: 299000,
      level: "Beginner",
      category: "Traditional",
    },
    {
      id: "2",
      title: "Advanced Dragon Folding",
      instructor: "Satoshi Kamiya",
      description: "Master complex dragon designs with advanced folding techniques",
      thumbnail: "/origami-dragon-complex.png",
      duration: "4h 15m",
      lessons: 18,
      students: 892,
      rating: 4.9,
      reviews: 203,
      price: 599000,
      level: "Advanced",
      category: "Complex",
    },
    {
      id: "3",
      title: "Modular Origami Kusudama",
      instructor: "Tomoko Fuse",
      description: "Create beautiful modular origami balls and geometric shapes",
      thumbnail: "/modular-origami-kusudama.png",
      duration: "3h 45m",
      lessons: 15,
      students: 634,
      rating: 4.7,
      reviews: 89,
      price: 449000,
      level: "Intermediate",
      category: "Modular",
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
              <Link href="/courses" className="text-amber-600 font-medium">
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
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Origami Courses</h1>
          <p className="text-xl text-gray-600">Master the art of paper folding with expert-led video courses</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search courses..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Difficulty Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="traditional">Traditional</SelectItem>
              <SelectItem value="complex">Complex</SelectItem>
              <SelectItem value="modular">Modular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                    <Play className="h-5 w-5 mr-2" />
                    Preview
                  </Button>
                </div>
                <Badge
                  className={`absolute top-3 right-3 ${
                    course.level === "Beginner"
                      ? "bg-green-500"
                      : course.level === "Intermediate"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                >
                  {course.level}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>by {course.instructor}</CardDescription>
                <p className="text-sm text-gray-600 mt-2">{course.description}</p>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                    {course.students.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(course.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({course.reviews})</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-600">{course.price.toLocaleString("vi-VN")}đ</div>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Link href={`/courses/${course.id}`} className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">View Course</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
