import * as React from "react";

export interface MyClassProps {
    name: string;
    isMarried: boolean;
}

export interface MyClassState { age: number; }

export class MyClass extends React.Component<MyClassProps, MyClassState> {
  public static defaultProps: Partial<MyClassProps> = {
      name: "asdf"
  }

  state = {
      age:21
  }
  render() {
    return (
      <h1>
        {this.props.name} and {this.state.age}
      </h1>
    );
  }
}
 