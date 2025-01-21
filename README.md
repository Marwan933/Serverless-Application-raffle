# Project Overview

This Serverless Application project focuses on creating a scalable and secure API-based cloud infrastructure using AWS services. The architecture utilizes DynamoDB for database storage, AWS Lambda for serverless function execution, and API Gateway for managing API endpoints. Security and availability are prioritized through Route 53 for DNS management and ACM for SSL certification. The front end is hosted as a static website on S3, with CloudFront providing CDN support for improved performance and reliability.

# Purpose
The primary aim of this project is to build an efficient, serverless environment that automates API-based interactions and allows for seamless data retrieval and storage. DynamoDB serves as the backend storage with email as the partition key to interact efficiently with Lambda functions. API Gateway facilitates routing, enabling a structured setup for invoking Lambda functions. This infrastructure ensures smooth deployment and a robust API layer with HTTPS support for secure access

# Steps
## 1. create Dynamodb 

 - Dynamodb is a Serverless DB that is Fully managed by AWS, Using NoSQL, purpose-built to deliver improved performance, scalability, manageability, and flexibility compared to traditional relational databases, when you create a table you must specify a primary key

1- I have created DB using Dynamodb services in AWS, And email is the primary key so I can receive The data from the lambda function.

 with Additional settings:

 <img width="901" alt="dynamo-db-create" src="https://github.com/user-attachments/assets/1a57280d-2813-43f1-821b-24acd3aacbae" />

and then,

<img width="891" alt="dynamo-create-2" src="https://github.com/user-attachments/assets/a91ff527-3540-4511-8fe3-da0308660325" />

# finally,

<img width="916" alt="dynam03-done" src="https://github.com/user-attachments/assets/f0f7be23-656f-44f5-b613-e718232395cf" />

---

 ## 2.create Lambda Function
 - Lambda Function is a serverless like dynamodb fully managed by AWS, Lambda can only run like other functions when you call/trigger it, so you pay-as-you-go, Lambda scales automatically

   
