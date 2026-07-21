export type ProjectCategory = 'Medical AI' | 'Smart Agriculture' | 'Machine Learning' | 'Optimization';

export type Project = {
  id: string;
  repo: string;
  title: string;
  category: ProjectCategory;
  level: 'Advanced' | 'Capstone' | 'Research';
  featured: true;
  summary: string;
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  models: string[];
  dataset: string;
  results: string[];
  architecture: string;
  skills: string[];
  achievements?: string[];
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 'agrinova',
    repo: 'agrinova-smart-agriculture-dashboard',
    title: 'AgriNova - AI, Robotics, IoT & Blockchain Smart Agriculture System',
    category: 'Smart Agriculture',
    level: 'Capstone',
    featured: true,
    summary: 'Flagship smart-agriculture system integrating AI, robotics, IoT, UAV workflows, blockchain traceability, and analytics.',
    description: 'Built an integrated smart-agriculture platform spanning VGG16 plant-disease detection, IoT monitoring, UAV and robotics workflows, blockchain traceability, and analytics. The work formed the basis of research published in Elsevier\u2019s Q1 Internet of Things journal.',
    problem: 'Connect crop-health intelligence, sensor monitoring, field robotics, UAV imagery, traceability, and agricultural analytics in one system.',
    features: ['VGG16 plant-disease detection', 'IoT sensor monitoring', 'UAV and autonomous robotics workflows', 'Blockchain traceability', 'Agricultural analytics'],
    technologies: ['Python', 'VGG16', 'IoT', 'UAV', 'Robotics', 'Blockchain'],
    models: ['VGG16'],
    dataset: 'Plant-disease imagery and connected agriculture data workflows.',
    results: ['96.9% plant-disease detection accuracy'],
    architecture: 'Integrated AI, edge and cloud, robotics, UAV, IoT, blockchain, and analytics workflows.',
    skills: ['Computer Vision', 'Smart Agriculture', 'IoT', 'Robotics', 'System Integration'],
    achievements: ['1st Place - CSE Projects Exhibition 2026', '2nd Place - MansTech Hackathon', '30,000 EGP prize', 'Basis of an Elsevier Q1 Internet of Things publication'],
    githubUrl: 'https://github.com/Rmadanmohamed/agrinova-smart-agriculture-dashboard',
  },
  {
    id: 'brain-tumor-mri',
    repo: 'brain-tumor-mri-ai-system',
    title: 'Brain Tumor MRI AI System',
    category: 'Medical AI',
    level: 'Advanced',
    featured: true,
    summary: 'CNN-based medical-imaging pipeline for automated brain-tumor classification from MRI scans.',
    description: 'Built a medical-imaging workflow covering MRI preprocessing, CNN model training, and evaluation with TensorFlow/Keras.',
    problem: 'Support automated classification of brain tumors from MRI scans through a reproducible deep-learning pipeline.',
    features: ['MRI preprocessing', 'CNN training', 'Model evaluation'],
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    models: ['Convolutional Neural Network'],
    dataset: 'Brain MRI scans.',
    results: ['Evaluation workflow implemented; the CV does not state a final metric.'],
    architecture: 'Preprocessing, model training, and evaluation pipeline.',
    skills: ['Medical Imaging', 'Deep Learning', 'Model Evaluation'],
    githubUrl: 'https://github.com/Rmadanmohamed/brain-tumor-mri-ai-system',
  },
  {
    id: 'exoplanet-detection',
    repo: 'exoplanet-detection-ml',
    title: 'Exoplanet Detection ML System',
    category: 'Machine Learning',
    level: 'Advanced',
    featured: true,
    summary: 'Scientific machine-learning pipeline for detecting planetary transits in noisy light-curve data.',
    description: 'Developed a reproducible scientific ML workflow for light-curve preprocessing, model comparison, and exoplanet transit detection.',
    problem: 'Detect weak planetary transit signals in noisy astronomical light-curve data.',
    features: ['Light-curve preprocessing', 'Model comparison', 'Reproducible evaluation'],
    technologies: ['Python', 'Machine Learning', 'Scikit-learn'],
    models: ['Machine-learning classifiers'],
    dataset: 'Astronomical light-curve data.',
    results: ['Reproducible model-comparison workflow; the CV does not state a final metric.'],
    architecture: 'Data preparation, comparative modeling, and evaluation pipeline.',
    skills: ['Scientific ML', 'Signal Analysis', 'Model Comparison'],
    githubUrl: 'https://github.com/Rmadanmohamed/exoplanet-detection-ml',
  },
  {
    id: 'baby-food',
    repo: 'baby-food-ingredient-recommendation-ml',
    title: 'Baby Food Nutrition Recommendation System',
    category: 'Machine Learning',
    level: 'Advanced',
    featured: true,
    summary: 'TabNet-based infant-nutrition recommendation system using 26 nutrition and macronutrient features.',
    description: 'Developed a personalized diet recommendation workflow using TabNet and 26 nutrition and macronutrient features.',
    problem: 'Generate data-driven infant nutrition suggestions from structured nutrition features.',
    features: ['26 nutrition and macronutrient features', 'Personalized diet suggestions', 'Tabular deep learning'],
    technologies: ['Python', 'TabNet', 'Pandas', 'NumPy'],
    models: ['TabNet'],
    dataset: 'Structured infant-nutrition feature data.',
    results: ['99% accuracy'],
    architecture: 'Feature analysis, TabNet training, evaluation, and recommendation workflow.',
    skills: ['Recommendation Systems', 'Tabular Deep Learning', 'Nutrition Data Analysis'],
    githubUrl: 'https://github.com/Rmadanmohamed/baby-food-ingredient-recommendation-ml',
  },
  {
    id: 'hybrid-optimization',
    repo: 'hybrid-optimization-algorithms',
    title: 'Hybrid Optimization Algorithm',
    category: 'Optimization',
    level: 'Research',
    featured: true,
    summary: 'Award-winning hybrid optimization approach combining metaheuristic search strategies and standard-function benchmarking.',
    description: 'Created a hybrid metaheuristic optimization approach and benchmarked it on standard optimization functions.',
    problem: 'Balance exploration and exploitation across benchmark optimization problems.',
    features: ['Hybrid metaheuristic search', 'Standard benchmark functions', 'Comparative evaluation'],
    technologies: ['Python', 'NumPy', 'Optimization Algorithms'],
    models: ['Hybrid metaheuristic optimization'],
    dataset: 'Standard optimization benchmark functions.',
    results: ['1st Place among 45 university projects'],
    architecture: 'Algorithm implementation, benchmark execution, and comparative analysis.',
    skills: ['Optimization', 'Algorithm Design', 'Benchmarking'],
    achievements: ['1st Place - Annual University Projects Exhibition 2025'],
    githubUrl: 'https://github.com/Rmadanmohamed/hybrid-optimization-algorithms',
  },
];
