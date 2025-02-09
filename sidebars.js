/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // Manually created sidebar
  sdkSidebar: [
    {
      type: 'category',
      label: 'NebulaWeb',
      items: [
        'services/nebulaweb/nebulaweb',
        {
          type: 'category',
          label: 'NebulaWeb Subpages',
          items: [
            'services/nebulaweb/about',
            'services/nebulaweb/struct',
            'services/nebulaweb/email-verification',
            'services/nebulaweb/deployment',
            'services/nebulaweb/deployment-config',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Osana',
      items: [
        'services/osana/osana',
        {
          type: 'category',
          label: 'Osana Subpages',
          items: [
            'services/osana/about',
            'services/osana/deployment',
            'services/osana/codecs',
            'services/osana/configuration',
            'services/osana/runonrepl',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Dispenser',
      items: [
        'services/dispenser/dispenser',
        {
          type: 'category',
          label: 'Dispenser Subpages',
          items: [
            'services/dispenser/deployment',
            'services/dispenser/commands',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Dynamic',
      items: [
        'services/dynamic/dynamic',
        {
          type: 'category',
          label: 'Guides',
          items: [
            'services/dynamic/guides/cli',
            'services/dynamic/guides/configuration',
            {
              type: 'category',
              label: 'Implementation',
              items: [
                'services/dynamic/implementation/Getting-Started',
                'services/dynamic/implementation/Moving-Files',
                'services/dynamic/implementation/Worker-Registration',
                'services/dynamic/implementation/Configuring-Dynamic',
                'services/dynamic/implementation/Final-Touches',
                'services/dynamic/implementation/Summary',
              ],
            },
            {
              type: 'category',
              label: 'Run Dynamic Headless',
              items: [
                'services/dynamic/guides/headless/index',
                'services/dynamic/guides/headless/pm2',
                'services/dynamic/guides/headless/screen',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Information',
          items: [
            'services/dynamic/support',
          ],
        },
        {
          type: 'category',
          label: 'Extra',
          items: [
            'services/dynamic/implementation-examples',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
