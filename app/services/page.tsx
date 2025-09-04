import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Megaphone, Share2, Calendar, Palette, Target, BarChart3, Users } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      slug: "digital-marketing",
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that drive measurable results for local businesses",
      features: [
        "Local SEO Optimization",
        "Google Ads Management",
        "Email Marketing Campaigns",
        "Analytics & Reporting",
      ],
      pricing: "Starting from ₹15,000/month",
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
    {
      slug: "social-media",
      icon: Share2,
      title: "Social Media Management",
      description: "Engaging content creation and community building across all major social platforms",
      features: [
        "Content Creation & Curation",
        "Community Management",
        "Influencer Partnerships",
        "Social Media Advertising",
      ],
      pricing: "Starting from ₹12,000/month",
      color: "bg-green-500/10 text-green-600 border-green-200",
    },
    {
      slug: "event-planning",
      icon: Calendar,
      title: "Event Planning & Promotion",
      description: "End-to-end event management that creates memorable experiences and drives business growth",
      features: ["Event Strategy & Planning", "Venue Coordination", "Promotional Campaigns", "Post-Event Analysis"],
      pricing: "Starting from ₹25,000/event",
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
    {
      slug: "branding-design",
      icon: Palette,
      title: "Branding & Creative Design",
      description: "Complete brand identity development and creative assets that make your business stand out",
      features: ["Logo & Brand Identity", "Brand Guidelines", "Marketing Materials", "Website Design"],
      pricing: "Starting from ₹20,000/project",
      color: "bg-orange-500/10 text-orange-600 border-orange-200",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-card to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Complete Marketing Solutions for <span className="text-primary">Growing Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From digital marketing to event planning, we provide everything your business needs to thrive in today's
              competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${service.color}`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white/50">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button className="w-full group">
                      Learn More & Get Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free consultation and discover how our services can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <BarChart3 className="mr-2 h-5 w-5" />
              Get Free Marketing Audit
            </Button>
            <Button variant="outline" size="lg">
              <Users className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
