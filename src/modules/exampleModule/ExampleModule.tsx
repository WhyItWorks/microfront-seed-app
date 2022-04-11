import React from "react";
import styles from "./ExampleModule.scss";
interface IExample {
  appName: string;
}

export const ExampleModule: React.FC<IExample> = ({ appName }) => {
  return (
    <div className={styles.container}>
      <h1>Hello: </h1>
      <span>{appName}</span>
    </div>
  );
};
