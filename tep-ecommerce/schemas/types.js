export default {
  name: 'types',
  title: 'Tipos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Detalle',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Estado',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
