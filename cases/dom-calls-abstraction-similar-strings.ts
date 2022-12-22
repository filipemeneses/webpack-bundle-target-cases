const querySelector = (query: string) => {
  return document.querySelector(query);
};
const appendChild = (parentDom: HTMLElement, childDom: HTMLElement) => {
  parentDom.appendChild(childDom);
};

const canvas = querySelector("canvas");
const h1 = querySelector("h1");
const h12 = querySelector("h1");
const h13 = querySelector("h1");
const div = querySelector("div");

appendChild(div, canvas);
appendChild(div, h1);
appendChild(div, h12);
appendChild(div, h13);
