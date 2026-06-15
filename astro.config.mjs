// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// FeltnerAI is served from the apex domain feltner.org, so the base path is root.
export default defineConfig({
  site: 'https://feltner.org',
  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: 'FeltnerAI',
      description:
        'FeltnerAI is a private, self-hosted chat server for OpenAI-compatible providers, with desktop, web, and mobile clients.',
      logo: {
        src: './src/assets/logo.png',
        replacesTitle: false,
      },
      favicon: '/favicon.ico',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/FeltnerAI/FeltnerAI',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/FeltnerAI/feltner.org/edit/main/',
      },
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      components: {
        // Add a "Downloads" link to the header next to the social icons.
        SocialIcons: './src/components/SocialIcons.astro',
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://feltner.org/icon.png' },
        },
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Overview', link: '/docs/' },
            { label: 'Quick Start', link: '/docs/quick-start/' },
            { label: 'How It Works', link: '/docs/how-it-works/' },
          ],
        },
        {
          label: 'Server',
          items: [
            { label: 'Set Up a Server', link: '/docs/server/setup/' },
            { label: 'Configure Providers', link: '/docs/server/providers/' },
            { label: 'Deployment', link: '/docs/server/deployment/' },
            { label: 'Backups & Data', link: '/docs/server/backups/' },
          ],
        },
        {
          label: 'API',
          items: [
            { label: 'OpenAI Compatibility', link: '/docs/api/openai-compatible/' },
            { label: 'API Reference', link: '/docs/api/reference/' },
          ],
        },
      ],
    }),
  ],
});
