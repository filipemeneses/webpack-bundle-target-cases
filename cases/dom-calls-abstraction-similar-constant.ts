const querySelector = (query: string) => {
  return document.querySelector(query);
};
const appendChild = (parentDom: HTMLElement, childDom: HTMLElement) => {
  parentDom.appendChild(childDom);
};

const H1_TAG = "h1";

const canvas = querySelector("canvas");
const h1 = querySelector(H1_TAG);
const h12 = querySelector(H1_TAG);
const h13 = querySelector(H1_TAG);
const div = querySelector("div");

appendChild(div, canvas);
appendChild(div, h1);
appendChild(div, h12);
appendChild(div, h13);
