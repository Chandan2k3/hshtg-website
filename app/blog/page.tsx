"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"
import {
  Search,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Download,
  BookOpen,
  TrendingUp,
  Users,
  Target,
  Share2,
  Filter,
  Tag,
  Mail,
} from "lucide-react"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [email, setEmail] = useState("")

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "digital-marketing", name: "Digital Marketing", count: 8 },
    { id: "local-business", name: "Local Business Tips", count: 6 },
    { id: "case-studies", name: "Case Studies", count: 4 },
    { id: "social-media", name: "Social Media", count: 3 },
    { id: "events", name: "Event Planning", count: 3 },
  ]

  const featuredPosts = [
    {
      id: 1,
      title: "10 Digital Marketing Strategies That Actually Work for Bengaluru Restaurants",
      excerpt:
        "Discover proven tactics that local restaurants near BMSIT are using to increase foot traffic by 150% and boost online orders.",
      category: "digital-marketing",
      author: "Harish Sharma",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "/cozy-italian-restaurant.png",
      featured: true,
      tags: ["Local SEO", "Restaurant Marketing", "Social Media"],
    },
    {
      id: 2,
      title: "Case Study: How We Helped FitZone Gym Double Their Membership in 6 Months",
      excerpt:
        "A complete breakdown of the marketing strategy that transformed a struggling gym into the most popular fitness center near BMSIT.",
      category: "case-studies",
      author: "Sneha Patel",
      date: "2025-01-12",
      readTime: "12 min read",
      image: "/modern-gym-interior.png",
      featured: true,
      tags: ["Case Study", "Fitness Marketing", "Lead Generation"],
    },
    {
      id: 3,
      title: "The Ultimate Guide to Local SEO for Small Businesses in Bengaluru",
      excerpt:
        "Everything you need to know about ranking higher in local search results and attracting customers in your neighborhood.",
      category: "digital-marketing",
      author: "Tarun Gupta",
      date: "2025-01-10",
      readTime: "15 min read",
      image: "/local-business-seo-guide.jpg",
      featured: false,
      tags: ["Local SEO", "Google My Business", "Search Rankings"],
    },
  ]

  const regularPosts = [
    {
      id: 4,
      title: "5 Social Media Mistakes That Are Killing Your Local Business",
      excerpt: "Avoid these common pitfalls that prevent local businesses from building a strong online presence.",
      category: "social-media",
      author: "Tarun Gupta",
      date: "2025-01-08",
      readTime: "6 min read",
      image: "/social-media-mistakes.jpg",
      tags: ["Social Media", "Common Mistakes", "Business Tips"],
    },
    {
      id: 5,
      title: "How to Plan a Successful Business Networking Event in Bengaluru",
      excerpt: "Step-by-step guide to organizing events that build meaningful business connections and drive growth.",
      category: "events",
      author: "Gayatri Reddy",
      date: "2025-01-05",
      readTime: "10 min read",
      image: "/business-networking-event.png",
      tags: ["Event Planning", "Networking", "Business Growth"],
    },
    {
      id: 6,
      title: "Why Your Restaurant Needs a Strong Brand Identity (And How to Build One)",
      excerpt: "Learn how effective branding can differentiate your restaurant and create loyal customers.",
      category: "local-business",
      author: "Sneha Patel",
      date: "2025-01-03",
      readTime: "7 min read",
      image: "/indian-restaurant-interior.png",
      tags: ["Branding", "Restaurant Business", "Visual Identity"],
    },
    {
      id: 7,
      title: "The ROI of Digital Marketing: What Local Businesses Need to Know",
      excerpt: "Understanding how to measure and maximize your return on digital marketing investments.",
      category: "digital-marketing",
      author: "Harish Sharma",
      date: "2025-01-01",
      readTime: "9 min read",
      image: "/digital-marketing-roi-analytics.jpg",
      tags: ["ROI", "Analytics", "Marketing Strategy"],
    },
    {
      id: 8,
      title: "Building Customer Loyalty: Lessons from Successful Bengaluru Businesses",
      excerpt: "Real strategies that local businesses use to turn first-time customers into lifelong advocates.",
      category: "local-business",
      author: "Harish Sharma",
      date: "2024-12-28",
      readTime: "8 min read",
      image: "/customer-loyalty-program.jpg",
      tags: ["Customer Retention", "Loyalty Programs", "Business Strategy"],
    },
  ]

  const resources = [
    {
      title: "Local Business Marketing Checklist",
      description: "50-point checklist to audit and improve your local marketing efforts",
      type: "PDF Guide",
      downloads: "1,247",
      icon: Target,
    },
    {
      title: "Social Media Content Calendar Template",
      description: "Pre-planned content calendar for restaurants, gyms, and service businesses",
      type: "Excel Template",
      downloads: "892",
      icon: Calendar,
    },
    {
      title: "Event Planning Toolkit",
      description: "Complete toolkit for planning successful business events and promotions",
      type: "Resource Pack",
      downloads: "634",
      icon: Users,
    },
    {
      title: "ROI Calculator for Digital Marketing",
      description: "Calculate the return on investment for your marketing campaigns",
      type: "Interactive Tool",
      downloads: "1,156",
      icon: TrendingUp,
    },
  ]

  const filteredPosts = [...featuredPosts, ...regularPosts].filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    setEmail("")
    // Handle newsletter signup
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-card to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Marketing Insights & <span className="text-primary">Business Resources</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Practical tips, case studies, and free resources to help your local business thrive in the digital age.
              Learn from real success stories and proven strategies.
            </motion.p>
          </div>

          {/* Search and Filter */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles, case studies, and resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="md:w-auto bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Articles</h2>
            <p className="text-xl text-muted-foreground">Our most popular and impactful content</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Main Featured Post */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={featuredPosts[0].image || "/placeholder.svg"}
                    alt={featuredPosts[0].title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPosts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPosts[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2">{featuredPosts[0].title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{featuredPosts[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPosts[0].tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Secondary Featured Posts */}
            <div className="space-y-6">
              {featuredPosts.slice(1, 3).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    <div className="flex">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-32 h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <CardContent className="flex-1 p-4">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                        <Button size="sm" variant="outline">
                          Read More
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Free Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Download our proven templates, guides, and tools to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <resource.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="mb-3">
                      {resource.type}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-3 text-card-foreground">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <div className="text-xs text-muted-foreground mb-4">{resource.downloads} downloads</div>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Free
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest marketing trends and strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group">
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <BookOpen className="h-4 w-4 mr-2" />
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Ahead of the Competition</h2>
            <p className="text-xl mb-8 opacity-90">
              Get weekly marketing tips, case studies, and exclusive resources delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-primary-foreground text-primary placeholder:text-primary/60"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </form>
            <p className="text-sm mt-4 opacity-75">Join 2,500+ local business owners. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
