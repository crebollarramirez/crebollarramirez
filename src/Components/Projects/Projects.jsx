import React from "react";
import Project from "./Project";

const Projects = () => {
  // Array of projects
  const projects = [
    {
      title: "DaybyDay",
      tech: [
        "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
      ],
      details: [
        "Developed a responsive frontend with React.js, achieving 20% faster load times and a 15% increase in daily task management usage.",
        "Built a robust backend using Python Django and AWS DynamoDB, supporting 20+ active users daily with 30% more efficient data handling and storage.",
        "Implemented secure user authentication with Django and JWT tokens, achieving a 99% login success rate and minimal unauthorized access.",
        "Integrated OpenAI API and WebSockets for a real-time chatbot, boosting productivity by 25% and improving user retention by 10%.",
        "Conducted unit testing, achieving 95% code coverage and identifying 20% more bugs, resulting in a 30% reduction in post-deployment issues.",
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
        "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black"

      ],
      details: [
        "Built a digits classification system using a custom K-Nearest Neighbors algorithm, achieving 91.4% test accuracy on the MNIST dataset and outperforming Scikit-learn's implementation in specific cases.",
        "Optimized k-values and explored alternative distance metrics (Euclidean, Cosine), achieving a peak test accuracy of 92.2% with Cosine Distance.",
        "Conducted detailed performance evaluations, including training vs. test accuracy comparisons and error analysis on misclassified samples.",
        "Applied the classifier to a Wine dataset with 5-fold cross-validation, demonstrating robust performance across diverse multi-class classification tasks.",
      ],
      githubLink: "https://github.com/crebollarramirez/digits-classifier-KNN",
      date: "July 2024",
    },
    {
      title: "Perceptron and Logistic Regression for Breast Cancer",
      tech: [
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
        "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
        "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",
        "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black"

      ],
      details: [
        "Developed and implemented binary classification models using Perceptron and Logistic Regression, achieving an accuracy of 98.25% on the Breast Cancer Wisconsin dataset through Python-based custom algorithms and Scikit-learn.",
        "Optimized model training processes by employing gradient descent and hyperparameter tuning, improving classification accuracy by 3% compared to baseline models.",
        "Conducted performance analysis across 900 training epochs, visualizing learning dynamics with Matplotlib to identify optimal learning rates and mitigate overfitting risks.",
        "Built and tested machine learning workflows on high-dimensional datasets (569 samples, 30 features) and toy datasets, showcasing decision boundary visualizations and robust feature normalization techniques.",
      ],
      githubLink:
        "https://github.com/crebollarramirez/Perceptron---Logistic-Regression-for-Breast-Cancer",
      date: "August 2024",
    },
   
  ];

  return (
    <div className="snap-section projects">
      <h1 className="fs-1 text-white">Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4"
          >
            <Project
              title={project.title}
              tech={project.tech}
              details={project.details}
              githubLink={project.githubLink}
              date={project.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
