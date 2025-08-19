import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, Smartphone, Server, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold font-serif text-primary">
                Ferinay
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#portfolio" className="text-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
                <Link href="#pricing" className="text-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
                <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <Button asChild className="hover:scale-105 transition-transform">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-foreground mb-6">
              Transform Your Digital Presence with <span className="text-primary">Ferinay</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional web design, cutting-edge web applications, and reliable hosting solutions that elevate your
              business to new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="hover:scale-105 transition-transform">
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <Link href="#portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in creating digital solutions that drive results and exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif">Web Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Beautiful, responsive websites that capture your brand essence and engage your audience across all
                  devices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif">Web Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Custom web applications built with modern technologies to streamline your business processes and
                  enhance user experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Server className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif">Hosting Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Reliable, secure, and fast hosting services that ensure your website performs optimally 24/7 with
                  minimal downtime.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4">Our Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover some of our recent projects and see how we've helped businesses succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="E-commerce Platform"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif">E-commerce Platform</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A modern e-commerce platform with advanced filtering, secure payments, and inventory management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Corporate Website"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif">Corporate Website</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">WordPress</Badge>
                  <Badge variant="secondary">SEO</Badge>
                  <Badge variant="secondary">Analytics</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional corporate website with CMS integration, SEO optimization, and analytics tracking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="SaaS Dashboard"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif">SaaS Dashboard</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive SaaS dashboard with real-time data visualization and user management.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4">Choose Your Package</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options designed to meet your specific needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <Card className="relative hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-serif text-2xl mb-4">Starter</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">R15,000</div>
                  <div className="text-lg text-muted-foreground">R500/month hosting</div>
                </div>
                <CardDescription className="mt-4 text-base">Perfect for small businesses and startups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>5-page responsive website</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>Mobile-first design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>Basic SEO optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>Contact form integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>SSL certificate included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>1 month free hosting</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#2D89EF] hover:bg-[#2D89EF]/90 hover:scale-105 transition-all duration-300 rounded-lg font-semibold"
                  asChild
                >
                  <Link href="#contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Business Package */}
            <Card className="relative border-2 border-[#2D89EF] hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#2D89EF] text-white px-4 py-1 text-sm font-semibold rounded-full">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="font-serif text-2xl mb-4">Business</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">R35,000</div>
                  <div className="text-lg text-muted-foreground">R800/month hosting</div>
                </div>
                <CardDescription className="mt-4 text-base">Ideal for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>10-page responsive website</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>Custom web application</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>Advanced SEO & Analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>CMS integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>E-commerce functionality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>3 months free hosting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>Priority support</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#2D89EF] hover:bg-[#2D89EF]/90 hover:scale-105 transition-all duration-300 rounded-lg font-semibold"
                  asChild
                >
                  <Link href="#contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="relative hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-serif text-2xl mb-4">Premium</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">R65,000</div>
                  <div className="text-lg text-muted-foreground">R1,200/month hosting</div>
                </div>
                <CardDescription className="mt-4 text-base">Complete solution for enterprises</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>Unlimited pages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>Complex web application</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>Full e-commerce platform</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>Advanced security features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>API integrations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>6 months free hosting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D89EF] flex-shrink-0" />
                    <span>24/7 dedicated support</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#2D89EF] hover:bg-[#2D89EF]/90 hover:scale-105 transition-all duration-300 rounded-lg font-semibold"
                  asChild
                >
                  <Link href="#contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your project? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action="/api/contact" method="POST" className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company (Optional)
                    </label>
                    <Input id="company" name="company" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full hover:scale-105 transition-transform">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold font-serif mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>hello@ferinay.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>123 Business Ave, Suite 100, City, State 12345</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif mb-4">Why Choose Ferinay?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <strong>Expert Team:</strong> Our experienced developers and designers stay current with the
                      latest technologies.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <strong>Fast Delivery:</strong> We deliver high-quality projects on time, every time.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <strong>Ongoing Support:</strong> We provide continuous support and maintenance for all our
                      projects.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="text-2xl font-bold font-serif text-primary mb-4 inline-block">
              Ferinay
            </Link>
            <p className="text-muted-foreground mb-6">Transforming digital experiences, one project at a time.</p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">© 2024 Ferinay. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
