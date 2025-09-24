import React, { useState } from "react";
import "../styles/AllCaseStudies.css";
import { FaGithub } from "react-icons/fa";

function AllCaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const caseStudies = [
    {
      "title": "Phishing URL Detection",
      "category": "ML",
      "situation": { "__html": `
        <ul>
          <li>An organization needed a system to <span class="highlight">detect phishing URLs</span> from web traffic and domain information.</li>
          <li>Manual identification of phishing sites was <span class="highlight">error-prone</span> and <span class="highlight">time-consuming</span>, risking user security.</li>
        </ul>
      `},
      "task": { "__html": `
        <ul>
          <li>Develop a machine learning pipeline to predict <span class="highlight">whether a URL is phishing or legitimate</span>.</li>
          <li>Preprocess numerical and categorical features, including domain and TLD encoding, and scale numeric values.</li>
          <li>Split the dataset into training and testing sets and evaluate multiple models to identify the <span class="highlight">best-performing classifier</span>.</li>
        </ul>
      `},
      "action": { "__html": `
        <ul>
          <li>Implemented a <span class="highlight">data ingestion module</span> to read cleaned CSV data, perform train/test split, and save artifacts.</li>
          <li>Developed a <span class="highlight">data transformation module</span> using <span class="highlight">StandardScaler</span>, frequency encoding for domains, and target mean encoding for TLDs.</li>
          <li>Trained and evaluated multiple classifiers: <span class="highlight">Decision Tree, Random Forest, Gradient Boosting, XGBoost, CatBoost, Logistic Regression, SVM, KNN, Naive Bayes, AdaBoost</span>.</li>
          <li>Used <span class="highlight">RandomizedSearchCV</span> for hyperparameter tuning of all models.</li>
          <li>Saved the <span class="highlight">best model and preprocessing objects</span> for deployment.</li>
          <li>Structured the project modularly to support retraining, evaluation, and pipeline upgrades.</li>
        </ul>
      `},
      "result": { "__html": `
        <ul>
          <li>Achieved <span class="highlight">test accuracy >99%</span> with Gradient Boosting and XGBoost, effectively detecting phishing URLs.</li>
          <li>Automated <span class="highlight">phishing URL detection</span>, reducing manual inspection effort and improving cybersecurity.</li>
          <li>Generated detailed <span class="highlight">model evaluation reports in JSON format</span> for auditing and tracking model performance.</li>
          <li>Implemented frequency and target mean encoding, improving <span class="highlight">feature interpretability</span> for domain and TLD features.</li>
          <li>Built a pipeline ready for deployment in web security systems.</li>
        </ul>
      `},
      "tech": ["Python", "pandas", "NumPy", "scikit-learn", "CatBoost", "XGBoost", "RandomizedSearchCV", "dill", "JSON"],
      "github": "https://github.com/Aadi1101/Phising_Url_Detection"
    },
    {
      title: "Loan Status Prediction",
      category: "ML",
      situation: { __html: `
        <ul>
          <li>A bank needed an automated system to <span class="highlight">predict loan approvals</span> for applicants based on financial and demographic data.</li>
          <li>The manual process was <span class="highlight">time-consuming</span> and prone to errors, affecting decision-making efficiency.</li>
        </ul>
      `},
      task: {__html: `
        <ul>
          <li>Build a machine learning pipeline capable of accurately predicting <span class="highlight">loan status</span> (approved or rejected).</li>
          <li>Handle missing values, categorical encoding, and scaling of numerical features.</li>
          <li>Select the <span class="highlight">best-performing model</span> using advanced evaluation methods.</li>
        </ul>
      `},
      action: {__html: `
        <ul>
          <li>Implemented a <span class="highlight">data ingestion module</span> to read CSV, split train/test sets, and save datasets.</li>
          <li>Developed a <span class="highlight">data transformation module</span> to fill missing values, encode categorical columns, and scale numerical features using <span class="highlight">StandardScaler</span>.</li>
          <li>Trained and evaluated multiple classifiers: <span class="highlight">Decision Tree, Random Forest, Gradient Boosting, XGBoost, CatBoost, Logistic Regression, SVM, KNN, Naive Bayes, AdaBoost</span>.</li>
          <li>Used <span class="highlight">reinforcement learning (Q-learning)</span> for feature selection and <span class="highlight">GridSearchCV</span> for hyperparameter tuning.</li>
          <li>Saved the <span class="highlight">best model</span> along with preprocessing objects and evaluation reports.</li>
          <li>Built a <span class="highlight">Flask web application</span> to serve predictions via GET requests, taking user inputs and returning "Yes"/"No" loan status.</li>
          <li>Containerized the app using <span class="highlight">Docker</span> for deployment with Python 3.8 and virtual environment setup.</li>
        </ul>
      `},
      result: {__html:  `
        <ul>
          <li>Achieved <span class="highlight">best model accuracy of ~76%</span> across multiple classifiers on test data.</li>
          <li>Automated <span class="highlight">loan approval predictions</span>, reducing manual review time.</li>
          <li>Handled missing values, categorical encoding, and scaling, ensuring robust preprocessing.</li>
          <li>Created a production-ready Flask API and Docker container for <span class="highlight">real-time predictions</span>.</li>
          <li>Generated JSON reports for model evaluation, making performance tracking and audits easier.</li>
        </ul>
      `},
      tech: ["Python", "pandas", "NumPy", "scikit-learn", "CatBoost", "XGBoost", "Flask", "Docker", "Q-learning", "GridSearchCV"],
      github: "https://github.com/Aadi1101/Loan_Status_Prediction"
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
    },
    {
      "title": "PCOS Detection",
      "category": "ML",
      "situation": { "__html": `
        <ul>
          <li>A healthcare provider needed a system to <span class="highlight">detect PCOS risk</span> using clinical, hormonal, and lifestyle data.</li>
          <li>Manual assessment was <span class="highlight">time-consuming</span> and error-prone, delaying early diagnosis and treatment.</li>
        </ul>
      `},
      "task": { "__html": `
        <ul>
          <li>Develop a machine learning pipeline to predict <span class="highlight">presence or absence of PCOS</span>.</li>
          <li>Preprocess numerical and categorical features, handle missing values, and scale features.</li>
          <li>Split dataset into training and testing sets and evaluate multiple models to identify the <span class="highlight">best-performing classifier</span>.</li>
        </ul>
      `},
      "action": { "__html": `
        <ul>
          <li>Implemented a <span class="highlight">data ingestion module</span> to read CSV, split into train/test sets, and save artifacts.</li>
          <li>Developed a <span class="highlight">data transformation module</span> using <span class="highlight">StandardScaler</span> to scale features and handle missing values.</li>
          <li>Trained and evaluated multiple classifiers: <span class="highlight">Logistic Regression, Decision Tree, Random Forest, AdaBoost, SVM, KNN, Naive Bayes, XGBoost</span>.</li>
          <li>Used <span class="highlight">Q-learning based feature selection</span> along with <span class="highlight">GridSearchCV</span> for hyperparameter tuning and optimal feature subset selection.</li>
          <li>Saved the <span class="highlight">best model and preprocessor objects</span> for deployment.</li>
          <li>Built a <span class="highlight">Flask web application</span> to provide real-time predictions for user-submitted data.</li>
          <li>Structured the project modularly to support retraining, evaluation, and pipeline upgrades.</li>
        </ul>
      `},
      "result": { "__html": `
        <ul>
          <li>Achieved <span class="highlight">highest test accuracy of ~91%</span> with Logistic Regression and Random Forest.</li>
          <li>Automated <span class="highlight">PCOS detection</span>, reducing manual assessment effort and enabling early diagnosis.</li>
          <li>Generated detailed <span class="highlight">model evaluation reports in JSON format</span> for tracking, auditing, and deployment decisions.</li>
          <li>Implemented feature selection using reinforcement learning, improving <span class="highlight">model interpretability</span> and reducing input complexity.</li>
          <li>Built a pipeline ready for deployment in healthcare decision support systems with Dockerized Flask app.</li>
        </ul>
      `},
      "tech": ["Python", "pandas", "NumPy", "scikit-learn", "XGBoost", "Flask", "Q-learning", "GridSearchCV", "CatBoost", "Docker", "dill"],
      "github": "https://github.com/Aadi1101/PCOS_Detection"
    },
    {
      title: "Disease Prediction",
      category: "ML",
      situation: { __html: `
        <ul>
          <li>Medical datasets contained <span class="highlight">patient symptoms</span> with over 41 possible diseases, such as <span class="highlight">Fungal infection, Malaria, Diabetes, Allergy</span>.</li>
          <li>Manual diagnosis was <span class="highlight">time-consuming</span> and prone to <span class="highlight">errors</span>, requiring an automated prediction system.</li>
        </ul>
      `},
      task: { __html: `
        <ul>
          <li>Build a <span class="highlight">machine learning pipeline</span> capable of accurately predicting a patient's disease based on symptom data.</li>
          <li>Handle missing values, drop irrelevant columns, and scale numerical features.</li>
          <li>Encode the target column using <span class="highlight">LabelEncoder</span> to transform categorical labels into numeric form.</li>
          <li>Select the <span class="highlight">best-performing model</span> among multiple classifiers using evaluation metrics like accuracy, precision, recall, f1-score, and ROC-AUC.</li>
        </ul>
      `},
      action: { __html: `
        <ul>
          <li>Implemented a <span class="highlight">data ingestion module</span> to read CSV files, split into train/test sets, and save the datasets.</li>
          <li>Built a <span class="highlight">data transformation module</span> to drop irrelevant columns, scale features using <span class="highlight">StandardScaler</span>, and encode the target with <span class="highlight">LabelEncoder</span>.</li>
          <li>Trained and evaluated multiple classifiers: <span class="highlight">Decision Tree, Random Forest, Gradient Boosting, XGBoost, CatBoost, Logistic Regression, SVM, KNN, Naive Bayes, AdaBoost</span>.</li>
          <li>Used <span class="highlight">RandomizedSearchCV</span> for hyperparameter tuning across all models.</li>
          <li>Saved the <span class="highlight">best model</span> along with preprocessing objects for deployment.</li>
          <li>Developed a <span class="highlight">Flask web application</span> that accepts patient symptom inputs and returns the predicted disease.</li>
          <li>Containerized the application using <span class="highlight">Docker</span> for production-ready deployment.</li>
        </ul>
      `},
      result: { __html: `
        <ul>
          <li>Successfully created a <span class="highlight">disease prediction system</span> capable of predicting among 41 diseases.</li>
          <li>Achieved <span class="highlight">high test accuracies</span> with multiple models, including Gradient Boosting, Random Forest, SVM, KNN, Logistic Regression, and XGBoost achieving <span class="highlight">100% test accuracy</span>.</li>
          <li>CatBoost and AdaBoost classifiers also achieved near-perfect performance with <span class="highlight">>99% test accuracy</span>.</li>
          <li>Metrics such as precision, recall, f1-score, and ROC-AUC confirmed <span class="highlight">robust model performance</span> and low overfitting.</li>
          <li>Automated the diagnostic process, reducing manual review time for medical staff.</li>
          <li>Delivered a production-ready <span class="highlight">Flask API</span> and Docker container for <span class="highlight">real-time disease prediction</span>.</li>
          <li>Generated JSON reports for model evaluation, enabling easy tracking and audits of model performance.</li>
        </ul>
      `},
      tech: ["Python", "pandas", "NumPy", "scikit-learn", "CatBoost", "XGBoost", "Flask", "Docker", "RandomizedSearchCV", "LabelEncoder", "StandardScaler"],
      github: "https://github.com/Aadi1101/Disease_Prediction"
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
      "title": "AI News Summarizer",
      "category": "ML",
      "situation": { "__html": `
        <ul>
          <li>Enterprises and developers needed a streamlined way to consume large volumes of tech news and extract actionable insights.</li>
          <li>Manual summarization of articles was time-consuming and error-prone, while existing tools lacked automatic problem statement extraction and technology stack recommendations.</li>
          <li>The goal was to leverage AI for summarization, deduplication, and technical analysis of news articles for better decision-making and learning.</li>
        </ul>
      ` },
      "task": { "__html": `
        <ul>
          <li>Design a pipeline to scrape tech news from multiple sources and process them efficiently.</li>
          <li>Generate concise summaries, extract problem statements, and recommend relevant technology stacks automatically.</li>
          <li>Prevent duplicates by using semantic embeddings and cosine similarity checks.</li>
          <li>Persist the processed data in a database and provide a REST API for client access.</li>
          <li>Build a frontend dashboard for displaying summarized news with problem statements, tech stacks, and sources.</li>
        </ul>
      ` },
      "action": { "__html": `
        <ul>
          <li>Implemented a <span class='highlight'>scraper module</span> using Newspaper3k to fetch articles from multiple tech sources.</li>
          <li>Developed a <span class='highlight'>pipeline script</span> that computes sentence embeddings, checks for duplicates via <span class='highlight'>cosine similarity</span>, and stores unique articles in MongoDB.</li>
          <li>Integrated <span class='highlight'>AI summarization and problem statement generation</span> services for concise article summaries and actionable insights.</li>
          <li>Built a <span class='highlight'>tech stack generator</span> using LLaMA3 (via Ollama) to recommend suitable technology stacks based on problem statements.</li>
          <li>Created <span class='highlight'>FastAPI</span> backend endpoints for news, problem statements, and tech stacks with proper CORS setup for client-side access.</li>
          <li>Developed a <span class='highlight'>React.js frontend</span> with components like NewsCard and API integration to display summaries, tech stacks, sources, and ratings.</li>
          <li>Implemented robust error handling, logging, and fallback mechanisms for missing summaries or tech stacks.</li>
        </ul>
      ` },
      "result": { "__html": `
        <ul>
          <li>Successfully deployed an AI-powered news summarization system capable of scraping, deduplicating, summarizing, and analyzing tech articles automatically.</li>
          <li>Enabled problem statement extraction and technology stack recommendation for each article.</li>
          <li>Delivered a frontend dashboard allowing users to browse news with summaries, problem statements, tech stacks, sources, and ratings.</li>
          <li>Automated the full pipeline, reducing manual effort and improving timeliness and accuracy of information delivery.</li>
          <li>The system is extensible: new sources, summarization models, or tech stack generation logic can be added easily without breaking existing functionality.</li>
        </ul>
      ` },
      "tech": [
        "Python",
        "FastAPI",
        "MongoDB",
        "Newspaper3k",
        "LLaMA3 (Ollama)",
        "Sentence Transformers",
        "NumPy",
        "React.js"
      ]
    }


  ];
      // {
    //   "title": "Language Tutor",
    //   "category": "AI-powered Language Learning",
    //   "situation": { "__html": `
    //     <ul>
    //       <li>Users needed an interactive platform to learn languages by translating sentences, understanding grammar, and engaging in AI-driven group discussions.</li>
    //       <li>Existing language tools lacked real-time AI conversation, contextual word mapping, audio pronunciations, and structured grammar explanations in one platform.</li>
    //       <li>The system had to integrate translation, TTS, AI chat, and optional database storage while running locally for testing and future deployment.</li>
    //     </ul>
    //   ` },
    //   "task": { "__html": `
    //     <ul>
    //       <li>Develop a full-stack application combining ReactJS frontend and FastAPI backend for translation, AI chat, and TTS services.</li>
    //       <li>Integrate Google Gemini LLM for generating translations and AI conversational responses in multiple languages.</li>
    //       <li>Provide structured JSON responses including translated text, word mapping, and grammar notes.</li>
    //       <li>Enable audio pronunciation via TTS and interactive speech recognition for practice.</li>
    //       <li>Optionally store sentences in MongoDB for persistence and retrieval.</li>
    //       <li>Ensure modularity, error handling, and maintainability across all components.</li>
    //     </ul>
    //   ` },
    //   "action": { "__html": `
    //     <ul>
    //       <li>Implemented FastAPI backend with endpoints for translation (/translate), AI chat (/chat), and CRUD operations for sentences (/api/sentences).</li>
    //       <li>Integrated Google Gemini 2.0 API for AI-generated translations and context-aware chat responses.</li>
    //       <li>Built TTS service using gTTS to generate audio pronunciations for translated sentences.</li>
    //       <li>Developed utility functions for text cleaning, word mapping, and extracting JSON from LLM outputs.</li>
    //       <li>Optionally integrated MongoDB using Motor for asynchronous storage of sentences, including translations, grammar notes, and audio URLs.</li>
    //       <li>Created ReactJS frontend components: SentenceForm, TranslationResult, TranslatePage, and AIChatPage, with Axios for backend communication.</li>
    //       <li>Implemented interactive AI chat interface with Web Speech API for speech recognition and speech synthesis.</li>
    //       <li>Managed frontend state with localStorage for chat history persistence and translation toggling.</li>
    //       <li>Configured environment variables and .env management for API keys, LLM models, and backend URLs.</li>
    //     </ul>
    //   ` },
    //   "result": { "__html": `
    //     <ul>
    //       <li>Delivered a fully functional Language Tutor application running locally, supporting multi-language translation with word mapping and grammar explanations.</li>
    //       <li>Enabled real-time AI-driven group discussions with speech recognition and synthesis for immersive language practice.</li>
    //       <li>Users can listen to TTS audio, view structured translations, and track conversations with AI chat history.</li>
    //       <li>The system is modular, configurable, and ready for future deployment or database expansion.</li>
    //       <li>Provided an educational platform that combines LLM-powered translation, AI conversation, and TTS, all in one integrated interface.</li>
    //     </ul>
    //   ` },
    //   "tech": [
    //     "Python",
    //     "FastAPI",
    //     "ReactJS",
    //     "Google Gemini",
    //     "gTTS",
    //     "Speech Recognition / Web Speech API",
    //     "MongoDB (optional)",
    //     "Axios"
    //   ],
    //   "github": ""
    // }

  const categories = ["All", ...new Set(caseStudies.map((cs) => cs.category))];

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory);

  return (
    <section id="all-case-studies" className="all-case-studies-section">
      <div className="container">
        <h2 className="all-case-studies-title">All Case Studies</h2>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-btn ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Study Cards */}
        <div className="case-studies-grid">
          {filteredCaseStudies.map((cs, idx) => (
            <div key={idx} className="case-study-card">
              <div className="title-and-link">
                <h3 className="case-study-title">{cs.title}</h3>
                {cs.github && (
                  <a
                    href={cs.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-study-link"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>

              <div className="case-study-content">
                <p>
                  <span className="highlight">Situation:</span>{" "}
                  <span dangerouslySetInnerHTML={cs.situation}></span>
                </p>
                <p>
                  <span className="highlight">Task:</span>{" "}
                  <span dangerouslySetInnerHTML={cs.task}></span>
                </p>
                <p>
                  <span className="highlight">Action:</span>{" "}
                  <span dangerouslySetInnerHTML={cs.action}></span>
                </p>
                <p>
                  <span className="highlight">Result:</span>{" "}
                  <span dangerouslySetInnerHTML={cs.result}></span>
                </p>
              </div>
              <div className="tech-tags">
                {cs.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllCaseStudies;
