// Add your architecture diagrams here.
// For each entry, place your image in the /public/architectures/ folder
// then set imagePath to e.g. '/architectures/file-ingestion.png'
// Set imagePath to null to show a placeholder until the image is ready.

export const architectures = [
  {
    id: 1,
    title: 'Log Centralisation Pipeline',
    company: 'VERMEG · Banking & Insurance',
    description: 'Centralised log aggregation and real-time monitoring system across distributed Java services using the Elastic Stack.',
    imagePath: '/architectures/elk-pipeline.svg',
    tags: ['Elastic Stack', 'Logstash', 'Kibana', 'Docker'],
  },
  {
    id: 2,
    title: 'Big Data Real-time Pipeline',
    company: 'End of Year Project — ESPRIT',
    description: 'Horizontally scalable Lambda architecture pipeline ingesting from heterogeneous sources, processing and visualising high-volume data streams in real time.',
    imagePath: null, // replace with '/architectures/bigdata-pipeline.png'
    tags: ['Kafka', 'Spark', 'Hadoop', 'Elasticsearch', 'NiFi'],
  },
]
