import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Linkedin, Instagram, Github, } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_m9cp73j',
  PUBLIC_KEY: '7wXkI9iw4vu9rGu2G',
  TEMPLATE_ID: 'template_izv3odj'
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current!,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSuccess(true);
        setForm({ from_name: '', reply_to: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-neon-blue" />,
      title: 'Email',
      content: 'paladijayanthsai@gmail.com',
      link: 'mailto:paladijayanthsai@gmail.com',
    },
    {
      icon: <Linkedin className="text-neon-blue" />,
      title: 'LinkedIn',
      content: 'Connect with me',
      link: 'https://www.linkedin.com/in/jayanthsaipaladi/',
    },
    {
      icon: <Instagram className="text-neon-blue" />,
      title: 'Instagram',
      content: 'Follow me',
      link: 'https://www.instagram.com/jayanthsai_paladi/',
    },
    {
      icon: <Github className="text-neon-blue" />,
      title: 'Github',
      content: 'Follow me',
      link: 'https://www.github.com/jayanthsai-paladi/',
    },
    {
      icon: <Phone className="text-neon-blue" />,
      title: 'Contact',
      content: '+91 8985589716',
      link: 'tel:+91 8985589716',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-400 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-violet to-neon-blue opacity-30" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-blue opacity-5 rounded-full blur-3xl" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-neon-violet opacity-5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-metal-100 to-metal-400">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto" />
          <p className="text-metal-300 mt-6 max-w-2xl mx-auto">
            Looking to discuss cloud solutions or explore potential collaborations? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive flex items-center p-4 bg-dark-300 rounded-lg border border-metal-800 hover:border-neon-blue transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <div className="mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-metal-100 font-medium">{item.title}</h3>
                  <p className="text-metal-300">{item.content}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="lg:col-span-3 bg-dark-300 p-6 md:p-8 rounded-xl border border-metal-800 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-metal-gradient opacity-5" />
            <div className="relative z-10">
              <h3 className="text-xl font-medium text-metal-100 mb-6">Send a Message</h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 bg-dark-200 p-8 rounded-lg border border-metal-800"
              >
                <div>
                  <label htmlFor="from_name" className="block text-metal-100 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-300 border border-metal-800 rounded-lg text-metal-100 focus:outline-none focus:border-neon-blue"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="reply_to" className="block text-metal-100 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    value={form.reply_to}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-300 border border-metal-800 rounded-lg text-metal-100 focus:outline-none focus:border-neon-blue"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-metal-100 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-dark-300 border border-metal-800 rounded-lg text-metal-100 focus:outline-none focus:border-neon-blue"
                    placeholder="Your message"
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm bg-red-500/10 p-3 rounded-lg">{error}</div>
                )}

                {success && (
                  <div className="text-green-500 text-sm bg-green-500/10 p-3 rounded-lg">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-violet text-white py-3 px-6 rounded-lg font-medium hover:shadow-neon-blue transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;