import styled from "styled-components";

export const Container = styled.div`
  .scroll {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    height: 6.5rem;
    z-index: 2;
    padding: 0 4rem;
    transition: 0.3s ease-in-out;

    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;

        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }

    .right {
      gap: 1rem;

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;

        &:focus {
          outline: none;
        }

        svg {
          color: #f24242;
          font-size: 1.2rem;
        }
      }

      .search {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
        padding: 0.2rem;
        padding-left: 0.5rem;

        button {
          background-color: transparent;

          svg {
            color: white;
          }
        }

        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;

          &:focus {
            outline: none;
          }
        }
      }

      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);

        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }
`;
