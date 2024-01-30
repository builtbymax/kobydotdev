const ArrowRight = ({ color = '#fff' }) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} id="XMLID_512_ Copy" d="M11.6438 6.39474L7.10462 10.9737C6.89453 11.1842 6.63191 11.2895 6.36929 11.2895C6.10667 11.2895 5.84406 11.1842 5.63396 10.9737C5.21377 10.5526 5.21377 9.89474 5.63396 9.47369L8.38734 6.71053H1.05047C0.472712 6.71053 0 6.23684 0 5.6579C0 5.07895 0.472712 4.60526 1.05047 4.60526H8.38734L5.6077 1.81579C5.18751 1.39474 5.18751 0.736842 5.6077 0.315789C6.02789 -0.105263 6.68443 -0.105263 7.10462 0.315789L11.6438 4.89474C12.064 5.31579 12.064 6 11.6438 6.39474Z"/>
    </svg>
  );
};
ArrowRight.displayName = 'ArrowRight';

const ArrowExternal = ({ color = '#fff' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} fill="none" >
      <path fill={color} d="m8.126 1.413-.077 5.291a.883.883 0 0 1-.255.615.883.883 0 0 1-.614.255.824.824 0 0 1-.854-.854l.054-3.202-4.338 4.339c-.341.341-.89.351-1.22.021-.33-.33-.32-.879.021-1.22L5.182 2.32l-3.232.055a.824.824 0 0 1-.854-.854.897.897 0 0 1 .885-.885L7.27.559a.824.824 0 0 1 .855.854Z" />
    </svg>
  );
};
ArrowExternal.displayName = 'ArrowExternal';

const Globe = ({ color = '#fff' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={20} fill="none" >
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9M1.51 7h16.87M1.51 13H10" />
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10c0-2.764-.723-5.528-2.167-7.94a2.114 2.114 0 0 0-3.665 0c-2.89 4.825-2.89 11.056 0 15.881a2.125 2.125 0 0 0 1.833 1.06M21 15.625 19.875 14.5l-1.125 1.125M12.75 16.375l1.125 1.125L15 16.375" />
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 17.5v-3a1.5 1.5 0 0 1 1.5-1.5h2.25M19.875 14.5v3c0 .825-.675 1.5-1.5 1.5h-2.242" />
    </svg>
  );
};
Globe.displayName = 'Globe';

export { ArrowRight, ArrowExternal, Globe };