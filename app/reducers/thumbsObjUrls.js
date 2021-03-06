import log from 'electron-log';

const thumbsObjUrls = (state = {}, action) => {
  switch (action.type) {
    case 'CLEAR_MOVIE_LIST':
      return {};
    case 'UPDATE_OBJECTURL_FROM_THUMBLIST':
      // log.debug(action.payload.fileId);
      // log.debug(action.payload.frameId);
      // log.debug(action.payload.frames);
      return {
        ...state,
        [action.payload.fileId]: {
          ...state[action.payload.fileId],
          [action.payload.frameId]: {
            objectUrl: window.URL.createObjectURL(
              action.payload.frames.filter(obj => obj.frameId === action.payload.frameId)[0].data
            )
          }
        }
      };
    case 'UPDATE_OBJECTURLS_FROM_THUMBLIST':
      // log.debug(action.payload.frames);
      // log.debug(state);
      return {
        ...state,
        [action.payload.fileId]:
            action.payload.frames.reduce((previous, current) => {
              // log.debug(previous);
              // log.debug(current.data);
              const tempObject = Object.assign({}, previous,
                { [current.frameId]: { objectUrl: window.URL.createObjectURL(current.data) } }
              );
              // log.debug(tempObject);
              return tempObject;
            }, {})
      };
    default:
      return state;
  }
};

export default thumbsObjUrls;
