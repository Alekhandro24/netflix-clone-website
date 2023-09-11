import styled from "styled-components";

export const Container = styled.div`
  background-color: black;

  .hero {
    position: relative;

    .background-image {
      filter: brightness(60%);
    }

    img {
      width: 100vw;
      height: 100vh;
    }

    .container {
      position: absolute;
      bottom: 5rem;

      .logo {
        width: 100%;
        height: 100%;
        margin-left: 5rem;
      }

      .buttons {
        margin: 5rem;
        gap: 2rem;

        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem 2rem 0.5rem 2.4rem;
          border: none;
          transition: 0.3s ease-in-out;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;

            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
