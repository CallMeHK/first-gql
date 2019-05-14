import * as React from "react";

type MyCompProps = {
  name: string;
  noodle?: boolean;
};

const MyComp = (props: MyCompProps) => {
  return <div>{props.name}</div>;
};

export { MyComp };
