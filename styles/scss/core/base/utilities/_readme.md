# Utilities

## Grid Configuration

This SCSS file defines variables for grid and media query configurations. You can find the file here:

```scss
../scss/base/utilities/grid.scss
```

All the grid-classes for flexbox and CSS-grid will be generated automatically in the scss file, you can define each parameter for the grid classes in the following variables and settings - It's always possible to look into the core file to see the default values.

### Responsive Breakpoints

The `$sizes` variable defines the responsive breakpoints for the grid. It is a map that contains the following key-value pairs:

```scss
mobile: 0
smart-down: 419px
smart: 420px
tablet-down: 767px
tablet: 768px
tablet-wide-down: 1023px
tablet-wide: 1024px
desktop-down: 1219px
desktop: 1220px
desktop-m-down: 1439px
desktop-m: 1440px
desktop-wide-down: 1659px
desktop-wide: 1660px
```

### Grid Values

The `$grid-classes` variable defines the grid classes for different screen sizes. It is a map that contains the following key-value pairs:

```scss
mobile: 'xs'
smart: 's'
tablet: 'm'
tablet-wide: 'l'
desktop: 'xl'
desktop-m: 'xxl'
desktop-wide: 'xxxl'
```

### Flexbox Grid Variables

```scss
$flexgrid__columns → 
defines the number of columns in the flexbox grid. 

$flexgrid__columnclass__prefix → 
defines the prefix for the class names of the grid columns.

$flexgrid__column__properties → 
can be used to add additional properties to the grid columns.

$flexgrid__gutters and$flexgrid__gutterl → 
define the size of the gutters between the grid columns.

$flex-grid__column-alignment → (default: true)
enable or disable the alignment properties for the grid columns.

$flex-grid__col-start, 
$flex-grid__col-end,
$flex-grid__col-center,
$flex-grid__col-align-center,
$flex-grid__col-align-start and $flex-grid__col-align-end →
define the alignment properties for the grid columns.

$flex-grid__col-display and $flex-grid__col-flex-wrap → 
define the display and flexwrap properties for the grid columns.
```

### CSS-Grid Variables

```scss
$css-grid__columns → 
defines the number of columns in the CSS grid.

$css-grid__gutter → 
defines the size of the gutters between the grid columns.

$css-grid__column-class__prefix → 
defines the prefix for the class names of the grid columns.

$css-grid__column__properties → 
can be used to add additional properties to the grid columns.

$css-grid__row__properties → 
defines the properties for the grid rows, including the display, grid-template-columns, and grid-gap properties and it can be used to add additional properties to the grid rows (scss map feature).

$css-grid__col__properties → 
defines the properties for the grid columns, including the display and flex-direction properties, and it can be used to add additional properties to the grid columns (scss map feature).
```

### Grid Classes

Your grid classes will be generated automatically based on the `$sizes`, `$*-grid__column-class__prefix` and `$grid-classes` variables. The following classes will be generated f.ex for `fx` & `gd` (which are the default) as prefix:

```scss
// Flexbox
.fx-xs-12
.fx-xs-11
...
.fx-xs-2
.fx-xs-1

// CSS Grid
.gd-xs-12
.gd-xs-11
...
.gd-xs-2
.gd-xs-1
```

These are only for the xs size, any other size will be generated automatically as well. The grid classes will be generated for the flexbox and CSS-grid, depending on the configuration you set in your theme configuration. Additional there is also a `flex-col` & `grid-col` class for the columns, which can be used to set specific properties for the columns. So the complete setup for a grid would be like this:
  
```html
  <!-- Flexbox -->
  <div class="flex-row">
    <div class="flex-col fx-xs-12 fx-m-6"> ... </div>
    <div class="flex-col fx-xs-12 fx-m-6"> ... </div>
  </div>

  <!-- CSS Grid -->
  <div class="grid-row">
    <div class="grid-col gd-xs-12 gd-m-6"> ... </div>
    <div class="grid-col gd-xs-12 gd-m-6"> ... </div>
  </div>
```

If you only use one of the grid systems in your project you can disable the other one in your theme configuration, this will also disable the generation of the grid classes for the disabled grid system.
Then you could also remove the prefix for the grid classes, if you want to use the grid classes without a prefix, you can set the prefix to `''` (empty string) in your grid configuration.

