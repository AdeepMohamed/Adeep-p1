import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Share2, Clock, Lock, Users, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">MediVault</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Medical Records,
            <span className="text-blue-600"> Secure & Accessible</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Store, organize, and securely share your medical documents with healthcare providers. Take control of your
            health data with enterprise-grade security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                View Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            ✓ Free 30-day trial • ✓ No credit card required • ✓ HIPAA compliant
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Manage Your Health Records</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools designed for patients who want to take control of their medical information
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Document Management</CardTitle>
              <CardDescription>
                Upload, organize, and categorize all your medical documents in one secure location
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Share2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Secure Sharing</CardTitle>
              <CardDescription>
                Share records with doctors using time-limited OTP links for maximum security
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Health Timeline</CardTitle>
              <CardDescription>
                Visualize your health journey with chronological timeline of all medical events
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Bank-Level Security</CardTitle>
              <CardDescription>
                256-bit encryption, secure cloud storage, and HIPAA-compliant infrastructure
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Family Management</CardTitle>
              <CardDescription>Manage medical records for your entire family from a single dashboard</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Privacy First</CardTitle>
              <CardDescription>You own your data. No selling, no tracking, complete privacy protection</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose MediVault?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Never Lose Important Records</h3>
                    <p className="text-gray-600">Keep all your medical documents safe and accessible from anywhere</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Faster Doctor Visits</h3>
                    <p className="text-gray-600">
                      Share your complete medical history instantly with new healthcare providers
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Emergency Preparedness</h3>
                    <p className="text-gray-600">Critical medical information available when you need it most</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Insurance Claims</h3>
                    <p className="text-gray-600">Easily access documents needed for insurance and reimbursements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-700 mb-6">Patients Trust MediVault</div>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "MediVault has transformed how I manage my family's health records. It's secure, easy to use, and
                  gives me peace of mind."
                </p>
                <p className="text-sm text-gray-500 mt-2">- Sarah M., MediVault User</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Secure Your Medical Records?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of patients who have taken control of their health data
          </p>
          <Link href="/register">
            <Button size="lg" className="text-lg px-8 py-3">
              Get Started Free
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">30-day free trial • Cancel anytime • HIPAA compliant</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6" />
                <span className="text-xl font-bold">MediVault</span>
              </div>
              <p className="text-gray-400">Secure medical record management for modern healthcare.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/features">Features</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/security">Security</Link>
                </li>
                <li>
                  <Link href="/demo">Demo</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help">Help Center</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/docs">Documentation</Link>
                </li>
                <li>
                  <Link href="/status">System Status</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/hipaa">HIPAA Compliance</Link>
                </li>
                <li>
                  <Link href="/cookies">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
