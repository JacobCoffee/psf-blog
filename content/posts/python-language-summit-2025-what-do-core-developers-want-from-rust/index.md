---
title: 'The Python Language Summit 2025: What do core developers want from Rust?'
publishDate: '2025-06-12'
updatedDate: '2025-06-12'
author: Seth Michael Larson
description: 'What do Python core developers want from future Rust support? “This talk is very timely, Rust turns 10 years old tomorrow”. David Hewitt is the maintainer of...'
tags: []
published: true
legacyUrl: /2025/06/python-language-summit-2025-what-do-core-developers-want-from-rust.html
---

What do Python core developers want from future Rust support?

“This talk is very timely, Rust turns 10 years old tomorrow”. David Hewitt is the maintainer of PyO3, a library that allows Python developers to more easily use Rust within a Python project. “It takes time for languages to be adopted, the test is whether a decade later the language is used”. David noted that Rust had already been mentioned multiple times earlier in the Language Summit, but also in “the Python Software Foundation’s [RFI response](https://www.regulations.gov/comment/ONCD-2023-0002-0107) to the US government about memory safety” regarding creating binary extensions.

“My belief is we’re all here to enable other developers, and we’re passionate about the tools we want to use ourselves,” noting that all opinions are valid today, whether folks want to use Rust or not.

David showed a graph of which languages are being used by packages on the Python Package Index (PyPI) with C, C++, Rust, and others. “Our best estimate is that somewhere between ¼ and ⅓ of all native code being uploaded to PyPI for new projects uses Rust”. “People are choosing to start new projects using Rust”.

David continued by sharing that PyO3 enables Python users to use Rust in their Python packages. He gave a short demonstration of how PyO3 can be used to create a simple Python module and function, and using Rust error handling in a way that maps directly to Python exceptions. PyO3 has its own build system in Maturin, is capable of generating type hints, and has many more developer-friendly features.

Where do Rust and Python need more work? Rust already “leans very well into supporting free-threading in Python”, but “sub-interpreters and module isolation are a challenge”. Rust has a “GCC backend” if you need to support “esoteric platforms”, but David conceded that “\[GCC support\] is not very mature yet, one for the future for sure”.

## Should Python core developers invest in Rust?

The main question that David came to the Language Summit with is in the title of the talk. “What do Python core developers want from the future of Rust support?” David broke the question down, asking whether core developers “wanted to design or endorse a Rust developer experience” for Python or if the core developers had an interest in Rust for their own toolkit.

Quoting the StackOverflow surveys, Rust is a “very well-loved language” and Rust developers “want to continue working with the language”. Anecdotally, David also shared that “many younger programmers are getting their start with Rust,” which could “increase the size of the talent pool” if Rust were invested in. David also suggested a “higher-level API” compared to the C API written in Rust, which could be a part of the “evolving the C API” to avoid the issues of backwards compatibility.

There are downsides too, David noted that going from one to two languages is a “massive step up in terms of complexity, both technical and social”. “There will probably be something better in the future, so why use it now?” David shared that “some folks believe Rust is ‘good-enough’ for what they need now, so they proceed”. Due to the current state of GCC support, “Rust would alienate esoteric platforms and that would be a shame”. David closed the downsides section with a note on naming: “CPython is ‘C + Python’, what does the C mean if there is Rust investment?”

David closed his presentation with a case study to look at for the adoption of Rust by a prominent C open source project: the Linux kernel. “Rust for Linux is a massively complicated project” and “\[the project\] is difficult not only technically but also socially” noting that some Linux kernel developers were pushing back against Rust for Linux either because they “don’t want to engage with Rust” or “don’t want their workflows to change”. Despite this, “Rust has been strategically valuable for the Linux kernel because the perception is that it enables a new generation of developers to continue contributing to the Linux kernel”.

Finally, David posed the question, “Is there a world for something like ‘Rust for Python’”?

## Discussion

Fred Drake asked whether David “had done any work with free-threading”? David replied that “working with Rust makes it easy to comply with free-threading,” adding that “you’d have to be using the unsafe keyword or trying really hard” to break Python free-threading with Rust. Marking Rust extension modules as “safe for free-threading” is “a lot more straightforward compared to C”. David thanked the folks at Quansight Labs for their help on PyO3 in this area.

Martin DeMello asked about David’s examples, such as modularizing parts of the interpreter to Rust, and whether David “had tried creating a proof-of-concept?” David replied that he hadn’t tried linking a Rust object into the interpreter but “knows of mixed language projects like Firefox where Rust, C, and C++ are statically linked into the same binary”. David said it’s possible to do, but would be a “high-complexity prototype”.

Brandt Bucher, one of the contributors to CPython’s new JIT suggested that because the JIT is experimental and doesn’t use the CPython API that it may be an interesting candidate for being converted to Rust as a proof-of-concept although Brandt was clear he “wasn’t willing to do the work”.

Gregory Smith suggested starting with an extension module, as they are isolated. “We want a better build system, and we keep talking about it, but \[a new build system\] hasn’t manifested. It’s all about who is the one doing the work”. Thomas Wouters cautioned that non-optional parts of the standard library would be tough as they “would need to support all tiered platforms”. David agreed, saying that the “build system doesn’t have to happen first” and that the extension module approach was “analogous to the Rust for Linux project,” where certain areas of the kernel were moved to Rust first.

Barry Warsaw asked about the debuggability of Rust if it were adopted in CPython. David replied that the experience wouldn’t be much different. “Rust is creating native call stacks” and “you would see frames in the interpreter, in GDB you would see Rust symbols”.

Hood Chatham had concerns about bloat from panic and symbols for Rust objects being linked to the interpreter. David recommended turning off panic and disabling the Rust standard library, and that there were other ways to avoid bloat that the interpreter didn’t need. “Rust stable ABI is still in progress”.

Overall, after the discussion, core developers did not seem categorically opposed to an optional Rust extension module in the Python standard library, but the general consensus was that this work may hinge on some build system changes and questions around platform support.
