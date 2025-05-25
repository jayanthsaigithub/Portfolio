import React from 'react';
import { motion } from 'framer-motion';
import { Code, PaintBucket, Lightbulb } from 'lucide-react';
import profileImage from '../../assets/profile.jpg';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <motion.div
    className="interactive relative bg-dark-200 overflow-hidden rounded-lg p-6 border border-metal-800"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="absolute inset-0 bg-metal-gradient opacity-5" />
    <div className="relative z-10">
      <div className="text-neon-blue mb-4">{icon}</div>
      <h3 className="text-metal-100 text-xl font-medium mb-2">{title}</h3>
      <p className="text-metal-300">{description}</p>
    </div>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-violet opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-metal-100 to-metal-400">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-metal-gradient opacity-10" />
              </div>

              <div className="absolute inset-1 bg-dark-300 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover object-center aspect-square mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>

              <div className="absolute -top-3 -right-3 h-24 w-24 bg-gradient-to-r from-neon-blue to-neon-violet rounded-lg opacity-70 blur-2xl" />
              <div className="absolute -bottom-3 -left-3 h-24 w-24 bg-gradient-to-r from-neon-violet to-neon-blue rounded-lg opacity-70 blur-2xl" />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              className="text-metal-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              I'm Jayanthsai Paladi, a final-year B.Tech student in Computer Science and Engineering at SRM University, with a specialization in Cloud Computing. My academic journey, combined with industry-relevant certifications like the AWS Solutions Architect – Associate, has equipped me with the knowledge and practical skills to architect and manage modern cloud-based infrastructures.
            </motion.p>

            <motion.p
              className="text-metal-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              My journey into tech began with a fascination for how digital tools can transform ideas into reality. Since then, I've worked with startups and established companies to develop solutions that make an impact.
            </motion.p>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                className="interactive inline-block bg-gradient-to-r from-neon-blue to-neon-violet text-white py-3 px-6 rounded-lg font-medium hover:shadow-neon-blue transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Code size={28} />}
            title="Development"
            description="Building responsive, high-performance web applications with modern frameworks and tools."
            delay={0.2}
          />
          <FeatureCard
            icon={<PaintBucket size={28} />}
            title="Design"
            description="Creating sleek, intuitive user interfaces with attention to detail and aesthetics."
            delay={0.4}
          />
          <FeatureCard
            icon={<Lightbulb size={28} />}
            title="Innovation"
            description="Exploring new technologies and approaches to solve complex problems creatively."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default About;