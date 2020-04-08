

export const AuthorRoutes = [
    {
        path: '/author',
        children: [
            {
                path: '/',
                // component: AuthorHomePage
            },
            {
                path: '/:id',
                // component: AuthorSinglePage
            },
        ]
    }
]