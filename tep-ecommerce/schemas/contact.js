export default {
  name: 'contact',
  title: 'Contacto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo',
      type: 'string',
    },
    {
      name: 'detail',
      title: 'Detalle',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Telefono',
      type: 'array',
      of: [{ type: 'number' }],
    },
    {
      name: 'extension',
      title: 'Extención',
      type: 'number',
    },
    {
      name: 'urlFB',
      title: 'URL FB',
      type: 'string',
    },
    {
      name: 'nameFB',
      title: 'Nombre del FB',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Correo',
      type: 'string',
    },
    {
      name: 'state',
      title: 'Provincia',
      type: 'string',
    },
    {
      name: 'district',
      title: 'Canton',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Dirección',
      type: 'string',
    },
  ],
}
