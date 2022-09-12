import { IoGridOutline } from "react-icons/io5"

export default {
  name: 'category',
  title: 'Categoria',
  type: 'document',
  icon: IoGridOutline,

  fields: [
    {
      name: 'title',
      title: 'Tipo de Chope',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
}
