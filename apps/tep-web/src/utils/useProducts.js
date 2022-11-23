import { client } from './sanityClient'

const getCustomProducts = async ({
  id = null,
  status = true,
  ofter = false,
  type = null,
  brand = null,
  genre = null,
  asc = null,
  desc = null,
}) => {
  let query = `*[_type == "product"`

  if (id) {
    query += ` && _id == "${id}"`
  }
  if (status) {
    query += ` && status == ${status}`
  }
  if (ofter) {
    query += ` && ofter == ${ofter}`
  }
  if (type) {
    query += ` && references('${type}')`
  }
  if (brand) {
    query += ` && references('${brand}')`
  }
  if (genre) {
    query += ` && genre == "${genre}"`
  }

  query += `]`

  if (asc) {
    query += ` | order(_createdAt asc)`
  }
  if (desc) {
    query += ` | order(_createdAt desc)`
  }

  const result = await client.fetch(query)
  return result
}

const getProducts = async () => {
  const query = `*[_type == "product" && status == true] | order(_id) [0...12]`
  const result = await client.fetch(query)

  return result
}

const getProductsByBrand = brand => {
  const query = `*[_type == "product" && status == true && references('${brand}')] | order(_id) [0...12]`
  const result = client.fetch(query)

  return result
}

const getTotalProducts = async id => {
  const query = `count(*[_type == "product" && status == true && references('${id}')])`
  const result = await client.fetch(query)

  return result
}

export { getCustomProducts, getProducts, getProductsByBrand, getTotalProducts }
