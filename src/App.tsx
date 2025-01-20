import React, { useState } from 'react';
import { 
  Bot, 
  Clock, 
  BarChart3, 
  MessageSquare, 
  Brain, 
  Calendar, 
  Database, 
  Home, 
  ChevronRight,
  Check,
  Star
} from 'lucide-react';

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
              10x Your GCI with Sophie AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Sophie is trained on real estate sales scripts that have generated millions in GCI. Book appointments. Qualify leads. Scale your business. 24/7.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Try Sophie Today
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-3xl font-bold text-blue-400">100%</p>
                <p className="text-gray-400">Lead Response Rate</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-3xl font-bold text-blue-400">24/7</p>
                <p className="text-gray-400">Always Available</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-3xl font-bold text-blue-400">10X</p>
                <p className="text-gray-400">Lead Engagement</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            The Real Estate Lead Problem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Missed Opportunities</h3>
                  <p className="text-gray-400">47% of leads never receive a follow-up call</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Slow Response Times</h3>
                  <p className="text-gray-400">78% of deals go to the first responder</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500/10 p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Manual Follow-ups</h3>
                  <p className="text-gray-400">8+ hours wasted weekly</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Opportunity Costs</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">Lost revenue from missed leads</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">Wasted ad spend</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">Time inefficiencies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">Lost deals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How Sophie AI Solves These Problems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="w-8 h-8" />,
                title: "Instant Response",
                description: "Never miss a lead with 24/7 instant responses"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Smart Lead Scoring",
                description: "Automatically qualify and prioritize leads"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Automated Booking",
                description: "Seamlessly schedule appointments"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "CRM Integration",
                description: "Works with your existing tools"
              },
              {
                icon: <Home className="w-8 h-8" />,
                title: "Property Matching",
                description: "AI-powered property recommendations"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Unlimited Capacity",
                description: "Handle unlimited concurrent conversations"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all">
                <div className="bg-blue-500/10 p-4 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How quickly can Sophie AI be implemented?",
                answer: "Implementation typically takes 24-48 hours. Our team handles all the setup, integration, and customization to ensure a smooth transition."
              },
              {
                question: "What CRM systems does Sophie integrate with?",
                answer: "Sophie integrates seamlessly with all major real estate CRMs including Go High Level, Follow Up Boss, Salesforce, Hubspot and more. Our team will work with you to create a custom integration with your CRM."
              },
              {
                question: "How many calls can Sophie handle simultaneously?",
                answer: "Sophie can handle unlimited simultaneous conversations, ensuring no lead ever has to wait. Our standard plan supports 10 concurrent calls, while the advanced plan supports 20."
              },
              {
                question: "What kind of success rates can I expect?",
                answer: "Our clients typically see a 2-3x increase in lead conversion rates within the first month, with some achieving up to 5x improvements in overall sales productivity."
              },
              {
                question: "Can Sophie AI handle both inbound and outbound calls?",
                answer: "Yes, Sophie AI is fully capable of managing inbound and outbound calls. Whether following up on leads or handling customer inquiries, Sophie ensures no opportunities are missed."
              },
              {
                question: "Is Sophie AI customizable to my specific business needs?",
                answer: "Absolutely. Sophie AI can be tailored to match your business goals, sales scripts, and branding. The Advanced Plan even includes a fully customizable voice agent with adjustable tone and responses to fit your style."
              },
              {
                question: "Can Sophie AI assist with property recommendations?",
                answer: "Yes, Sophie uses AI-powered algorithms to recommend properties that best match a lead's preferences, helping you close deals faster and with greater accuracy."
              },
              {
                question: "Does Sophie work with existing phone systems?",
                answer: "Sophie AI integrates easily with your existing phone systems and VoIP solutions. Our team will handle the setup to ensure a seamless experience."
              },
              {
                question: "Does Sophie support multilingual capabilities?",
                answer: "Currently, Sophie supports English but she is built to support additional languages including French, Spanish, Chinese, Hindi, German, Japanese, Portuguese, and more. Additional languages can be added upon request for businesses serving multilingual markets."
              },
              {
                question: "What kind of support does your team provide?",
                answer: "We offer: 24/7 technical support for Advanced Plan users, priority assistance for all setup and integrations, and a dedicated success manager for large teams and brokerages."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 transform transition-transform ${
                      openFAQ === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 py-4 text-gray-400 transition-all ${
                    openFAQ === index ? 'block' : 'hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Maximize Your ROI
          </h2>
          
          {/* Value Comparison */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Traditional Sales Setup vs Sophie AI</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-red-400">Traditional Setup: $5,000/month</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Virtual Assistant</span>
                      <span className="font-semibold">$1,500/mo</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Deal Admin</span>
                      <span className="font-semibold">$1,000/mo</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Inside Sales Rep</span>
                      <span className="font-semibold">$2,500+/mo</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-green-400">Sophie AI: $1,000-1,200/month</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-400" />
                      <span>24/7 Availability</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-400" />
                      <span>Unlimited Conversations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-400" />
                      <span>No Sick Days or Time Off</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-400" />
                      <span>Consistent Performance</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-4 bg-blue-900/30 rounded-lg">
                <p className="text-center text-lg">
                  <span className="font-bold text-blue-400">Save over $45,000 annually</span> while improving lead response times and conversion rates
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Choose Your Perfect Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Standard",
                price: "$1,000",
                setup: "$3,500",
                features: [
                  "Up to 1,000 conversations/month",
                  "Basic analytics dashboard",
                  "Email support",
                  "Standard response time",
                  "Basic CRM integration"
                ]
              },
              {
                name: "Advanced",
                price: "$1,200",
                setup: "$4,000",
                features: [
                  "Unlimited conversations",
                  "Advanced analytics & reporting",
                  "24/7 priority support",
                  "Custom voice & branding",
                  "Advanced CRM integration",
                  "Custom workflow automation"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                  <p className="text-gray-400">+{plan.setup} setup</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading real estate professionals leveraging AI to grow their business.
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            Try Sophie Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
