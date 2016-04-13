// Action creators
export const setCenter = (src, position) => ({
  type: 'MOVE_CENTER',
  payload: { src, position },
})

export const startDragHandle = (src, position, dragMask) => ({
  type: 'START_DRAG_HANDLE',
  payload: { src, position, dragMask },
})

export const moveDragHandle = (src, position) => ({
  type: 'MOVE_DRAG_HANDLE',
  payload: { src, position },
})

export const endDragHandle = (src) => ({
  type: 'END_DRAG_HANDLE',
  payload: { src },
})

export const setImgSize = (src, size) => ({
  type: 'SET_IMAGE_SIZE',
  payload: { src, size },
})

export const addImage = (src) => ({
  type: 'ADD_IMAGE',
  payload: { src },
})
