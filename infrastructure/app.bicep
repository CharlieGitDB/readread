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
            appLocation: './'
            outputLocation: './output'
        }
    }
}