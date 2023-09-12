import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  gap: 1rem;
  padding: 2rem 0;

  h1 {
    margin-left: 50px;
  }

  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      margin-left: 50px;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
    }

    .slider-action {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 50px;
      height: 100%;
      transition: 0.3s ease-in-out;
      z-index: 99;

      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;
