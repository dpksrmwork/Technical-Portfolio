"use client";
import { motion } from 'framer-motion';
import { Database, Cloud, Code, Zap, Server, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Streaming & Messaging",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Apache Kafka", level: 95 },
        { name: "AWS Kinesis", level: 90 },
        { name: "EventBridge", level: 85 },
        { name: "Step Functions", level: 80 }
      ]
    },
    {
      title: "Big Data & Analytics",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Apache Spark", level: 95 },
        { name: "Apache Iceberg", level: 85 },
        { name: "AWS Glue", level: 90 },
        { name: "Amazon Athena", level: 85 }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "AWS Lambda", level: 90 },
        { name: "API Gateway", level: 85 },
        { name: "DynamoDB", level: 80 },
        { name: "S3", level: 95 }
      ]
    },
    {
      title: "Programming & Frameworks",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "FastAPI", level: 90 },
        { name: "PySpark", level: 85 },
        { name: "Flask", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: <Server className="w-8 h-8" />,
      color: "from-red-500 to-rose-500",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "DynamoDB", level: 80 },
        { name: "Elasticsearch", level: 75 },
        { name: "Redis", level: 70 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <GitBranch className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Git", level: 90 },
        { name: "AWS CDK", level: 80 },
        { name: "GitLab CI/CD", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expertise in modern data engineering, cloud computing, and distributed systems
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
          <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur rounded-xl p-8 border border-gray-700/50">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-2">Bachelor of Engineering</h4>
              <p className="text-blue-400 mb-2">Rajiv Gandhi Prodyuogiki Vishwavidyalaya, Bhopal</p>
              <p className="text-gray-400 mb-2">LNCT, Bhopal • 2018</p>
              <p className="text-green-400 font-semibold">CGPA: 7.83</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;