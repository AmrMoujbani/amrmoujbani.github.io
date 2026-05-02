export const projects = [
  {
    id: 1,
    title: 'Fund Transaction File Ingestion Microservice',
    company: 'FundsDLT · Deutsche Börse Group',
    description: 'Designed and owned a microservice that ingests files of pre-settled fund transactions for a major institutional distributor. The service processes thousands of transactions per run, bypassing inapplicable dealing steps to fast-track already-confirmed trades through the platform. Client onboarding was contingent on this delivery.',
    stack: ['Java', 'Quarkus', 'Kafka', 'Elasticsearch', 'Docker', 'Kubernetes'],
    highlights: ['Full microservice ownership', 'Thousands of transactions per run', 'Client-critical delivery'],
    diagramType: 'mermaid',
    diagram: `flowchart TD
    A[📁 Distributor File Upload] --> B[File Ingestion Service]
    B --> C{Validate &\\nParse}
    C -->|Invalid| D[❌ Error Report]
    C -->|Valid| E[Transaction Processor]
    E --> F{Already\\nSettled?}
    F -->|Yes| G[Skip Dealing Steps]
    F -->|No| H[Full Dealing Chain]
    G --> I[Direct to Confirmation]
    H --> I
    I --> J[Elasticsearch Index]
    I --> K[Event Published to Kafka]
    K --> L[Downstream Services]
    J --> M[Real-time Audit Trail]

    style A fill:#3B82F6,color:#fff,stroke:none
    style B fill:#1D4ED8,color:#fff,stroke:none
    style I fill:#059669,color:#fff,stroke:none
    style D fill:#DC2626,color:#fff,stroke:none`,
  },
  {
    id: 2,
    title: 'Transaction Performance Optimisation',
    company: 'FundsDLT · Deutsche Börse Group',
    description: 'Achieved a 36% reduction in end-to-end transaction processing time and 62% improvement in bulk NAV valuation throughput. Approach: full processing chain analysis to identify bottlenecks, then introduced concurrency where steps could run in parallel, and batched redundant DB round-trips into single queries.',
    stack: ['Java', 'Quarkus', 'MySQL', 'Redis', 'Profiling'],
    highlights: ['36% processing time reduction', '62% NAV throughput improvement', 'Concurrency + DB batching'],
    diagramType: 'mermaid',
    diagram: `flowchart LR
    subgraph BEFORE["❌ Before — Sequential"]
      direction TB
      B1[DB Call 1] --> B2[DB Call 2] --> B3[DB Call 3] --> B4[Process] --> B5[DB Call 4]
    end

    subgraph AFTER["✅ After — Concurrent + Batched"]
      direction TB
      A1[Batch DB Query] --> A2[Parallel Processing]
      A2 --> A3[Thread A]
      A2 --> A4[Thread B]
      A2 --> A5[Thread C]
      A3 & A4 & A5 --> A6[Merge Results]
    end

    BEFORE -->|Optimised| AFTER

    style BEFORE fill:#FEF2F2,stroke:#FCA5A5
    style AFTER fill:#F0FDF4,stroke:#86EFAC`,
  },
  {
    id: 3,
    title: 'Log Centralisation & Monitoring Pipeline',
    company: 'VERMEG · Banking & Insurance',
    description: 'Designed and deployed a centralised log aggregation and monitoring system using the Elastic Stack. Collects logs from distributed Java services, applies transformation and normalisation rules, and visualises them in real-time Kibana dashboards — significantly reducing MTTR on production incidents.',
    stack: ['Elastic Stack', 'Elasticsearch', 'Logstash', 'Kibana', 'Java', 'Docker', 'RedHat'],
    highlights: ['Real-time visibility', 'Reduced MTTR', 'Multi-service aggregation'],
    diagramType: 'mermaid',
    diagram: `flowchart LR
    subgraph SERVICES["Distributed Services"]
      S1[Java App 1]
      S2[Java App 2]
      S3[Java App 3]
    end

    subgraph ELK["Elastic Stack"]
      L[Logstash\\nTransform & Normalise]
      E[Elasticsearch\\nIndex & Store]
      K[Kibana\\nDashboards & Alerts]
    end

    S1 -->|logs| L
    S2 -->|logs| L
    S3 -->|logs| L
    L --> E
    E --> K
    K --> A[👁️ Real-time\\nMonitoring]

    style ELK fill:#FFF7ED,stroke:#FED7AA
    style SERVICES fill:#EFF6FF,stroke:#BFDBFE
    style A fill:#059669,color:#fff,stroke:none`,
  },
  {
    id: 4,
    title: 'Big Data Real-time Pipeline',
    company: 'Grow Up Technologies (End of Year Project)',
    description: 'Designed and built a highly available, horizontally scalable data pipeline that collects large volumes of data from heterogeneous sources, processes, stores, indexes, and visualises them in real time. Built on Lambda architecture.',
    stack: ['Apache Kafka', 'Apache Spark', 'Apache NiFi', 'Hadoop', 'Elasticsearch', 'Kibana', 'Java'],
    highlights: ['Lambda architecture', 'Horizontally scalable', 'Real-time + batch layers'],
    diagramType: 'mermaid',
    diagram: `flowchart TD
    subgraph SOURCES["Data Sources"]
      DS1[Source A]
      DS2[Source B]
      DS3[Source C]
    end

    NF[Apache NiFi\\nData Ingestion]

    subgraph LAMBDA["Lambda Architecture"]
      K[Apache Kafka\\nMessage Broker]

      subgraph SPEED["Speed Layer"]
        SP[Apache Spark\\nStreaming]
      end

      subgraph BATCH["Batch Layer"]
        HD[Hadoop\\nBatch Processing]
      end
    end

    subgraph SERVING["Serving Layer"]
      ES[Elasticsearch\\nIndex]
      KB[Kibana\\nVisualisation]
    end

    DS1 & DS2 & DS3 --> NF
    NF --> K
    K --> SP
    K --> HD
    SP --> ES
    HD --> ES
    ES --> KB

    style LAMBDA fill:#F5F3FF,stroke:#C4B5FD
    style SOURCES fill:#EFF6FF,stroke:#BFDBFE
    style SERVING fill:#F0FDF4,stroke:#86EFAC`,
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Go', 'Java', 'SQL', 'Groovy'],
  },
  {
    category: 'Database & Caching',
    items: ['Redis', 'MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Frameworks',
    items: ['Quarkus', 'Spring Boot', 'Spring Data JPA', 'Spring Batch'],
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'Kubernetes'],
  },
  {
    category: 'Data & Search',
    items: ['Elasticsearch', 'Logstash', 'Kibana', 'Beats'],
  },
  {
    category: 'Architecture',
    items: ['Microservices', 'Distributed Systems', 'REST APIs', 'Event-driven', 'Saga pattern', 'Lambda Architecture'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Jira', 'Clickup', 'Grafana', 'Postman', 'IntelliJ IDEA', 'VsCode', 'Swagger'],
  },
]
