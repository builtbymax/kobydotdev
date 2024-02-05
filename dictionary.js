import 'server-only';

const dictionaries = {
  // en: () => import('./dictionaries/en.json').then((module) => module.default),
  // de: () => import('./dictionaries/de.json').then((module) => module.default),

  en: () => Promise.all([
    import('./dictionaries/en.json'),
    import('./dictionaries/interview/en.json'),
    import('./dictionaries/legal/en.json'),
  ]).then(modules => modules.map(module => module.default))
    .then(dictionaries => Object.assign({}, ...dictionaries)),
  de: () => Promise.all([
    import('./dictionaries/de.json'),
    import('./dictionaries/interview/de.json'),
    import('./dictionaries/legal/de.json'),
  ]).then(modules => modules.map(module => module.default))
    .then(dictionaries => Object.assign({}, ...dictionaries)),
}

export const getDictionary = async (locale) => {
  const dictionary = await dictionaries[locale]();
  return dictionary
}
