export const BRING_UP_MODAL = "BRING_UP_MODAL";
export const bringUpModalAction = () => {
  return {
    type: BRING_UP_MODAL,
    payload: {
      isModalOpen: true,
    }
  }
}