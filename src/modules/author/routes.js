import AuthorHomePage from './pages/AuthorHome'
import AuthorCreatePage from './pages/AuthorCreate'

// const AuthorEditPage = { template: '<div>Edit Page</div>' }

export const AuthorRoutes = [
    {
        path: '/authors',
        component: AuthorHomePage,
        // children: [
            // {
            //     path: 'create',
            //     component: AuthorCreatePage
            // },
            // {
            //     path: 'edit',
            //     component: AuthorEditPage
            // },
        //     {
        //         path: '/:id',
        //         // component: AuthorSinglePage
        //     },
        // ]
    },
    {
        path: '/authors/create',
        component: AuthorCreatePage
    },
]