"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Star, Quote, TrendingUp, Users, Calendar } from "lucide-react"

export function SocialProof() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Spice Garden Restaurant",
      location: "Near BMSIT",
      rating: 5,
      text: "HSHTG transformed our restaurant's online presence. We went from 20 orders per day to 80+ orders within 3 months. Their social media campaigns brought in customers we never reached before.",
      result: "300% increase in online orders",
    },
    {
      name: "Priya Sharma",
      business: "FitZone Gym",
      location: "Banashankari",
      rating: 5,
      text: "The event they organized for our gym opening was incredible. Over 200 people attended, and we got 50 new memberships that day. Their marketing strategy is spot-on for local businesses.",
      result: "50 new memberships in one day",
    },
    {
      name: "Arjun Reddy",
      business: "TechSkills Academy",
      location: "BTM Layout",
      rating: 5,
      text: "Our enrollment increased by 150% after HSHTG redesigned our brand and launched targeted campaigns. They understand the local market better than anyone.",
      result: "150% enrollment increase",
    },
  ]

  const stats = [
    { number: "50+", label: "Businesses Growing", icon: TrendingUp },
    { number: "200%", label: "Average Growth", icon: Users },
    { number: "25+", label: "Successful Events", icon: Calendar },
    { number: "95%", label: "Client Retention", icon: Star },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by <span className="text-primary">Local Businesses</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how we've helped businesses near BMSIT and across Bengaluru achieve remarkable growth.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-card-foreground leading-relaxed pl-6">{testimonial.text}</p>
                  </div>

                  {/* Result badge */}
                  <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                    {testimonial.result}
                  </Badge>

                  {/* Author info */}
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
