import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
 import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

const Index = ({ data }) => {
  return (
    <>
      <p>TF Transfer 01 - GitHub Clone 2023.10.12 15:40 1.0</p>
      {/* <p>{data.prismicAbout.data.about_text.text}</p> */}
    </>
  );

}


export default withPrismicPreview(Index);

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
