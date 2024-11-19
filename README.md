# DDoS Attack Detection Using Machine Learning

## Overview:-

This project aims to detect Distributed Denial-of-Service (DDoS) attacks using Machine Learning (ML) algorithms. The goal is to classify network traffic as either benign or malicious, helping network administrators identify and mitigate potential DDoS attacks. The project uses the SDN dataset and generates graphs for insights into network traffic behavior and attack types.

The project analyzes traffic based on different protocols, including ICMP, TCP and UDP and uses four machine learning algorithms for classification: K-Nearest Neighbors (KNN), Multi-Layer Perceptron (MLP) and Support Vector Machines (SVM).


## How It Works:-

• **Data Collection**: The SDN dataset containing network traffic data, including normal traffic and attack traffic, is loaded.

• **Preprocessing**: The data is cleaned and preprocessed (handling missing values, feature scaling, etc.).

• **Model Training**: Machine learning models (KNN, MLP, SVM and Random Forest) are trained on the preprocessed data to distinguish between normal traffic and attack traffic.

• **Prediction**: The trained models are used to predict the label of new, unseen traffic (whether it's benign or malicious).

• **Visualization**: The results are visualized using graphs and charts to better understand the network traffic behavior.


## Features:-

• **Traffic Analysis**: Analyzes network traffic to identify patterns that indicate a potential DDoS attack.

• **Protocol-Specific Detection**: Targets attack detection for ICMP, TCP and UDP traffic.

• **Attack Type Identification**: Detects various types of DDoS attacks, including UDP Floods, ICMP Floods, HTTP Floods, SYN Floods and Smurf Attacks.

• **Visualization**: Generates graphs and visualizations to represent network traffic patterns and attack types.


## Algorithms Used:-

• **K-Nearest Neighbors (KNN)**: A simple and effective classification algorithm used for detecting attack types based on the similarity of traffic patterns.

• **Multi-Layer Perceptron (MLP)**: A neural network-based model used to classify complex patterns in network traffic.

• **Support Vector Machine (SVM)**: A powerful algorithm used for classification, particularly for binary classification tasks like normal vs. malicious traffic.

• **Random Forest**: An ensemble learning method used to improve the accuracy of predictions by combining the results from multiple decision trees.


## Technologies Used:-

• **Python**: The primary programming language for data analysis and model development.

• **Machine Learning Algorithms**: Algorithms like KNN, MLP and SVM are used for classification.

• **Pandas**: For data manipulation and cleaning.

• **Scikit-learn**: For machine learning model building and evaluation.

• **Spark**: Used for distributed data processing to handle large datasets.

• **Matplotlib/Seaborn**: For visualizing data and results.

• **React**: For building the frontend interface.

• **Tailwind CSS**: For styling the React frontend.


## Thank You!
