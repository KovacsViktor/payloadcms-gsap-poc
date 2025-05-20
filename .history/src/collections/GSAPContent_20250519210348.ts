import { CollectionConfig } from 'payload/types';

const GSAPContent: CollectionConfig = {
  slug: 'gsap-content',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'A title for this content section',
      },
    },
    {
      name: 'paragraphs',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 3,
      admin: {
        description: 'Add up to 3 paragraphs for the GSAP content',
      },
      fields: [
        {
          name: 'content',
          type: 'textarea',
          required: true,
          admin: {
            description: 'The paragraph content',
          },
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          admin: {
            description: 'The display order of this paragraph (1-3)',
          },
          min: 1,
          max: 3,
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this content set is currently active',
      },
    },
  ],
  timestamps: true,
};

export default GSAPContent; 