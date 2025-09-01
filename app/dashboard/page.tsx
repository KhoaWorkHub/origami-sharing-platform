"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Play,
  Clock,
  Award,
  TrendingUp,
  Heart,
  Download,
  Star,
  Users,
  DollarSign,
  Eye,
  BarChart3,
  Settings,
  Bell,
  Search,
  Filter,
  Plus,
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">OT</span>
            </div>
            <span className="font-bold text-xl text-foreground">OrigamiTech</span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/diverse-user-avatars.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container max-w-7xl mx-auto py-6 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Continue your origami journey and track your progress</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Hours Learned</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">47.5</div>
                  <p className="text-xs text-muted-foreground">+8.2 this week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Certificates</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">3 pending completion</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Skill Level</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Intermediate</div>
                  <p className="text-xs text-muted-foreground">75% to Advanced</p>
                </CardContent>
              </Card>
            </div>

            {/* Continue Learning */}
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Advanced Dragon Folding",
                      instructor: "Satoshi Kamiya",
                      progress: 65,
                      nextLesson: "Complex Base Techniques",
                      image: "/origami-dragon.png",
                    },
                    {
                      title: "Modular Origami Mastery",
                      instructor: "Tomoko Fuse",
                      progress: 40,
                      nextLesson: "Kusudama Assembly",
                      image: "/modular-origami.png",
                    },
                  ].map((course, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 border rounded-lg hover:bg-card transition-colors"
                    >
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-20 h-15 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Progress value={course.progress} className="flex-1" />
                          <span className="text-sm text-muted-foreground">{course.progress}%</span>
                        </div>
                        <p className="text-sm text-primary mt-1">Next: {course.nextLesson}</p>
                      </div>
                      <Button>
                        <Play className="mr-2 h-4 w-4" />
                        Continue
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: "Completed", item: "Paper Crane Tutorial", time: "2 hours ago", icon: Award },
                      { action: "Started", item: "Advanced Dragon Course", time: "1 day ago", icon: Play },
                      { action: "Downloaded", item: "Lotus Flower Guide", time: "3 days ago", icon: Download },
                      { action: "Favorited", item: "Butterfly Collection", time: "1 week ago", icon: Heart },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="bg-primary/10 rounded-full p-2">
                          <activity.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">{activity.action}</span> {activity.item}
                          </p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended for You</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Wet-folding Techniques",
                        instructor: "Akira Yoshizawa",
                        rating: 4.9,
                        image: "/wet-folding-origami.png",
                      },
                      {
                        title: "Geometric Patterns",
                        instructor: "Jun Maekawa",
                        rating: 4.8,
                        image: "/geometric-origami.png",
                      },
                    ].map((course, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 border rounded-lg hover:bg-card transition-colors"
                      >
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{course.title}</h4>
                          <p className="text-xs text-muted-foreground">by {course.instructor}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{course.rating}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Courses</h2>
              <div className="flex items-center gap-2">
                <Input placeholder="Search courses..." className="w-64" />
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Origami Fundamentals",
                  instructor: "Akira Yoshizawa",
                  progress: 100,
                  status: "Completed",
                  image: "/origami-fundamentals.png",
                  certificate: true,
                },
                {
                  title: "Advanced Dragon Folding",
                  instructor: "Satoshi Kamiya",
                  progress: 65,
                  status: "In Progress",
                  image: "/placeholder.svg?height=150&width=250",
                  certificate: false,
                },
                {
                  title: "Modular Origami Mastery",
                  instructor: "Tomoko Fuse",
                  progress: 40,
                  status: "In Progress",
                  image: "/modular-origami-kusudama.png",
                  certificate: false,
                },
              ].map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <Badge
                      className="absolute top-3 right-3"
                      variant={course.status === "Completed" ? "default" : "secondary"}
                    >
                      {course.status}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>by {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>

                      <div className="flex items-center gap-2">
                        {course.status === "Completed" ? (
                          <>
                            <Button className="flex-1">
                              <Award className="mr-2 h-4 w-4" />
                              View Certificate
                            </Button>
                            <Button variant="outline">Review</Button>
                          </>
                        ) : (
                          <Button className="w-full">
                            <Play className="mr-2 h-4 w-4" />
                            Continue Learning
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Favorites</h2>
              <div className="flex items-center gap-2">
                <Input placeholder="Search favorites..." className="w-64" />
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="courses" className="space-y-4">
              <TabsList>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="instructors">Instructors</TabsTrigger>
              </TabsList>

              <TabsContent value="courses">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Wet-folding Masterclass",
                      instructor: "Akira Yoshizawa",
                      price: "$79",
                      rating: 4.9,
                      image: "/placeholder.svg?height=150&width=250",
                    },
                    {
                      title: "Complex Insect Models",
                      instructor: "Robert Lang",
                      price: "$99",
                      rating: 4.8,
                      image: "/placeholder.svg?height=150&width=250",
                    },
                  ].map((course, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <div className="relative">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                        >
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>by {course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{course.rating}</span>
                          </div>
                          <span className="text-xl font-bold text-primary">{course.price}</span>
                        </div>
                        <Button className="w-full">Enroll Now</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="guides">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Elegant Swan",
                      difficulty: "Medium",
                      time: "45 min",
                      image: "/placeholder.svg?height=120&width=180",
                    },
                    {
                      title: "Rose Flower",
                      difficulty: "Hard",
                      time: "60 min",
                      image: "/placeholder.svg?height=120&width=180",
                    },
                  ].map((guide, index) => (
                    <Card key={index} className="hover:shadow-md transition-all duration-300">
                      <div className="relative">
                        <img
                          src={guide.image || "/placeholder.svg"}
                          alt={guide.title}
                          className="w-full h-32 object-cover rounded-t-lg"
                        />
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                        >
                          <Heart className="h-3 w-3 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{guide.title}</h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                          <Badge variant="outline" className="text-xs">
                            {guide.difficulty}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {guide.time}
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <Play className="mr-2 h-3 w-3" />
                          Start Tutorial
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Your Achievements</h2>
              <p className="text-muted-foreground">Track your progress and celebrate your milestones</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "First Steps",
                  description: "Complete your first origami tutorial",
                  icon: "🎯",
                  earned: true,
                  date: "Jan 15, 2025",
                },
                {
                  title: "Crane Master",
                  description: "Master the classic paper crane",
                  icon: "🕊️",
                  earned: true,
                  date: "Jan 20, 2025",
                },
                {
                  title: "Week Warrior",
                  description: "Learn for 7 consecutive days",
                  icon: "🔥",
                  earned: true,
                  date: "Jan 28, 2025",
                },
                {
                  title: "Dragon Slayer",
                  description: "Complete an advanced dragon model",
                  icon: "🐉",
                  earned: false,
                  progress: 65,
                },
                {
                  title: "Community Helper",
                  description: "Help 10 fellow students",
                  icon: "🤝",
                  earned: false,
                  progress: 30,
                },
                {
                  title: "Master Folder",
                  description: "Earn 10 certificates",
                  icon: "🏆",
                  earned: false,
                  progress: 80,
                },
              ].map((achievement, index) => (
                <Card key={index} className={`${achievement.earned ? "bg-primary/5 border-primary/20" : "opacity-75"}`}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className="font-bold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>

                    {achievement.earned ? (
                      <div>
                        <Badge className="mb-2">Earned</Badge>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    ) : (
                      <div>
                        <Progress value={achievement.progress} className="mb-2" />
                        <p className="text-xs text-muted-foreground">{achievement.progress}% complete</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="instructor" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Instructor Dashboard</h2>
                <p className="text-muted-foreground">Manage your courses and track your teaching performance</p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create New Course
              </Button>
            </div>

            {/* Instructor Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,247</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$8,420</div>
                  <p className="text-xs text-muted-foreground">+18% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Course Views</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15,680</div>
                  <p className="text-xs text-muted-foreground">+8% from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8</div>
                  <p className="text-xs text-muted-foreground">Based on 342 reviews</p>
                </CardContent>
              </Card>
            </div>

            {/* My Courses */}
            <Card>
              <CardHeader>
                <CardTitle>My Courses</CardTitle>
                <CardDescription>Manage and track your course performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Origami Fundamentals",
                      students: 847,
                      revenue: "$4,235",
                      rating: 4.9,
                      status: "Published",
                      image: "/placeholder.svg?height=50&width=70",
                    },
                    {
                      title: "Advanced Wet-folding",
                      students: 234,
                      revenue: "$2,340",
                      rating: 4.8,
                      status: "Published",
                      image: "/placeholder.svg?height=50&width=70",
                    },
                    {
                      title: "Complex Dragon Models",
                      students: 166,
                      revenue: "$1,845",
                      rating: 4.7,
                      status: "Draft",
                      image: "/placeholder.svg?height=50&width=70",
                    },
                  ].map((course, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{course.title}</h3>
                          <Badge variant={course.status === "Published" ? "default" : "secondary"}>
                            {course.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{course.students} students</span>
                          <span>{course.revenue} revenue</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Analytics
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
