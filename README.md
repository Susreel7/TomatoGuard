# TomatoGuard 🍅

TomatoGuard is an AI-powered web application designed to detect and classify tomato leaf diseases. It leverages Machine Learning (CNNs) and Computer Vision to help farmers and gardeners identify plant health issues early.

## 🌟 Features

*   **Image Classification:** Upload an image of a tomato leaf to detect diseases using a pre-trained TensorFlow.js model running entirely in your browser.
*   **Real-time Detection:** Use your webcam for real-time disease detection powered by Roboflow.
*   **Detailed Information:** Get instant results with confidence scores and disease names.
*   **Responsive Design:** Built with React and TailwindCSS for a seamless experience on desktop and mobile.

## 📊 Dataset

The model was trained on the **Tomato Leaf Disease Dataset** available on Kaggle.
*   **Dataset Link:** [Tomato Leaf Dataset on Kaggle](https://www.kaggle.com/datasets/kaustubhb999/tomatoleaf)

### Classes Detected (10 Classes):
1.  Tomato Bacterial Spot
2.  Tomato Early Blight
3.  Tomato Late Blight
4.  Tomato Leaf Mold
5.  Tomato Septoria Leaf Spot
6.  Tomato Spider Mites (Two-spotted spider mite)
7.  Tomato Target Spot
8.  Tomato Yellow Leaf Curl Virus
9.  Tomato Mosaic Virus
10. Tomato Healthy

## 🛠️ Tech Stack

*   **Frontend:** React.js, Bootstrap, DaisyUI, TailwindCSS
*   **Machine Learning:**
    *   **Training:** Python, TensorFlow/Keras (Jupyter Notebooks)
    *   **Inference:** TensorFlow.js (Client-side), Roboflow.js
*   **Tools:** npm, React Scripts

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites
*   **Node.js** (v14 or higher)
*   **npm** (Node Package Manager)

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Susreel7/TomatoGuard.git
    cd TomatoGuard/TomatoGuard
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```
    *This will install all necessary packages listed in `package.json`.*

### Execution

1.  **Start the Development Server**
    ```bash
    npm start
    ```

2.  **Open in Browser**
    The application should automatically open at `http://localhost:3000`. If not, navigate to that URL in your browser.

## 🧠 Model Training (Optional)

If you wish to retrain the model or explore the training process:

1.  Navigate to the `model/` directory.
2.  Open `image_classification/image_classification.ipynb` in Jupyter Notebook or Google Colab.
3.  The notebook contains steps to:
    *   Download the dataset from Kaggle.
    *   Preprocess and augment images.
    *   Train a CNN model (MobileNetV2/VGG16).
    *   Export the model to TensorFlow.js format (`model.json`).

*Note: The pre-trained model is already located in `public/model/`, so you **do not** need to train it to run the app.*

## 📂 Project Structure

```
TomatoGuard/
├── model/                  # Python notebooks for model training
│   ├── image_classification/
│   └── object_detection/
├── public/
│   ├── model/              # TFJS model files (model.json + shards)
│   └── index.html
├── src/
│   ├── components/         # React components (ImageCard, DescCard)
│   ├── data/               # Static data (disease info)
│   ├── pages/              # Main pages (Classify, Homepage)
│   ├── App.jsx             # Main App component
│   └── index.js            # Entry point
├── documentation/          # Architecture diagrams and docs
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
