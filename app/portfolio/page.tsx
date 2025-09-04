import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ExternalLink, TrendingUp, Star } from "lucide-react"

export default function PortfolioPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Spice Garden Restaurant",
      category: "Food",
      location: "Near BMSIT, Bengaluru",
      image: "/indian-restaurant-interior.png",
      beforeImage: "/empty-restaurant.jpg",
      afterImage: "/busy-restaurant-customers.jpg",
      description: "Complete digital transformation for a local restaurant struggling with online visibility",
      challenge: "Low online presence, declining foot traffic, and poor customer engagement",
      solution:
        "Comprehensive digital marketing strategy including local SEO, social media management, and targeted advertising",
      results: {
        revenue: "+200%",
        orders: "+300%",
        reviews: "+1150%",
        traffic: "+400%",
      },
      testimonial: {
        text: "HSHTG transformed our restaurant completely. We went from struggling to stay afloat to having a waiting list every evening!",
        author: "Rajesh Kumar",
        position: "Owner, Spice Garden",
      },
      services: ["Digital Marketing", "Social Media", "Local SEO", "Review Management"],
    },
    {
      id: 2,
      title: "FitZone Gym",
      category: "Fitness",
      location: "Banashankari, Bengaluru",
      image: "/modern-gym-interior.png",
      beforeImage: "/empty-gym.jpg",
      afterImage: "/busy-gym-with-people-exercising.jpg",
      description: "Brand revitalization and membership growth campaign for a local fitness center",
      challenge: "Outdated branding, low membership numbers, and strong competition from chain gyms",
      solution: "Complete rebranding, event marketing, and targeted social media campaigns",
      results: {
        memberships: "+150%",
        events: "25+ hosted",
        engagement: "+400%",
        retention: "+85%",
      },
      testimonial: {
        text: "The grand opening event they organized brought in 50 new members in one day. Their marketing strategy is incredible!",
        author: "Priya Sharma",
        position: "Owner, FitZone Gym",
      },
      services: ["Event Planning", "Branding", "Social Media", "Community Building"],
    },
    {
      id: 3,
      title: "TechSkills Academy",
      category: "Education",
      location: "BTM Layout, Bengaluru",
      image: "/modern-computer-training-center.jpg",
      beforeImage: "/small-classroom-few-students.jpg",
      afterImage: "/full-classroom-many-students.jpg",
      description: "Digital marketing and enrollment growth for a technical training institute",
      challenge: "Low enrollment numbers, poor online visibility, and difficulty reaching target audience",
      solution: "Targeted digital advertising, content marketing, and lead generation campaigns",
      results: {
        enrollment: "+150%",
        leads: "+300%",
        website: "+500%",
        conversion: "+120%",
      },
      testimonial: {
        text: "Our enrollment doubled within 6 months. HSHTG understands the education market perfectly.",
        author: "Arjun Reddy",
        position: "Director, TechSkills Academy",
      },
      services: ["Digital Marketing", "Lead Generation", "Content Marketing", "PPC Advertising"],
    },
    {
      id: 4,
      title: "StyleHub Boutique",
      category: "Retail",
      location: "Jayanagar, Bengaluru",
      image: "/modern-fashion-boutique.jpg",
      beforeImage: "/small-boutique-few-customers.jpg",
      afterImage: "/busy-boutique-many-customers-shopping.jpg",
      description: "E-commerce integration and social media marketing for a fashion boutique",
      challenge: "Limited to walk-in customers, no online presence, and seasonal sales fluctuations",
      solution: "E-commerce website development, Instagram marketing, and influencer partnerships",
      results: {
        online: "+400%",
        followers: "+800%",
        sales: "+180%",
        reach: "+600%",
      },
      testimonial: {
        text: "They helped us go from a small local shop to selling across Bengaluru. Our Instagram following exploded!",
        author: "Meera Patel",
        position: "Owner, StyleHub Boutique",
      },
      services: ["E-commerce", "Social Media", "Influencer Marketing", "Brand Photography"],
    },
  ]

  const categories = ["All", "Food", "Fitness", "Education", "Retail"]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-card to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Success Stories from <span className="text-primary">Local Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              See how we've helped businesses across Bengaluru achieve remarkable growth through strategic marketing and
              branding.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200%</div>
              <div className="text-muted-foreground">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Events Organized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-5 w-full max-w-md">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-sm">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {caseStudies
                    .filter((study) => category === "All" || study.category === category)
                    .map((study) => (
                      <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="relative">
                          <img
                            src={study.image || "/placeholder.svg"}
                            alt={study.title}
                            className="w-full h-48 object-cover"
                          />
                          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                            {study.category}
                          </Badge>
                        </div>

                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <CardTitle className="text-xl">{study.title}</CardTitle>
                              <CardDescription>{study.location}</CardDescription>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{study.description}</p>
                        </CardHeader>

                        <CardContent>
                          {/* Before/After Comparison */}
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3">Before & After</h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <img
                                  src={study.beforeImage || "/placeholder.svg"}
                                  alt="Before"
                                  className="w-full h-24 object-cover rounded border"
                                />
                                <p className="text-xs text-center mt-1 text-muted-foreground">Before</p>
                              </div>
                              <div>
                                <img
                                  src={study.afterImage || "/placeholder.svg"}
                                  alt="After"
                                  className="w-full h-24 object-cover rounded border"
                                />
                                <p className="text-xs text-center mt-1 text-muted-foreground">After</p>
                              </div>
                            </div>
                          </div>

                          {/* Results */}
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3">Key Results</h4>
                            <div className="grid grid-cols-2 gap-3">
                              {Object.entries(study.results).map(([key, value]) => (
                                <div key={key} className="bg-muted rounded-lg p-3 text-center">
                                  <div className="text-lg font-bold text-primary">{value}</div>
                                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Services */}
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3">Services Provided</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.services.map((service, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Testimonial */}
                          <div className="bg-card border border-border rounded-lg p-4">
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <p className="text-sm text-card-foreground mb-3 italic">"{study.testimonial.text}"</p>
                            <div className="text-xs text-muted-foreground">
                              <div className="font-semibold">{study.testimonial.author}</div>
                              <div>{study.testimonial.position}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing list of businesses that have transformed their growth with HSHTG.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <TrendingUp className="mr-2 h-5 w-5" />
              Get Your Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
