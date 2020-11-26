import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const blogPosts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "Do MMMM , YYYY")
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {blogPosts.allContentfulBlogPost.edges.map(element => {
            return (
              <li key={element.node.title} className={blogStyles.post}>
                <Link to={element.node.slug}>
                  <h2>{element.node.title}</h2>
                  <p>{element.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}
export default BlogPage
