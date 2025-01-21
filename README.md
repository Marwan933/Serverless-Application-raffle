# Project Overview

This Serverless Application project focuses on creating a scalable and secure API-based cloud infrastructure using AWS services. The architecture utilizes DynamoDB for database storage, AWS Lambda for serverless function execution, and API Gateway for managing API endpoints. Security and availability are prioritized through Route 53 for DNS management and ACM for SSL certification. The front end is hosted as a static website on S3, with CloudFront providing CDN support for improved performance and reliability.

# Purpose
The primary aim of this project is to build an efficient, serverless environment that automates API-based interactions and allows for seamless data retrieval and storage. DynamoDB serves as the backend storage with email as the partition key to interact efficiently with Lambda functions. API Gateway facilitates routing, enabling a structured setup for invoking Lambda functions. This infrastructure ensures smooth deployment and a robust API layer with HTTPS support for secure access
