param location string
param resourceGroupName string

targetScope = 'subscription'

resource newResourceGroup 'Microsoft.Resources/resourceGroups@2022-09-01' = {
  location: location
  name: resourceGroupName
}