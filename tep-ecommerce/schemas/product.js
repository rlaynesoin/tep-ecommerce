export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'ofter',
      title: 'Ofter',
      type: 'boolean',
    },
    {
      name: 'priceofter',
      title: 'Price ofter',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'boolean',
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brands' }],
    },
    {
      name: 'types',
      title: 'Types',
      type: 'reference',
      to: [{ type: 'types' }],
    },
  ],
}
