import React from "react";
import { globalReactService } from "../../commons";
import styles from "./ExampleModule.scss";
interface IExample {
  appName: string;
}

export const ExampleModule: React.FC<IExample> = ({ appName }) => {
  return (
    <div className={styles.container}>
      <h1>Hello: </h1>
      <span>{appName}</span>
      <h3>
        env: <b>{globalReactService.environment}</b>
      </h3>
    </div>
  );
};
