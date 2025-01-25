import { DynamicHero } from "@/components/dynamicHero"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, BookOpen, LaptopIcon, Heart, TrendingUp, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <DynamicHero />

      {/* Impact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#356795] opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#84CC16] opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-[#356795]/10 uppercase mb-4">Impact</h2>
            <p className="text-2xl text-[#356795] font-semibold -mt-8">Our Reach Across Africa</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Users, value: "1,000+", label: "Students" },
              { icon: BookOpen, value: "50+", label: "Workshops" },
              { icon: TrendingUp, value: "20+", label: "Partners" },
              { icon: LaptopIcon, value: "500+", label: "Laptops" },
              { icon: Globe, value: "5", label: "Countries" },
              { icon: Heart, value: "95%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-xl bg-[#356795]/5 flex items-center justify-center mb-4 group-hover:bg-[#356795] transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-[#356795] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-3xl font-bold text-[#356795] mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-[#356795]/10 uppercase mb-4">Programs</h2>
            <p className="text-2xl text-[#356795] font-semibold -mt-8">What We Offer</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Workshops",
                description: "Hands-on learning experiences led by industry experts and academics.",
              },
              {
                icon: LaptopIcon,
                title: "Laptop Donation",
                description: "Providing essential tools for learning through our laptop donation scheme.",
              },
              {
                icon: Users,
                title: "Mentorship",
                description: "Connect with experienced mentors who guide your learning journey.",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#356795]/5 rounded-bl-[100px] transition-colors duration-300 group-hover:bg-[#356795]/10" />

                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-[#356795]/5 flex items-center justify-center mb-6 group-hover:bg-[#356795] transition-colors duration-300">
                    <program.icon className="h-8 w-8 text-[#356795] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-[#356795]">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <h2 className="text-6xl font-black text-[#356795]/10 uppercase mb-4">Contact</h2>
              <p className="text-2xl text-[#356795] font-semibold -mt-8 mb-8">Get in Touch</p>
              <p className="text-xl text-gray-600 mb-8">
                Have questions about our programs? We'd love to hear from you.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Heart, text: "Join our community of learners" },
                  { icon: Users, text: "Connect with mentors" },
                  { icon: BookOpen, text: "Access learning resources" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#356795]/5 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-[#356795]" />
                    </div>
                    <span className="text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#356795]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#356795]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#356795]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#356795]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-[#356795] text-white rounded-md hover:bg-[#356795]/90 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

