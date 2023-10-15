import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
 import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

const Project = () => {
  return (
    <>
      <p>This is a project</p>

    </>
  );

}


export default withPrismicPreview(Project);

// export const query = graphql`
//   query MyQuery {
//     prismicAbout {
//       data {
//         about_text {
//           html
//           text
//         }
//       }
//     }
//   }
// `;
