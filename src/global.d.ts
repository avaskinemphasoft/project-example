interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

declare global {
  const window: Window;
}

declare module '*.jpg' {
  export default '' as string;
}

declare module '*.mp3' {
  export default '' as string;
}

declare module '*.png' {
  export default '' as string;
}
