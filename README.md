# 🎨 VisualizerAI – Python Natural Language Visualization Library

A Python library that enables **natural language–driven data visualization**, allowing developers and researchers to generate plots directly from plain text queries.

---

### ✨ Features
- Generate plots using plain English descriptions  
- Automatically detects chart type, colors, and style  
- Minimal code for powerful visualizations  

---

### 🧠 Tech Stack
- **Python**, **Matplotlib**, **NLP (spaCy / Transformers)**  
- **PyPI** packaging  

---

### 🚀 Installation
```bash
pip install VisualizerAIfrom visualizerai import VisualizerAI

viz = VisualizerAI()
viz.plot("Plot monthly sales data as a red line graph")

