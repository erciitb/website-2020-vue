// export constants from here -> like categories, event names, navbar names and their respective links

// for json server
export const JSON_SERVER = 'http://127.0.0.1:3000/'

export const QUERY_LINKS = {
  TEAMS: JSON_SERVER + 'teams/'
}

// for the router
export const routeOptions = [
  {
    path: '/',
    displayName: 'Home',
    componentFolder: 'Home',
    componentName: 'Home'
  },
  {
    path: '/events',
    displayName: 'Events',
    componentFolder: 'Events',
    componentName: 'EventsMain'
  },
  {
    path: '/projects',
    displayName: 'Projects',
    componentFolder: 'Projects',
    componentName: 'ProjectsMain'
  },
  {
    path: '/team-details',
    displayName: 'Team Details',
    componentFolder: 'Team Details',
    componentName: 'TeamDetails'
  },
  // redirects
  {
    path: '/home',
    redirect: '/'
  },
  // if link not found -> redirecting to home
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]
