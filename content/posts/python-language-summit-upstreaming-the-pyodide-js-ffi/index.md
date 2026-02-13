---
title: 'The Python Language Summit 2025: Upstreaming the Pyodide JS FFI'
publishDate: '2025-06-12'
updatedDate: '2025-06-12'
author: Seth Michael Larson
description: 'The final talk presented at the Language Summit was given by Hood Chatham, who maintains the Pyodide project and is trying to make fetch() happen for Python ...'
tags: []
published: true
legacyUrl: /2025/06/python-language-summit-upstreaming-the-pyodide-js-ffi.html
---

The final talk presented at the Language Summit was given by Hood Chatham, who maintains the [Pyodide project](https://github.com/pyodide/pyodide) and is trying to make [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) happen for Python (among many other JavaScript APIs).

Pyodide is an Emscripten Python for JavaScript runtimes like browsers, Node, and Deno. Emscripten is a “weird platform, but can run an amazing amount of software without modification,” explained Hood when describing the Pyodide project. Pyodide is a Tier 3 supported target for Python with [PEP 776](https://peps.python.org/pep-0776/) (Emscripten Support) and [PEP 783](https://peps.python.org/pep-0783/) (Emscripten Packaging).

“So why would someone ever use \[Pyodide\]?” asked Hood rhetorically, “\[Pyodide\] performance is not great compared to native Python,” although “some games using Pyodide can get respectable performance in a browser”. The answer is “every device has a browser” and “zero-installation sandboxed Python”. Hood shared that many Large Language Model (LLM) projects are using Pyodide and its sandbox in order to “run the nonsense that AI spits out, safely”. Pyodide also sees usage in other projects like [Jupyter-Lite](https://jupyterlite.readthedocs.io/en/stable/), projects providing interactive web documentation to users, and among “educators and students”.

Hood added, “JavaScript is the operating system of the Web, and the [os module](https://docs.python.org/3/library/os.html) only exposes a small subset of the fundamental capabilities of the Web. Python needs to be able to access all JavaScript functionality”.

Hood asked core developers whether the changes that Pyodide had made could be upstreamed to CPython. “\[The changes\] are needed to implement an event loop and to make requests with fetch()”. Hood explained that the Pyodide team had a prototype that allows calling “await [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) that just works.”

The prototype directly converts common types like strings, integers, floats, booleans, and None to and from JavaScript and proxies other objects. “Python and JavaScript have quite similar object models with a few differences,” and are capable of being mapped onto one another. Calling a JavaScript function proxies the arguments with borrowing, and the return value passes control back to the caller.

Hood “wasn’t sure how others would feel about this,” noting that “none of the changes would affect any other platforms besides Emscripten” but acknowledged the patches being “a weird set of code”.

## Discussion

Łukasz Langa was in favor of the proposal, for two reasons: Firstly, because “async cannot work without \[upstream support\] … the asyncio support in Pyodide goes around the event loop”. Łukasz continued, “secondly, Micropython recently got browser support” and “they have a JavaScript FFI that frustratingly is almost the same but different than Pyodide’s JavaScript FFI meaning it's impossible to write code that calls the same JavaScript APIs \[without\] a god-awful translation layer”. If Python were to have “an official JavaScript API, this would make \[Damien George\] tweak the Micropython JavaScript FFI to be the same” and that having matching JavaScript FFIs “would be a big win for JavaScript support for Python”.

Michael Droettboom had concerns about maintenance if the code were to be upstreamed to CPython. “Anytime the code breaks, it’ll be on you and a small number of Pyodide maintainers to fix”. Hood shared that most of the breakages experienced by the Pyodide project today are from changes to the C API, as “there are bindings that still require some private APIs”. Michael closed with “we’ll have to see the code”.

Carol Willing was concerned about the Pyodide project itself, given its success and whether “bringing Pyodide into CPython” would “cause confusion”. Hood agreed that there would be downsides to existing users, including documentation and cross-referencing to JavaScript APIs, acknowledging that there are different expectations compared to CPython.
