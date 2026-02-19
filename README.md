💎 Multimodal AI Jewelry Recommendation System

An intelligent jewelry discovery system that enables users to search and find jewelry using text, images, hand-drawn sketches, and handwritten text.
The system uses multimodal embeddings and semantic vector search to deliver highly relevant recommendations.

Developed as part of a collaborative project at Navigate Labs.

🚀 Features

✅ Text → Jewelry search
✅ Image → Similar jewelry search
✅ Hand-drawn sketch → Visual similarity search
✅ Handwritten text → OCR → semantic search
✅ Multimodal embedding & vector similarity retrieval
✅ Real-time recommendation results
✅ REST API backend for frontend integration

🧠 How It Works

1️⃣ Embedding Generation

Images and text are encoded using FashionCLIP

Embeddings capture semantic similarity

2️⃣ Vector Database

Embeddings stored in ChromaDB

Enables fast similarity search

3️⃣ Query Processing

Text queries → encoded → vector search

Image/sketch uploads → encoded → similarity search

Handwritten text → OCR → encoded → search

4️⃣ Result Retrieval

Top similar items returned with metadata and image links

🏗️ System Architecture

User Query → Multimodal Encoder → Vector Search → Retrieval → API Response → Frontend Display

🛠️ Technology Stack

AI & ML

FashionCLIP (multimodal embeddings)

TrOCR (handwriting recognition)

OpenCV (image preprocessing)

Backend

Flask API

Python

Database

ChromaDB Vector Database

Other Tools

Google Colab (Linux GPU environment)

Google Drive dataset storage

📂 Project Capabilities
🔎 Text Search

Search jewelry using natural language.

Example:

gold pearl necklace

🖼️ Image Search

Upload an image to find visually similar jewelry.

✍️ Handwritten Search

Upload handwritten text → OCR extracts query → results returned.

✏️ Sketch Search

Upload a hand-drawn sketch to find matching designs.

📡 API Endpoints
Text Search
POST /textSearch
Body: { "query": "gold necklace" }

Image Search
POST /imageSearch
Form-data: file=<image>

Handwriting Search
POST /handwritingSearch
Form-data: file=<image>

Sketch Search
POST /drawingSearch
Form-data: file=<image>

⚙️ Setup & Installation
1️⃣ Install Dependencies
pip install transformers==4.37.2
pip install fashion-clip
pip install chromadb
pip install flask flask-cors pillow opencv-python

2️⃣ Mount Google Drive (Colab)
from google.colab import drive
drive.mount('/content/drive')

3️⃣ Run the Server
python app.py

📊 Dataset

Jewelry image dataset stored in Google Drive and indexed into ChromaDB for vector retrieval.

👨‍💻 My Contributions

Built multimodal embedding pipeline using FashionCLIP

Implemented vector similarity search with ChromaDB

Developed OCR pipeline for handwritten queries

Built Flask REST APIs for multimodal search

Designed metadata indexing and retrieval workflow

Enabled cloud-based deployment using Google Colab

🤝 Acknowledgements

Special thanks to:

Kishore R (teammate & collaborator)

Mentors at Navigate Labs for guidance and support

🔮 Future Improvements

Frontend deployment & mobile optimization

Add reranking for improved semantic relevance

Expand dataset & categories

Deploy scalable cloud backend

Add user personalization & recommendations

⭐ Project Impact

This project demonstrates real-world applications of:

✔ Multimodal AI
✔ Semantic Search
✔ Vector Databases
✔ AI-powered E-commerce Discovery