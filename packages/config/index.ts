export const siteConfig = {
  name: 'Oak Hill Settlement',
  description: 'Homeowner Resources for Oak Hill Settlement',
  url: 'https://oakhillsettlement.homes',
  subdomains: {
    owners: {
      name: 'Oak Hill Settlement Homeowners',
      description: 'Independent community hub for Oak Hill Settlement homeowners. By homeowners, for homeowners.',
      url: 'https://owners.oakhillsettlement.homes',
      port: 3000,
    },
    recall: {
      name: 'Recall the Board',
      description: 'Campaign to organize homeowner recall votes for board accountability',
      url: 'https://recall.oakhillsettlement.homes',
      port: 3001,
    },
  },
};

export type SiteConfig = typeof siteConfig;

// Export HOA context
export { hoaContext } from './hoa-context';
export type { HOAContext } from './hoa-context';

