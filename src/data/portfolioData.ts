export type ProjectCategory =
  | 'Healthcare & Medical AI'
  | 'Robotics, IoT & Blockchain'
  | 'Advanced Algorithms & Software Engineering';

export type SkillGroup = {
  title: string;
  accent: string;
  summary: string;
  skills: Array<{
    name: string;
    level?: number;
    label?: string;
  }>;
};

export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  metrics?: string[];
  achievements?: string[];
};

export type Experience = {
  company: string;
  role: string;
  date: string;
  bullets: string[];
  tags: string[];
};

export type Award = {
  title: string;
  date: string;
  description: string;
  kind: 'award' | 'certificate' | 'contest';
};

export const portfolioData = {
  profile: {
    name: 'Ramadan Mohamed Hassan',
    title: 'AI Engineer / Machine Learning Engineer / Data Scientist',
    roles: ['AI Engineer', 'Machine Learning Engineer', 'Data Scientist', 'Computer Vision Builder'],
    headline: 'Building practical intelligence for healthcare, agriculture, robotics, and scientific discovery.',
    summary:
      'Passionate AI and Computer Science student focused on practical, scalable technologies that solve real-world problems. Huawei-certified AI Professional and published researcher with high-accuracy ML work across healthcare, smart agriculture, robotics, optimization, NLP, and computer vision.',
    email: 'rm3176602@gmail.com',
    phone: '01000319057',
    linkedin: 'https://www.linkedin.com/in/ramadan-mohamed-89085a366/',
    github: 'https://github.com/Rmadanmohamed/ramadan-ai-portfolio',
    cvUrl: '/assets/Ramadan_Mohamed_CV.docx',
    photoUrl: '/assets/my-photo.jpg',
    fallbackPhotoUrl: '/assets/profile-placeholder.svg',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Awards', href: '#awards' },
    { label: 'Contact', href: '#contact' },
  ],
  stats: [
    { label: 'Projects', value: '12', detail: 'AI, robotics, software' },
    { label: 'Top Model Accuracy', value: '99%', detail: 'TabNet nutrition system' },
    { label: 'Prize Funding', value: '30K EGP', detail: 'MansTech Hackathon' },
    { label: 'Publication', value: 'Springer', detail: 'ISBCOM 2025' },
  ],
  specializations: [
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Robotics',
    'IoT',
    'Blockchain',
    'Optimization Algorithms',
    'Medical Image Analysis',
    'Generative AI',
  ],
  education: [
    {
      school: 'New Mansoura University',
      program: 'Computer Science, Artificial Intelligence Program',
      date: 'September 2022 - June 2026',
      details:
        'Focused on AI, machine learning, data science, software engineering, algorithms, and intelligent systems.',
    },
  ],
  experiences: [
    {
      company: 'ReNile Company',
      role: 'Artificial Intelligence Engineer Intern',
      date: 'March 2026 - May 2026',
      bullets: [
        'Developed and deployed production-ready ML and deep learning solutions from business requirements into scalable AI-powered systems.',
        'Worked on model optimization and data preprocessing while collaborating with engineering and product teams.',
      ],
      tags: ['Production ML', 'Deep Learning', 'Model Optimization', 'Data Preprocessing'],
    },
    {
      company: 'NVIDIA',
      role: 'AI & Prompt Engineering Trainee',
      date: 'August 2025 - October 2025',
      bullets: [
        'Mastered generative AI practices, LLM applications, and advanced prompt engineering methodologies.',
        'Strengthened Python programming skills for data processing and end-to-end AI application development.',
      ],
      tags: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Python'],
    },
    {
      company: 'Huawei ICT Academy (HCIP)',
      role: 'AI Professional Intern',
      date: 'July 2025 - August 2025',
      bullets: [
        'Completed an intensive 80-hour professional certification program covering complex AI architectures and implementations.',
      ],
      tags: ['HCIP', 'AI Architecture', 'Professional AI'],
    },
    {
      company: 'NTI / Huawei Egyptian Talent Academy',
      role: 'Artificial Intelligence Trainee',
      date: 'July 2025 - August 2025',
      bullets: [
        'Completed an 80-hour AI training program with a 97% score, covering core ML algorithms and data analysis methodologies.',
      ],
      tags: ['Machine Learning', 'Data Analysis', '97% Score'],
    },
    {
      company: 'Huawei ICT Academy (HCIA)',
      role: 'AI Intern',
      date: 'June 2025 - July 2025',
      bullets: [
        'Built foundational proficiency in industry-standard AI applications and machine learning implementation.',
      ],
      tags: ['HCIA', 'Machine Learning', 'AI Foundations'],
    },
  ] satisfies Experience[],
  research: [
    {
      venue: 'Springer / ISBCOM 2025 at ElSewedy University of Technology, Egypt',
      title: 'Hybrid Random Walk-Dijkstra Approach for Efficient Coverage Path Planning in Robotics',
      link: 'https://bit.ly/3OFuXfr',
      contribution:
        'Developed a robotic path-planning algorithm that combines random walk strategies with Dijkstra algorithm for navigation efficiency.',
      details: [
        'Integrated computer vision for real-time obstacle detection.',
        'Presented the research at an international conference.',
        'Connected algorithmic coverage planning with robotics navigation and perception.',
      ],
    },
  ],
  projects: [
    {
      title: 'Gastrointestinal Tract Anomaly Detection',
      category: 'Healthcare & Medical AI',
      description:
        'Applied a Faster R-CNN Inception V2 model on the KVASIR dataset for gastrointestinal anomaly detection.',
      technologies: ['Faster R-CNN', 'Inception V2', 'KVASIR', 'Computer Vision', 'Medical AI'],
      metrics: ['89.2% average precision', '0.28s inference time'],
      achievements: ['Built automated anomaly detection for endoscopic imaging workflows.'],
    },
    {
      title: 'AI-Driven Nutritional Recommendation System',
      category: 'Healthcare & Medical AI',
      description:
        'Built a TabNet-based framework analyzing 26 macronutrients to deliver personalized infant diets through a cloud-integrated mobile app.',
      technologies: ['TabNet', 'Cloud Integration', 'Mobile App', 'Nutrition AI', 'Data Science'],
      metrics: ['99% accuracy', '26 macronutrients analyzed'],
      achievements: ['Connected predictive modeling with user-facing personalized healthcare guidance.'],
    },
    {
      title: 'Diabetes Prediction Model',
      category: 'Healthcare & Medical AI',
      description:
        'Engineered an XGBoost classifier with advanced preprocessing and medical feature engineering for diabetes prediction.',
      technologies: ['XGBoost', 'Feature Engineering', 'Medical Data', 'Scikit-learn'],
      metrics: ['98% accuracy'],
      achievements: ['Focused on reliable predictive modeling for early medical risk detection.'],
    },
    {
      title: 'Brain Tumor MRI Classification System',
      category: 'Healthcare & Medical AI',
      description:
        'Created a CNN architecture for automated brain tumor classification from MRI scans.',
      technologies: ['CNN', 'Deep Learning', 'MRI', 'TensorFlow', 'Medical Imaging'],
      achievements: ['Built a medical image classification pipeline for tumor detection.'],
    },
    {
      title: 'Breast Cancer Prediction System',
      category: 'Healthcare & Medical AI',
      description:
        'Developed a predictive model with an interactive visualization dashboard to support early disease detection.',
      technologies: ['Machine Learning', 'Dashboard', 'Data Visualization', 'Predictive Modeling'],
      metrics: ['92% accuracy'],
      achievements: ['Combined prediction and visual analytics for clearer clinical decision support.'],
    },
    {
      title: 'AGRINOVA - AI-Robotics & IoT Framework with Blockchain',
      category: 'Robotics, IoT & Blockchain',
      description:
        'Designed a UAV and IoT system using VGG16 transfer learning and blockchain smart contracts to secure agricultural data.',
      technologies: ['UAV', 'IoT', 'VGG16', 'Transfer Learning', 'Blockchain', 'Smart Contracts'],
      metrics: ['96.9% accuracy'],
      achievements: [
        'Won 2nd Place at MansTech Hackathon.',
        'Won 1st Place at the Computer Science and Engineering Projects Exhibition 2026.',
      ],
    },
    {
      title: 'Novel Navigation Algorithm',
      category: 'Robotics, IoT & Blockchain',
      description:
        'Formulated a robotic path-planning strategy integrating random walk, Dijkstra algorithm, and computer vision for obstacle avoidance.',
      technologies: ['Dijkstra Algorithm', 'Random Walk', 'Computer Vision', 'Robotics'],
      achievements: ['Advanced coverage path planning for robotic navigation.'],
    },
    {
      title: 'Earthquake Early Warning System',
      category: 'Robotics, IoT & Blockchain',
      description:
        'Built a real-time prediction model analyzing historical seismic data to trigger rapid community safety alerts.',
      technologies: ['Machine Learning', 'Real-time Systems', 'Seismic Data', 'Alerting'],
      achievements: ['Connected predictive modeling with emergency response workflows.'],
    },
    {
      title: 'Hybrid Optimization Algorithm',
      category: 'Advanced Algorithms & Software Engineering',
      description:
        'Developed a global search algorithm merging Hyena and Scalp Swarm-Based Optimization.',
      technologies: ['Optimization Algorithms', 'Global Search', 'Algorithm Design'],
      achievements: [
        'Won 1st Place at the Annual University Projects Exhibition.',
        'Outperformed 45 competing projects.',
      ],
    },
    {
      title: 'Exoplanet Detection Project',
      category: 'Advanced Algorithms & Software Engineering',
      description:
        'Architected a deep learning pipeline to identify planetary transits in noisy astronomical datasets with an emphasis on reproducibility.',
      technologies: ['Deep Learning', 'Astronomy Data', 'Scientific ML', 'Reproducibility'],
      achievements: ['Applied AI to scientific discovery and noisy signal detection.'],
    },
    {
      title: 'NLP Text Classification',
      category: 'Advanced Algorithms & Software Engineering',
      description:
        'Implemented BERT architectures for sentiment analysis on benchmark text classification datasets.',
      technologies: ['BERT', 'Transformers', 'NLP', 'Sentiment Analysis'],
      metrics: ['94% accuracy'],
      achievements: ['Built transformer-based language understanding for classification.'],
    },
    {
      title: 'FinLit Egypt',
      category: 'Advanced Algorithms & Software Engineering',
      description:
        'Developed a full-stack digital financial literacy platform with responsive design, secure authentication, and integrated payment gateways.',
      technologies: ['Full Stack', 'Responsive Design', 'Authentication', 'Payments', 'JavaScript'],
      achievements: ['Delivered a user-facing platform for financial literacy and access.'],
    },
  ] satisfies Project[],
  awards: [
    {
      title: '2nd Place - MansTech Hackathon',
      date: 'April 2026',
      description:
        'Won 30,000 EGP for an AI, robotics, and IoT agricultural solution endorsed by ITIDA.',
      kind: 'award',
    },
    {
      title: '1st Place - Computer Science and Engineering Projects Exhibition 2026',
      date: 'May 2026',
      description:
        'Awarded for AGRINOVA smart agriculture project, recognizing innovation, creativity, and technical excellence.',
      kind: 'award',
    },
    {
      title: '1st Place - Annual University Projects Exhibition',
      date: '2025',
      description:
        'Recognized for innovative optimization algorithms, outperforming 45 competing projects.',
      kind: 'award',
    },
    {
      title: 'Certificate for Research Publication - Springer',
      date: '2025',
      description:
        'Published and cited internationally for contributions to robotic path planning.',
      kind: 'certificate',
    },
    {
      title: 'ICPC & ECPC Qualifications',
      date: '2023',
      description:
        'Ranked in the top 15% of teams in International and Egyptian Collegiate Programming Contests.',
      kind: 'contest',
    },
    {
      title: 'Huawei ICT Academy - HCIP AI Professional',
      date: '2025',
      description:
        'Completed an 80-hour professional AI certification program covering advanced AI architectures.',
      kind: 'certificate',
    },
    {
      title: 'Huawei ICT Academy - HCIA AI',
      date: '2025',
      description:
        'Completed foundational AI training in industry-standard machine learning implementation.',
      kind: 'certificate',
    },
    {
      title: 'NTI / Huawei Egyptian Talent Academy',
      date: '2025',
      description: 'Completed an 80-hour AI training program with a 97% score.',
      kind: 'certificate',
    },
  ] satisfies Award[],
  skills: [
    {
      title: 'Programming Languages',
      accent: 'from-cyan-300 to-blue-500',
      summary: 'Core engineering languages used across AI, automation, and web systems.',
      skills: [
        { name: 'Python', level: 94, label: 'Advanced' },
        { name: 'C++', level: 82, label: 'Strong' },
        { name: 'C', level: 78, label: 'Strong' },
        { name: 'C#', level: 72, label: 'Applied' },
        { name: 'JavaScript', level: 80, label: 'Strong' },
        { name: 'HTML5 / CSS3', level: 84, label: 'Strong' },
      ],
    },
    {
      title: 'AI / ML',
      accent: 'from-violet-300 to-fuchsia-500',
      summary: 'Modeling, preprocessing, feature engineering, prediction, and applied AI workflows.',
      skills: [
        { name: 'Machine Learning', level: 92, label: 'Advanced' },
        { name: 'Predictive Modeling', level: 90, label: 'Advanced' },
        { name: 'XGBoost', level: 86, label: 'Strong' },
        { name: 'Scikit-learn', level: 88, label: 'Strong' },
        { name: 'Optimization Algorithms', level: 89, label: 'Award-winning' },
      ],
    },
    {
      title: 'Deep Learning',
      accent: 'from-blue-300 to-indigo-500',
      summary: 'CNNs, transfer learning, transformer systems, and medical image models.',
      skills: [
        { name: 'TensorFlow', level: 86, label: 'Strong' },
        { name: 'PyTorch', level: 82, label: 'Strong' },
        { name: 'CNNs', level: 88, label: 'Strong' },
        { name: 'Transfer Learning', level: 88, label: 'Strong' },
        { name: 'Graph Neural Networks', level: 74, label: 'Specialized' },
      ],
    },
    {
      title: 'NLP',
      accent: 'from-sky-300 to-cyan-500',
      summary: 'Transformer architectures, sentiment analysis, LLMs, and retrieval workflows.',
      skills: [
        { name: 'BERT', level: 86, label: 'Strong' },
        { name: 'Transformers', level: 84, label: 'Strong' },
        { name: 'LLMs', level: 82, label: 'Applied' },
        { name: 'Generative AI', level: 84, label: 'Applied' },
        { name: 'Prompt Engineering', level: 88, label: 'NVIDIA training' },
      ],
    },
    {
      title: 'Computer Vision',
      accent: 'from-teal-300 to-emerald-500',
      summary: 'Detection, image classification, medical imaging, and robotic perception.',
      skills: [
        { name: 'Object Detection', level: 88, label: 'Strong' },
        { name: 'Medical Image Analysis', level: 90, label: 'Specialized' },
        { name: 'Faster R-CNN', level: 84, label: 'Applied' },
        { name: 'VGG16', level: 86, label: 'Applied' },
        { name: 'Image Processing', level: 86, label: 'Strong' },
      ],
    },
    {
      title: 'Data Science',
      accent: 'from-lime-300 to-cyan-500',
      summary: 'Data cleaning, ETL, visualization, statistics, and scientific experimentation.',
      skills: [
        { name: 'Pandas', level: 88, label: 'Strong' },
        { name: 'NumPy', level: 88, label: 'Strong' },
        { name: 'Matplotlib', level: 82, label: 'Applied' },
        { name: 'Seaborn', level: 80, label: 'Applied' },
        { name: 'ETL Pipelines', level: 78, label: 'Applied' },
      ],
    },
    {
      title: 'Cloud',
      accent: 'from-blue-200 to-cyan-400',
      summary: 'Cloud deployment and AI platform integrations.',
      skills: [
        { name: 'AWS', level: 74, label: 'Applied' },
        { name: 'GCP', level: 74, label: 'Applied' },
        { name: 'Cloud Deployment', level: 78, label: 'Applied' },
      ],
    },
    {
      title: 'MLOps',
      accent: 'from-purple-300 to-blue-500',
      summary: 'APIs, deployment, monitoring, and production AI delivery.',
      skills: [
        { name: 'API Development', level: 80, label: 'Applied' },
        { name: 'Model Monitoring', level: 76, label: 'Applied' },
        { name: 'Hugging Face', level: 80, label: 'Applied' },
        { name: 'LangChain', level: 78, label: 'Applied' },
        { name: 'RAG', level: 78, label: 'Applied' },
        { name: 'FAISS / Pinecone', level: 76, label: 'Applied' },
      ],
    },
    {
      title: 'Databases',
      accent: 'from-cyan-300 to-teal-500',
      summary: 'Relational and NoSQL data storage for AI and product systems.',
      skills: [
        { name: 'PostgreSQL', level: 78, label: 'Applied' },
        { name: 'MongoDB', level: 76, label: 'Applied' },
        { name: 'Data Collection', level: 84, label: 'Strong' },
        { name: 'Data Cleaning', level: 86, label: 'Strong' },
      ],
    },
    {
      title: 'Web Development',
      accent: 'from-indigo-300 to-sky-500',
      summary: 'Front-end development, responsive systems, and full-stack product delivery.',
      skills: [
        { name: 'React', level: 82, label: 'Strong' },
        { name: 'Node.js', level: 78, label: 'Applied' },
        { name: 'Responsive Design', level: 84, label: 'Strong' },
        { name: 'Secure Authentication', level: 74, label: 'Applied' },
        { name: 'Payment Gateways', level: 72, label: 'Applied' },
      ],
    },
    {
      title: 'Robotics / IoT',
      accent: 'from-emerald-300 to-sky-500',
      summary: 'Autonomous systems, UAV operations, sensors, edge processing, and robotics research.',
      skills: [
        { name: 'Robot Assembly', level: 82, label: 'Applied' },
        { name: 'UAV Operations', level: 84, label: 'Applied' },
        { name: 'Sensor Networks', level: 82, label: 'Applied' },
        { name: 'Real-time Processing', level: 80, label: 'Applied' },
        { name: 'Path Planning', level: 90, label: 'Published' },
      ],
    },
    {
      title: 'Blockchain',
      accent: 'from-violet-300 to-cyan-500',
      summary: 'Smart contract integration for data integrity in IoT frameworks.',
      skills: [
        { name: 'Smart Contracts', level: 78, label: 'Applied' },
        { name: 'Data Integrity', level: 82, label: 'Applied' },
        { name: 'IoT Blockchain', level: 80, label: 'Applied' },
      ],
    },
  ] satisfies SkillGroup[],
  courses: [
    {
      title: 'Computer Vision Specialization',
      provider: 'Coursera',
      date: '2023',
      focus: 'Image processing, analysis techniques, object detection, and recognition algorithms.',
    },
    {
      title: 'Natural Language Processing with Deep Learning',
      provider: 'Coursera',
      date: '2023',
      focus: 'Text processing, sentiment analysis, language modeling, and generation techniques.',
    },
    {
      title: 'Full Stack Web Development Course',
      provider: 'Creativo',
      date: '2022',
      focus: 'Comprehensive training in web development technologies and practices.',
    },
    {
      title: 'Introduction to Data Science',
      provider: 'Udemy',
      date: '2022',
      focus: 'Fundamentals of data analysis, visualization, statistical methods, and data processing.',
    },
    {
      title: 'Introduction to Artificial Intelligence',
      provider: 'Udemy',
      date: '2022',
      focus: 'Core concepts of artificial intelligence, machine learning algorithms, and applications.',
    },
  ],
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Bilingual' },
  ],
};

export const projectCategories: Array<ProjectCategory | 'All'> = [
  'All',
  'Healthcare & Medical AI',
  'Robotics, IoT & Blockchain',
  'Advanced Algorithms & Software Engineering',
];
