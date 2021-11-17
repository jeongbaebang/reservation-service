export default class {
  createElement(tagName = 'div', className, textContent) {
    const $node = document.createElement(tagName);

    if (className) {
      $node.className = className;
    }

    if (textContent) {
      $node.textContent = textContent;
    }

    return $node;
  }

  appendChild($target, $node) {
    if (Array.isArray($node)) {
      $node.forEach($current => $target.appendChild($current));
    } else {
      $target.appendChild($node);
    }
  }

  addEventListener($target, eventName, handler) {
    $target.addEventListener(eventName, handler);
  }

  getElementById(id) {
    return document.getElementById(id);
  }

  querySelector($target, selectors) {
    return $target.querySelector(selectors);
  }

  localStorage(type, key, value) {
    return type === 'set'
      ? localStorage.setItem(key, value)
      : localStorage.getItem(key);
  }
}
