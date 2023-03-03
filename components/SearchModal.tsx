import { useEffect, useRef } from "preact/hooks";

interface Props {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export default function SearchModal(props: Props) {
    const mountRef = useRef(false);
    const ref = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        if (!mountRef.current) {
            mountRef.current = true;
            return;
        }
        if (props.isOpen) {
            ref.current?.showModal();
            return;
        }
        ref.current?.close();
        props.setOpen(false);
    }, [props.isOpen]);

    return (
      <>
        <dialog
          ref={ref}
          class={`p-0 opacity-80 w-3/5 ${props.class}`}
          onClick={() => {
            ref.current?.close();
            props.setOpen(false);
          }}
        >
          <div class={`w-full h-full ${props.class}`} onClick={(e) => e.stopPropagation()}>{props.children}</div>
        </dialog>
      </>
    );
}
