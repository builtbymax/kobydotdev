# Variables

## Colors

```markdown
../scss/base/variables/colors.scss
```

In Colors you can define maps of colors. For example `$base` and `$project`. The $base map contains basic colors which you will need all over your styles, while the $project map contains your theme or customer specific colors like the primary and secondary colors. You can define as many maps as you want, but it is recommended to keep it simple and only use the $base and $project maps. Also you can name the maps as you want but you need to keep in mind that the name of the map will be used in the CSS variables, so it is recommended to use a short name. _In the following examples we will use the $base and $project maps._

### Base Colors

The `$base` map contains the basic website colors f.ex. (you can choose any other name for the map):

```scss
$base: (
  1: #000000,
  2: #FFFFFF,
  3: #F380AA,
);
```

If you need to use these colors in your styles, you can use the `map-get()` function to retrieve them. For example, `map-get($base, 1)` will return _#000000_. You can also use as `base()` function, which is a shortcut for `map-get($base, $color)` which will be explained and created later [→ scss-map-aliases](#scss-map-aliases-color-functions).

### Project Colors

The $project map contains the customer or theme specific colors f.ex. (you can choose any other name for the map):

```scss
$project: (
  1: red,
  2: transparent,
  3: #F380AA,
);
```

If you need to use these colors in your styles, you can use the `map-get()` function to retrieve them (as SCSS Variables). For example, `map-get($project, 1)` will return _red_. You can also use as `project()` function, which is a shortcut for `map-get($project, $color)` which will be explained and created later [→ scss-map-aliases](#scss-map-aliases-color-functions).

### CSS Variables

This file also includes functions to create CSS variables for each color in the maps. The CSS variables are created using the `createCSSVariableSet()` mixin (_You can find the documentation in the utilities readme_), and are stored in the :root selector. You can create the CSS variables by calling the mixin like this:

```scss
:root{
  @include createCSSVariableSet(base, $base, $base-rgb, $base-xml);
}
```

You can see that not only the base map is passed to the mixin, but also the `$base-rgb` and `$base-xml` maps. These maps are used to create the CSS variables for the RGB and XML colors.
You need to create these maps in the first place like this:
  
```scss
// Create RGB & XML color map 
$base-rgb: getMapWithRGB($base);
$base-xml: getMapWithXML($base);
```

Now they can be used like the original $base map, but with the difference that the colors are now in RGB and XML format. In your styles, you can use the CSS variables like this:

```scss
color: var(--base__color-1);
color: var(--base__color-1__rgb);
color: var(--base__color-1__xml);
```

If you want a simpler call, you can create a `baseCSS()` function, which will be explained and created later [→ scss-map-aliases](#scss-map-aliases-color-functions).

### SCSS Map aliases / color functions (Optional) {#scss-map-aliases-color-functions}

If you want to use the CSS variables instead of the SCSS functions, you can use the following functions we will create in colors.scss:

Create SCSS Map aliases
This is optional, only if you want to use SCSS Variables instead of CSS Variables
Use like this f.ex. → `color: base(1)`;

```scss
@function base($key) { @return map-get($base, $key); } 
// base(1) → #000000
@function base-rgb($key) { @return map-get($base-rgb, $key); } 
// base-rgb(1) → rgb(0, 0, 0)
@function project($key) { @return map-get($project, $key); } 
// project(1) → #000000
@function project-rgb($key) { @return map-get($project-rgb, $key); } 
// project-rgb(1) → rgb(0, 0, 0)
```

Or if you want to use it generically, use the color() or colorCSS() function. These functions are already part of the mixin, so you don't need to create them. For example `color($base, 1)` will return _#000000_ and `colorCSS($base, 1)` will return _var(--base__color-1)_.

```scss
color(base, 1);
// color(base, 1) → #000000

colorCSS(base, 1);
// colorCSS(base, 1) → var(--base__color-1)
```

Also here are examples of how to get the same functions for CSS Variables
This is also optional, only if you want to shorten the CSS Variable names
Instead of using → _var(--base__color-1)_ you can use → baseCSS(1)

```scss
@function baseCSS($key) { 
  @return var(--base__color-#{$key}); 
} 
//  baseCSS(1) → #000000

@function baseCSS-rgb($key) { 
  @return var(--base__color-#{$key}__rgb); 
} 
//  baseCSS-rgb(1) → rgb(0, 0, 0)

@function projectCSS($key) { 
  @return var(--project__color-#{$key}); 
} 
//  projectCSS(1) → #000000

@function projectCSS-rgb($key) { 
  @return var(--project__color-#{$key}__rgb); 
} 
//  projectCSS-rgb(1) → rgb(0, 0, 0)
```
