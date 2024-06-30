import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;

  position: relative;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 800px;

  & .bmpui-kodio-bitmovin-player {
    color: red;
  }

  & .bmpui-controlbar-wrapper > div {
    display: flex;
    flex-direction: column;
  }

  & .bmpui-controlbar-bottom > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & .bmpui-left-container > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  & .bmpui-right-container > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  &
    .bmpui-ui-controlbar
    .bmpui-controlbar-bottom
    > .bmpui-container-wrapper
    .bmpui-ui-volumeslider {
    width: 3em;
  }
`;
