import { client } from './sanityClient'

const getCustomBrands = async ({
  id = null,
  status = true,
  asc = null,
  desc = null,
}) => {
  let query = `*[_type == "brands"`

  if (id) {
    query += ` && _id == "${id}"`
  }
  if (status) {
    query += ` && status == ${status}`
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

export default getCustomBrands
