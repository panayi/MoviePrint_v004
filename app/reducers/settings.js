const settings = (state = {}, action) => {
  switch (action.type) {
    case 'CLEAR_CURRENT_FILEID':
      return { ...state, currentFileId: undefined };
    case 'SET_CURRENT_FILEID':
      return { ...state, currentFileId: action.fileId };
    case 'SET_DEFAULT_THUMB_COUNT':
      return { ...state, defaultThumbCount: action.defaultThumbCount };
    case 'SET_DEFAULT_COLUMN_COUNT':
      return { ...state, defaultColumnCount: action.defaultColumnCount };
    default:
      return state;
  }
};

export default settings;