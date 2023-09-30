import styled from "styled-components";

export const Container = styled.div``;

//new
export const ContainerRow = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
  .row__posters {
    display: flex;

    padding: 20px;

    .ContainerCard {
      .row__poster {
        width: 100%;
        max-height: 100px;
        margin-right: 10px;
        object-fit: contain;
        translate: transform 450ms;
        &:hover {
          transform: scale(1.48);
        }
      }
    }
  }

  .row__posters::-webkit-scrollbar {
    display: none;
  }

  /* .row__poster {
    width: 100%;
    max-height: 100px;
    margin-right: 10px;
    object-fit: contain;
    translate: transform 450ms;
  }

  .row__poster:hover {
    transform: scale(1.48);
  } */
`;
