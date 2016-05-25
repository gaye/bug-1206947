Bug 1206947
===========

This test case demonstrates a web worker's fetch request being
intercepted by a service worker running in Chrome but not Firefox. If
you open [the example](http://gaye.github.io/bug-1206947/) in Chrome,
you will see the modified response "i has baz". In Firefox (at least on
48.0a1), you'll see the unmodified body "i has bar".
