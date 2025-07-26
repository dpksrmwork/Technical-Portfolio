"use client";
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Developer I",
      company: "Delta Airlines Limited",
      period: "Apr 2023 - Present",
      location: "Remote",
      description: "Designed and implemented real-time data pipelines and lakehouse architecture on AWS",
      achievements: [
        "Built real-time data pipelines with Kinesis, Lambda, and S3 processing 10M+ events/day",
        "Implemented Apache Spark jobs with Iceberg tables for ACID transactions",
        "Designed event-driven distributed systems with Kafka and Step Functions",
        "Created scalable REST APIs with FastAPI, API Gateway, and DynamoDB"
      ],
      technologies: ["AWS", "Apache Kafka", "Apache Spark", "Apache Iceberg", "FastAPI", "DynamoDB"]
    },
    {
      title: "Consultant",
      company: "Deloitte India",
      period: "Feb 2021 - Apr 2023",
      location: "Bangalore, India",
      description: "Designed and implemented cloud-native solutions for enterprise clients",
      achievements: [
        "Built content repository service with Route53, API Gateway, and Lambda",
        "Implemented payment processing ingestion layer with Kinesis and PostgreSQL",
        "Designed real-time trading systems with Kinesis data streams"
      ],
      technologies: ["Python", "FastAPI", "AWS Lambda", "Kinesis", "PostgreSQL", "API Gateway"]
    },
    {
      title: "Senior Systems Engineer",
      company: "Infosys Limited",
      period: "Jun 2018 - Feb 2021",
      location: "Bangalore, India",
      description: "Developed REST APIs and monitoring solutions for networking infrastructure",
      achievements: [
        "Built Flask-based REST APIs for network device management",
        "Implemented ELK stack for log ingestion and monitoring",
        "Containerized applications using Docker for scalability"
      ],
      technologies: ["Python", "Flask", "Docker", "Elasticsearch", "Linux", "Networking"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            7+ years of building scalable data systems and cloud solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
              
              <div className="ml-16 bg-gray-800/50 backdrop-blur rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <Building size={16} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;