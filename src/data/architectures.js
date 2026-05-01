// Add your architecture diagrams here.
// For each entry, place your image in the /public/architectures/ folder
// then set imagePath to e.g. '/architectures/file-ingestion.png'
// Set imagePath to null to show a placeholder until the image is ready.

export const architectures = [
  {
    id: 1,
    title: 'Fund Transaction File Ingestion',
    company: 'Clearstream · Deutsche Börse Group',
    description: 'Microservice that ingests pre-settled fund transactions for a major distributor, fast-tracking confirmed trades through the dealing chain while bypassing inapplicable steps.',
    imagePath: null, // replace with '/architectures/file-ingestion.png'
    tags: ['Microservices', 'Java', 'Quarkus', 'Kafka'],
  },
  {
    id: 2,
    title: 'Transaction Performance Optimisation',
    company: 'Clearstream · Deutsche Börse Group',
    description: 'End-to-end analysis of the fund dealing chain: identified bottlenecks, introduced concurrency, and batched DB queries — achieving 36% latency reduction and 62% NAV throughput improvement.',
    imagePath: null, // replace with '/architectures/performance.png'
    tags: ['Performance', 'Concurrency', 'MySQL', 'Redis'],
  },
  {
    id: 3,
    title: 'Log Centralisation Pipeline',
    company: 'VERMEG · Banking & Insurance',
    description: 'Centralised log aggregation and real-time monitoring system across distributed Java services using the Elastic Stack.',
    imagePath: null, // replace with '/architectures/elk-pipeline.png'
    tags: ['Elastic Stack', 'Logstash', 'Kibana', 'Docker'],
  },
  {
    id: 4,
    title: 'Big Data Real-time Pipeline',
    company: 'End of Year Project — ESPRIT',
    description: 'Horizontally scalable Lambda architecture pipeline ingesting from heterogeneous sources, processing and visualising high-volume data streams in real time.',
    imagePath: null, // replace with '/architectures/bigdata-pipeline.png'
    tags: ['Kafka', 'Spark', 'Hadoop', 'Elasticsearch', 'NiFi'],
  },
]
