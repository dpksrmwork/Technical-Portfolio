"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Database, Zap, Cloud } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Real-time Data Lakehouse @ Delta Airlines",
      description: "Scalable data pipeline processing 10M+ events/day with Apache Kafka, Spark, and Iceberg",
      longDescription: "Designed and implemented real-time data pipelines and lakehouse architecture on AWS with stream ingestion using Kinesis Streams, Firehose, and Lambda. Built Apache Spark jobs for transformations on raw data, compressed and stored in Apache Iceberg tables backed by S3 Data Lake, catalogued in Glue Catalog and Athena for real-time analytics.",
      technologies: ["Apache Kafka", "Apache Spark", "Apache Iceberg", "AWS Kinesis", "AWS Lambda", "AWS S3", "AWS Glue", "Amazon Athena"],
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      metrics: {
        throughput: "10M+ events/day",
        latency: "<100ms p99",
        uptime: "99.9%"
      }
    },
    {
      id: 2,
      title: "Event-Driven Notification System @ Delta Airlines",
      description: "Distributed system delivering real-time notifications with Apache Kafka and AWS services",
      longDescription: "Designed and implemented event-driven distributed system to deliver real-time notifications with event streaming using Apache Kafka, Event Bus and Rules to buffer and route, Step Functions for workflow orchestration, Lambda for processing and delivery. Built highly available, secure and scalable system managing customer data.",
      technologies: ["Apache Kafka", "AWS EventBridge", "AWS Step Functions", "AWS Lambda", "FastAPI", "DynamoDB", "API Gateway"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      metrics: {
        throughput: "1M+ notifications/hour",
        latency: "<500ms end-to-end",
        uptime: "99.95%"
      }
    },
    {
      id: 3,
      title: "Content Repository Service @ Deloitte",
      description: "Scalable document management system with search, storage, and retrieval capabilities",
      longDescription: "Designed and implemented Content Repository service to manage and serve documents using Route53, API Gateway and Lambda for security, scalability and compute enabling search, storage and retrieval. Built ingestion layer for payment processor with scheduled Lambda functions and Kinesis streaming.",
      technologies: ["Python", "FastAPI", "AWS Lambda", "API Gateway", "Route53", "S3", "PostgreSQL", "Kinesis"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      metrics: {
        throughput: "100K+ documents",
        latency: "<200ms search",
        uptime: "99.9%"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world solutions built for enterprise clients processing millions of events daily
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/30 backdrop-blur rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50"
            >
              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-20`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                    <div className="text-xl font-bold text-blue-400">{project.metrics.throughput}</div>
                    <div className="text-sm text-gray-400">Throughput</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                    <div className="text-xl font-bold text-green-400">{project.metrics.latency}</div>
                    <div className="text-sm text-gray-400">Latency</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                    <div className="text-xl font-bold text-purple-400">{project.metrics.uptime}</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                <motion.button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  <span>{expandedProject === project.id ? 'Show Less' : 'Learn More'}</span>
                  {expandedProject === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </motion.button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-700"
                    >
                      <h4 className="text-xl font-semibold text-white mb-4">Project Details</h4>
                      <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;