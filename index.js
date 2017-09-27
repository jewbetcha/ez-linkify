// Links have the notation: [[<link text>, <link target>]]
// linkify takes in an element containing text with a link
// and replaces it with a built <a> tag


function Linkify(el, options = {}) {
  // Get the text from the element and isolate the link string, also split
  // into an array.
  options.targetBlank = options.targetBlank || false;
  const tb = options.targetBlank;

  options.classNames = options.classNames || [];
  let classNames = options.classNames;

  const startingText = el.innerText;
  let reg = startingText.match(/\[\[(.*?)\]\]/g);
  if (reg === null) {
    throw 'Error: There are no matching strings in your element';
  } else {
    reg = reg.map(v => v.replace(/\[+|\]+/g, ''));
  }
  let count = 0;
  for (const i of reg) {
    const arr = i.split(',');
    const link = document.createElement('a');
    link.setAttribute('href', arr[1]);
    link.innerHTML = arr[0];
    if (tb) {
      link.setAttribute('target', '_blank');
    }
    if (classNames.length === 0) {
      classNames = [];
    } else {
      link.classList.add(...classNames);
    }

    const replaceText = `[[${i}]]`;
    if (count === 0) {
      const newText = startingText.replace(replaceText, link.outerHTML);
      el.innerHTML = newText;
    } else {
      const midwayText = el.innerHTML;
      const newText = midwayText.replace(replaceText, link.outerHTML);
      el.innerHTML = newText;
    }
    count++;
  }
}

module.exports = Linkify;
