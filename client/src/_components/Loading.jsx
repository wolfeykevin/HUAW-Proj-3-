import React from "react";
import { Flex, Loader } from "../_styled/StyledComponentLibrary";

const Loading = () => {
  return (
    <Flex className="fill" center>
      <Loader>iT's LoAdInG 🤪</Loader>
    </Flex>
  );
};

export default Loading;
