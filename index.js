// Links have the notation: [[<link text>, <link target>]]
// linkify takes in an element containing text with a link
// and replaces it with a built <a> tag
const Linkify = (el, options = {}) => {
  // Get the text from the element and isolate the link string, also split
  // into an array.
  options.targetBlank = options.targetBlank || false;
  let tb = options.targetBlank;

  options.classNames = options.classNames || [];
  let classNames = options.classNames;

  let startingText = el.innerText;
  let reg = startingText.match(/\[\[(.*?)\]\]/g).map(function(v) {
    return v.replace(/\[+|\]+/g, "");
  });
  let count = 0;
  for (let i of reg) {
    let arr = i.split(",");
    let link = document.createElement("a");
    link.setAttribute("href", arr[1]);
    link.innerHTML = arr[0];
    if (tb) {
      link.setAttribute("target", "_blank");
    }
    if (classNames.length === 0) {
      classNames = [];
    } else {
      link.classList.add(...classNames);
    }

    let replaceText = `[[${i}]]`;
    if (count === 0) {
      let newText = startingText.replace(replaceText, link.outerHTML);
      el.innerHTML = newText;
    } else {
      let midwayText = el.innerHTML;
      let newText = midwayText.replace(replaceText, link.outerHTML);
      el.innerHTML = newText;
    }
    count++;
  }
};

export default Linkify;