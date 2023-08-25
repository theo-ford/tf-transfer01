import React, { useRef, useState, useEffect } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { withPreview } from "gatsby-source-prismic";
import { ImageOrientation } from "../components/utils/image-orientation";
import { Helmet } from "react-helmet";
import "../components/styles/index.css";
import { useMediaQuery } from "../components/tf/media-query";
// import Icon from "../../assets/WhiteLogo.svg";
import Slider from "react-slick";

import { useOnScreen } from "../components/hooks/useOnScreen";
import ReactPlayer from "react-player";
import Icon from "../../assets/G4C_kern_black.svg";

import { AnimationFixed1 } from "../components/tf/animation-fixed-1";
import { VideoComponent } from "../components/tf/zz/video_component_with_controls";
import { VideoComponentNoControls } from "../components/tf/zz/video-component-no-controls";

import { Nav } from "../components/tf/nav";
import { TwoImg } from "../components/tf/index_archive/two-img";
import { FourImg } from "../components/tf/index_archive/four-img";
import { TwoVid } from "../components/tf/index_archive/two-vid";
import { ProjectInfo } from "../components/tf/index_archive/project-info";
import { Statement } from "../components/tf/index_archive/statement";
import { Intro } from "../components/tf/index_archive/intro";
import { SizzleVidComponent } from "../components/tf/index_archive/sizzle-vid";
import { Contents } from "../components/tf/index_archive/contents";
// import Plyr from "plyr";
// import "plyr/dist/plyr.css";

// import "../components/plyr-master/src/js/plyr.js";
// import Plyr from "plyr-react";
// import "plyr-react/dist/plyr.css";
// import "plyr/src/js/plyr.js";
// import plyr from "plyr";

const Grid16 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 8 */ 1fr 1fr 1fr 1fr /* 12 */ 1fr 1fr 1fr 1fr /* 16 */;
  /* width: calc(100% - 20px); */
  grid-column-gap: 10px;

  @media (max-width: 666px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 5px;
  }
`;

const ProjectsCon = styled.div`
  float: left;
  width: 100%;
`;

const PageContentCon = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  overflow: hidden;
`;

const Index = ({ data }) => {
  return (
    <>
      <p>{data.prismicAbout.data.about_text.text}</p>
    </>
  );
};

export default withPreview(Index);

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
  }
`;
