export type RouteParam = string | number

export type RouteValue = (id?: RouteParam) => string

export type Routes = keyof typeof routes

const routes = {
  home: '/',
  sharing: (id?: RouteParam) => id ? `/sharing/${id}` : '/sharing',
  shareCategory: (category?: RouteParam, id?: RouteParam) => category && id ?  `/share/${category}/${id}` : '/sharing',
  category: (id?: RouteParam) => id ? `/category/${id}` : '/category',
  tags: (id?: RouteParam) => id ? `/tags/${id}` : '/tags',
  works: (id?: RouteParam) => id ? `/works/${id}` : '/works',
  links: (id?: RouteParam) => id ? `/links/${id}` : '/links',
  notes: (id?: RouteParam) => id ? `/notes/${id}` : '/notes',
  articles: (id?: RouteParam) => id ? `/articles/${id}` : '/notfound',
  editor: '/editor',
  about: '/about',
  login: '/login',
  register: '/register',
  notFond: '/404'
}

export default routes
