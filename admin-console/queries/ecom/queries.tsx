import fetchData from "../../helpers/fetchData"

export const getProducts = async () => {
  const data = await fetchData(
    `
      query GetPublishedProducts {
        products (filter: { status: {_eq: "published" }}) {
          id
          sku
          title
          description
          price
          featured_image {
            id
          }
          status
        }
      }
    `,
    {
      variables: {},
    }
  )

  return data.data.products
}
