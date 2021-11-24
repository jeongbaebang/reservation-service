export default class {
  createElement(tagName = 'div', className, textContent) {
    const $node = document.createElement(tagName);

    if (className) $node.className = className;
    if (textContent) $node.textContent = textContent;

    return $node;
  }

  appendChild($target, $node) {
    if (Array.isArray($node)) {
      $node.forEach($current => $target.appendChild($current));
    } else {
      $target.appendChild($node);
    }
  }

  getElementById(id) {
    return document.getElementById(id);
  }

  querySelector($target = document, selectors) {
    return $target.querySelector(selectors);
  }

  textContent($node) {
    const $target = $node;

    return {
      set(value) {
        $target.textContent = value;
      },
      get() {
        return $target.textContent;
      }
    };
  }

  addEventListener($target = document, eventName, handler) {
    $target.addEventListener(eventName, handler);
  }

  localStorage(key) {
    return {
      set(value) {
        localStorage.setItem(key, value);
      },
      get() {
        return localStorage.getItem(key);
      },
      clear() {
        localStorage.clear();
      }
    };
  }

  JSON() {
    return {
      parse(text) {
        return JSON.parse(text);
      },
      stringify(value) {
        return JSON.stringify(value);
      }
    };
  }

  countFunc(initialValue = 0) {
    const increase = state => {
      const count = Number(state.get());
      state.set(count + 1);
    };

    const decrease = state => {
      const count = Number(state.get());
      if (count <= initialValue) {
        state.set(initialValue);
      } else {
        state.set(count - 1);
      }
    };

    return function _closure(className, state) {
      return className === 'increase' ? increase(state) : decrease(state);
    };
  }

  findElementByClassName($current, targetClassName) {
    let $target = $current.parentElement;

    while ($target !== null && $target.className !== targetClassName) {
      $target = $target.parentElement;

      if ($target.className === targetClassName) break;
    }
    return $target;
  }

  stateManagement() {
    let globalState = {};

    return {
      set(key, value) {
        globalState = {
          ...globalState,
          [key]: value
        };
      },
      get() {
        return globalState;
      }
    };
  }
}
