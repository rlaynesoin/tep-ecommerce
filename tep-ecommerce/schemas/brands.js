export default {
  name: 'brands',
  title: 'Marcas',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
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
      name: 'details',
      title: 'Detalles',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Estado',
      type: 'boolean',
    },
  ],
}
