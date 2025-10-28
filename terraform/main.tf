terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

# Resource Group
resource "azurerm_resource_group" "devops_rg" {
  name     = "devops-rg"
  location = "Southeast Asia"
}

# Azure Container Registry Placeholder (using Docker Hub due to Azure restrictions)
resource "null_resource" "acr_placeholder" {
  provisioner "local-exec" {
    command = "echo 'Docker Hub used instead of Azure ACR due to subscription policy.'"
  }
}

# App Service Plan Placeholder (simulated due to Azure restrictions)
resource "null_resource" "appservice_plan_placeholder" {
  provisioner "local-exec" {
    command = "echo 'App Service Plan simulated successfully.'"
  }
}

# Web App Placeholder (simulated due to Azure restrictions)
resource "null_resource" "appservice_placeholder" {
  provisioner "local-exec" {
    command = "echo 'Azure App Service simulated successfully.'"
  }
}
