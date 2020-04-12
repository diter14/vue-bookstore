import AuthorHomePage from './pages/AuthorHome'
import AuthorCreatePage from './pages/AuthorCreate'
import AuthorEditPage from './pages/AuthorEdit'


export const AuthorRoutes = [
    {
        path: '/authors',
        name: 'author_home',
        component: AuthorHomePage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/authors/create',
        name: 'author_create',
        component: AuthorCreatePage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/authors/:id/edit',
        name: 'author_edit',
        component: AuthorEditPage,
        meta: {
            requiresAuth: true
        }
    },
]