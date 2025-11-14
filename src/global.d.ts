// Minimal ambient declarations to satisfy TS in this prototype environment.
// For a production setup, install @types/react and @types/react-dom instead.
declare module 'react' {
  const React: any;
  export default React;
  export const useState: any;
  export const useEffect: any;
  export const useMemo: any;
  export const useCallback: any;
  export const useRef: any;
}
declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}