---
title: 'The Python Language Summit 2025: How can we make Breaking Changes Less Painful?'
publishDate: '2025-06-12'
updatedDate: '2025-06-12'
author: Seth Michael Larson
description: The first talk of the Python Language Summit was delivered by Itamar Oren. Itamar has plenty of experience at Meta deploying massive amounts of Python code t...
tags: []
published: true
legacyUrl: /2025/06/python-language-summit-2025-how-can-we-make-breaking-changes-less-painful.html
---

The first talk of the Python Language Summit was delivered by Itamar Oren. Itamar has plenty of experience at Meta deploying massive amounts of Python code to production. Itamar’s presentation focused on how Python core developers might make upgrades to Python versions smoother for users in the face of breaking changes to the language and standard library. Itamar shared that “not all breaking changes are equal” and suggested adopting a taxonomy of breaking changes and how much and when they would affect users.

Itamar made it clear that he was “not asking \[Python core developers\] to do fewer breaking changes”, but instead hoped to make breaking changes easier for users to work through during a Python version upgrade.

Users upgrading Python versions need to go through a flowchart for each breaking change:

-   Awareness of breaking changes
-   Finding the affected code
-   Fixing the affected code
-   Verifying fixes are correct

Starting with “Fixing”, Itamar noted that “fixing the code tends to be the easiest step, but easy at scale is still hard” and that fixing was easiest when you know where to do the fix. This was especially straightforward if the fix only used builtins or the standard library, noting that needing to take on new dependencies like packages on PyPI for removed modules was much more difficult.

“Migration guides are great, let’s do more of them”, Itamar said while thanking Barry for the imp module migration guide. Itamar called out a few suggestions for would-be migration guide authors, such as making the guide comprehensive for all removed APIs and providing an indication “whether an API is a drop-in equivalent or requires further changes”. Itamar gave the example of imp.load\_module() versus importlib.import\_module(), which was recommended in the migration guide but had different function signatures and couldn’t accomplish the same tasks.

Itamar noted the difficulty in finding the documentation for deprecated and removed modules because, after a module is removed, its corresponding documentation on [docs.python.org](http://docs.python.org) is also removed for that version. Carol Willing noted that the documentation team has been working on fixing the documentation removal issue for the “past 3 months”.

Finding code that’s affected by breaking changes was the toughest challenge, as breaking changes all had different “findability” metrics ranging between “easy" and "virtually impossible”. The easiest breaking changes to find in massive codebases are statically discoverable, such as being able to parse Python source code using an Abstract Syntax Tree (AST) or regular expressions to quickly hone in on problematic code.

The next easiest class of breaking changes to find are those that manifest at “build time”, which, since Python is an interpreted language, build time is equivalent to when PYC files are compiled. Itamar noted that “real code has good coverage for these issues”, like errors that happen on import time. The example noted for this type of breaking change was the accidental dataclasses mutables change in 3.12.

The most difficult class of breaking changes manifest during runtime, such as failures that depend on type or value information for parameters. These breaking changes are most likely to cause production outages because whether you find the affected code or not is dependent on type checking and test failures, which can be “highly variable”.

Itamar finished the presentation with a handful of suggestions for core developers on how to improve the backwards-incompatible change process. These suggestions included creating a taxonomy for breaking changes in terms of discoverability and fixability, and suggesting tools for automatically fixing backwards incompatible changes during upgrades. Ruff was suggested as a potential tool for applying these automatic fixes.

## Discussion

Eric Smith spoke about the dataclasses mutability change, noting that he and Raymond Hettinger had made the change and “didn’t recall getting any feedback until we released it, at which point we couldn’t fix it”. Eric wasn’t sure what he could have done for that specific case, but “thought that we are getting better at people using new versions during the beta period”. Eric also lamented that the change “would have been backed out had \[he\] known about the breakage”. Itamar suggested that core developers might collaborate with companies with large codebases for testing changes when core developers aren’t sure about compatibility.

Alex Waygood spoke about maintaining the typing-extensions project, which suffered from backwards compatibility issues, noting that “not many projects pin typing-extensions”, meaning the subtle changes end up breaking in surprising ways. Notably, typing-extensions broke Pydantic in the past, which caused problems for typing-extensions maintainers. Alex offered that “running the test suites of several large packages that depend on \[typing-extensions\] has helped catch many changes that weren’t expected to be backwards incompatible”, adding that “it would be great if there were an easier way to run the test suite of other projects”.

Carol Willing suggested working on making Python pre-releases easier to run using Continuous Integration (CI) and that this approach had been “successful” for scientific Python projects for finding and fixing breaking changes ahead of when the changes start affecting users. Itamar concurred, saying his “dream is to run global testing against \[Python main branch\] on a daily basis” but that this dream was “currently impossible” due to third-party dependencies. Pradyun Gedam noted that the idea of “ecosystem tests” had been discussed on the Packaging Discourse.
