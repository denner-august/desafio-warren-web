import styles from "./modal.module.scss";
import Registros from "@/../registro/registros.json";
import closeButton from "@/../public/icons/close.png";
import Image from "next/image";
import { Slider } from "./slider/slider";
import { Transactions } from "../transactions/transactions";

interface modalProps {
  isOpen: boolean;
  id: string;
  setOpen: (e: boolean) => void;
}

export function Modal({ id, isOpen, setOpen }: modalProps) {
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

            <Slider openTransactions={findRegistro?.status} />

            <Transactions
              title="transferencia de"
              from={findRegistro?.from}
              amount={findRegistro?.amount}
            />
            <Transactions
              title="para"
              from={findRegistro?.to}
              amount={findRegistro?.amount}
            />
          </article>
        </section>
      );
    }

    return undefined;
  };

  return <ModalView />;
}
