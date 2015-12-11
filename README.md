[PostCSS]:                 https://github.com/postcss/postcss
[Assemble]:                http://assemblecss.com
[Assemble Buttons]:        https://github.com/lukelarsen/assemble-buttons

# PostCSS Assemble Button Helper

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">

[PostCSS] plugin that helps with the use of Assemble Buttons.

This plugin will help set colors of buttons when using the [Assemble] framework.

## Example
```css
.btn--primary{
    bg-color: green;
    text-color: white;
    border-color: black;
    bg-hover-color: orange;
    text-hover-color: black;
    border-hover-color: red;
}
```

Will output:

```css
.btn--primary{
    background: green;
    color: white;
    border-color: black;
}

.btn--primary:hover,
.btn--primary:active{
    background: orange;
    color: black;
    border-color: red;
}
```

## Usage

This plugin doesn't do much on it's own. It is part of a [PostCSS] framework called [Assemble]. This plugin is included in [Assemble Buttons]. For usage see [Assemble Buttons].

The options that appear in the example will work in any class that has '.btn--' in it.