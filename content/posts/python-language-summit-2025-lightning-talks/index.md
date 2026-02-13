---
title: 'The Python Language Summit 2025: Lightning Talks'
publishDate: '2025-06-12'
updatedDate: '2025-06-12'
author: Seth Michael Larson
description: 'In memoriam: Michael Foord Larry Hastings led a moment of silence to remember former core developer Michael Foord, who passed away earlier this year. Michael...'
tags: []
published: true
legacyUrl: /2025/06/python-language-summit-2025-lightning-talks.html
---

## In memoriam: Michael Foord

Larry Hastings led a moment of silence to remember former core developer Michael Foord, who passed away earlier this year. Michael was known for many things, including “starting the tradition of having the Language Summit events at PyCon”. You can [read the memorial for Michael Foord on discuss.python.org](http://discuss.python.org).

## Pluggable JITs

The first lightning talk was delivered by Martin DeMello from Meta. Martin works on the [Cinder Just-in-Time compiler](https://github.com/facebookincubator/cinder) (JIT) at Meta which is “one of two Python JITs”. Martin asks whether there is room for alternative or “pluggable” JITs and envisions a future where a JIT would be pip-installable, a-la “pip install jit”.

To be able to build pluggable JITs, the CPython project would need to provide three things:

-   PyAPI\_UnstableFunc()
-   PyEval\_EvalFrameJIT()
-   User-defined opcodes

This would avoid the need for other projects like Cinder to copy substantial amounts of CPython code or fork CPython to provide a JIT. JITs need publicly linkable access to low-level functions. Martin has received “pushback” for this sort of API access, but said that “if the social contract is that you have to keep up with language features yourself this would be enough for JIT use”.

Opcodes are a “small namespace” of only 255 values, so “one opcode could be provided for user opcodes and require opargs unpacking” to avoid forking the Python interpreter. The PyEval\_EvalFrameJIT() API would be used instead of PyEval\_EvalFrame() when a pluggable JIT was used to allow the custom JIT to evaluate frames. See [PEP 523](https://peps.python.org/pep-0523/) for more information about Python’s current JIT.

## Virtual Threads from Java

Mark Shannon asked, “Did Java get threads right?” Mark recently opened a [thread on Python Discourse](https://discuss.python.org/t/add-virtual-threads-to-python/91403) about adding Virtual Threads to Python. Virtual threads are “like green threads” in Java and are built on delimited continuations. Java uses “stackful symmetric” coroutines compared to Python’s “stackless asymmetric coroutines”. Stackful means that code can yield from deep within the call stack, meaning that code avoids the “[What color is your function?](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/)” problem.

Mark shared a demo that started, briefly ran, and stopped over a million virtual threads, which “if you had been using system threads would have crashed your VM”. Virtual threads are a “bit heavier weight than coroutines”, but might be worth it for the benefits. “Threads don’t scale very well in free-threading”, where if virtual threads are combined with system threads, programs can get better performance. Mark encouraged others to take a look at the proposal on Discourse.

## Null Coalescing Operators “??”

Noah Kim proposed adding “null coalescing operators” to Python. Earlier in 2025, Noah [opened a thread](https://discuss.python.org/t/revisiting-pep-505/74568) on [discuss.python.org](http://discuss.python.org) about reviving [PEP 505](https://peps.python.org/pep-0505/). Instead of “null”, the operators would be “None’-aware. The three operators being proposed are:

-   None-aware access “?.”
-   None-aware comparison “??”
-   None-aware assignment “??=”

Noah shared an example of using each operator. None-aware access is useful for regular expressions to “concisely emulate ‘if is None’ behavior into a single line”:

> re.fullmatch(“pat”)?.span() == (0, 6)

Defaults using None can be improved using None-aware comparison and assignment:

> headers = headers ?? {“Content-Type”: “application/json”}
> 
> headers ??= {“Content-Type”: “application/json”}

Compared to:

> if headers is None:
> 
> headers = {“Content-Type”: “application/json”}

Noah shared a potential future for a Python that “builds on none-ness as a core feature”, such as adding .first() and .last() methods to lists when combined with none-aware operators for simpler and more correct code.

## Generative AI tooling vibe check

Gregory Smith wanted to get a general vibe-check on AI auto-completion use within an integrated development environment to work on open source software. A rough count of hands in the room showed around half of the folks had used AI autocompletion, and between a third and a quarter of people had used “agentic” AI for open source work.

“CPython is a very old codebase,” and some modules are “ridiculous for humans to understand,” like the Unicode module. Greg recommended core developers to try out some of the new tools and said, “The upcoming year will be intense in terms of what can be done with the tools”.

Carol Willing shared that she had used and paid for a tool called “CodeVis”. Despite being “early days”, the tool lets you ask questions about a codebase. “Good for exploring codebases you don’t know”. Greg agreed, saying that the tools “can tell you where to go to make changes”. “None of us understand the entire \[CPython\] codebase. These tools are helpful when plugging into another place you’re not used to”.

Greg is “coordinating with the Python Software Foundation” on making these AI tools available for interested core developers.

## Is “worse is better” still better?

The creator of the Python programming language, Guido van Rossum, was next up and asked, “Is ‘[worse is better](https://en.wikipedia.org/wiki/Worse_is_better)’ still better”? Guido conceded that this was “more a rant than a proposal” to “get core developers thinking”. Guido started by recounting earlier periods of Python development from 35 years ago, where he used UNIX “almost exclusively” and thus “Python was greatly influenced by UNIX’s ‘worse is better’ philosophy”.

“For Python, ‘worse is better’ has served me really well for a long time”, especially when Guido was writing most of the code. Guido shared many of the ways that early Python versions were “worse” than what we have today, such as no long integers, being built on top of C stdio, not having classes, etc.

These limitations meant that Guido could “get something working in 3 months”. “Even in the language definition, I didn’t think hard about many design issues, I copied what I found in C and [ABC](https://en.wikipedia.org/wiki/ABC_\(programming_language\)), Python’s predecessor”.

“Over the years, every single thing where I took a shortcut was eventually fixed”. Dictionary hashing had been “rewritten twice”, “we have garbage collectors up the wazoo”, and “now we have a lot of tests. At the time we had no tests” shared Guido with chuckles from core developers.

“In those times, ‘worse is better’ was key to getting the language accepted. I couldn’t afford to work 3 years on language design without user feedback or endorphins from people giving me kudos”. The initial release of Python happened less than a year after its development began, and “none of the issues were fixed, except classes,” which “were added by an intern”.

“The fact that \[Python\] wasn’t perfect encouraged many people to start contributing. All of the code was straightforward, there were no thoughts of optimization”. “These early contributors also now had a stake in the language; \[Python\] was also their baby”. Guido shared that many of these contributors began advocating for Python within their individual places of work.

“Does ‘worse is better’ still have a role today?” Guido contrasted early development to how Python is developed now: “features that take years to produce from teams of software developers paid by big tech companies. The static type system requires an academic-level understanding of esoteric type system features.” And this isn’t just Python the language, “third-party projects like numpy are maintained by folks who are paid full-time to do so”.

“Now we have a huge community, but very few people, relatively speaking, are contributing meaningfully.” Guido asked whether the expectation for Python contributors going forward would be that “you had to write a perfect PEP or create a perfect prototype that can be turned into production-ready code?” Guido opined for the “old days” where feature development could skip performance or feature-completion to get something into the hands of the community to “start kicking the tires”.

“Do we have to abandon ‘worse is better’ as a philosophy and try to make everything as perfect as possible?” Guido thought doing so “would be a shame”, but that he “wasn’t sure how to change it”, acknowledging that core developers wouldn’t want to create features and then break users with future releases.

Guido referenced David Hewitt’s PyO3 talk about Rust and Python, and that development “was using worse is better,” where there is a core feature set that works, and plenty of work to be done and open questions. “That sounds a lot more fun than working on core CPython”, Guido paused, “...not that I’d ever personally learn Rust. Maybe I should give it a try after,” which garnered laughter from core developers.

“Maybe we should do more of that: allowing contributors in the community to have a stake and care”.

## Let’s benchmark memory as well

Pablo Galindo Salgado, who is the maintainer of the [Python profiler Memray](https://github.com/bloomberg/memray), asserts that CPython should “also benchmark memory”. Execution speeds like “10% faster”, “dominate benchmarks”, but memory is “kinda important as well, especially because we’re doing big changes” and “\[Python\] is flying blind right now”.

“We’re measuring resident size of memory,” which is kinda like “one eye is blind”. Resident memory doesn’t show when the actual allocation is happening. Pablo also showed that resident memory can be affected by other programs running on your computer. For example, Pablo’s MacBook would non-deterministically move a large allocation of memory to “swap” after sleeping for long periods of time, and this would affect the resident memory graph.

Pablo shared other views into memory available on Linux, such as “working set memory”, showing the memory that your program is “touching”, and showing memory that is allocated but not being used. “Currently, we can’t use these types of memory, we only have one number, \[resident memory\] today”.

“Memory has become an afterthought, we are focusing too much on speed. Regressions in memory are usually accidental”. Pablo proposed [memory.python.org](http://memory.python.org) or reusing performance infrastructure, and for the Python core developer team to create some memory-focused benchmarks.

## T-strings brain dump

Lysandros Nikolaou gave “less a lightning talk” and “more a brain dump”. Lysandros showed off T-strings ([PEP 750](https://peps.python.org/pep-0750/)) and shared that an [issue](https://github.com/python/cpython/issues/133970) was opened asking to make Templates and Interpolation types [Generic](https://typing.python.org/en/latest/reference/generics.html). Lysandros wondered if this was the correct approach or whether core developers needed to “think about the type system in general in a different way”. He didn’t think “any of the choices presented are good enough” for “people building DSLs or combining static analysis and parsing DSLs with runtime information on types”.

Lysandros closed by asking core developers to “think about how the type system will evolve under the unique possibilities that T-strings allow or whether the status quo is enough”.
