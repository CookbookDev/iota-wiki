/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  docs: [
    {
      type: 'doc',
      id: 'welcome',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting-started/rust', 'getting-started/wasm'],
    },
    {
      type: 'category',
      label: 'Explanations',
      items: [
        'explanations/decentralized-identifiers',
        'explanations/verifiable-credentials',
        'explanations/verifiable-presentations',
        'explanations/about-alias-outputs',
      ],
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        {
          type: 'category',
          label: 'Decentralized Identifiers (DID)',
          items: [
            'how-tos/decentralized-identifiers/create',
            'how-tos/decentralized-identifiers/update',
            'how-tos/decentralized-identifiers/resolve',
            'how-tos/decentralized-identifiers/delete',
          ],
        },
        {
          type: 'category',
          label: 'Verifiable Credentials',
          items: [
            'how-tos/verifiable-credentials/create',
            'how-tos/verifiable-credentials/revocation',
            'how-tos/verifiable-credentials/selective-disclosure',
            'how-tos/verifiable-credentials/zero-knowledge-selective-disclosure',
          ],
        },
        {
          type: 'category',
          label: 'Verifiable Presentations',
          items: ['how-tos/verifiable-presentations/create-and-validate'],
        },
        {
          type: 'category',
          label: 'Domain Linkage',
          items: ['how-tos/domain-linkage/create-and-verify'],
        },
        'how-tos/key-storage',
      ],
    },
    {
      type: 'category',
      label: 'References',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'API',
          items: [
            {
              type: 'category',
              label: 'Wasm',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'references/wasm',
                },
              ],
            },
            {
              type: 'link',
              label: 'Rust',
              href: 'https://docs.rs/identity_iota/latest/identity_iota/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Specifications',
          items: [
            'references/specifications/overview',
            'references/specifications/iota-did-method-spec',
            'references/specifications/revocation-bitmap-2022',
            'references/specifications/revocation-timeframe-2024',
          ],
        },
      ],
    },
    'glossary',
    'contribute',
    'workflow',
    'contact',
    'faq',
  ],
};
