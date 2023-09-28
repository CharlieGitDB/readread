param repoUrl string
param location string

resource readreadswa 'Microsoft.Web/staticSites@2021-01-15' = {
  name: 'readread'
  location: location
  tags: null
  properties: {
    branch: 'main'
    repositoryUrl: repoUrl
    buildProperties: {
      appBuildCommand: 'npm run build'
      appLocation: 'app'
      appArtifactLocation: 'app/dist'
      outputLocation: 'app/dist'
    }
  }
  sku: {
    name: 'Free'
    capacity: 1
  }
}

output staticWebAppUrl string = readreadswa.properties.defaultHostname
