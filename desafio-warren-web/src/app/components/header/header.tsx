import styles from "./header.module.scss";
import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className={styles.Container} role="heading">
      {children}
    </header>
  );
}
