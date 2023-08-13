import { create } from "zustand";
import { DisclosureStore } from "./disclosureStore";

const useDisclosure = create<DisclosureStore>((set) => ({
  isOpen: false,
  toggleDisclosure: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useDisclosure;
