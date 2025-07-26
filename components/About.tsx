'use client'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Database,
    title: 'Real-Time Data Pipelines',
    description: 'Designed scalable data pipelines processing terabytes of data daily using Kinesis, Spark, and Iceberg'
  },
  {
    icon: Cloud,
    title: 'AWS Cloud Architecture',
    description: 'Built distributed systems on AWS with Lambda, DynamoDB, API Gateway, and EventBridge'
  },
  {
    icon: Code,
    title: 'Event-Driven Systems',
    description: 'Implemented Apache Kafka-based streaming architectures for real-time notifications'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Reduced data processing latency by 85% and improved API response times by 60%'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Senior Developer with over 7 years of experience designing and building real-time data pipelines 
            and lakehouses on AWS. Specialized in stream processing, event-driven architectures, and 
            serverless microservices that power mission-critical airline operations at Delta Airlines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-lg mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}