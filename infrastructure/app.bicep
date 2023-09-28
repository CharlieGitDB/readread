param repoUrl string

resource swa_resource 'Microsoft.Web/staticSites@2021-01-15' = {
    name: 'readread' 
    tags: null
    properties: {
        branch: 'main',
        repositoryUrl: repoUrl,
        buildProperties: {
            appLocation: './',
            outputLocation: './output'
        }
    }
}