import React from "react";
import TextSphere from "./TextSphere";
import mlPic from "./../../assets/macineLearningPic.png";
import "./../../styles/skillsSectionStyle.css";

export function SkillsSection({id}) {
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
                <span className="library">pandas:</span> Proficient in using pandas for data
                manipulation, including tasks like data cleaning,
                transformation, and analysis.
              </li>
              <li>
                <span className="library">scikit-learn:</span> Experienced in applying machine
                learning algorithms using scikit-learn, such as regression,
                classification, clustering, <br></br> and model evaluation.
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
                <span className="library">TensorFlow:</span> Proficient in TensorFlow, with
                experience in creating and deploying deep learning models,
                leveraging TensorFlow's extensive ecosystem for model building,
                training, and optimization.
              </li>
            </ul>
          </div>

          <div className="neural-networks mlgrid-item">
            <h3>Neural Network Development:</h3>
            <ul>
              <li>
                <span className="library2">Keras:</span> Adept at building neural networks using
                Keras, with experience in designing and training models for
                tasks such as image classification, natural language processing,
                and more.
              </li>
            </ul>
          </div>

          <div className="data-visualization mlgrid-item">
            <h3>Data Visualization Tools:</h3>
            <ul>
              <li>
                <span className="library2">Matplotlib:</span> Experienced in creating a wide
                range of visualizations, including line plots, bar charts,
                histograms, and scatter plots, using Matplotlib to effectively
                communicate data insights.
              </li>
              <li>
                <span className="library2">Seaborn:</span> Skilled in using Seaborn for
                statistical data visualization, including creating advanced
                visualizations like heatmaps, pair plots, and violin plots.
              </li>
            </ul>
          </div>
          <div className="scrollTitle-container mlgrid-item">
            <h1>Full-Stack Development and Debugging: </h1>
          </div>
          <div class="scroll-container mlgrid-item">
            <div class="scroll-content">
              <h2>C++</h2>
              <h2>Java</h2>
              <h2>Python</h2>
              <h2>HTML+CSS</h2>
              <h2>JavaScript</h2>
              <h2>TypeScript</h2>
              <h2>Swift</h2>
              <h2>GDB Debugger</h2>
              <h2>JDB Debugger</h2>
              <h2>Valgrind</h2>
              <h2>GPROF</h2>
              <h2>Git</h2>
              <h2>React.js</h2>
              <h2>Node.js</h2>
              <h2>React-Native</h2>
              <h2>MongoDB</h2>
              <h2>SQL</h2>
              <h2>Firebase</h2>
              <h2>Sentry</h2>
              <h2>Flurry</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
