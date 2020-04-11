import AuthorHomePage from './pages/AuthorHome'

export const AuthorRoutes = [
    {
        path: '/authors',
        component: AuthorHomePage
        // children: [
        //     {
        //         path: '/',
        //         component: AuthorHomePage
        //     },
        //     {
        //         path: '/:id',
        //         // component: AuthorSinglePage
        //     },
        // ]
    }
]