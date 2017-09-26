# ez-linkify
A tiny, zero dependency JS plugin to create links in the DOM for you out of plain text. I ran into a situtation where some dynamically created content could only be plain text, but needed links, so I made this. Similar to markup, just structure your links in a certain way and linkify will do the rest.

## Usage
### Structure your links with double brackets like so:
```
[[<link text>, <link target>]]
```
Ex:
```
[[Check out google, https://google.com]]
```

### And in your code:
```javascript
//
// Using ES6 Modules
//
import Linkify from 'ez-linkify';

// Grab the element containing link or links in the text
const element = document.querySelector('.my-element');

Linkify(element);
```
And thats it! Linkify will replace your double bracket links with new `<a>` tags. Elements can contain multiple links, linkify will convert all of them.

### Options
At the moment there are only two options:

```javascript
Linkify(element, {
    targetBlank: false // boolean, optional - defaults to false
    classNames: [] // array, optional - defaults to []
});
```

### Full example
If you wanted to create a link that looks like this:
```html
<a href="https://google.com" target="_blank" class="link link-blue">Check out my link!</a>
```

In your markup:
```html
<div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Fusce hendrerit vel sem vitae ullamcorper. [[Check out my link!, https://google.com]] 
    Curabitur id dapibus mauris. Proin semper pulvinar eleifend.
</div>
```

In your javascript:
```javascript
import linkify from 'ez-linkify';

// Grab the element containing link or links in the text
const element = document.querySelector('.content');

Linkify(element, {
    targetBlank: true,
    classNames: [
        'link',
        'link-blue'
    ]
});
```

Result:
```html
<div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Fusce hendrerit vel sem vitae ullamcorper. <a href="https://google.com" target="_blank" class="link link-blue">Check out my link!</a> 
    Curabitur id dapibus mauris. Proin semper pulvinar eleifend.
</div>
```

## License

This package is made available under an MIT-style license. See LICENSE.

## Contributing

PRs are always welcome!