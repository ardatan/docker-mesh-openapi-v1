import { defineConfig } from '@graphql-mesh/compose-cli';
import { loadOpenAPISubgraph } from '@omnigraph/openapi';
export const composeConfig = defineConfig({
    subgraphs: [
        {
            sourceHandler: loadOpenAPISubgraph('petstore', {
                source: 'https://petstore3.swagger.io/api/v3/openapi.json',
                endpoint: 'https://petstore3.swagger.io/api/v3'
            })
        }
    ]
})