<br/>

## Media Query dynamic creation & usage

<br/>

### SCSS Mixin `media()`

The media mixin is a SCSS mixin that generates media queries based on a set of predefined breakpoints. It takes one parameter, $inputSize, which is the name of the breakpoint to generate the media query for.

### Usage
To use the media mixin, you need to define a set of breakpoints in your SCSS file. The breakpoints should be defined as a map of breakpoint names to their corresponding values. For example:

```scss
$sizes: (
  mobile: 0
  smart-down: 419px
  smart: 420px
  tablet-down: 767px
  tablet: 768px
  tablet-wide-down: 1023px
  tablet-wide: 1024px
  desktop-down: 1219px
  desktop: 1220px
  desktop-m-down: 1439px
  desktop-m: 1440px
  desktop-wide-down: 1659px
  desktop-wide: 1660px
);
```

Once you have defined your breakpoints, you can use the media mixin to generate media queries for each breakpoint. Here's an example:

```scss
@include media('tablet-down') {
  .class {
    background: #fff;
  }
}

@include media('tablet') {
  .class {
    background: #000;
  }
}

// → This will generate:

@media (max-width: 767px) {
  .class {
    background: #fff;
  }
}

@media (min-width: 768px) {
  .class {
    background: #000;
  }
}

```

✨ You can also use the media mixin to generate media queries for multiple breakpoints at once. For example:

```scss
@include media(('mobile', 'tablet-down')) {
  .class {
    background: #fff;
  }
}

// → This will generate:

@media (min-width: 0) and (max-width: 767px) {
  .class {
    background: #fff;
  }
}
```

### How it works

The media mixin works by iterating over the `$sizes` map and generating a media query for each breakpoint. The media query is generated using the `@media` directive and the `$min-value` variable, which is set to either min-width or max-width depending on the breakpoint name. The `@content` directive is used to insert the content of the media query.

<br/>

## Content Sizes

```scss
../scss/base/utilities/content.scss
```

The code you provided is a SCSS mixin that generates content sizes based on a set of predefined breakpoints. It uses the @each directive to iterate over a set of breakpoints and generate content sizes for each breakpoint.

### Usage

You can use each of the following properties as a css-class in your html code, these will be automatically generated by a loop in the mixin.

```scss
$content-sizes: (
  content-size-xs: 0,
  content-size-s: 320px,
  content-size-sm: 640px,
  content-size-m: 1140px,
  content-size-sl: 1220px,
  content-size-l: 1440px,
  content-size-xl: 1640px,
  content-size-xxl: 1920px,
);
```

```html
<div class="content-size-l"> ... </div>
```

<br/>

## Mixins and Functions

This SCSS file contains a collection of mixins and functions that can be used to simplify and streamline your SCSS code.

```scss
../scss/base/utilities/mixins.scss
```

### Mixins

#### `smoothin()`

The smoothin mixin applies various CSS properties to improve font rendering and reduce flickering during animations. It takes three optional parameters:

```scss
$smoothing: The font smoothing method to use (default: antialiased)
$backface: The backface visibility property (default: hidden)
$blur: The amount of blur to apply (default: 0)

@include smoothin($smoothing, $backface, $blur);
```

#### `transition()`

The transition mixin applies a CSS transition to an element. It takes one optional parameter:

```scss
$default: The default transition property (default: all 0.3s ease-in-out)

@include transition($default);
```

#### `hyphens()`

The hyphens mixin applies the CSS hyphens property to an element. It takes one optional parameter:

```scss
$value: The value of the hyphens property (default: auto)

@include hyphens($value);
```

#### `shadow()`

The shadow mixin applies a box shadow to an element. It takes five required parameters and one optional parameter:

```scss
$x: The horizontal offset of the shadow
$y: The vertical offset of the shadow
$blur: The amount of blur to apply
$spread: The amount of spread to apply
$color: The color of the shadow
$inset: Whether the shadow should be inset (default: false)

@include shadow($x, $y, $blur, $spread, $color, $inset);
```

#### `change-custom-color()`

The change-custom-color mixin sets the value of a custom color variable. It takes one parameter:

```scss
$color: The new value of the custom color variable

@include change-custom-color($color);
```

#### `gradient()`

