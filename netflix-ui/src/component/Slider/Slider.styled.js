import styled from "styled-components";

export const Container = styled.div``;

export const ContainerRow = styled.div`
  h2 {
    margin-left: 50px;
  }

  .row__posters {
    display: flex;
    gap: 15px;
    padding: 20px;
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    .ContainerCard {
      position: relative;
      cursor: pointer;

      .row__poster {
        width: 250px;
        height: 145px;
        border-radius: 0.2rem;
        object-fit: contain;
        z-index: 10;
      }

      .hover {
        position: absolute;
        transform: scale(0.9);
        z-index: 99;
        top: -6vh;
        left: 0;
        border-radius: 0.3rem;
        box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
        background-color: #181818;

        .image-video-container {
          position: relative;
          width: 280px;
          height: 135px;
          overflow: hidden;

          img {
            width: 280px;
            height: 135px;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
          }
        }
        .info-container {
          padding: 0.2rem;
          gap: 0.2rem;
        }
        .icons {
          .controls {
            display: flex;
            gap: 1rem;
          }
          svg {
            font-size: 1rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            &:hover {
              color: #b8b8b8;
            }
          }
        }
        .genres {
          ul {
            gap: 1.5rem;
            li {
              padding-right: 0.7rem;
              &:first-of-type {
                list-style-type: none;
              }
            }
          }
        }
      }
    }
  }
`;
