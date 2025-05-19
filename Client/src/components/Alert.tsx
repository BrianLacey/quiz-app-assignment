import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  Description,
  CloseButton,
} from "@headlessui/react";
import { useSelector } from "react-redux";
import { IState } from "../models";

const Alert = ({ onClose = () => {} }: { onClose: () => void }) => {
  const error = useSelector((state: IState) => state.error);

  return (
    <Dialog
      open={error.isOpen}
      onClose={onClose}
      role="alertdialog"
      autoFocus
      className="absolute top-12 w-96 text-white text-lg ml-8"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/50" />
      <DialogPanel className="relative z-50 p-4.5 rounded-xl bg-red-800">
        <div className="flex flex-row justify-between ">
          <DialogTitle className="flex">Issue processing request</DialogTitle>
          <CloseButton className="flex">X</CloseButton>
        </div>
        <div className="flex flex-col">
          <Description>{error.message}</Description>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default Alert;
