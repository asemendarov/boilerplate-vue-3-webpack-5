declare module 'launch-editor-middleware' {
  import type { ExpressRequestHandler } from 'webpack-dev-server';

  const openInEditor: (
    specifiedEditor?: string,
    srcRoot?: string,
    onErrorCallback?: () => void,
  ) => ExpressRequestHandler;

  export default openInEditor;
}
