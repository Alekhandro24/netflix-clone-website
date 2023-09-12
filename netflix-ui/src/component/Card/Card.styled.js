import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 230px;
  width: 230px;
  height: 100px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    border-radius: 0.2rem;
    z-index: 10;
  }

  .hover {
    position: absolute;
    top: -18vh;
    left: 0;
    height: max-content;
    width: 20rem;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    z-index: 90;

    .image-video-container {
      position: relative;
      height: 140px;

      img {
        position: absolute;
        position: absolute;
        top: 0;
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;

        z-index: 4;
      }

      video {
        position: absolute;
        top: 0;
        width: 100%;
        height: 1400;
        object-fit: cover;
        border-radius: 0.3rem;
        z-index: 5;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }

    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 2rem;
        transition: 0ms.3 ease-in-out;
        cursor: pointer;

        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;

        li {
          padding-right: 0.7rem;

          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;
