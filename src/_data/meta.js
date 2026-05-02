export const url = process.env.URL || 'http://localhost:8080';
export const siteName = 'Malmö Orienteringsklubb';
export const siteDescription = 'Malmös bästa orienteringsklubb!';
// Extract domain from `url`
export const domain = new URL(url).hostname;
export const siteType = 'SportsOrganization'; // schema
export const locale = 'sv_SE';
export const lang = 'sv';
export const skipContent = 'Hoppa till innehåll';
export const author = {
  name: 'Malmö Orienteringsklubb',
  avatar: '/avatar.webp', // path to the author's avatar.
  email: 'info@mok.nu',
  website: 'https://mok.nu',
  fediverse: ''
};
export const creator = {
  name: 'Malmö Orienteringsklubb',
  email: 'info@mok.nu',
  website: 'https://mok.nu',
  mastodon: '',
  x: ''
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#0089BD'; // MOK blue
export const themeLight = '#F7F3EC'; // warm off-white (dag i Bokskogen)
export const themeDark = '#0E1210'; // near black (natt i Bokskogen)
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt = 'Malmö Orienteringsklubb — Malmös bästa orienteringsklubb!';
export const blog = {
  // RSS feed
  name: 'Malmö Orienteringsklubb',
  description: 'Nyheter och händelser från Malmö OK.',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [{
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Tagg',
  tagPlural: 'Taggar',
  tagMore: 'Fler taggar:',
  // pagination
  paginationLabel: 'Inlägg',
  paginationPage: 'Sida',
  paginationPrevious: 'Föregående',
  paginationNext: 'Nästa',
  paginationNumbers: true
};
export const details = {
  aria: 'sektionskontroller',
  expand: 'expandera alla',
  collapse: 'fäll ihop alla'
};
export const dialog = {
  close: 'Stäng',
  next: 'Nästa',
  previous: 'Föregående'
};
export const navigation = {
  navLabel: 'Meny',
  ariaTop: 'Huvudmeny',
  ariaBottom: 'Kompletterande',
  ariaPlatforms: 'Plattformar',
  drawerNav: true,
  subMenu: true
};
export const themeSwitch = {
  title: 'Tema',
  light: 'ljust',
  dark: 'mörkt'
};
export const greenweb = {
  // https://carbontxt.org/
  disclosures: [{
    docType: 'sustainability-page',
    url: `${url}/sustainability/`,
    domain: domain
  }],
  services: [{ domain: 'netlify.com', serviceType: 'cdn' }]
};
export const tests = {
  pa11y: {
    // keep customPaths empty if you want to test all pages
    customPaths: ['/'],
    globalIgnore: []
  }
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: true,
  infoText: 'Visa denna sida på GitHub',
  issuesPage: 'Rapportera tillgänglighetsproblem'
};
export const easteregg = false;
