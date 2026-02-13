---
title: The path forward for typing - Python Language Summit 2020
publishDate: '2020-05-01'
updatedDate: '2020-05-01'
author: A. Jesse Jiryu Davis
description: '"There are a lot of PEPs about typing!" said Guido van Rossum at the Language Summit. Since 2014 there have been ten PEPs approved for Python''s type-checking...'
tags: []
published: true
legacyUrl: /2020/04/the-path-forward-for-typing-python.html
---

[![](./image-1.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqoC9n44SfaRHHwADcoqTJleTQvJIGr6zFfN9hyphenhyphenqojUqRVLmqxIFkVOCqDsNdHdSMX7FDKH6XJStnP98qzdjDlUPys6Mu52glSa58wq3nQbdT1ESgWWhRYRRXfa5Ad07dLJQ/s1600/guido-headshot-2019.jpg)

"There are a *lot* of PEPs about typing!" said Guido van Rossum at the Language Summit. Since 2014 there have been ten PEPs approved for Python's type-checking features. Two of them have been approved already this year: the relatively "esoteric" [PEP 613: Explicit Type Aliases](https://www.python.org/dev/peps/pep-0613/), and another that will have widespread impact, [PEP 585: Type Hinting Generics In Standard Collections](https://www.python.org/dev/peps/pep-0585/), written by Łukasz Langa and mainly implemented by Van Rossum. Thanks to this PEP, types which had been defined like `List[int]` can now be spelled `list[int]`, with a lowercase "L". As Van Rossum told the Python Language Summit, "We want to avoid a world where users have to remember, 'Here I have to use a capital-L `List` and here I use a lowercase-L `list`.'"  

[Read more 2020 Python Language Summit coverage](https://pyfound.blogspot.com/2020/04/the-2020-python-language-summit.html).  

* * *

A "generic" is a type that can be parameterized with other types. Generics are usually container types. Since Python 3.5, the `typing` module has provided "type aliases" like `List`, which can be parametrized with the type of values it contains, like `List[str]` in this type-annotated function definition:  

from typing import List
def greet\_all(names: List\[str\]) -> None:
    for name in names:
        print("Hello", name)

Van Rossum showed the Summit the following code, demonstrating that the ordinary built-in `list` and `dict` classes can now be used as generics for type annotations:  

\>>> p = list\[int\]
>>> p
list\[int\]
>>> p.\_\_origin\_\_
<class 'list'>
>>> p.\_\_args\_\_
(<class 'int'>,)
>>> p((1, 2, 3))
\[1, 2, 3\]
>>> from typing import TypeVar; T = TypeVar("T")
>>> dict\[str, T\]\[int\]
Dict\[str, int\]

The syntax `list[int]` is enabled by implementing `[__class_getitem__](https://docs.python.org/3.8/reference/datamodel.html#object.__class_getitem__)` on `list`. The built-in containers such as `tuple`, `dict`, `list` and `set` are supported, along with some standard library containers and abstract base classes, including `collections.deque`, `collections.abc.Iterable`, `queue.Queue`, and `re.Pattern`. The effect for everyday coders is mainly a matter of spelling, yet as Van Rossum said, "It's probably going to affect everyone's code, or everyone will encounter code like this." Fewer users will have to import type aliases such as `List` from the `[typing](https://docs.python.org/3.8/library/typing.html)` module; it will be required only for advanced annotations. Van Rossum asked the Summit, "How much of this do we want to make built in?"  

Python's approach to type-checking is to add type *annotations* in the source code, but to check types neither during compilation nor at runtime. Instead, programmers use a separate type-checker (such as [mypy](http://mypy-lang.org/) or [PyCharm](https://www.jetbrains.com/pycharm/)). The new PEP 585 type annotations are the same: they do no checking at all, so "nonsense" annotations like `list[str, str]` are permitted. It is the type checker's job to reject them.  

Annotations are not completely free at runtime, however: by default an annotation like `List[int]` is evaluated to create a type object when it is encountered, usually at module-load time. This can noticeably hurt startup times for big type-annotated programs. [PEP 563 Postponed Evaluation of Annotations](https://www.python.org/dev/peps/pep-0563/) was introduced in Python 3.7 to solve this problem: type annotations are saved as strings, and evaluated only when a type checker such as mypy requests it. This optimization is currently guarded behind `from __future__ import annotations`. Van Rossum asked whether postponed evaluation should become the default in Python 3.9, which will be released imminently, or 3.10.  

Also in Python 3.10 will be [PEP 604](https://www.python.org/dev/peps/pep-0604/), which permits the current `Union[t1, t2]` annotation to be spelled as `t1 | t2`, using the vertical bar to express a union of types. The PEP's scope might expand to add syntax that even programs without type annotations would enjoy. For example, `isinstance(x, (t1, t2))` could be written `isinstance(x, t1 | t2)`, and an exception handler could be written like `except t1 | t2`.  

Yury Selivanov noted that `typing.Optional[t]` could be replaced with `t | None`, and asked whether it could be shortened further as `t?`. "Every year," replied Van Rossum, "there's another feature that people want to use the question mark for." In his opinion, `t | None` is convenient enough, and another syntax would be redundant. (Although the new PEG parser would make it easy to implement.)  

Stéphane Wirtel asked if Python would ever have exception annotations. "Ouch!" said Van Rossum. The consensus is that Java's checked exceptions were a bad idea, and would probably be bad in Python too. "I don't think I have the stomach for that."  

The standard library and most PyPI packages have no type annotations. Type-hinted "package stubs" for this code are hosted in the [typeshed](https://github.com/python/typeshed) repository, but storing all those stubs in a monolithic distribution doesn't scale, and the problem will grow worse. In a [GitHub issue thread](https://github.com/python/typeshed/issues/2491#issuecomment-611607557), Jukka Lehtosalo predicted that in two years, stubs for third-party packages will outnumber those for the standard library, and in five years, typeshed will include more than 1000 third-party packages. As Van Rossum told the Language Summit, Lehtosalo's proposal will split typeshed into separate distributions so users can easily download just the stubs they need, consistent with [PEP 561](https://www.python.org/dev/peps/pep-0561/).  

Brett Cannon asked whether the standard library's annotations should be shipped with Python, either as stub files or in the code itself. Van Rossum said new stdlib code should be written with annotations inline, but old code includes optimizations and strange legacy behaviors that defy static typing. Currently mypy does not analyze standard library code because "it assumes that the standard library is full of untyped shit," it looks in typeshed instead. If indigenous type annotations grew in the standard library, the core team would have to coordinate with type checker authors to manage the change.  

Van Rossum offered an update on mypy. He admitted he hadn't been active on mypy recently, and "my former colleagues at Dropbox have not been able to make as much progress as we did in the past." Support for NumPy is stalled. The same goes for decorators, although once [PEP 612](https://www.python.org/dev/peps/pep-0612/) is approved it will provide a prerequisite for decorator support in mypy. Raymond Hettinger asked if mypy development needs funding. Michael Sullivan, a mypy contributor from Dropbox, replied that Dropbox considers mypy mostly complete, and has moved on to projects like their Python 3 migration. Van Rossum said funding could help. Personally he has "moved on to retirement." The Python static typing mailing list is quieter than Van Rossum would like, [interested people should join](https://mail.python.org/mailman3/lists/typing-sig.python.org/).  

There's better news about [mypyc](https://github.com/python/mypy/tree/master/mypyc), an experimental project to translate type-annotated Python into C. The translator's main use for now is converting mypy to C for speed. There is work in progress to allow a mix of Python and Python-translated-to-C in the same program, and to write documentation. The mypyc project expects a [Google Summer of Code](https://summerofcode.withgoogle.com/) student this summer.
