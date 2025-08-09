import { builder, Builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Register the settings

// Design Tokens
// Design tokens are used to define the look and feel of your application.
// They can be used to define the colors, fonts, spacing, and other design elements.
/*
styleStrictMode - A boolean value that determines whether the builder should enforce strict mode.
designTokensOptional - A boolean value that determines whether design tokens are optional.
designTokens - An object that defines the design tokens for the application.
*/

Builder.register("editor.settings", {
  styleStrictMode: false,
  designTokensOptional: true,
  designTokens: {
    /* === Colors (applies to any color picker in the Style tab) === */
    colors: [
      { name: 'Primary', value: 'var(--primary, #0077cc)' },
      { name: 'Primary / Light', value: 'var(--primary-light, #e6f0fa)' },
      { name: 'Primary / Dimmed', value: 'var(--primary-dimmed, rgba(0, 119, 204, 0.15))' },
      { name: 'Secondary', value: 'var(--secondary, #00bfa6)' },
      { name: 'Accent', value: 'var(--accent, #ff7043)' },

      { name: 'Success', value: 'var(--success, #4caf50)' },
      { name: 'Warning', value: 'var(--warning, #ffb300)' },
      { name: 'Error', value: 'var(--error, #d32f2f)' },

      { name: 'Black', value: 'var(--black, #222222)' },
      { name: 'Grey / Dark', value: 'var(--grey-dark, #666666)' },
      { name: 'Grey', value: 'var(--grey, #cccccc)' },
      { name: 'Grey / Light', value: 'var(--grey-light, #f5f5f5)' },
      { name: 'White', value: 'var(--white, #ffffff)' }
    ],

    /* === Typography === */
    fontFamily: [
      {
        name: 'System Sans',
        value:
          'var(--font-primary, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif)'
      },
      {
        name: 'System Serif',
        value: 'var(--font-secondary, Georgia, "Times New Roman", serif)'
      }
    ],
    fontSize: [
      { name: 'Base', value: 'var(--font-size-base, 1rem)' },
      { name: 'Small', value: 'var(--font-size-small, 0.875rem)' },
      { name: 'Large', value: 'var(--font-size-large, 1.25rem)' },
      { name: 'H1', value: 'var(--font-size-h1, 2.5rem)' },
      { name: 'H2', value: 'var(--font-size-h2, 2rem)' },
      { name: 'H3', value: 'var(--font-size-h3, 1.5rem)' },
      { name: 'H4', value: 'var(--font-size-h4, 1.25rem)' }
    ],
    fontWeight: [
      { name: 'Regular', value: 'var(--font-weight-regular, 400)' },
      { name: 'Bold', value: 'var(--font-weight-bold, 700)' }
    ],
    lineHeight: [
      { name: 'Normal', value: '1.5' }, // keep simple for boilerplate
      { name: 'Tight', value: '1.25' },
      { name: 'Loose', value: '1.75' }
    ],

    /* === Spacing & Layout === */
    spacing: [
      { name: 'Gutter', value: 'var(--gutter, 20px)' },
      { name: 'Section Padding', value: 'var(--section-padding, 40px)' }
    ],
    maxWidth: [
      { name: 'Content Max', value: 'var(--content-max-width, 1200px)' }
    ],

    /* === Radius & Shadows === */
    borderRadius: [
      { name: 'Default', value: 'var(--border-radius, 4px)' }
    ],
    boxShadow: [
      { name: 'Small', value: 'var(--shadow-small, 0 2px 4px rgba(0,0,0,0.1))' }
    ]
  }
});
