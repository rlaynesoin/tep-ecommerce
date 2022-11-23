export default {
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Imagen',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Nombre',
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
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'priceSymbol',
      title: 'Moneda',
      type: 'string',
      options: {
        list: ['$', '₡'],
      },
    },
    {
      name: 'details',
      title: 'Detalle',
      type: 'string',
    },
    {
      name: 'ofter',
      title: 'Oferta',
      type: 'boolean',
    },
    {
      name: 'priceofter',
      title: 'Precio oferta',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Estado',
      type: 'boolean',
    },
    {
      name: 'brand',
      title: 'Marca',
      type: 'reference',
      to: [{ type: 'brands' }],
    },
    {
      name: 'types',
      title: 'Tipo',
      type: 'reference',
      to: [{ type: 'types' }],
    },
  ],
}
