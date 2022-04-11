import React from "react";
import { ExampleModule } from "./modules";

interface IExample {
  appName: string;
}

export const Example: React.FC<IExample> = ({ appName }) => {
  return <ExampleModule appName={appName} />;
};
