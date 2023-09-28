param repoUrl string
@allowed([ 'westus2', 'eastus2', 'centralus', 'westeurope' ])
param location string
param token string

resource readreadswa 'Microsoft.Web/staticSites@2021-01-15' = {
  name: 'readread'
  location: location
  tags: null
  properties: {
    branch: 'main'
    repositoryToken: token
    repositoryUrl: repoUrl
    buildProperties: {
      appBuildCommand: 'npm run build'
      appLocation: './app'
      outputLocation: './app/dist'
    }
  }
  sku: {
    name: 'Free'
    capacity: 1
  }
}

output staticWebAppUrl string = readreadswa.properties.defaultHostname
