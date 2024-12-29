<h2>Abdul Basit (21F-9127) - Sadeed (21F-9198) - Saad (21F-9079)</h2>
<img src="https://github.com/user-attachments/assets/f9562aa1-9137-4019-a3c4-b67c0c0d2187">
<img src="https://github.com/user-attachments/assets/4dca3095-43e7-493e-92ae-640e4b32dd5f">
<img src="https://github.com/user-attachments/assets/9b37d21b-b48a-47b9-b4f9-052c9e86afce">




### Deployment Workflow of the "stooore" MERN Project on AWS

#### **Step 1: Dockerizing the Application**
We start by Dockerizing our MERN stack application. This involves:
- Creating Dockerfiles for both the frontend (React.js) and backend (Node.js, Express) components of our application.
- These Dockerfiles contain instructions to build Docker images that encapsulate our application along with its environment.

#### **Step 2: Pushing Images to Amazon ECR**
- We build Docker images for our frontend and backend on our local machine.
- We then push these images to Amazon Elastic Container Registry (ECR), which is a managed Docker container registry service provided by AWS. This makes the images accessible for deployment on any service that can pull Docker images from ECR.

#### **Step 3: Provisioning Infrastructure with Terraform**
- Using Terraform, we define the required AWS resources in code (Infrastructure as Code), including:
  - Amazon EKS (Elastic Kubernetes Service) cluster: This service runs our Kubernetes control plane.
  - Related networking resources like VPC, subnets, and security groups needed for the EKS cluster to operate within our AWS environment.
- We execute Terraform scripts to provision these resources on AWS, setting up the necessary environment where our application will run.

#### **Step 4: Deploying with Helm**
- With our infrastructure ready, we then use Helm, the package manager for Kubernetes, to manage the deployment of our application onto the Kubernetes cluster.
- We prepare Helm charts for our application, which describe how our application is structured, how different components are deployed, and how they interact.
- These Helm charts reference the Docker images stored in ECR and manage the deployment of these images to the Kubernetes cluster created by Terraform.

#### **Step 5: Managing and Scaling the Application**
- Once deployed, Kubernetes, managed through Amazon EKS, handles the scaling and management of our application, ensuring it runs as expected.
- Helm allows us to update the deployment configurations as needed without needing to directly modify the running pods and services in Kubernetes.

### Summary
This entire process integrates these technologies to leverage the strengths of each:
- **Docker** provides a consistent environment for our application, eliminating the "it works on my machine" problem.
- **ECR** securely stores our Docker images and integrates seamlessly with other AWS services.
- **Terraform** automates the creation and configuration of all required infrastructure, making the setup reproducible and scalable.
- **Helm** simplifies the management of our application deployment on Kubernetes, providing an easy way to deploy, scale, and manage applications.
- **Kubernetes/EKS** offers robust, scalable management of containerized applications, handling complex tasks like load-balancing, scaling, and system resiliency natively.

This streamlined workflow provides a scalable, maintainable, and efficient way for us to deploy and manage our "stooore" application in the AWS cloud environment.
