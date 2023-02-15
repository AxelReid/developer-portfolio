type ModalRefTypes<O, C> = {
  open: (args?: O) => void;
  close: (args?: C) => void;
  opened: boolean;
} | null;

export type ModalMutableRefProps<
  O = undefined,
  C = undefined
> = React.MutableRefObject<ModalRefTypes<O, C>>;
