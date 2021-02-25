import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Tag,
  ContainerLayout,
  WorkPost,
  PostGrid,
  Category,
  Intro,
  SubTitle,
  Title,
  Text,
} from "../components/common"

const WorkIndex = ({ data }) => {
  const works = data.allFile.nodes
  console.log(works)

  return (
    <>
      <Layout>
        <SEO title="Showcases" />
        <Intro>
          <ContainerLayout>
            <SubTitle className="text-dark">Garally</SubTitle>

            <ContainerLayout className="wrapper">
              {/* <PostGrid>
                {works.map(node => (
                  <div className="image-wrapper">
                    <Img
                      fluid={node.childImageSharp.fluid}
                      title="work title"
                    />
                  </div>
                ))}
              </PostGrid> */}
              {works.map(node => {
                {
                  /* const title = node.frontmatter.title || node.fields.slug */
                  console.log(node)
                }
                return (
                  <WorkPost>
                    <div className="content">
                      <header>
                        {/* <Category>aaa</Category> */}
                        <Title>
                          {/* <Link className="text-primary lined-link" style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                          </Link> */}
                          ii
                        </Title>
                      </header>
                      <Text
                        // dangerouslySetInnerHTML={{
                        //   __html: node.frontmatter.description || node.excerpt,
                        // }}
                        uu
                      />
                      <div>
                        {/* {node.frontmatter.tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))} */}
                        ee
                      </div>
                    </div>
                    <div className="media">
                      <div className="image-wrapper">
                        {/* <Link to={node.fields.slug}>
                          <Img fluid={node.frontmatter.image.childImageSharp.fluid} title="work title" />
                        </Link> */}
                        <Img
                          fluid={node.childImageSharp.fluid}
                          title="work title"
                          imgStyle={{
                            objectFit: "scale-down",
                            maxHeight: "450px",
                            objectPosition: "center",
                            // boxShadow: "0 17px 56px rgba(125, 127, 129, 0.17)",
                          }}
                        />
                      </div>
                    </div>
                  </WorkPost>
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
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        relativePath
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            src
          }
          id
        }
      }
    }
  }
`
