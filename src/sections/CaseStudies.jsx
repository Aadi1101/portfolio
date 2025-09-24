import React, { useState } from "react";
import "../styles/CaseStudies.css";
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";

function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const caseStudies = [
    {
      "title": "AI Banking Assistant with LLM Integration",
      "category": "Agentic AI",
      "situation": { "__html": `
        <ul>
          <li>A need existed to build an <span class="highlight">intelligent banking assistant</span> capable of handling user queries, transactions, and financial analysis.</li>
          <li>Manual support or rule-based systems were <span class="highlight">limited in scalability and context understanding</span>.</li>
          <li>Users required access to personal financial data, document retrieval, and advanced reasoning in a <span class="highlight">secure and conversational interface</span>.</li>
        </ul>
      `},
      "task": { "__html": `
        <ul>
          <li>Design and implement a conversational AI capable of <span class="highlight">multi-turn interactions</span> using LLMs (Ollama and Gemini).</li>
          <li>Integrate a <span class="highlight">vector store for document retrieval</span> and a memory system to recall user interactions.</li>
          <li>Create <span class="highlight">banking APIs</span> for checking balances, transactions, loans, investments, and donations.</li>
          <li>Provide a <span class="highlight">Streamlit-based chat interface</span> with authentication and user management.</li>
          <li>Enable document upload, memory summarization, and task planning for complex queries.</li>
        </ul>
      `},
      "action": { "__html": `
        <ul>
          <li>Built <span class="highlight">Agent class</span> coordinating LLMs, tools, memory, and vector store.</li>
          <li>Integrated <span class="highlight">Ollama LLM</span> for planning, conversation, and response refinement.</li>
          <li>Integrated <span class="highlight">Gemini LLM</span> for advanced financial reasoning and analysis.</li>
          <li>Implemented <span class="highlight">ChromaDB vector store</span> for document embeddings, retrieval, and memory summarization.</li>
          <li>Created <span class="highlight">tools for document retrieval, web search, general conversation, and financial operations</span>.</li>
          <li>Developed <span class="highlight">bank API abstraction</span> for retrieving balances, savings, loans, investments, donations, and blocked status.</li>
          <li>Implemented <span class="highlight">Streamlit chat interface</span> with user authentication, session state, memory commands, and agent integration.</li>
          <li>Built memory management system with <span class="highlight">add, retrieve, summarize, and clear functionalities</span>.</li>
          <li>Enabled <span class="highlight">task planning and response refinement</span> to break down complex user queries into actionable steps.</li>
          <li>Dockerized the application with <span class="highlight">Python 3.12, requirements.txt, and port 8501 exposure</span>.</li>
        </ul>
      `},
      "result": { "__html": `
        <ul>
          <li>Developed a fully functional AI banking assistant with <span class="highlight">multi-turn conversational capabilities</span>.</li>
          <li>Users can <span class="highlight">check balances, view transactions, loans, investments, donations</span> and interact naturally with the assistant.</li>
          <li>Supports <span class="highlight">document uploads and retrieval</span> with embedded vector search.</li>
          <li>Memory summarization allows the agent to maintain context over long conversations.</li>
          <li>Streamlit interface provides <span class="highlight">secure login, interactive chat, and command handling</span>.</li>
          <li>Dockerized setup enables <span class="highlight">easy deployment and reproducibility</span>.</li>
          <li>Modular architecture allows <span class="highlight">future extension of LLMs, tools, and banking functionalities</span>.</li>
        </ul>
      `},
      "tech": [
        "Python", 
        "Streamlit", 
        "LangChain", 
        "Ollama LLM", 
        "Gemini LLM", 
        "ChromaDB", 
        "MySQL", 
        "Docker", 
        "Vector Embeddings", 
        "Web Search"
      ],
      "github": "https://github.com/Aadi1101/Banking_Agent"
    },
    {
      "title": "Employee HR Assistant Chat Application",
      "category": "Agentic AI",
      "situation": { "__html": `
        <ul>
          <li>HR teams needed a smart assistant to <span class="highlight">automate employee queries, referral processing, and resume evaluation</span>.</li>
          <li>Manual handling of onboarding, referrals, and resume matching was <span class="highlight">time-consuming and inconsistent</span>.</li>
          <li>Existing solutions lacked structured storage and efficient processing of applicant data.</li>
        </ul>
      `},
      "task": { "__html": `
        <ul>
          <li>Develop a chat-based HR assistant that can <span class="highlight">interact with employees</span> and handle multiple tasks.</li>
          <li>Automate referral processing by extracting structured applicant data from free-form input.</li>
          <li>Evaluate resumes against job descriptions using an AI-powered ATS scoring system.</li>
          <li>Store, transform, and process applicant information efficiently for HR workflows.</li>
        </ul>
      `},
      "action": { "__html": `
        <ul>
          <li>Implemented a <span class="highlight">Streamlit chat interface</span> for employee interaction.</li>
          <li>Built <span class="highlight">EmployeeHRChat</span> class integrating referrals, resume analysis, and general queries.</li>
          <li>Developed <span class="highlight">Referral module</span> using transformers (ALBERT) to extract structured applicant details.</li>
          <li>Implemented <span class="highlight">ATSResume module</span> using Google Gemini for resume evaluation and job description matching.</li>
          <li>Created a <span class="highlight">CSV-based data storage</span> with columns: applicant_name, role, city_type, previous_ctc, previous_job_switches, graduation_marks, previous_exp, expected_ctc.</li>
          <li>Developed functionality to <span class="highlight">convert CSV data into TXT format</span> for faster and more efficient downstream processing and AI analysis.</li>
          <li>Provided modular prompts and templates for context-aware responses and structured data handling.</li>
          <li>Integrated FastAPI routes and LangServe to allow scalable deployment of the assistant.</li>
        </ul>
      `},
      "result": { "__html": `
        <ul>
          <li>HR teams can interact with a single assistant to handle <span class="highlight">referrals, onboarding, and resume evaluation</span>.</li>
          <li>Structured CSV storage ensures <span class="highlight">consistent applicant records</span> and easy retrieval for analysis.</li>
          <li>TXT conversion allows <span class="highlight">efficient AI processing</span> of applicant data for scoring, insights, and reporting.</li>
          <li>ATS scoring provides objective insights on resume-job description alignment.</li>
          <li>The system is <span class="highlight">scalable, modular, and ready</span> for integration with HR analytics tools and workflows.</li>
        </ul>
      `},
      "tech": ["Python", "Streamlit", "FastAPI", "LangChain", "Transformers", "Google Gemini API", "Pandas", "CSV Processing", "TXT Conversion", "PyPDF2", "PDFKit", "LangServe", "AI Chatbot", "ATS Evaluation"],
      "github": "https://github.com/Aadi1101/HR_Assistant"
    },
    {
      "title": "Character-Level GPT Text Generation Transformer",
      "category": "DL",
      "situation": { "__html": `
        <ul>
          <li>A research and experimentation need existed to <span class="highlight">train a character-level generative model</span> capable of generating coherent text sequences.</li>
          <li>Manual text generation or rule-based methods were <span class="highlight">inefficient and limited</span> in capturing context and style.</li>
        </ul>
      `},
      "task": { "__html": `
        <ul>
          <li>Develop a transformer-based GPT model for <span class="highlight">character-level language modeling</span>.</li>
          <li>Create a dataset pipeline, data loaders, and preprocessing routines for sequence training.</li>
          <li>Implement training, evaluation, and text generation functionalities for testing the model.</li>
        </ul>
      `},
      "action": { "__html": `
        <ul>
          <li>Built a <span class="highlight">custom Dataset class</span> to encode text into integer sequences and generate training batches with a sliding window approach.</li>
          <li>Implemented the <span class="highlight">GPT model architecture</span> with embeddings, multi-head self-attention, position-wise feedforward layers, and layer normalization.</li>
          <li>Created modular components: <span class="highlight">SingleHead, MultiHeadAttention, Transformer blocks, and PositionWiseFeedForward</span>.</li>
          <li>Developed a <span class="highlight">training loop</span> with batch-wise loss computation, optimizer steps, learning rate scheduling, and checkpointing.</li>
          <li>Implemented <span class="highlight">text generation</span> method to sample new sequences from the trained model.</li>
          <li>Built utility functions for <span class="highlight">dataset splitting, downloading sample data, and handling block sequences</span>.</li>
          <li>Structured the project modularly under src with reusable components and logging for debugging and tracking.</li>
        </ul>
      `},
      "result": { "__html": `
        <ul>
          <li>Trained a character-level GPT capable of generating coherent text sequences in the style of the source corpus.</li>
          <li>Enabled <span class="highlight">modular experimentation</span> with hyperparameters like embedding size, number of heads, layers, and block size.</li>
          <li>Implemented reproducible pipelines for <span class="highlight">training, evaluation, and inference</span> of text sequences.</li>
          <li>Designed the architecture to scale with GPU acceleration and support batch-wise training for large corpora.</li>
          <li>Project is ready for further experimentation or extension to word-level or larger datasets.</li>
        </ul>
      `},
      "tech": ["Python", "PyTorch", "NumPy", "Transformer", "GPU Training", "Text Generation"],
      "github": "https://github.com/Aadi1101/GPT"
    },
    {
      title: "Construction Cost Estimation and Project Analytics",
      category: "ML",
      situation: {
        __html: `
    <ul>
      <li>Construction companies faced challenges in accurately estimating <span class="highlight">project costs</span> due to <span class="highlight">complex datasets</span> containing numerous <span class="highlight">categorical</span> and <span class="highlight">numerical features</span>.</li>
      <li>Datasets included <span class="highlight">labor</span>, <span class="highlight">material</span>, <span class="highlight">fuel</span>, and <span class="highlight">carbon-related metrics</span>.</li>
      <li>Manual estimation methods were <span class="highlight">time-consuming</span> and prone to <span class="highlight">errors</span>, leading to <span class="highlight">budgeting inaccuracies</span> and <span class="highlight">inefficient project planning</span>.</li>
    </ul>
    `
      },
      task: {
        __html: `
    <ul>
      <li>Design and implement a full <span class="highlight">ML pipeline</span> to accurately <span class="highlight">predict construction project costs</span>.</li>
      <li>Transform <span class="highlight">raw data</span> into <span class="highlight">machine-readable formats</span>.</li>
      <li>Select the <span class="highlight">best predictive model</span> and deploy a <span class="highlight">production-ready API</span> for <span class="highlight">real-time cost estimation</span>.</li>
    </ul>
    `
      },
      action: {
        __html: `
    <ul>
      <li>Built a modular <span class="highlight">Python pipeline</span> with <span class="highlight">custom logging</span> and <span class="highlight">exception handling</span> for robustness.</li>
      <li>Implemented <span class="highlight">data ingestion</span> to read CSV datasets and split into <span class="highlight">training</span> and <span class="highlight">testing sets</span>.</li>
      <li>Performed <span class="highlight">data transformation</span> using <span class="highlight">target encoding</span> on categorical columns such as <span class="highlight">Commodity Code</span>, <span class="highlight">Project Name</span>, <span class="highlight">Client</span>, <span class="highlight">Market Sector/Industry</span>, <span class="highlight">Delivery Method</span>, <span class="highlight">Item Type</span>, <span class="highlight">coordinates</span>, <span class="highlight">state</span>, <span class="highlight">city</span>, and <span class="highlight">suburb</span>, while dropping <span class="highlight">Attribute 4</span>.</li>
      <li>Trained multiple <span class="highlight">regression models</span> including <span class="highlight">Linear Regression</span>, <span class="highlight">Random Forest</span>, <span class="highlight">Decision Tree</span>, <span class="highlight">Gradient Boosting</span>, <span class="highlight">XGBoost</span>, <span class="highlight">CatBoost</span>, and <span class="highlight">AdaBoost</span>, with <span class="highlight">hyperparameter tuning</span> using <span class="highlight">GridSearchCV</span>.</li>
      <li>Evaluated models using <span class="highlight">R²</span>, <span class="highlight">MAE</span>, and <span class="highlight">MSE</span>, selecting the <span class="highlight">best-performing XGBoost Regressor</span>.</li>
      <li>Deployed the trained model in a <span class="highlight">Flask web application</span>, containerized with <span class="highlight">Docker</span>, allowing users to input project data and receive <span class="highlight">instant construction cost predictions</span>.</li>
    </ul>
    `
      },
      result: {
        __html: `
    <ul>
      <li>The <span class="highlight">XGBoost model</span> achieved a <span class="highlight">test R² of 0.993</span>, <span class="highlight">MAE of 0.274</span>, and <span class="highlight">MSE of 0.634</span>, outperforming other models.</li>
      <li><span class="highlight">Random Forest</span> and <span class="highlight">CatBoost</span> also demonstrated high accuracy (<span class="highlight">R² > 0.98</span>).</li>
      <li>The pipeline enabled <span class="highlight">near-real-time</span>, <span class="highlight">reliable cost predictions</span>, reducing <span class="highlight">manual estimation errors</span> and improving <span class="highlight">budgeting efficiency</span>.</li>
      <li>The <span class="highlight">Flask API</span> provides a <span class="highlight">user-friendly interface</span> and endpoints for integration, making the solution <span class="highlight">production-ready</span> and <span class="highlight">reproducible</span>.</li>
    </ul>
    `
      },
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "CatBoost", "category_encoders", "Flask", "Docker", "GridSearchCV", "dill", "JSON", "Custom Logging", "Custom Exception Handling"],
      github: "https://github.com/Aadi1101/Construction_Cost_Estimation_and_Project_Analytics"
    },
    {
      "title": "Heart Disease Prediction",
      "category": "ML",
      "situation": { "__html": `
        <ul>
          <li>A healthcare provider needed a system to <span class="highlight">predict heart disease risk</span> using clinical and demographic data.</li>
          <li>Manual assessment was <span class="highlight">time-consuming</span> and error-prone, delaying preventive care.</li>
        </ul>
      `},
      "task": { "__html": `
        <ul>
          <li>Develop a machine learning pipeline to predict <span class="highlight">presence or absence of heart disease</span>.</li>
          <li>Preprocess numerical features, scale them, and split the dataset for training and testing.</li>
          <li>Evaluate multiple models to identify the <span class="highlight">best-performing classifier</span>.</li>
        </ul>
      `},
      "action": { "__html": `
        <ul>
          <li>Implemented a <span class="highlight">data ingestion module</span> to read CSV, split into train/test sets, and save artifacts.</li>
          <li>Developed a <span class="highlight">data transformation module</span> using <span class="highlight">StandardScaler</span> to scale numerical features.</li>
          <li>Trained and evaluated multiple classifiers: <span class="highlight">Decision Tree, Random Forest, Gradient Boosting, XGBoost, CatBoost, Logistic Regression, SVM, KNN, Naive Bayes, AdaBoost</span>.</li>
          <li>Used <span class="highlight">Q-learning based feature selection</span> with <span class="highlight">GridSearchCV</span> for hyperparameter tuning.</li>
          <li>Saved the <span class="highlight">best model</span> and preprocessing objects for deployment.</li>
          <li>Built a <span class="highlight">Flask web application</span> to serve predictions in real time based on user input.</li>
          <li>Structured the project modularly to support retraining, evaluation, and pipeline upgrades.</li>
        </ul>
      `},
      "result": { "__html": `
        <ul>
          <li>Achieved <span class="highlight">highest test accuracy of ~77%</span> with Random Forest and CatBoost.</li>
          <li>Automated <span class="highlight">heart disease prediction</span>, reducing manual assessment effort.</li>
          <li>Generated model evaluation reports in JSON format for <span class="highlight">tracking and auditing</span>.</li>
          <li>Built a pipeline ready for deployment in clinical decision support systems.</li>
          <li>Implemented feature selection using reinforcement learning, improving model interpretability.</li>
        </ul>
      `},
      "tech": ["Python", "pandas", "NumPy", "scikit-learn", "CatBoost", "XGBoost", "Flask", "Q-learning", "GridSearchCV", "Docker"],
      "github": "https://github.com/Aadi1101/Heart_Disease_Prediction"
    }
  ]

  return (
    <section id="casestudies" className="casestudies-section">
      <div className="container">
        <h2 className="casestudies-title">Case Studies</h2>

        <div className="accordion">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`accordion-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="study-title">{study.title}</h3>
                {study.github && (
                  <a
                    href={study.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub />
                  </a>
                )}
                <span className="accordion-icon">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>

              {activeIndex === index && (
                <div className="accordion-body">
                  <p>
                    <span className="star-label">Situation:</span>{" "}
                    <span dangerouslySetInnerHTML={study.situation}></span>
                  </p>
                  <p>
                    <span className="star-label">Task:</span>{" "}
                    <span dangerouslySetInnerHTML={study.task}></span>
                  </p>
                  <p>
                    <span className="star-label">Action:</span>{" "}
                    <span dangerouslySetInnerHTML={study.action}></span>
                  </p>
                  <p>
                    <span className="star-label">Result:</span>{" "}
                    <span dangerouslySetInnerHTML={study.result}></span>
                  </p>
                  <div className="tech-tags">
                    {study.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="explore-more-container">
        <a href="/casestudies" className="explore-more-btn">
          Explore More Case Studies →
        </a>
      </div>

      <div className="wave-separator">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            d="M0,80 C360,200 1080,0 1440,100 L1440,150 L0,150 Z"
            fill="#FFD700"
          />
        </svg>
      </div>
    </section>
  );
}

export default CaseStudies;
