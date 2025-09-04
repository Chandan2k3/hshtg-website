"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Megaphone, Share2, Calendar, Palette, BarChart3, Target, ArrowRight } from "lucide-react"

export function ServicesPreview() {
  const services = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "SEO, PPC, and email campaigns that drive real results for local businesses",
      features: ["Local SEO Optimization", "Google Ads Management", "Email Marketing", "Analytics & Reporting"],
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Engaging content and community building across all major platforms",
      features: ["Content Creation", "Community Management", "Influencer Partnerships", "Social Advertising"],
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Calendar,
      title: "Event Planning & Promotion",
      description: "From concept to execution, we create memorable experiences that drive business",
      features: ["Event Strategy", "Venue Coordination", "Promotional Campaigns", "Post-Event Analysis"],
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: Palette,
      title: "Branding & Creative Design",
      description: "Complete brand identity and creative assets that make you stand out",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Website Design"],
      color: "bg-orange-500/10 text-orange-600",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
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
            Complete Marketing Solutions for <span className="text-primary">Growing Businesses</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From digital marketing to event planning, we provide everything your business needs to thrive in today's
            competitive market.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${service.color}`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-card-foreground">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join 50+ businesses in Bengaluru who trust HSHTG for their complete marketing transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <BarChart3 className="mr-2 h-5 w-5" />
                Get Your Free Marketing Audit
              </Button>
              <Button variant="outline" size="lg">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
