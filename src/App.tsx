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
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-purple-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" alt="Task Force AI Logo" className="h-8 w-8" />
              <span className="text-xl font-bold purple-gradient-text">Task Force AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('solution-section')}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Sophie AI
              </button>
              <button 
                onClick={() => scrollToSection('faq-section')}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('pricing-section')}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Pricing
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <header className="relative overflow-hidden py-32">
          <div className="gradient-blur absolute inset-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold purple-gradient-text mb-8 leading-tight">
                10x Your GCI with Sophie AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                 Sophie is a cutting-edge voice agent and a member of the Task Force AI workforce. Book appointments. Qualify leads. Scale your business. 24/7.
              </p>
              <button 
                onClick={() => scrollToSection('contact-form')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 purple-glow"
              >
                Try Sophie Today
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                <div className="glass-card p-8 rounded-2xl">
                  <p className="text-4xl font-bold text-purple-400 mb-2">100%</p>
                  <p className="text-gray-400">Lead Response Rate</p>
                </div>
                <div className="glass-card p-8 rounded-2xl">
                  <p className="text-4xl font-bold text-purple-400 mb-2">24/7</p>
                  <p className="text-gray-400">Always Available</p>
                </div>
                <div className="glass-card p-8 rounded-2xl">
                  <p className="text-4xl font-bold text-purple-400 mb-2">10X</p>
                  <p className="text-gray-400">Lead Engagement</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Problem Section */}
        <section className="py-32 bg-dark-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 purple-gradient-text">
              The Real Estate Lead Problem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="glass-card p-6 rounded-2xl flex items-start space-x-6">
                  <div className="bg-purple-600/10 p-4 rounded-xl">
                    <MessageSquare className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Missed Opportunities</h3>
                    <p className="text-gray-400">47% of leads never receive a follow-up call</p>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-2xl flex items-start space-x-6">
                  <div className="bg-purple-600/10 p-4 rounded-xl">
                    <Clock className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Slow Response Times</h3>
                    <p className="text-gray-400">78% of deals go to the first responder</p>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-2xl flex items-start space-x-6">
                  <div className="bg-purple-600/10 p-4 rounded-xl">
                    <BarChart3 className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Manual Follow-ups</h3>
                    <p className="text-gray-400">8+ hours wasted weekly</p>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-8">Opportunity Costs</h3>
                <ul className="space-y-6">
                  <li className="flex items-center space-x-4">
                    <ChevronRight className="w-6 h-6 text-red-400" />
                    <span className="text-red-400">Lost revenue from missed leads</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <ChevronRight className="w-6 h-6 text-red-400" />
                    <span className="text-red-400">Wasted ad spend on unconverted leads</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <ChevronRight className="w-6 h-6 text-red-400" />
                    <span className="text-red-400">Time spent on manual follow-ups</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <ChevronRight className="w-6 h-6 text-red-400" />
                    <span className="text-red-400">Inability to scale efficiently</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <ChevronRight className="w-6 h-6 text-red-400" />
                    <span className="text-red-400">Deals lost to faster competitors</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <ChevronRight className="w-6 h-6 text-red-400" />
                    <span className="text-red-400">Not using cutting-edge AI tech</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution-section" className="py-32 bg-dark relative overflow-hidden">
          <div className="gradient-blur absolute inset-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 purple-gradient-text">
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
                <div key={index} className="glass-card p-8 rounded-2xl hover:shadow-purple-glow transition-all duration-300">
                  <div className="bg-purple-600/10 p-4 rounded-xl w-fit mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq-section" className="py-32 bg-dark-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 purple-gradient-text">
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
                }
              ].map((faq, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left flex justify-between items-center"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <ChevronRight
                      className={`w-6 h-6 text-purple-400 transform transition-transform ${
                        openFAQ === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`px-8 py-6 text-gray-400 transition-all ${
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
        <section id="pricing-section" className="py-32 bg-dark relative overflow-hidden">
          <div className="gradient-blur absolute inset-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 purple-gradient-text">
              Maximize Your ROI
            </h2>
            
            {/* Value Comparison */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="glass-card rounded-2xl p-10">
                <h3 className="text-2xl font-bold mb-10 text-center">Traditional Sales Setup vs Sophie AI</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-red-400">Traditional Setup: $5,000/month</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between p-3 glass-card-highlight rounded-xl">
                        <span className="text-gray-200">Virtual Assistant</span>
                        <span className="font-semibold text-red-400">$1,500/mo</span>
                      </li>
                      <li className="flex justify-between p-3 glass-card-highlight rounded-xl">
                        <span className="text-gray-200">Deal Admin</span>
                        <span className="font-semibold text-red-400">$1,000/mo</span>
                      </li>
                      <li className="flex justify-between p-3 glass-card-highlight rounded-xl">
                        <span className="text-gray-200">Inside Sales Rep</span>
                        <span className="font-semibold text-red-400">$2,500+/mo</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-purple-400">Sophie AI: $1,000-1,200/month</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-3 p-3 glass-card-highlight rounded-xl">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">24/7 Availability</span>
                      </li>
                      <li className="flex items-center space-x-3 p-3 glass-card-highlight rounded-xl">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">Unlimited Conversations</span>
                      </li>
                      <li className="flex items-center space-x-3 p-3 glass-card-highlight rounded-xl">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">No Sick Days or Time Off</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-10 p-6 glass-card-highlight rounded-xl">
                  <p className="text-center text-lg text-white">
                    Save over $45,000 annually while improving lead response times and conversion rates
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 purple-gradient-text">
              Choose Your Perfect Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Standard",
                  price: "$0.25",
                  setup: "$0",
                  features: [
                    "Inbound & Outbound Calls",
                    "10 Simultaneous Calls",
                    "Unlimited Call Minutes",
                    "Basic CRM integration",
                    "Custom Property Database",
                    "24/7 365 Availability"
                  ]
                },
                {
                  name: "Advanced",
                  price: "$0.40",
                  setup: "$3,000",
                  features: [
                    "Everything in Standard plus",
                    "20+ Simultaneous Calls",
                    "Fully Customizable Use Cases",
                    "Custom Agent Voice & Branding",
                    "Advanced CRM integration",
                    "24/7 Priority Support"
                  ]
                }
              ].map((plan, index) => (
                <div key={index} className="glass-card p-10 rounded-2xl hover:shadow-purple-glow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                  <div className="mb-8">
                    <span className="text-4xl font-bold purple-gradient-text">{plan.price}</span>
                    <span className="text-gray-400">/minute</span>
                    <p className="text-gray-400">+{plan.setup} setup fee</p>
                    <p className="text-purple-400 mt-3 flex items-center"> </p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => scrollToSection('contact-form')}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-xl font-semibold transition-all purple-glow"
                  >
                    Get Started Today
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA with Form */}
        <section className="py-32 hero-gradient relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 purple-gradient-text">
                Ready to Transform Your Real Estate Business?
              </h2>
              <p className="text-xl text-gray-300">
                Join leading real estate professionals leveraging AI to grow their business.
              </p>
            </div>

            {/* Form Section */}
            <div
              id="contact-form"
              className="max-w-2xl mx-auto bg-purple-800/50 rounded-2xl p-8 backdrop-blur-sm shadow-lg"
            >
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/Pa6EFHDZSehyAEhGoHJF"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '10px',
                }}
                className="w-full h-[400px]"
                title="Contact Form"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
