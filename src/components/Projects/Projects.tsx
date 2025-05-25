import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Cloud Cost Optimization',
    description: 'Implemented a Lambda function to fetch all EBS snapshots owned by the same account (\'self\') and retrieve a list of active EC2 instances (running and stopped). ' +
      'Verified if each snapshot\'s associated volume (if exists) was not linked to any active instance. ' +
      'Deleted stale snapshots, effectively optimizing storage costs.',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['AWS Lambda', 'API Gateway', 'EC2', 'AWS CLI', 'Python3'],
    liveLink: '#',
    githubLink: 'https://github.com/jayanthsaigithub/Cloud-Cost-Optimization---AWS_Boto3.git',
  },
  {
    title: ' End-to-End CI/CD Implementation — Jenkins',
    description: 'Built an end-to-end CI/CD pipeline for a Java-based application using Jenkins declarative pipelines. ' +
      'Included stages such as Build, Unit Testing, Static Code Analysis, SAST, DAST, Creation of Docker Images, and Deployment on Kubernetes using Argo CD. ' +
      'Orchestrated the CI/CD pipeline and administrated using JIRA.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Jenkins', 'AWS CLI', 'Trivy', 'Argo CD', 'Kubernetes', 'java', 'maven', 'docker', 'jira', 'sonar'],
    liveLink: '#',
    githubLink: 'https://github.com/jayanthsaigithub/End-to-End-CI-CD-Pipeline.git',
  },
  {
    title: ' Kubernetes End-to-End Deployment — EKS',
    description: 'Deployed a Kubernetes cluster on AWS EKS and integrated it with Argo CD for automated scaling and deployment.',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Kubernetes', 'Docker', 'AWS EKS', 'Terraform'],
    liveLink: '#',
    githubLink: 'https://github.com/jayanthsaigithub/Kubernetes-End-to-End-Deployment-EKS.git',
  },
  {
    title: ' DevOps Monitoring with Prometheus & Grafana',
    description: 'Configured Prometheus for collecting and analyzing system and application metrics. ' +
      'Deployed Node Exporter for monitoring server health (CPU, RAM) and Blackbox Exporter for website availability. ' +
      'Created Grafana dashboards to visualize real-time monitoring data and performance trends. ' +
      'Configured virtual machines with proper security and resource allocation for monitoring infrastructure.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Prometheus', 'Grafana', 'Node Exporter', 'Blackbox Exporter', 'AWS CLI', 'AWS CloudWatch', 'AWS EC2', 'AWS IAM'],
    liveLink: '#',
    githubLink: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-dark-400 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-violet to-neon-blue opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-metal-100 to-metal-400">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto" />
          <p className="text-metal-300 mt-6 max-w-2xl mx-auto">
            Explore my cloud architecture and AWS solutions that demonstrate scalability, security, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="interactive inline-block text-neon-blue hover:text-neon-violet transition-colors border-b border-neon-blue hover:border-neon-violet pb-1"
          >
            <a
              href="https://github.com/jayanthsaigithub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              View All Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;