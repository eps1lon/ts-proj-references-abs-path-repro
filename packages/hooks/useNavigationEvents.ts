import { useDialogNavigation } from "./useDialogNavigation";

export const useNavigationEvents = () => {
  const { back, close } = useDialogNavigation();

  return {
    back,
    close,
  };
};
