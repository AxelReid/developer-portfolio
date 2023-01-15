type ModalRefTypes<O> = {
  open: (args?: O) => void
  close: () => void
  opened: boolean
} | null

export type ModalMutableRefProps<O = undefined> = React.MutableRefObject<
  ModalRefTypes<O>
>
