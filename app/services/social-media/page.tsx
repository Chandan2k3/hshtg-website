import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  MessageCircle,
  Share,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Camera,
  Edit,
  Calendar,
  BarChart3,
} from "lucide-react"

export default function SocialMediaPage() {
  const platforms = [
    { name: "Instagram", icon: Instagram, color: "text-pink-600", followers: "10K+" },
    { name: "Facebook", icon: Facebook, color: "text-blue-600", followers: "8K+" },
    { name: "YouTube", icon: Youtube, color: "text-red-600", followers: "5K+" },
    { name: "LinkedIn", icon: Linkedin, color: "text-blue-700", followers: "3K+" },
  ]

  const services = [
    {
      icon: Camera,
      title: "Content Creation",
      description: "High-quality photos, videos, and graphics that capture your brand essence",
      features: ["Professional photography", "Video production", "Graphic design", "Content planning"],
    },
    {
      icon: Edit,
      title: "Community Management",
      description: "Engage with your audience and build lasting relationships with your customers",
      features: ["Daily engagement", "Comment management", "Customer support", "Community building"],
    },
    {
      icon: Calendar,
      title: "Content Scheduling",
      description: "Strategic posting schedule optimized for maximum reach and engagement",
      features: ["Content calendar", "Optimal timing", "Cross-platform posting", "Hashtag strategy"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Growth",
      description: "Track performance and optimize your social media strategy for better results",
      features: ["Performance reports", "Audience insights", "Growth tracking", "ROI analysis"],
    },
  ]

  const mockPosts = [
    {
      platform: "Instagram",
      user: "spicegarden_bmsit",
      avatar: "/cozy-italian-restaurant.png",
      image: "/delicious-indian-food.png",
      caption:
        "Fresh ingredients, authentic flavors! Try our special biryani today 🍛 #SpiceGarden #BMSIT #AuthenticFood",
      likes: 234,
      comments: 18,
      time: "2h",
    },
    {
      platform: "Facebook",
      user: "FitZone Gym Banashankari",
      avatar: "/modern-gym-interior.png",
      image: "/modern-gym-equipment.png",
      caption:
        "New equipment just arrived! Come experience the difference at FitZone. First week free for new members! 💪",
      likes: 156,
      comments: 23,
      time: "4h",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Social Media Management</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Build a Thriving <span className="text-primary">Social Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
              Engage your audience, build brand loyalty, and drive sales through strategic social media management
              across all major platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Social Media Audit
              </Button>
              <Button variant="outline" size="lg">
                View Our Content
              </Button>
            </div>
          </div>

          {/* Platform Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <platform.icon className={`h-8 w-8 mx-auto mb-3 ${platform.color}`} />
                  <div className="font-semibold text-lg">{platform.name}</div>
                  <div className="text-sm text-muted-foreground">{platform.followers} avg growth</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Social Feed Mockup */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See Our Content in Action</h2>
            <p className="text-xl text-muted-foreground">Real posts from our clients' social media accounts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mockPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={post.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{post.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{post.user}</div>
                      <div className="text-xs text-muted-foreground">{post.time} ago</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {post.platform}
                    </Badge>
                  </div>
                </CardHeader>
                <div className="px-6 pb-3">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="Social media post"
                    className="w-full h-64 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-card-foreground mb-3">{post.caption}</p>
                  <div className="flex items-center gap-6 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share className="h-4 w-4" />
                      <span className="text-sm">Share</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Social Media Solutions</h2>
            <p className="text-xl text-muted-foreground">
              From content creation to community management, we handle everything
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-green-100 text-green-600">
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
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
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

      {/* Content Calendar Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Strategic Content Planning</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We create a comprehensive content calendar tailored to your business goals
          </p>
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">Posts per Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">Platforms Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Community Support</div>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Your Content Strategy
            </Button>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Social Presence?</h2>
          <p className="text-xl mb-8 opacity-90">Let's create engaging content that turns followers into customers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Social Media Audit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              View Content Samples
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
