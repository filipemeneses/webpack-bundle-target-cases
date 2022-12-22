const querySelector = (query: string) => {
  return document.querySelector(query);
};
const appendChild = (parentDom: HTMLElement, childDom: HTMLElement) => {
  parentDom.appendChild(childDom);
};

const canvas = querySelector("canvas");
const div = querySelector("div");

appendChild(div, canvas);
