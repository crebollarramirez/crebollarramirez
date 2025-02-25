const projects = [
  {
    title: "DaybyDay",
    tech: [
      "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
    ],
    details: [
      "Developed a responsive frontend with React.js and TailwindCSS, building 5+ reusable components for dynamic user interfaces. ",
      "Designed a robust backend using Python Django and AWS DynamoDB. ",
      "Integrated OpenAI API and WebSockets for a real-time chatbot.",
      "Conducted unit testing for backend features using Django Rest Framework (DRF) and implemented 10+ API routes for managing user interactions. Implemented secure user authentication with Django and JWT tokens.",
    ],
    githubLink: "https://github.com/crebollarramirez/DayByDay",
    date: "Jul 2024 – Oct 2024",
  },
  {
    title: "Digits Classifier KNN",
    tech: [
      "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
      "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
      "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",
      "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black",
    ],
    details: [
      "Built a KNN model for MNIST classification, achieving 92.2% accuracy using cosine distance (outperforming Euclidean distance).",
      "Improved Wine dataset classification accuracy from 71% to 97% through feature normalization.",
      "Conducted detailed performance evaluations, including training vs. test accuracy comparisons and error analysis on misclassified samples.",
      "Developed a custom KNN model with support for multiple distances metrics and hyperparameter optimization, matching scikit-learn’s performance. ",
    ],
    githubLink: "https://github.com/crebollarramirez/digits-classifier-KNN",
    date: "Jul 2024",
  },
  {
    title: "Perceptron and Logistic Regression for Breast Cancer",
    tech: [
      "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
      "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
      "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",
      "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black",
    ],
    details: [
      "Achieved 98.25% training/testing accuracy with a custom Perceptron model after 900 epochs on the Breast Cancer Wisconsin dataset.",
      "Compared Perceptron and Logistic Regression models, utilizing NumPy and scikit-learn for binary classification. ",
      "Applied data normalization and visualized performance trends using Matplotlib for deeper model insights. ",
    ],
    githubLink:
      "https://github.com/crebollarramirez/Perceptron---Logistic-Regression-for-Breast-Cancer",
    date: "Aug 2024",
  },
  {
    title: "Optimizing Fully Convolutional Networks for Semantic Segmentation",
    tech: [
      "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white",
      "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
      "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black",
      "https://img.shields.io/badge/GPU_Accelerated-000000.svg?style=for-the-badge&logo=nVIDIA&logoColor=green"
    ],
    details: [
      "Developed and optimized CNN-based segmentation models (U-Net, FCN, DeepLab) in PyTorch on PASCAL VOC-2012, improving Mean IoU from 0.0553 to 0.084 and Pixel Accuracy from 72.8% to 73.6% using class weighting and data augmentation.",
      "Accelerated model training by 5x with GPU utilization, optimized learning rate scheduling (CosineAnnealingLR), and transfer learning using a pre-trained ResNet34 encoder. ",
      "Enhanced segmentation accuracy by 3.2% through Xavier weight initialization, batch normalization, and dropout, reducing overfitting and improving generalization.",
    ],
    githubLink:
      "https://github.com/crebollarramirez/FCN-Semantic-Segmentation-Optimization",
    date: "Feb 2025",
  },
];

export default projects;
