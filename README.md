# readread
A RSS feed Reddit client

## Setup
**Prerequisites**
1. An Azure Subscription
2. The az cli installed  

**Secrets Setup**  
You will need to create a service principal to be able to run the Github Actions (CI/CD).  
1. Run in your terminal `az ad sp create-for-rbac --name myApp --role contributor --scopes /subscriptions/{subscription-id} --sdk-auth`
2. Copy the output
3. Go to Settings > Secrets and variables > Actions > New Repository Secret
4. Paste the output into a secret with the value `AZURE_CREDENTIALS`
5. Create a secret called `AZURE_RG` that is the name of your resource group
6. Create a secret called `AZURE_SUBSCRIPTION` that is the value of your subscription id

**Provisioning Environment**  
To create your environment in Azure you will need to run the provision-environment workflow from a manual `workflow_dispatch` kickoff.  When selecting this you will need to choose the region/location that you want to deploy to, and which environment you wish to provision.

## Deleting environment
### WARNING THIS CANNOT BE UNDONE
To remove the environment from Azure you will need to run the teardown-environment workflow from a manual `workflow_dispatch` kickoff.
