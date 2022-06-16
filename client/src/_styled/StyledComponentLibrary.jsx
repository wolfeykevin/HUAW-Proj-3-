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
