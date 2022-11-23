import { client } from './sanityClient'

const getCustomContact = async ({
  id = null,
  status = true,
  asc = null,
  desc = null,
}) => {
  let query = `*[_type == "contact"`

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

const getContacts = async () => {
  const query = `*[_type == "contact"] | order(_id) [0...12]`
  const result = await client.fetch(query)

  return result
}

export { getCustomContact, getContacts }
