const querySelector = (query: string) => {
  return document.querySelector(query);
};
const appendChild = (parentDom: HTMLElement, childDom: HTMLElement) => {
  parentDom.appendChild(childDom);
};

const canvas = querySelector("canvas");
const h1 = querySelector("h1");
const h2 = querySelector("h2");
const h3 = querySelector("h3");
const div = querySelector("div");

appendChild(div, canvas);
appendChild(div, h1);
appendChild(div, h2);
appendChild(div, h3);
