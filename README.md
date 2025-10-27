# DevOps Project

This project demonstrates a complete DevOps pipeline for a Node.js application deployed to Azure Kubernetes Service (AKS) using Terraform, Ansible, Docker, and GitHub Actions.

## Project Structure

- `index.js`: Simple Express.js application
- `Dockerfile`: Docker configuration for containerizing the app
- `terraform/`: Infrastructure as Code for Azure resources
- `ansible/`: Configuration management playbook
- `k8s/`: Kubernetes deployment and service manifests
- `.github/workflows/`: CI/CD pipeline configuration

## Prerequisites

- Git
- Node.js and npm
- Docker
- Terraform
- kubectl
- Azure CLI
- Helm
- Ansible
- GitHub CLI
- Jenkins (optional)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd devops-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build and run locally:
   ```bash
   docker build -t devops-app .
   docker run -p 3000:3000 devops-app
   ```

4. Deploy infrastructure with Terraform:
   ```bash
   cd terraform
   terraform init
   terraform plan
   terraform apply
   ```

5. Configure Kubernetes with Ansible:
   ```bash
   cd ansible
   ansible-playbook playbook.yml
   ```

## CI/CD Pipeline

The project includes a GitHub Actions workflow that:
- Builds and tests the application
- Builds and pushes Docker images to Azure Container Registry
- Deploys to AKS

## Monitoring and Logging

- Application logs are available via kubectl
- Azure Monitor can be configured for additional insights

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and test
4. Submit a pull request

## License

This project is licensed under the MIT License.

# DevOps Pipeline Enhancement

## Recent Updates
- Enhanced CI/CD pipeline with automated testing
- Improved infrastructure provisioning with Terraform
- Added comprehensive monitoring and logging

# Final Project Enhancements

## Project Completion Status
- ✅ Complete DevOps pipeline implementation
- ✅ GitHub Actions CI/CD workflow
- ✅ Docker containerization
- ✅ Kubernetes deployment manifests
- ✅ Terraform infrastructure as code
- ✅ Ansible configuration management

# Pull Request Demonstration

## Git Workflow Showcase

### Branching Strategy
- Feature branches for new developments
- Main branch for production-ready code
- Proper branch naming conventions (feature/, bugfix/, hotfix/)

### Collaboration Workflow
1. Create feature branch from main
2. Make changes and commit with descriptive messages
3. Push branch to remote repository
4. Create pull request for code review
5. Merge after approval and testing

### Current Demonstration
- Created `feature/git-workflow-demo` branch
- Demonstrating proper Git workflow with branching and collaboration
- Ready for pull request creation and merge process
"# Smart_Weather_App" 
