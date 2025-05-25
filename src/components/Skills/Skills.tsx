import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItemProps {
  company: string;
  role: string;
  duration: string;
  description: string;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, role, duration, description, index }) => {
  return (
    <motion.div
      className="mb-8 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-neon-blue before:to-neon-violet"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h4 className="text-lg font-medium text-metal-100">{role}</h4>
      <div className="flex justify-between items-center mb-2">
        <span className="text-neon-blue">{company}</span>
        <span className="text-metal-400 text-sm">{duration}</span>
      </div>
      <p className="text-metal-300">{description}</p>
    </motion.div>
  );
};

interface TechIconProps {
  name: string;
  icon: string;
  index: number;
}

const TechIcon: React.FC<TechIconProps> = ({ name, icon, index }) => {
  return (
    <motion.div
      className="interactive flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-dark-200 mb-2 border border-metal-800">
        <img src={icon} alt={name} className="w-8 h-8" />
      </div>
      <span className="text-metal-300 text-sm">{name}</span>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const experience = [
    {
      company: 'AICTE Cloud Virtual Internship',
      role: 'Intern',
      duration: 'Apr 2023- Jul 2023',
      description: 'Completed a Cloud Computing Virtual Internship, mastering AWS services such as EC2, S3, IAM, and VPC. ' +
        'Gained practical skills and knowledge through hands-on projects, earning an AWS Digital Badge upon successful completion.',
    },
    {
      company: 'AICTE Data Engineering Virtual Internship',
      role: 'Intern',
      duration: 'Sep 2023- Nov 2023',
      description: 'Completed a virtual Data Engineering internship with AICTE, honing skills in AWS-based software development workflows. ' +
        'Contributed to projects enhancing data processing and analysis capabilities.',
    },
  ];

  const techIcons = [
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
    { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-violet opacity-30" />

      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-neon-blue opacity-5 rounded-full blur-3xl" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-neon-violet opacity-5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-metal-100 to-metal-400">
            Experience & Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h3
              className="text-xl font-medium text-metal-100 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Professional Experience
            </motion.h3>

            <div>
              {experience.map((exp, index) => (
                <ExperienceItem
                  key={exp.company}
                  {...exp}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              className="text-xl font-medium text-metal-100 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Technologies & Tools
            </motion.h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {techIcons.map((tech, index) => (
                <TechIcon
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  index={index}
                />
              ))}
            </div>

            <motion.div
              className="mt-12 p-6 bg-dark-200 rounded-lg border border-metal-800 relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-metal-gradient opacity-5" />
              <div className="relative z-10">
                <h4 className="text-lg font-medium text-metal-100 mb-2">Cloud Innovation</h4>
                <p className="text-metal-300">
                  Specializing in AWS architecture, serverless computing, and implementing secure, scalable cloud solutions with a focus on cost optimization and performance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;