The gradient mixin applies a linear gradient to an element. It takes two optional parameters:

```scss
$color-start: The starting color of the gradient (default: $background__color-4)
$color-end: The ending color of the gradient (default: $background__color-6)

@include gradient($color-start, $color-end);
```

#### `font-size()`

The font-size mixin sets the font size of an element. It takes one optional parameter:

```scss
$sizeValue: The font size value (default: 16)

@include font-size($sizeValue);
```

#### `line-height()`

The line-height mixin sets the line height of an element. It takes one optional parameter:

```scss
$heightValue: The line height value (default: 22)

@include line-height($heightValue);
```

#### `font()`

The font mixin sets the font size and line height of an element. It takes two optional parameters:

```scss
$sizeValue: The font size value (default: 12)
$heightValue: The line height value (default: 20)

@include font($sizeValue, $heightValue);
```

#### `typo()`

The typo mixin sets various typography-related properties of an element. It takes five optional parameters:

```scss
$fontSizeValue: The font size value
$lineHeightValue: The line height value
$fontWeightValue: The font weight value
$fontFamilyValue: The font family value
$textColor: The text color value

@include typo($fontSizeValue, $lineHeightValue, $fontWeightValue, $fontFamilyValue, $textColor);
```

### Functions

The following functions are mostly used to convert color values from one format to another. You can use them freely in your project but there initial purpose was to be used in the `createCSSVariableSet` mixin for the color creation in the `colors.scss`.

#### `hexToRGB()`

The hexToRGB function converts a hexadecimal color value to an RGB color value. It takes one parameter:

```scss
$inputColor: The hexadecimal color value to convert

hexToRGB($inputColor);
```

#### `hexToXML()`

The hexToXML function converts a hexadecimal color value to an XML color value. It takes one parameter:

```scss
$inputColor: The hexadecimal color value to convert

hexToXML($inputColor);
```

#### `createCSSVariableSet()`

The createCSSVariableSet mixin creates a set of CSS variables based on a list of SCSS variables. It takes three optional parameters:

```scss
$list-name: The name of the CSS variable set
$list: The list of SCSS variables to create CSS variables from
$list-rgb: The list of SCSS variables to create CSS variables with RGB values from
$list-xml: The list of SCSS variables to create CSS variables with XML values from

createCSSVariableSet($list-name, $list, $list-rgb, $list-xml);
```

#### `getMapWithRGB()`

The getMapWithRGB function creates a map of RGB color values based on a list of hexadecimal color values. It takes one parameter:

```scss
$list: The list of hexadecimal color values to create RGB color values from

getMapWithRGB($list);
```

#### `getMapWithXML()`

The getMapWithXML function creates a map of XML color values based on a list of hexadecimal color values. It takes one parameter:

```scss
$list: The list of hexadecimal color values to create XML color values from

getMapWithXML($list);
```

#### `color()`

Shorthand function for SCSS variables in a map. Instead of writing `map-get($map, $key)` you can write `color($map, $key)`. You can also create your own functions for alias names, in the general `colors.scss` file you can find examples for this.

```scss
$map: The map to get the value from
$key: The key of the value to get

color($map, $key);
→ color(base, 1);
```

This would be an example for a custom function, if your map is called `$base` and you want to get the value of the key `1` you can write the following:

```scss
@function base($key) {
  @return map-get($base, $key);
}

The return of this would be then f.ex.: base(1) → #000000
```

#### `colorCSS()`

Shorthand function for CSS variables in a map. Instead of writing `var(--name__color-1)` you can write `colorCSS($map, $key)`.

```scss
$map: The map to get the value from
$key: The key of the value to get

colorCSS($map, $key);
→ colorCSS(base, 1);
```

Also here you can create your own functions for alias names, in the general `colors.scss` file you can find examples for this.

```scss
@function baseCSS($map, $key) {
  @return var(--base__color-#{$key});
}

The return of this would be then f.ex.: baseCSS(1) → var(--base__color-1)
```

#### `add()`

Shorthand for `map-merge()` - Merges two maps together (with this function you are able to add or override values from a `!default` map).
Usage will be mostly for colors, typo, buttons and other utility maps.

```scss
$map1: The first map to merge
$map2: The second map to merge

add($override, $original);
→ $map2: add($map1, $map2);
```
