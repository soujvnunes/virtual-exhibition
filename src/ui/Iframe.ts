import styled from "styled-components";

const Iframe = styled.iframe.attrs({
  allow: [
    "accelerometer",
    "autoplay",
    "clipboard-write",
    "encrypted-media",
    "gyroscope",
    "picture-in-picture",
  ].join("; "),
  allowFullScreen: true,
})`
  width: 100%;
  height: 100%;
  border: 0px;
`;

Iframe.displayName = "Iframe";
export default Iframe;
