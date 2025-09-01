"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Calendar,
  Download,
  Settings,
  Bell,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminDashboard() {
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
            <span className="font-bold text-xl text-foreground">OrigamiTech Admin</span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container max-w-7xl mx-auto py-6 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage platform operations and monitor performance</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">52,847</div>
                  <p className="text-xs text-muted-foreground">+12.5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,247</div>
                  <p className="text-xs text-muted-foreground">+8.2% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$284,750</div>
                  <p className="text-xs text-muted-foreground">+18.7% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+24.3%</div>
                  <p className="text-xs text-muted-foreground">User acquisition rate</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity & Pending Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Content Reviews</CardTitle>
                  <CardDescription>Content awaiting moderation approval</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Advanced Tessellation Patterns",
                        instructor: "Maria Santos",
                        type: "Course",
                        submitted: "2 hours ago",
                        status: "pending",
                      },
                      {
                        title: "Origami Architecture Guide",
                        instructor: "David Chen",
                        type: "Guide",
                        submitted: "5 hours ago",
                        status: "pending",
                      },
                      {
                        title: "Complex Insect Models",
                        instructor: "Robert Lang",
                        type: "Course",
                        submitted: "1 day ago",
                        status: "review",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            by {item.instructor} • {item.type} • {item.submitted}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{item.status}</Badge>
                          <Button size="sm" variant="outline">
                            Review
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Alerts</CardTitle>
                  <CardDescription>Important notifications and issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        type: "warning",
                        message: "High server load detected",
                        time: "15 minutes ago",
                        icon: AlertTriangle,
                      },
                      {
                        type: "info",
                        message: "Weekly backup completed successfully",
                        time: "2 hours ago",
                        icon: CheckCircle,
                      },
                      {
                        type: "error",
                        message: "Payment gateway timeout reported",
                        time: "4 hours ago",
                        icon: XCircle,
                      },
                    ].map((alert, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                        <div
                          className={`p-2 rounded-full ${
                            alert.type === "warning"
                              ? "bg-yellow-100 text-yellow-600"
                              : alert.type === "error"
                                ? "bg-red-100 text-red-600"
                                : "bg-green-100 text-green-600"
                          }`}
                        >
                          <alert.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{alert.message}</p>
                          <p className="text-xs text-muted-foreground">{alert.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">User Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Active Today</span>
                      <span className="font-medium">8,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">New Registrations</span>
                      <span className="font-medium">342</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Course Completions</span>
                      <span className="font-medium">156</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Content Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Published Courses</span>
                      <span className="font-medium">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Free Guides</span>
                      <span className="font-medium">3,456</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Pending Review</span>
                      <span className="font-medium">23</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Revenue Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Course Sales</span>
                      <span className="font-medium">$234,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Premium Content</span>
                      <span className="font-medium">$42,750</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Platform Fees</span>
                      <span className="font-medium">$7,500</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">User Management</h2>
              <div className="flex items-center gap-2">
                <Input placeholder="Search users..." className="w-64" />
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Courses</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "John Doe",
                        email: "john@example.com",
                        role: "Student",
                        status: "Active",
                        joined: "Jan 15, 2025",
                        courses: 8,
                        revenue: "$420",
                        avatar: "/placeholder.svg?height=32&width=32",
                      },
                      {
                        name: "Sarah Wilson",
                        email: "sarah@example.com",
                        role: "Instructor",
                        status: "Active",
                        joined: "Dec 3, 2024",
                        courses: 12,
                        revenue: "$2,340",
                        avatar: "/placeholder.svg?height=32&width=32",
                      },
                      {
                        name: "Mike Chen",
                        email: "mike@example.com",
                        role: "Student",
                        status: "Inactive",
                        joined: "Nov 20, 2024",
                        courses: 3,
                        revenue: "$150",
                        avatar: "/placeholder.svg?height=32&width=32",
                      },
                    ].map((user, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.role === "Instructor" ? "default" : "secondary"}>{user.role}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                        </TableCell>
                        <TableCell>{user.joined}</TableCell>
                        <TableCell>{user.courses}</TableCell>
                        <TableCell>{user.revenue}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Suspend User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Content Management</h2>
              <div className="flex items-center gap-2">
                <Input placeholder="Search content..." className="w-64" />
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="courses" className="space-y-4">
              <TabsList>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="pending">Pending Review</TabsTrigger>
              </TabsList>

              <TabsContent value="courses">
                <Card>
                  <CardHeader>
                    <CardTitle>Published Courses</CardTitle>
                    <CardDescription>Manage all published courses on the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course</TableHead>
                          <TableHead>Instructor</TableHead>
                          <TableHead>Students</TableHead>
                          <TableHead>Revenue</TableHead>
                          <TableHead>Rating</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            title: "Origami Fundamentals",
                            instructor: "Akira Yoshizawa",
                            students: 2847,
                            revenue: "$14,235",
                            rating: 4.9,
                            status: "Published",
                            image: "/origami-fundamentals.png",
                          },
                          {
                            title: "Advanced Dragon Folding",
                            instructor: "Satoshi Kamiya",
                            students: 1203,
                            revenue: "$10,707",
                            rating: 4.8,
                            status: "Published",
                            image: "/placeholder.svg?height=40&width=60",
                          },
                        ].map((course, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <img
                                  src={course.image || "/placeholder.svg"}
                                  alt={course.title}
                                  className="w-12 h-8 object-cover rounded"
                                />
                                <div className="font-medium">{course.title}</div>
                              </div>
                            </TableCell>
                            <TableCell>{course.instructor}</TableCell>
                            <TableCell>{course.students.toLocaleString()}</TableCell>
                            <TableCell>{course.revenue}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <span>{course.rating}</span>
                                <div className="text-yellow-400">★</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge>{course.status}</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Course
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <BarChart3 className="mr-2 h-4 w-4" />
                                    Analytics
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600">
                                    <XCircle className="mr-2 h-4 w-4" />
                                    Unpublish
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pending">
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Content Review</CardTitle>
                    <CardDescription>Content awaiting moderation approval</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Advanced Tessellation Patterns",
                          instructor: "Maria Santos",
                          type: "Course",
                          submitted: "2 hours ago",
                          description:
                            "Comprehensive guide to creating complex tessellation patterns using advanced folding techniques.",
                        },
                        {
                          title: "Origami Architecture Guide",
                          instructor: "David Chen",
                          type: "Guide",
                          submitted: "5 hours ago",
                          description:
                            "Step-by-step tutorial for creating architectural origami models including buildings and structures.",
                        },
                      ].map((item, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                by {item.instructor} • {item.type} • Submitted {item.submitted}
                              </p>
                            </div>
                            <Badge variant="outline">Pending</Badge>
                          </div>
                          <p className="text-sm mb-4">{item.description}</p>
                          <div className="flex items-center gap-2">
                            <Button size="sm">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Approve
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="mr-2 h-4 w-4" />
                              Review
                            </Button>
                            <Button size="sm" variant="outline">
                              <XCircle className="mr-2 h-4 w-4" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Revenue Analytics</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Last 30 Days
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$284,750</div>
                  <p className="text-xs text-muted-foreground">+18.7% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Course Sales</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$234,500</div>
                  <p className="text-xs text-muted-foreground">82.3% of total revenue</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Premium Content</CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$42,750</div>
                  <p className="text-xs text-muted-foreground">15.0% of total revenue</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Platform Fees</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$7,500</div>
                  <p className="text-xs text-muted-foreground">2.7% of total revenue</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Courses</CardTitle>
                  <CardDescription>Highest revenue generating courses this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Origami Fundamentals", revenue: "$14,235", sales: 285 },
                      { title: "Advanced Dragon Folding", revenue: "$10,707", sales: 121 },
                      { title: "Modular Origami Mastery", revenue: "$8,970", sales: 130 },
                      { title: "Wet-folding Techniques", revenue: "$6,420", sales: 81 },
                    ].map((course, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{course.title}</p>
                          <p className="text-sm text-muted-foreground">{course.sales} sales</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{course.revenue}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Category</CardTitle>
                  <CardDescription>Breakdown of revenue sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: "Course Enrollments", amount: "$234,500", percentage: 82.3 },
                      { category: "Premium Guides", amount: "$42,750", percentage: 15.0 },
                      { category: "Platform Fees", amount: "$7,500", percentage: 2.7 },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.category}</span>
                          <span className="text-sm font-bold">{item.amount}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Analytics & Reports</h2>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "User Growth Report",
                  description: "Monthly user acquisition and retention metrics",
                  icon: Users,
                  lastGenerated: "2 hours ago",
                },
                {
                  title: "Course Performance",
                  description: "Detailed analytics on course engagement and completion",
                  icon: BookOpen,
                  lastGenerated: "1 day ago",
                },
                {
                  title: "Revenue Analysis",
                  description: "Financial performance and revenue trends",
                  icon: DollarSign,
                  lastGenerated: "3 hours ago",
                },
                {
                  title: "Content Moderation",
                  description: "Review and approval statistics",
                  icon: CheckCircle,
                  lastGenerated: "5 hours ago",
                },
                {
                  title: "Platform Usage",
                  description: "System performance and user activity metrics",
                  icon: Activity,
                  lastGenerated: "1 hour ago",
                },
                {
                  title: "Instructor Analytics",
                  description: "Performance metrics for content creators",
                  icon: BarChart3,
                  lastGenerated: "4 hours ago",
                },
              ].map((report, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-2">
                        <report.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription>{report.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Last generated: {report.lastGenerated}</span>
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">Platform Settings</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Configure platform-wide settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Platform Name</label>
                    <Input defaultValue="OrigamiTech" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Support Email</label>
                    <Input defaultValue="support@origamitech.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Max File Upload Size (MB)</label>
                    <Input defaultValue="100" type="number" />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Settings</CardTitle>
                  <CardDescription>Configure payment and billing options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Platform Commission (%)</label>
                    <Input defaultValue="15" type="number" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Minimum Payout ($)</label>
                    <Input defaultValue="50" type="number" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Currency</label>
                    <Input defaultValue="USD" />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
