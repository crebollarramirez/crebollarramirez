import React from "react";
import mlPic from "./../../assets/macineLearningPic.png";
import "./../../styles/skillsSectionStyle.css";
import { TextCarousel } from "../TextCarousel";

export function SkillsSection({ id }) {
  const items = [
    "C++",
    "Java",
    "Python",
    "HTML+CSS",
    "JavaScript",
    "TypeScript",
    "Swift",
    "GDB Debugger",
    "JDB Debugger",
    "Valgrind",
    "GPROF",
    "Git",
    "React.js",
    "Node.js",
    "React Native",
    "MongoDB",
    "SQL",
    "Firebase",
    "Sentry",
    "Flurry"
];
  return (
    <div className="scroll-item skills-section" id={id}>
      <h1 className="titleText">My Skills</h1>
      <div className="skills-container">
        <div id="ml-grid-container">
          <div className="ml-image-container mlgrid-item">
            <img src={mlPic} alt="" id="ml" />
          </div>

          <div className="dsml mlgrid-item">
            <h3>Data Science and Machine Learning Libraries:</h3>
            <ul>
              <li>
                <span className="library">pandas:</span> Proficient in using
                pandas for data manipulation, including tasks like data
                cleaning, transformation, and analysis.
              </li>
              <li>
                <span className="library">scikit-learn:</span> Experienced in
                applying machine learning algorithms using scikit-learn, such as
                regression, classification, clustering, <br></br> and model
                evaluation.
              </li>
            </ul>
          </div>

          <div className="deepLearning mlgrid-item">
            <h3>Deep Learning Frameworks:</h3>
            <ul>
              <li>
                <span className="library">PyTorch:</span> Skilled in using
                PyTorch for deep learning, including building and training
                neural networks, implementing custom models, and performing
                complex tensor operations.
              </li>
              <li>
                <span className="library">TensorFlow:</span> Proficient in
                TensorFlow, with experience in creating and deploying deep
                learning models, leveraging TensorFlow's extensive ecosystem for
                model building, training, and optimization.
              </li>
            </ul>
          </div>

          <div className="neural-networks mlgrid-item">
            <h3>Neural Network Development:</h3>
            <ul>
              <li>
                <span className="library2">Keras:</span> Adept at building
                neural networks using Keras, with experience in designing and
                training models for tasks such as image classification, natural
                language processing, and more.
              </li>
            </ul>
          </div>

          <div className="data-visualization mlgrid-item">
            <h3>Data Visualization Tools:</h3>
            <ul>
              <li>
                <span className="library2">Matplotlib:</span> Experienced in
                creating a wide range of visualizations, including line plots,
                bar charts, histograms, and scatter plots, using Matplotlib to
                effectively communicate data insights.
              </li>
              <li>
                <span className="library2">Seaborn:</span> Skilled in using
                Seaborn for statistical data visualization, including creating
                advanced visualizations like heatmaps, pair plots, and violin
                plots.
              </li>
            </ul>
          </div>
          <div className="scrollTitle-container mlgrid-item">
            <h1>Full-Stack Development and Debugging</h1>
          </div>
          <TextCarousel items={items} speed="fast" />
        </div>
      </div>
    </div>
  );
}