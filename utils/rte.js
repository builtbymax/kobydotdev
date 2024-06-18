//
//  This file contains utility functions for rendering rich text elements.
//  It includes functions for replacing opening and closing tags, variables, and links in a given string.
//  The main functions are `renderHTML` and `renderText`, which convert a string with rich text elements into HTML.
//
//  -------------------------------------------------------------------------------------------------------------------

const tagMap = {
  Strong: {
    tag: 'strong',
  },
  Bold: {
    tag: 'b',
  },
  Italic: {
    tag: 'i',
  },
  Underline: {
    tag: 'u',
  },
  Utf: {
    tag: 'span',
    className: 'utf',
  },
};

const variableMap = {
  Age: () => {
    const birthDate = new Date(1994, 9, 18);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  },
  Time: () => {
    return new Date().getFullYear() - 2014;
  },
  Break: () => {
    return '<br>';
  }
};

/**
 * Replaces opening tags like <Bold> with their corresponding HTML tags.
 * @param {string} tag - The opening tag to be replaced.
 * @returns {string} - The replaced HTML tag.
 */
const replaceOpeningTags = (tag) => {
  const tagName = tag.slice(1, -1);
  const mappedTagName = tagMap[tagName].tag;
  // add className if available
  const className = tagMap[tagName].className ? ` class="${tagMap[tagName].className}"` : '';
  return `<${mappedTagName} ${className}>`;
};

/**
 * Replaces closing tags like </Bold> with their corresponding HTML tags.
 * @param {string} tag - The closing tag to be replaced.
 * @returns {string} - The replaced HTML tag.
 */
const replaceClosingTags = (tag) => {
  const tagName = tag.slice(2, -1);
  const mappedTagName = tagMap[tagName].tag;
  return `</${mappedTagName}>`;
};

/**
 * Replaces variables enclosed in {{ }} with their corresponding values.
 * @param {string} str - The string containing variables to be replaced.
 * @returns {string} - The string with replaced variables.
 */
const replaceVariables = (str) => {
  return str.replace(/{{(\w+)}}/g, (_, variableName) => {
    const func = variableMap[variableName];
    return func ? func() : '';
  });
};

/**
 * Replaces links in the format ['title', ['url', 'target', 'className']] with HTML anchor tags.
 * @param {string} tag - The link tag to be replaced.
 * @returns {string} - The replaced HTML anchor tag.
 */
const replaceLinks = (str) => {
  return str.replace(/\['([\w\.\+\/\-\:\@]+)',\s*\['((tel:|mailto:|http:|https:)\S+)',\s*'(\S+)',\s*'(\S+)'\]\]/g, (_, title, href, hrefAttr, target, className) => {
    return `<a href="${href}" target="${target}" class="${className}">${title}</a>`;
  });
};

/**
 * Renders a string with rich text elements into HTML.
 * @param {string} str - The string to be rendered.
 * @returns {string} - The rendered HTML string.
 */
const renderHTML = (str) => {
  // check for opening tags, closing tags, variables, functions
  let replacedString = str.replace(/<\w+>/g, replaceOpeningTags);
  replacedString = replacedString.replace(/<\/\w+>/g, replaceClosingTags);
  replacedString = replaceVariables(replacedString);
  replacedString = replaceLinks(replacedString);
  return replacedString;
};

/**
 * Renders a string with rich text elements into a React component with dangerously set inner HTML.
 * @param {string} text - The string to be rendered.
 * @returns {React.Component} - The rendered React component.
 */
const renderText = (text) => {
  return <p dangerouslySetInnerHTML={{ __html: renderHTML(text) }} />;
};

export { renderText };