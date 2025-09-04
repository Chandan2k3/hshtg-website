"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  MapPin,
  Users,
  Target,
  Heart,
  Award,
  Calendar,
  Linkedin,
  Mail,
  Phone,
  Clock,
  Building,
  Lightbulb,
  TrendingUp,
} from "lucide-react"

export default function AboutPage() {
  const timeline = [
    {
      year: "2025",
      title: "HSHTG Founded",
      description: "Started with a vision to help local businesses near BMSIT thrive in the digital age",
      icon: Lightbulb,
    },
    {
      year: "2025",
      title: "First 10 Clients",
      description: "Successfully launched marketing campaigns for restaurants, gyms, and local services",
      icon: Users,
    },
    {
      year: "2025",
      title: "Event Expertise",
      description: "Expanded into event planning and promotion, organizing 25+ successful business events",
      icon: Calendar,
    },
    {
      year: "2025",
      title: "50+ Success Stories",
      description: "Reached milestone of 50+ businesses transformed with 200% average growth",
      icon: TrendingUp,
    },
  ]

  const team = [
    {
      name: "Akhilesh K",
      role: "Founder",
      bio: "Digital marketing expert with 8+ years of experience helping local businesses grow. Passionate about community-driven marketing.",
      image: "/professional-indian-man-suit.jpg",
      linkedin: "#",
      email: "akhilesh@hshtg.com",
      specialties: ["Digital Strategy", "Local SEO", "Business Growth"],
    },
    {
      name: "Chandan S",
      role: "Creative Director",
      bio: "Award-winning designer specializing in brand identity and visual storytelling. Creates compelling designs that convert.",
      image: "/professional-indian-woman-creative.jpg",
      linkedin: "#",
      email: "chandan@hshtg.com",
      specialties: ["Brand Design", "Visual Identity", "Creative Strategy"],
    },
    {
      name: "Abhishek",
      role: "Social Media Manager",
      bio: "Social media strategist who understands the pulse of Bengaluru's local market. Expert in viral content creation.",
      image: "/young-indian-man-casual-professional.jpg",
      linkedin: "#",
      email: "abhishek@hshtg.com",
      specialties: ["Social Media", "Content Creation", "Community Building"],
    },
    {
      name: "Gayatri Reddy",
      role: "Event Coordinator",
      bio: "Event planning specialist with a track record of organizing memorable business events that drive real results.",
      image: "/professional-indian-woman-events.jpg",
      linkedin: "#",
      email: "gayatri@hshtg.com",
      specialties: ["Event Planning", "Project Management", "Client Relations"],
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description:
        "We believe in building strong local communities by helping businesses connect with their neighbors.",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every strategy we implement is designed to deliver measurable results and real business growth.",
    },
    {
      icon: Award,
      title: "Excellence Always",
      description: "We maintain the highest standards in everything we do, from creative work to client service.",
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We work as an extension of your team, understanding your business goals and challenges deeply.",
    },
  ]

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
              Empowering Local Businesses to <span className="text-primary">Thrive Together</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Founded in 2025, HSHTG is dedicated to transforming local businesses near BMSIT into thriving community
              hotspots through innovative marketing, branding, and event solutions.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200%</div>
              <div className="text-muted-foreground">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client Retention</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl text-card-foreground leading-relaxed italic mb-6">
                "To transform every local business into a community hotspot by providing innovative marketing solutions
                that drive real growth and create lasting connections between businesses and their customers."
              </blockquote>
              <div className="text-muted-foreground">
                We believe that strong local businesses build strong communities, and we're here to make that happen.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small startup to Bengaluru's trusted marketing partner for local businesses
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 px-6">
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 text-primary">
                            <item.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <Badge className="mb-2">{item.year}</Badge>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>

                  <div className="flex-1 px-6"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate professionals dedicated to your business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="p-2">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="p-2">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-card-foreground">Specialties:</div>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-card-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Location</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategically located near BMSIT to serve local businesses better
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Building className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">HSHTG Office</h3>
                    <p className="text-muted-foreground">Marketing & Creative Hub</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-card-foreground">Near BMSIT, Bengaluru, Karnataka 560064</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-card-foreground">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-card-foreground">hello@hshtg.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-card-foreground">Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3 text-card-foreground">Why This Location?</h4>
                  <p className="text-sm text-muted-foreground">
                    Being near BMSIT puts us at the heart of Bengaluru's growing business district. We understand the
                    local market, the challenges businesses face, and the opportunities that exist in this vibrant
                    community.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-muted rounded-lg p-8 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">Interactive Map Coming Soon</h3>
                <p className="text-muted-foreground mb-6">
                  We're working on an interactive map to help you find us easily and explore the local business
                  community we serve.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Directions</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business into a local hotspot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Meeting
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
