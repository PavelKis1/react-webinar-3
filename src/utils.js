const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

export function countNaming(count, ...options) {
  count %= 100;
  let result = '';

  if (count >= 10 && count <= 20) {
    result = options[2];
  } else {
    count %= 10;
    if (count === 1) {
      result = options[0]
    }
    else if (count >= 2 && count <= 4) {
      result = options[1];
    } else {
      result = options[2];
    }
  }
  return result
}
