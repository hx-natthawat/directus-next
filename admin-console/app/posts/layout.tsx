import PostsLayout from "./PostsLayout"

// This is a Server Component
export default function Layout({ children }) {
  return <PostsLayout>{children}</PostsLayout>
}
