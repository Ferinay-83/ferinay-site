"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, Globe, Smartphone, Server, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    privacyConsent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: false }))
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacyConsent: checked }))
    if (formErrors.privacyConsent) {
      setFormErrors((prev) => ({ ...prev, privacyConsent: false }))
    }
  }

  const validateForm = () => {
    const errors: Record<string, boolean> = {}

    if (!formData.firstName.trim()) errors.firstName = true
    if (!formData.lastName.trim()) errors.lastName = true
    if (!formData.email.trim()) errors.email = true
    if (!formData.message.trim()) errors.message = true
    if (!formData.privacyConsent) errors.privacyConsent = true

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          privacyConsent: false,
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
                {/* Removed link to "pricing" section */}
                <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <Button asChild className="hover:scale-105 transition-transform">
              <Link href="#contact">Request a Free Consultation</Link>
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
                <Link href="#contact">Request a Free Consultation</Link>
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

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4">Contact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional web design, cutting-edge web applications, and reliable hosting solutions — crafted to
              elevate your business to new heights.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Ready to transform your online presence? Contact us today for a free consultation.
            </p>
          </div>

          {/* Operating Hours & Communication Policy section */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="font-serif text-center">Operating Hours & Communication</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Operating Hours (SAST):</h4>
                  <p className="text-muted-foreground">Monday - Friday: 6:00 PM - 12:00 AM</p>
                  <p className="text-muted-foreground">Saturday & Sunday: Closed</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Thank you for your interest in my services. Please note that my hours are designed to be convenient
                    for busy professionals who need to discuss projects after normal business hours. I am dedicated to
                    providing excellent service and will reply to all inquiries within 24 business hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className={`border-2 ${formErrors.firstName ? "border-red-500" : "border-gray-300"} rounded-md p-3 w-full focus:border-blue-600 focus:outline-none transition-colors`}
                      />
                      {formErrors.firstName && <p className="text-red-500 text-sm">First name is required</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className={`border-2 ${formErrors.lastName ? "border-red-500" : "border-gray-300"} rounded-md p-3 w-full focus:border-blue-600 focus:outline-none transition-colors`}
                      />
                      {formErrors.lastName && <p className="text-red-500 text-sm">Last name is required</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`border-2 ${formErrors.email ? "border-red-500" : "border-gray-300"} rounded-md p-3 w-full focus:border-blue-600 focus:outline-none transition-colors`}
                    />
                    {formErrors.email && <p className="text-red-500 text-sm">Email address is required</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-2 border-gray-300 rounded-md p-3 w-full focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-2 border-gray-300 rounded-md p-3 w-full focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={`border-2 ${formErrors.message ? "border-red-500" : "border-gray-300"} rounded-md p-3 w-full focus:border-blue-600 focus:outline-none transition-colors`}
                    />
                    {formErrors.message && <p className="text-red-500 text-sm">Message is required</p>}
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacyConsent"
                      checked={formData.privacyConsent}
                      onCheckedChange={handleCheckboxChange}
                      className={formErrors.privacyConsent ? "border-red-500" : ""}
                    />
                    <label htmlFor="privacyConsent" className="text-sm leading-relaxed">
                      I consent to Ferinay collecting and processing my personal information in line with the{" "}
                      <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                      . *
                    </label>
                  </div>
                  {formErrors.privacyConsent && <p className="text-red-500 text-sm">Privacy consent is required</p>}

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                    </div>
                  )}
                  <Button type="submit" className="w-full hover:scale-105 transition-transform" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Request a Free Consultation"}
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
                    <span>info@ferinay.co.za</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <Link
                      href="https://wa.me/27621478511?text=Hi%2C%20I%20saw%20your%20website%20and%20I%27m%20interested%20in%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Chat on WhatsApp
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Randburg Area</span>
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

            <div className="mb-6 space-y-2">
              <p className="text-sm text-muted-foreground">Operating Hours (SAST): Mon-Fri 6:00 PM - 12:00 AM</p>
              <div className="flex justify-center items-center gap-4 text-sm">
                <span className="text-muted-foreground">info@ferinay.co.za</span>
                <span className="text-muted-foreground">•</span>
                <Link
                  href="https://wa.me/27621478511?text=Hi%2C%20I%20saw%20your%20website%20and%20I%27m%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>

            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">© 2025 Ferinay. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
