import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+234 901 196 7239', '+234 814 791 4427'],
      href: 'tel:+2349011967239'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['ahmadabdulazeez122@gmail.com'],
      href: 'mailto:ahmadabdulazeez122@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Lagos, Nigeria'],
      href: null
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      details: ['Professional Profile'],
      href: 'https://linkedin.com/in/ahmad-abdulazeez-530a311a5'
    }
  ];

  return (
    <section id="contact" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Get In Touch</h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Ready to discuss your next project? Let's connect and explore how I can add value to your construction and infrastructure initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg flex-shrink-0 ${
                    darkMode ? 'bg-blue-900/50' : 'bg-blue-100'
                  }`}>
                    <info.icon className={`${
                      darkMode ? 'text-blue-500' : 'text-blue-600'
                    }`} size={24} />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>{info.title}</h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                        {info.href ? (
                          <a href={info.href} className={`transition-colors ${
                            darkMode 
                              ? 'hover:text-blue-500' 
                              : 'hover:text-blue-600'
                          }`}>
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-12 p-6 rounded-xl border ${
              darkMode 
                ? 'bg-slate-800 border-slate-700' 
                : 'bg-white border-slate-200'
            }`}>
              <h4 className={`font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Professional Services</h4>
              <ul className={`space-y-2 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <li>• Cost estimation and budget planning</li>
                <li>• Project management consulting</li>
                <li>• Contract administration and claims management</li>
                <li>• Value engineering and cost optimization</li>
                <li>• Construction supervision and quality assurance</li>
                <li>• Procurement and material management</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl shadow-lg p-8 border ${
            darkMode 
              ? 'bg-slate-800 border-slate-700' 
              : 'bg-white border-slate-100'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Send a Message</h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h4 className={`text-xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>Message Sent!</h4>
                <p className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Thank you for your message. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors ${
                        darkMode 
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors ${
                        darkMode 
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                      darkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                    placeholder="Project inquiry, consultation, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none ${
                      darkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                    placeholder="Tell me about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;