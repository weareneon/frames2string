# frames2string

Live subtitled text has lots of repetitive text. 
This repetitive text is often a prefix of the either the whole string or substring from the last frame. 
As it may be a substring a simple replace first occurrence will be insufficient to produce a readable string.
This module provides a simple way to transform the text into transcript like text more suited to viewing by the user and other applications. 

**Important** always retain the frame text as the text of record and apply frames2string when presenting to a user.
Consider the returned value from frames2string to be the current best transcript like text available.
Updates will no doubt improve transcript production so **do not rely on future versions of frames2string to provide the same output as the version you are currently using**. 

### frames2string(array, [joinString=' '])

__Example__
``` js
> var frames2string = require("frames2string");
> var exampleFrames = [
  "is why the public is not warm to him.",
  "is why the public is not warm to him. The",
  "is why the public is not warm to him. The press",
  "is why the public is not warm to him. The press are",
  "is why the public is not warm to him. The press are taken",
  "is why the public is not warm to him. The press are taken with",
  "him. The press are taken with Bradley",
  "him. The press are taken with Bradley Wiggins,",
  "him. The press are taken with Bradley Wiggins, he",
  "him. The press are taken with Bradley Wiggins, he is",
  "him. The press are taken with Bradley Wiggins, he is Paul",
  "him. The press are taken with Bradley Wiggins, he is Paul Weller,",
  "Bradley Wiggins, he is Paul Weller, they",
  "Bradley Wiggins, he is Paul Weller, they are",
  "Bradley Wiggins, he is Paul Weller, they are obsessed",
  "Bradley Wiggins, he is Paul Weller, they are obsessed with",
  "Bradley Wiggins, he is Paul Weller, they are obsessed with them.",
  "they are obsessed with them. Olympians",
  "they are obsessed with them. Olympians are",
  "they are obsessed with them. Olympians are gods",
  "they are obsessed with them. Olympians are gods like",
  "they are obsessed with them. Olympians are gods like no",
  "they are obsessed with them. Olympians are gods like no other."
];
> frames2string(exampleFrames);
// is why the public is not warm to him. The press are taken with Bradley Wiggins, he is Paul Weller, they are obsessed with them. Olympians are gods like no other.
```