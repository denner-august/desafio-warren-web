import styles from "./modal.module.scss";
import Registros from "@/../registro/registros.json";
import closeButton from "@/../public/icons/close.png";
import Image from "next/image";
import { Slider } from "./slider/slider";
import { Transactions } from "../transactions/transactions";

interface modalProps {
  isOpen: boolean;
  setOpen: (e: boolean) => void;
  id: string;
}

export function Modal({ id, isOpen, setOpen }: modalProps) {
  const transactionsNumber = {
    created: 0,
    meio: 5,
    processed: 10,
  };

  const ModalView = () => {
    let findRegistro = Registros.find((item) => item.id === id);

    if (isOpen) {
      return (
        <section className={styles.Container}>
          <article className={styles["modal-content"]}>
            <div className={styles.controller}>
              <p>Depósito</p>
              <button onClick={() => setOpen(false)}>
                <Image
                  src={closeButton}
                  width={35}
                  height={35}
                  alt="Picture of the author"
                  blurDataURL={"@/../public/icons/close.png"}
                />
              </button>
            </div>

            <Slider
              openTransactions={transactionsNumber[findRegistro?.status]}
            />
            <Transactions />
          </article>
        </section>
      );
    }

    return undefined;
  };

  return <ModalView />;
}
