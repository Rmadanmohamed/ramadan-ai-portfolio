import { projects } from './projects';
export type { Project, ProjectCategory } from './projects';

export const portfolioData = {
  profile: {
    name: 'Ramadan Mohamed Hassan',
    title: 'AI Engineer | AI Automation | LLM & RAG Systems | Machine Learning',
    roles: ['AI Engineer', 'AI Automation Engineer', 'LLM & RAG Engineer', 'AI Backend Engineer'],
    headline: 'Building production-oriented AI systems, automation workflows, and deployable machine-learning services.',
    summary: 'Recent B.Sc. Computer Science - Artificial Intelligence graduate experienced with FastAPI, n8n, APIs, LLM applications, RAG, machine learning, and computer vision. Co-author of research published by Elsevier and Springer, with award-winning AI projects.',
    email: 'rm3176602@gmail.com',
    phone: '+201000319057',
    linkedin: 'https://www.linkedin.com/in/ramadan-mohamed-657686365',
    github: 'https://github.com/Rmadanmohamed',
    portfolioUrl: 'https://ramadan-ai-portfolio.vercel.app/',
    cvUrl: '/assets/Ramadan_Mohamed_Hassan_CV.pdf',
    cvDocxUrl: '/assets/Ramadan_Mohamed_CV.docx',
    photoUrl: '/assets/my-photo.jpg',
    fallbackPhotoUrl: '/assets/profile-placeholder.svg',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Awards', href: '#awards' },
    { label: 'Skills', href: '#skills' },
    { label: 'Training', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
  stats: [
    { label: 'Featured Projects', value: '5', detail: 'Production-oriented AI systems' },
    { label: 'Publications', value: '2', detail: 'Elsevier Q1 and Springer' },
    { label: 'Plant AI Accuracy', value: '96.9%', detail: 'AgriNova VGG16' },
    { label: 'Prize', value: '30K EGP', detail: 'MansTech Hackathon' },
  ],
  specializations: ['AI Automation', 'LLM Applications', 'RAG Systems', 'AI Backend Services', 'Machine Learning', 'Computer Vision', 'API Integrations', 'Data Pipelines'],
  education: [{ school: 'New Mansoura University', program: 'B.Sc. Computer Science - Artificial Intelligence Program', date: 'Sep 2022 - Jun 2026', details: 'Recent graduate in Computer Science with a specialization in Artificial Intelligence.' }],
  experiences: [
    { company: 'Rawi Digital Transformation & Services', role: 'AI & Machine Learning Engineer', arrangement: 'Full-Time, Remote', date: 'Jun 2026 - Present', bullets: ['Build AI automation solutions and LLM-based workflows using n8n, FastAPI, REST APIs, RAG, and vector databases to support digital transformation and internal business processes.', 'Develop backend AI services, reporting automations, API integrations, and data pipelines connecting business systems with machine learning and LLM capabilities.'], tags: ['AI Automation', 'n8n', 'FastAPI', 'RAG', 'Vector Databases'] },
    { company: 'Al Osrah Group - Healthcare & Medical Services', role: 'AI Engineer', arrangement: 'Part-Time, On-site', date: 'Jun 2026 - Jul 2026', bullets: ['Developed machine-learning models and internal automation tools for pharmacy, medical-distribution, and laboratory operations.', 'Applied OCR and LLM-assisted workflows to digitize records and support reporting, inventory analysis, and demand-pattern evaluation.'], tags: ['Healthcare AI', 'OCR', 'LLM Workflows', 'Inventory Analysis'] },
    { company: 'ReNile Company', role: 'Artificial Intelligence Engineer Intern', arrangement: 'On-site', date: 'Mar 2026 - May 2026', bullets: ['Contributed to deployment-oriented AI projects covering data preprocessing, model optimization, and practical machine-learning implementation.', 'Developed deployable AI components supporting solutions used by approximately 70% of ReNile\u2019s client base, based on internal company estimates.'], tags: ['Deployable AI', 'Model Optimization', 'Data Preprocessing'] },
  ],
  research: [
    { venue: 'Internet of Things - Elsevier | Q1 Journal | Volume 39 | Article 102025 | 2026', title: 'An Edge-Cloud AI-Robotics Framework with Blockchain-Based Validation for Crop Yield Prediction and Plant Health Monitoring', link: 'https://doi.org/10.1016/j.iot.2026.102025', contribution: 'Co-developed an edge-cloud smart-agriculture framework integrating artificial intelligence, autonomous robotics, UAV imagery, IoT sensor networks, and blockchain-backed validation for crop-yield prediction and plant-health monitoring.', details: ['Edge-cloud computing and artificial intelligence', 'Autonomous robotics, UAV imagery, and IoT sensor networks', 'Blockchain-backed validation for crop-yield prediction and plant-health monitoring'] },
    { venue: 'Springer Conference Proceedings | ISBCOM 2025 | 2025', title: 'Hybrid Random Walk-Dijkstra Approach for Efficient Coverage Path Planning in Robotics', link: 'https://bit.ly/3OFuXfr', contribution: 'Developed a robotic path-planning approach combining Random Walk, Dijkstra\u2019s algorithm, and computer vision for obstacle-aware navigation.', details: ['Hybrid Random Walk-Dijkstra path planning', 'Computer-vision-assisted obstacle awareness', 'Robotics coverage and navigation workflow'] },
  ],
  projects,
  awards: [
    { title: '2nd Place', organization: 'MansTech Hackathon', date: 'Apr 2026', description: 'Won 30,000 EGP for an AI, robotics, and IoT agricultural solution endorsed by ITIDA.', kind: 'award' },
    { title: '1st Place', organization: 'Computer Science and Engineering Projects Exhibition', date: '2026', description: 'Awarded for the AgriNova smart-agriculture system.', kind: 'award' },
    { title: '1st Place', organization: 'Annual University Projects Exhibition', date: '2025', description: 'Recognized for an innovative optimization algorithm among 45 projects.', kind: 'award' },
    { title: 'ICPC & ECPC Qualification', organization: 'ICPC & ECPC', date: '2023', description: 'Ranked among the top 15% of participating teams.', kind: 'contest' },
  ],
  certifications: [
    { provider: 'NVIDIA', title: 'LLM & Generative AI Training', details: 'Building LLM Applications with Prompt Engineering; AI for All: From Basics to GenAI Practice.' },
    { provider: 'Huawei ICT Academy', title: 'AI Certifications', details: 'HCIA AI; HCIP AI.' },
    { provider: 'NTI / Huawei Egyptian Talent Academy', title: 'Artificial Intelligence Training', details: '80-hour Artificial Intelligence Training, 97% score.' },
  ],
  skills: [
    { title: 'Programming', skills: ['Python', 'JavaScript/TypeScript', 'SQL'] },
    { title: 'AI & Machine Learning', skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Predictive Modeling', 'Feature Engineering', 'Model Evaluation'] },
    { title: 'LLM & AI Systems', skills: ['LLM Applications', 'Retrieval-Augmented Generation (RAG)', 'AI Agents', 'Prompt Engineering', 'LangChain', 'LangGraph'] },
    { title: 'Frameworks & Libraries', skills: ['PyTorch', 'TensorFlow/Keras', 'Scikit-learn', 'OpenCV', 'Hugging Face Transformers', 'Pandas', 'NumPy'] },
    { title: 'Backend & Automation', skills: ['FastAPI', 'REST APIs', 'n8n', 'Workflow Automation', 'API Integrations', 'Streamlit'] },
    { title: 'Data & Deployment', skills: ['PostgreSQL', 'MongoDB', 'FAISS', 'Pinecone', 'Git/GitHub', 'Vercel'] },
  ],
  courses: [
    { title: 'Computer Vision Specialization', provider: 'Coursera', date: '', focus: 'Advanced relevant coursework.' },
    { title: 'NLP with Deep Learning', provider: 'Coursera', date: '', focus: 'Advanced relevant coursework.' },
  ],
  languages: [{ name: 'Arabic', level: 'Native' }, { name: 'English', level: 'Professional Working Proficiency' }],
};
