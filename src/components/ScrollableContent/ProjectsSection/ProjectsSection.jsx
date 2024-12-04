import React from "react";
import "./../../../styles/projectSectionStyle.css";
import { Project } from "./Project";

export function ProjectsSection({ id }) {
  return (
    <div className="scroll-item projects-section" id={id}>
      <h1 className="titleText">Projects</h1>
      <div className="projects-container">
        <Project
          title="DaybyDay"
          items={[
            "Developed a responsive frontend with React.js, achieving 20% faster load times and a 15% increase in daily task management usage.",
            "Built a robust backend using Python Django and AWS DynamoDB, supporting 20+ active users daily with 30% more efficient data handling and storage.",
            "Implemented secure user authentication with Django and JWT tokens, achieving a 99% login success rate and minimal unauthorized access.",
            "Integrated OpenAI API and WebSockets for a real-time chatbot, boosting productivity by 25% and improving user retention by 10%.",
            "Conducted unit testing, achieving 95% code coverage and identifying 20% more bugs, resulting in a 30% reduction in post-deployment issues.",
          ]}
          date={"Jul 2024 – Oct 2024"}
          githubLink={"https://github.com/crebollarramirez/DayByDay"}
        />
        <Project
          title="Digits Classifier KNN"
          items={[
            "Built a digits classification system using a custom K-Nearest Neighbors algorithm, achieving 91.4% test accuracy on the MNIST dataset and outperforming Scikit-learn's implementation in specific cases.",
            "Optimized k-values and explored alternative distance metrics (Euclidean, Cosine), achieving a peak test accuracy of 92.2% with Cosine Distance.",
            "Conducted detailed performance evaluations, including training vs. test accuracy comparisons and error analysis on misclassified samples.",
            "Applied the classifier to a Wine dataset with 5-fold cross-validation, demonstrating robust performance across diverse multi-class classification tasks.",
          ]}
          githubLink={
            "https://github.com/crebollarramirez/digits-classifier-KNN"
          }
          date={"July 2024"}
          
        />

        <Project
          title="Perceptrion and Logistic Regression for Breast Cancer"
          items={[
            "Developed and implemented binary classification models using Perceptron and Logistic Regression, achieving an accuracy of 98.25% on the Breast Cancer Wisconsin dataset through Python-based custom algorithms and Scikit-learn.",
            "Optimized model training processes by employing gradient descent and hyperparameter tuning, improving classification accuracy by 3% compared to baseline models.",
            "Conducted performance analysis across 900 training epochs, visualizing learning dynamics with Matplotlib to identify optimal learning rates and mitigate overfitting risks.",
            "Built and tested machine learning workflows on high-dimensional datasets (569 samples, 30 features) and toy datasets, showcasing decision boundary visualizations and robust feature normalization techniques.",
          ]}
          githubLink={
            "https://github.com/crebollarramirez/Perceptron---Logistic-Regression-for-Breast-Cancer"
          }
          date={"August 2024"}
        />

      </div>
    </div>
  );
}
