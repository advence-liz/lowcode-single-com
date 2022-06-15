

export { default } from '/Users/lizhuo13/lowcode/lowcode-single-com/src/index.tsx';

import * as componentInstances from '/Users/lizhuo13/lowcode/lowcode-single-com/src/index.tsx';

import '/Users/lizhuo13/lowcode/lowcode-single-com/src/index.scss'

export * from '/Users/lizhuo13/lowcode/lowcode-single-com/src/index.tsx';

const coveredComponents = {};

const library = 'BizComp';
const execCompile = !!false;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}