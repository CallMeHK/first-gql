import * as React from "react";
import { MyClass } from "./MyClass";
import { MyComp } from "./MyComp";

interface IProps {
  compiler: string;
  framework: string;
  bundler: string;
}
export class Hello extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        <h1>
          This is a {this.props.framework} application! using{" "}
          {this.props.compiler} with {this.props.bundler}
        </h1>
        <MyClass name="My dude" isMarried={true} />
        <MyClass isMarried={true} />
        <MyComp name="Ty" />
      </div>
    );
  }
}
