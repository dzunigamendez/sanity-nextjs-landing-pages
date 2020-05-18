export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec20605123405fd0302d049',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cf8h8vf7',
                  apiId: '3a83a7d3-f0b9-404f-8298-18c1226e3839'
                },
                {
                  buildHookId: '5ec206052723aad27da5eb16',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r92hwexx',
                  apiId: 'b5aa88dd-9664-4a9d-bde7-d71d9b94f9a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dzunigamendez/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r92hwexx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
