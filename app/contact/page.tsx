"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  Users,
  Target,
  Zap,
  ArrowRight,
  Building,
  Smartphone,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react"

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState("consultation")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    timeline: "",
    goals: [],
  })

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+91 98765 43210",
      action: "Call Now",
      available: "Mon-Sat 9AM-7PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 2 hours",
      value: "hello@hshtg.com",
      action: "Send Email",
      available: "24/7 Response",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick chat for urgent queries",
      value: "+91 98765 43210",
      action: "Chat Now",
      available: "Instant Response",
    },
    {
      icon: Calendar,
      title: "Book Meeting",
      description: "Schedule a free consultation",
      value: "30-min strategy session",
      action: "Book Now",
      available: "Same Day Available",
    },
  ]

  const services = [
    "Digital Marketing",
    "Social Media Management",
    "Event Planning & Promotion",
    "Branding & Creative Design",
    "Website Development",
    "SEO & Local Search",
    "Content Marketing",
    "Paid Advertising",
  ]

  const budgetRanges = [
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹2,50,000",
    "₹2,50,000 - ₹5,00,000",
    "₹5,00,000+",
    "Let's Discuss",
  ]

  const businessGoals = [
    "Increase Brand Awareness",
    "Generate More Leads",
    "Boost Online Sales",
    "Improve Customer Engagement",
    "Launch New Product/Service",
    "Expand to New Markets",
    "Build Social Media Presence",
    "Organize Business Events",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal) ? prev.goals.filter((g) => g !== goal) : [...prev.goals, goal],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", { activeForm, formData })
    // Handle form submission
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
              Let's Grow Your Business <span className="text-primary">Together</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to transform your business? Get in touch with our team for a free consultation and discover how we
              can help you achieve your goals.
            </motion.p>
          </div>

          {/* Quick Contact Methods */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <div className="font-semibold text-card-foreground mb-2">{method.value}</div>
                  <Badge variant="secondary" className="text-xs mb-3">
                    {method.available}
                  </Badge>
                  <Button className="w-full" size="sm">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get Started Today</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the option that best fits your needs and let's start building your success story
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Type Selector */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>What can we help you with?</CardTitle>
                  <CardDescription>Select the service you're interested in</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant={activeForm === "consultation" ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setActiveForm("consultation")}
                  >
                    <Target className="h-4 w-4 mr-2" />
                    Free Consultation
                  </Button>
                  <Button
                    variant={activeForm === "quote" ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setActiveForm("quote")}
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Get Custom Quote
                  </Button>
                  <Button
                    variant={activeForm === "partnership" ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setActiveForm("partnership")}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Partnership Inquiry
                  </Button>
                  <Button
                    variant={activeForm === "support" ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setActiveForm("support")}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    General Support
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Visit Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold text-card-foreground">HSHTG Marketing Firm</div>
                      <div className="text-sm text-muted-foreground">Near BMSIT, Bengaluru</div>
                      <div className="text-sm text-muted-foreground">Karnataka 560064</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <div className="font-semibold text-card-foreground">Business Hours</div>
                      <div className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm font-semibold mb-3 text-card-foreground">Follow Us</div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="p-2 bg-transparent">
                        <Instagram className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-2 bg-transparent">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-2 bg-transparent">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-2 bg-transparent">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dynamic Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {activeForm === "consultation" && "Free Strategy Consultation"}
                    {activeForm === "quote" && "Get Custom Quote"}
                    {activeForm === "partnership" && "Partnership Opportunity"}
                    {activeForm === "support" && "General Inquiry"}
                  </CardTitle>
                  <CardDescription>
                    {activeForm === "consultation" &&
                      "Book a 30-minute free consultation to discuss your business goals"}
                    {activeForm === "quote" && "Tell us about your project and get a detailed proposal"}
                    {activeForm === "partnership" && "Interested in partnering with us? Let's explore opportunities"}
                    {activeForm === "support" && "Have questions? We're here to help"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company/Business Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your business name"
                        />
                      </div>
                    </div>

                    {/* Service-specific fields */}
                    {(activeForm === "consultation" || activeForm === "quote") && (
                      <>
                        <div>
                          <Label htmlFor="service">Primary Service Interest</Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => handleInputChange("service", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {activeForm === "quote" && (
                          <div>
                            <Label htmlFor="budget">Project Budget</Label>
                            <Select
                              value={formData.budget}
                              onValueChange={(value) => handleInputChange("budget", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                {budgetRanges.map((range) => (
                                  <SelectItem key={range} value={range}>
                                    {range}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        )}

                        <div>
                          <Label htmlFor="timeline">Project Timeline</Label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) => handleInputChange("timeline", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="When do you want to start?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">As soon as possible</SelectItem>
                              <SelectItem value="1-2weeks">Within 1-2 weeks</SelectItem>
                              <SelectItem value="1month">Within 1 month</SelectItem>
                              <SelectItem value="2-3months">2-3 months</SelectItem>
                              <SelectItem value="flexible">I'm flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {activeForm === "consultation" && (
                          <div>
                            <Label className="text-base font-semibold mb-3 block">
                              What are your main business goals? (Select all that apply)
                            </Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {businessGoals.map((goal) => (
                                <div key={goal} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={goal}
                                    checked={formData.goals.includes(goal)}
                                    onCheckedChange={() => handleGoalToggle(goal)}
                                  />
                                  <Label htmlFor={goal} className="text-sm font-normal">
                                    {goal}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    <div>
                      <Label htmlFor="message">
                        {activeForm === "consultation" && "Tell us about your business and challenges"}
                        {activeForm === "quote" && "Project Details"}
                        {activeForm === "partnership" && "Partnership Proposal"}
                        {activeForm === "support" && "How can we help you?"}
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder={
                          activeForm === "consultation"
                            ? "Describe your business, current challenges, and what you hope to achieve..."
                            : activeForm === "quote"
                              ? "Provide detailed information about your project requirements..."
                              : activeForm === "partnership"
                                ? "Tell us about your partnership idea..."
                                : "Describe your question or how we can assist you..."
                        }
                        rows={4}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <a href="#" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      {activeForm === "consultation" && "Book Free Consultation"}
                      {activeForm === "quote" && "Get Custom Quote"}
                      {activeForm === "partnership" && "Submit Partnership Inquiry"}
                      {activeForm === "support" && "Send Message"}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you start working on my project?",
                answer:
                  "We can typically start within 1-2 weeks of project approval. For urgent projects, we offer expedited onboarding within 48 hours.",
              },
              {
                question: "Do you work with businesses outside of Bengaluru?",
                answer:
                  "While we're based near BMSIT in Bengaluru, we work with businesses across Karnataka and India through our digital services.",
              },
              {
                question: "What's included in the free consultation?",
                answer:
                  "Our 30-minute consultation includes business analysis, goal assessment, strategy recommendations, and a custom action plan for your business.",
              },
              {
                question: "How do you measure success?",
                answer:
                  "We track specific KPIs based on your goals: lead generation, website traffic, social engagement, event attendance, and ROI on marketing spend.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes! We provide ongoing support, maintenance, and optimization services to ensure your continued success and growth.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-card-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
              <p className="text-lg mb-6 opacity-90">
                For urgent marketing needs or time-sensitive projects, reach out directly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Phone className="h-4 w-4 mr-2" />
                  Call: +91 98765 43210
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Smartphone className="h-4 w-4 mr-2" />
                  WhatsApp Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
