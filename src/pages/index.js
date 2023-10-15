import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
 import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

const Index = ({ data }) => {
  const projects = data.allPrismicProject.edges.map(
    (project, index) => {
      console.log("testing")
      return (
        <Link to={project.node.uid}><p>{project.node.data.title.text}</p></Link>
      )
    }
  );
  return (
    <>
      <p>TF Transfer 01 - GitHub Clone 2023.10.12 15:40 1.0</p>
      <p>{data.prismicAbout.data.about_text.text}</p>
      {projects}
    </>
  );

}


export default withPrismicPreview(Index);

export const query = graphql`
  query MyQuery {
    prismicAbout {
      data {
        about_text {
          html
          text
        }
      }
    }
    allPrismicProject {
      edges {
        node {
          data {
            title {
              text
            }
          }
          uid
        }
      }
    }    
  }
`;
