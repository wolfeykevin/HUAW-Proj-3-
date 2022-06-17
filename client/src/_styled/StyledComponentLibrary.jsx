import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.column ? "column" : props.row ? "row" : "row"};
  flex-wrap: ${(props) => (props.wrap ? "false" : "true")};
  justify-content: ${(props) =>
    props.center ? "center" : props.centerv ? "center" : ""};
  align-items: ${(props) =>
    props.center ? "center" : props.centerh ? "center" : ""};
`;

export const Loader = styled.div`
  font-size: var(--font-size-heading);
  font-family: var(--global-font);
  height: fit-content;
  width: fit-content;
`;

export const Button = styled.button`
  font-size: var(--font-size-body);
  font-family: var(--global-font);
  min-height: 50px;
  min-width: 164px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  padding: 1rem 0.5rem 1rem 0.5rem;
  border-radius: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  color: ${(props) =>
    props.disabled ? "#a9a9a9" : "#000000"};
  box-shadow: 0 0 0 1px ${(props) =>
    props.disabled ? "#a9a9a9" : "#000000"};

  &:hover {
    background-color: rgb(226, 226, 226);
  }
  &:active {
    background-color: rgb(202, 202, 202);
    transform: scale(0.99);
  }
`;
