import { IoBeerSharp } from "react-icons/io5"

export default {
  name: 'product',
  title: 'Produto',
  type: 'document',
  icon: IoBeerSharp,
  fields: [
    {
      name: "title",
      title: "Chope",
      type: "string",
    },
    {
      name: "litragem",
      title: "Litragem",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Imagem",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Categoria",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "price",
      title: "Preço",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],
};
