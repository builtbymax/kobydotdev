import clsx from "clsx";

const ContentText = ({ content, className }) => {
  const { title, text } = content;

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

  const functionsMap = {
    Link: {
      tag: 'a',
      href: 'href',
      target: 'target',
    },
  };

  const variableMap = {
    Age: () => {
      return new Date().getFullYear() - 1994;
    },
    Time: () => {
      return new Date().getFullYear() - 2014;
    },
    Break: () => {
      return '<br>';
    }
  };

  // Ersetzt öffnende Tags wie <Link>
  const replaceOpeningTags = (tag) => {
    const tagName = tag.slice(1, -1); // Entfernt die spitzen Klammern
    const mappedTagName = tagMap[tagName].tag;
    // add className if available
    const className = tagMap[tagName].className ? ` class="${tagMap[tagName].className}"` : '';
    return `<${mappedTagName} ${className}>`;
  };
  
  // Ersetzt schließende Tags wie </Link>
  const replaceClosingTags = (tag) => {
    const tagName = tag.slice(2, -1); // Entfernt </ und >
    const mappedTagName = tagMap[tagName].tag;
    return `</${mappedTagName}>`;
  };

  // Ersetzt Variablen welche in {{ }} stehen
  const replaceVariables = (str) => {
    return str.replace(/{{(\w+)}}/g, (_, variableName) => {
      const func = variableMap[variableName];
      return func ? func() : '';
    });
  };

  const replaceFunctions = (tag) => {
    const regex = /\['(\w+)',\s*\['(https?:\/\/\S+)',\s*'(\S+)',\s*'(\S+)'\]\]/;
    const match = tag.match(regex);
    if (match) {
      const [, title, href, target, className] = match;
      return `<a href="${href}" target="${target}" class="${className}">${title}</a>`;
    }
  };

  console.log(replaceFunctions(`['Link', ['https://www.google.com', '_blank', 'link']]`));
  
  const renderHTML = (str) => {
    // check for opening tags, closing tags, variables, functions
    let replacedString = str.replace(/<\w+>/g, replaceOpeningTags);
    replacedString = replacedString.replace(/<\/\w+>/g, replaceClosingTags);
    replacedString = replaceVariables(replacedString);
    return replacedString;
  };

  const renderText = (text) => {
    return <p dangerouslySetInnerHTML={{ __html: renderHTML(text) }} />;
  };

  const textElement = renderText(text);
  
  return (
    <div className={clsx('text-element-container', className)}>
      <div className="copy-text">
        <h3>{title}</h3>
        {textElement}
      </div>
    </div>
  );
};
ContentText.displayName = 'ContentText';

export { ContentText };
