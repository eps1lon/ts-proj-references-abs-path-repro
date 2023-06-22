declare function useCallback<T extends Function>(callback: T): T;

import { navigateBack, close as _close } from "@klapp/navigation";

export const useDialogNavigation = () => {
  const close = useCallback(() => {
    return _close(null as any);
  });

  const back = useCallback(() => {
    return navigateBack(null as any);
  });

  return { back, close };
};
