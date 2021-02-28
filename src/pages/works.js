import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Tag,
  ContainerLayout,
  WorkPost,
  Category,
  Intro,
  SubTitle,
  Title,
  Text,
} from "../components/common"

const WorkIndex = ({ data }) => {
  const works = data.allMarkdownRemark.edges
  // const works = data.allFile.nodes
  console.log(works)

  return (
    <>
      <Layout>
        <SEO title="Gallery" />
        <Intro>
          <ContainerLayout>
            <SubTitle className="text-dark">personal work</SubTitle>

            <ContainerLayout className="wrapper">
              {works.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug

                return (
                  <WorkPost key={node.fields.slug}>
                    <div className="content">
                      <header>
                        <Category>{node.frontmatter.category}</Category>
                        <Title>
                          <Link
                            className="text-primary lined-link"
                            style={{ boxShadow: `none` }}
                            to={node.fields.slug}
                          >
                            {title}
                          </Link>
                        </Title>
                      </header>
                      <Text
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                      <div>
                        {node.frontmatter.tags.map((tag, index) => (
                          <Tag key={index}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                    <div className="media">
                      <div className="image-wrapper">
                        <Link to={node.fields.slug}>
                          <Img
                            fluid={node.frontmatter.image.childImageSharp.fluid}
                            title="work title"
                            imgStyles={{
                              objectPosition: "center",
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                  </WorkPost>

                  /* <WorkPost>
                    <div className="content">
                      <header>
                       
                        <Title>
                         
                          ii
                        </Title>
                      </header>
                      <Text
                       
                        uu
                      />
                      <div>
                     
                        ee
                      </div>
                    </div>
                    <div className="media">
                      <div className="image-wrapper">
                      
                        <Img
                          fluid={node.childImageSharp.fluid}
                          imgStyle={{
                            objectFit: "scale-down",
                            maxHeight: "450px",
                            objectPosition: "center",
                           
                          }}
                        />
                      </div>
                    </div>
                  </WorkPost> */
                )
              })}
            </ContainerLayout>
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

export default WorkIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/^(?=.*works)(?=.*original)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxHeight: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            category
            description
          }
        }
      }
    }
  }
`

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allFile(filter: { sourceInstanceName: { eq: "images" } }) {
//       nodes {
//         relativePath
//         name
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//             src
//           }
//           id
//         }
//       }
//     }
//   }
// `
