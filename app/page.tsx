import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Star,
  Play,
  Users,
  BookOpen,
  Award,
  Search,
  Menu,
  User,
  ShoppingCart,
  Heart,
  Filter,
  ChevronRight,
  Clock,
  TrendingUp,
  Download,
} from "lucide-react"
import Link from "next/link"

export default function OrigamiTechHomepage() {
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

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
              Courses
            </Link>
            <Link href="/guides" className="text-muted-foreground hover:text-foreground transition-colors">
              Guides
            </Link>
            <Link href="/instructors" className="text-muted-foreground hover:text-foreground transition-colors">
              Instructors
            </Link>
            <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search origami..." className="pl-10 w-64" />
            </div>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button className="hidden sm:inline-flex">Sign In</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-card to-background">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              🎨 Master the Art of Paper Folding
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Learn <span className="text-primary">Origami</span> from
              <br />
              World-Class Instructors
            </h1>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto mb-8">
              Discover thousands of origami tutorials, from simple cranes to complex dragons. Join our community of
              paper folding enthusiasts and unlock your creativity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              <Play className="mr-2 h-5 w-5" />
              Start Learning Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Browse Courses
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">50K+ Students</h3>
              <p className="text-muted-foreground">Join our growing community</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1000+ Tutorials</h3>
              <p className="text-muted-foreground">From beginner to expert</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Instructors</h3>
              <p className="text-muted-foreground">Learn from the best</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
              <p className="text-muted-foreground">Popular courses chosen by our community</p>
            </div>
            <Button variant="outline">
              View All <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Origami Fundamentals",
                instructor: "Akira Yoshizawa",
                image: "/origami-crane-tutorial.png",
                price: "$49",
                rating: 4.9,
                students: 2847,
                duration: "8 hours",
                level: "Beginner",
              },
              {
                title: "Advanced Dragon Folding",
                instructor: "Satoshi Kamiya",
                image: "/origami-dragon-complex.png",
                price: "$89",
                rating: 4.8,
                students: 1203,
                duration: "12 hours",
                level: "Advanced",
              },
              {
                title: "Modular Origami Mastery",
                instructor: "Tomoko Fuse",
                image: "/modular-origami-kusudama.png",
                price: "$69",
                rating: 4.9,
                students: 1856,
                duration: "10 hours",
                level: "Intermediate",
              },
            ].map((course, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3" variant="secondary">
                    {course.level}
                  </Badge>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({course.students} students)</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{course.title}</CardTitle>
                  <CardDescription>by {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>
                  <Button className="w-full">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Guides Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Free Origami Guides</h2>
              <p className="text-muted-foreground">Start your origami journey with these free tutorials</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                View All <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Classic Paper Crane",
                difficulty: "Easy",
                time: "15 min",
                image: "/origami-paper-crane-step-by-step.png",
                downloads: 15420,
              },
              {
                title: "Jumping Frog",
                difficulty: "Easy",
                time: "20 min",
                image: "/origami-jumping-frog-green.png",
                downloads: 12350,
              },
              {
                title: "Lotus Flower",
                difficulty: "Medium",
                time: "30 min",
                image: "/origami-lotus-flower-pink.png",
                downloads: 9870,
              },
              {
                title: "Paper Butterfly",
                difficulty: "Easy",
                time: "18 min",
                image: "/origami-butterfly-colorful.png",
                downloads: 11200,
              },
            ].map((guide, index) => (
              <Card key={index} className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge
                    className="absolute top-2 left-2 text-xs"
                    variant={guide.difficulty === "Easy" ? "secondary" : "default"}
                  >
                    {guide.difficulty}
                  </Badge>
                  <div className="absolute top-2 right-2 bg-background/90 rounded-full px-2 py-1 text-xs font-medium">
                    FREE
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{guide.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {guide.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {guide.downloads.toLocaleString()}
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
        </div>
      </section>

      {/* Top Instructors */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Expert Instructors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from world-renowned origami masters who have dedicated their lives to the art of paper folding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Akira Yoshizawa",
                title: "Origami Grandmaster",
                avatar: "/japanese-origami-master-portrait.png",
                courses: 12,
                students: 15420,
                rating: 4.9,
                speciality: "Traditional & Wet-folding",
              },
              {
                name: "Satoshi Kamiya",
                title: "Complex Design Expert",
                avatar: "/origami-expert-designer-portrait.png",
                courses: 8,
                students: 8750,
                rating: 4.8,
                speciality: "Complex Models & Dragons",
              },
              {
                name: "Tomoko Fuse",
                title: "Modular Origami Pioneer",
                avatar: "/female-origami-artist-portrait.png",
                courses: 15,
                students: 12300,
                rating: 4.9,
                speciality: "Modular & Geometric",
              },
            ].map((instructor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={instructor.avatar || "/placeholder.svg"} alt={instructor.name} />
                    <AvatarFallback>
                      {instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg mb-1">{instructor.name}</h3>
                  <p className="text-primary font-medium mb-2">{instructor.title}</p>
                  <p className="text-sm text-muted-foreground mb-4">{instructor.speciality}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="font-bold text-lg">{instructor.courses}</div>
                      <div className="text-xs text-muted-foreground">Courses</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg">{instructor.students.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {instructor.rating}
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join the Global Origami Community</h2>
            <p className="text-muted-foreground">
              Thousands of students worldwide are already mastering the art of origami
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Active Students", value: "50,000+" },
              { icon: BookOpen, label: "Video Tutorials", value: "1,200+" },
              { icon: Award, label: "Certificates Issued", value: "25,000+" },
              { icon: TrendingUp, label: "Success Rate", value: "94%" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="font-bold text-2xl mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Origami Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students learning the beautiful art of paper folding. Start with free tutorials or enroll
            in premium courses today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Play className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Browse All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">OT</span>
                </div>
                <span className="font-bold text-xl">OrigamiTech</span>
              </div>
              <p className="text-muted-foreground mb-4">
                The world's leading platform for learning origami techniques from expert instructors.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Learn</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/courses" className="hover:text-foreground transition-colors">
                    All Courses
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="hover:text-foreground transition-colors">
                    Free Guides
                  </Link>
                </li>
                <li>
                  <Link href="/beginner" className="hover:text-foreground transition-colors">
                    Beginner Path
                  </Link>
                </li>
                <li>
                  <Link href="/advanced" className="hover:text-foreground transition-colors">
                    Advanced Techniques
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/instructors" className="hover:text-foreground transition-colors">
                    Become Instructor
                  </Link>
                </li>
                <li>
                  <Link href="/forum" className="hover:text-foreground transition-colors">
                    Discussion Forum
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-foreground transition-colors">
                    Student Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-foreground transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 OrigamiTech. All rights reserved. Made with ❤️ for origami enthusiasts worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
