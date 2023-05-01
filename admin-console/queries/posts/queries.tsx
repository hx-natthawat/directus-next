import fetchData from "../../helpers/fetchData"

export const getPosts = async () => {
  const data = await fetchData(
    `
      query HomepagePosts {
        posts (filter: { status: {_eq: "published" }}) {
          id
          title
          body
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

  return data.data.posts
}
