import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Search, MousePointer, Mail, BarChart3, Target } from "lucide-react"

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "Local SEO Optimization",
      description: "Get found by customers in your area when they search for your services",
      features: [
        "Google My Business optimization",
        "Local keyword targeting",
        "Citation building",
        "Review management",
      ],
    },
    {
      icon: MousePointer,
      title: "Google Ads Management",
      description: "Targeted advertising campaigns that deliver immediate results and qualified leads",
      features: ["Campaign setup & optimization", "Keyword research", "Ad copywriting", "Landing page optimization"],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns",
      features: ["Email automation", "Newsletter design", "List segmentation", "Performance tracking"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to measure success and optimize your marketing efforts",
      features: ["Monthly reports", "ROI tracking", "Conversion analysis", "Competitor insights"],
    },
  ]

  const caseStudy = {
    client: "Spice Garden Restaurant",
    location: "Near BMSIT, Bengaluru",
    challenge: "Low online visibility and declining foot traffic",
    solution: "Comprehensive local SEO, Google Ads, and social media integration",
    results: [
      { metric: "Online Orders", before: "20/day", after: "80/day", increase: "300%" },
      { metric: "Google Reviews", before: "12", after: "150+", increase: "1150%" },
      { metric: "Website Traffic", before: "500/month", after: "2,500/month", increase: "400%" },
      { metric: "Revenue", before: "₹2L/month", after: "₹6L/month", increase: "200%" },
    ],
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Digital Marketing</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Drive More Customers to Your <span className="text-primary">Local Business</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
              Our comprehensive digital marketing strategies help local businesses near BMSIT increase their online
              visibility, attract more customers, and grow their revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Free Marketing Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Digital Marketing Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We handle every aspect of your digital presence so you can focus on running your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Real Results for Local Businesses</h2>
            <p className="text-xl text-muted-foreground">
              See how we helped a restaurant near BMSIT transform their business
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <CardTitle className="text-2xl">{caseStudy.client}</CardTitle>
                  <CardDescription className="text-base">{caseStudy.location}</CardDescription>
                </div>
                <Badge variant="secondary">Case Study</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="challenge" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="challenge">Challenge</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                  <TabsTrigger value="results">Results</TabsTrigger>
                </TabsList>
                <TabsContent value="challenge" className="mt-6">
                  <p className="text-muted-foreground text-lg">{caseStudy.challenge}</p>
                </TabsContent>
                <TabsContent value="solution" className="mt-6">
                  <p className="text-muted-foreground text-lg">{caseStudy.solution}</p>
                </TabsContent>
                <TabsContent value="results" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="bg-card border border-border rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-2">{result.metric}</div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">{result.before}</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-semibold">{result.after}</span>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-800">+{result.increase}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Calculate Your Potential ROI</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how much revenue our digital marketing services could generate for your business
          </p>
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3x</div>
                <div className="text-muted-foreground">Average Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">250%</div>
                <div className="text-muted-foreground">Average Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6 months</div>
                <div className="text-muted-foreground">Average Time to ROI</div>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Your Custom ROI Calculation
            </Button>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free marketing audit and discover opportunities to increase your revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Free Marketing Audit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
