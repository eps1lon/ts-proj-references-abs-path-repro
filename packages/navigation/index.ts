export type Props = Record<string, any>;
export type Params = Record<string, any>;
export type ReturnComponentId = Promise<string | Error>;
export type MightReturnComponentId = Promise<null | void | string>;
export type ComponentId = string;

type NavigateBackOptions = {
  animations?: {
    enabled: boolean;
  };
};
/**
 * Given the current componentId will navigate back from that, this includes:
 *  - pop the stack of bottom sheets, or close the last bottom sheet in the stack
 *  - pop the stack of modals, or close the last modal in the stack
 *
 * @param  {ComponentId} fromComponentId
 * @returns MightReturnComponentId
 * @throws if navigation fails in DEV
 */
export declare function navigateBack(
  fromComponentId: ComponentId,
  options?: NavigateBackOptions
): MightReturnComponentId;

export declare function close(
  fromComponentId: ComponentId
): MightReturnComponentId;
