/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "./layout"
import Title from "./title"
import Listing from "./listing"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useSiteMetadata()

  return (
    <Layout>
      <Helmet>
        <meta name="google-site-verification" content="hIdo6HHM8tymhgN-oypnHeqoXRCJv2ePtaSW1ZCEgAQ" />
      </Helmet>
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
    </Layout>
  )
}

export default Homepage
