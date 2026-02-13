---
title: 'The Python Language Summit 2025: State of Free-Threaded Python'
publishDate: '2025-06-12'
updatedDate: '2025-06-12'
author: Seth Michael Larson
description: '“Does it make sense to move to the next phase of PEP 703?”, core developer Matt Page opened his presentation to the Language Summit. Free-Threaded Python has...'
tags: []
published: true
legacyUrl: /2025/06/python-language-summit-2025-state-of-free-threaded-python.html
---

“Does it make sense to move to the next phase of [PEP 703](https://peps.python.org/pep-0703/)?”, core developer Matt Page opened his presentation to the Language Summit. Free-Threaded Python has come far since the last Language Summit, where [Daniele Parmeggiani presented on free-threaded Python](https://pyfound.blogspot.com/2024/06/python-language-summit-2024-free-threading-ecosystems.html) using the then-newly-added “--disable-gil” option.

Matt had prepared a status report for free-threaded Python on all of the axes that PEP 703’s acceptance had laid out: Performance, Stability, Maintainability, and Adoption, and wanted to ask core developers when the PEP should proceed to the next stages.

## Performance

The performance gap for free-threaded and non-free-threaded Python was 40% in Python 3.13. This has been reduced to less than 10% for most platforms, and the gap is platform-dependent. For macOS, there is not much difference, but for Ubuntu and Windows, the gap is around 7-8% slower for single-threaded workloads. Matt stressed that these values are “point-in-time” and that the team will keep working on them, but “will eventually reach a point of diminishing returns”.

Matt added that the memory overhead was more substantial at 20% more for pyperformance workloads compared to without free-threading, but that the team “was just starting to work on this”. Matt suspected that the memory overhead was “mostly fixed” and thus “would be a smaller percentage overhead in real workloads”.

## Stability

Matt shared that the architectural changes for free-threaded Python had all been completed and that none of the reported issues “required any large architecture changes”. “\[Sam’s\] design has proven to be sound, which is great for the future”. The issues that are reported are not disproportionate compared to bugs reported about the rest of the CPython project, and “around half of the issues are data races reported by \[ThreadSanitizer\], which are easier to fix”.

The remaining work is creating a Stable ABI for free-threading and continuing to fix thread-safety issues with standard library modules. The most popular areas of Python, like dictionaries and lists, are already thread-safe, but the team still has to “work through the long-tail” of APIs.

## Maintainability

Matt acknowledged that free-threaded Python was a step-function of complexity and asked, “Can core developers support this complexity?” Matt noted that the set of contributors to free-threaded Python architecture was small but growing. Luckily, “the complexity is well-contained. Most people won’t need to touch free-threaded code and most core developers will only interact with critical sections which are well-documented”. Matt shared that there is “comprehensive documentation” for both core developers and users looking to parallelize workloads.

## Adoption

Quansight Labs has [created a resource page](https://py-free-threading.github.io/tracking/) available for users trying out free-threaded Python or migrating their code and extension modules to support free-threaded Python. There’s also a [Discord channel](https://discuss.python.org/t/free-threaded-python-community-discord/88571) and [Threading category on the Python Discourse](https://discuss.python.org/c/threading/38) for users looking for help. The resource page also hosts a [free-threading compatibility status for important Python packages and tools](https://py-free-threading.github.io/tracking/).

Matt also shared another [compatibility status tracker](https://hugovk.github.io/free-threaded-wheels/) created by Hugo van Kemenade that automatically updates based on the availability of free-threaded wheels (wheels with an ABI tag that ends in “t” like “cp13t”) for popular Python packages with extension modules. The current status was around ⅙ of the top 360 projects on PyPI, with extension modules supporting free-threading, notably popular scientific packages like numpy, pandas, and scipy.

Matt also recommended anyone interested in more about community adoption to watch Lysandros Nikolaou and Nathan Goldbaum’s talk at PyCon US titled “[Unraveling Community Support for Free-Threaded Python](https://us.pycon.org/2025/schedule/presentation/42/)”. The recording is [now available on YouTube](https://www.youtube.com/watch?v=EuU3ksI1l04).

Matt asked for a few outcomes from the free-threading discussions at the Language Summit. Firstly, Matt hoped that core developers might start thinking about free-threading from the beginning when designing and developing new language features. He followed up with a suggestion to focus on performance and correctness when free-threading is enabled.

Secondly, Matt was hoping to receive a signal for the community that free-threading was not going to disappear suddenly. “We need to see more people using \[free-threading\] to find the next set of bugs and to test the implementation”, Matt continued, “and if \[free-threading\] has an air of experimentality, it’s harder to justify adopting \[free-threading\]”.

The current status of PEP 703 is that free-threading has been conditionally accepted by the Steering Council, and that the ability to back out all free-threading code from CPython is reserved by the Steering Council in case there are problems with the implementation. That status hasn’t materially changed since the PEP’s conditional acceptance.

Matt concluded his presentation by asking whether the Steering Council and core developers had thoughts or concerns on proceeding to the next stage of PEP 703 and free-threading.

## Discussion

Core developer Eric Smith asked whether removing the Global Interpreter Lock (GIL) would cause a “permanent mental overhead for core developers” and asked how often other core developers made a change in Python that broke free-threading. Matt shared that this situation was “pretty rare so far,” especially beyond ThreadSanitizer failures.

“At the C-layer, you already had to think about the GIL potentially getting released”, commented Thomas Wouters, “...cases that were protected by the GIL before PEP 703 can now easily be protected by critical sections”. Thomas added, “There are cases where you need to think about \[free-threading\], but for the most part it’s not that big of a deal” and “The tools from PEP 703 make it not hard to write correct code, even under free-threading”.

Brandt Bucher pushed back on Thomas’s comments that the interpreter already had to worry about reentrant code, saying that free-threading is another flavor and that there definitely is “mental overhead” and an “ongoing concern and constant friction”. Especially in previously straightforward cases like getting an item from a list.

Brandt asked whether 16% of PyPI packages supporting free-threading was enough to say that free-threading couldn’t become a “rugpull” situation, and if not, “what number would the Steering Council be comfortable with?” Brandt also identified that not only the availability of free-threaded wheels, but also their usage through downloads should be examined, to see whether free-threading was being used in the real world.

Brandt also commented on unmaintained packages with extensions that “would never be thread-safe”. Brandt asked whether the plan was to keep the functionality that falls back to using the GIL when a module isn’t marked as free-threading safe. Sam Gross confirmed that “\[he\] didn’t see any reason to remove the optional GIL”, even when free-threading became the default.

When asked about thread-safe containers and data structures for users, Matt answered that “they wanted to provide thread-safe data structures”, but that it “hasn’t been a focus right now” and that the work would likely start as a package on PyPI before moving to the standard library after “getting the abstractions right”.

Gregory Smith, introducing himself as a “token” Steering Council member, said he wanted to “listen to what other \[core developers\] are saying at the Language Summit and PyCon US” and to get a “vibe check” about how free-threading is going. Greg shared that the Steering Council was “waiting for the end of PyCon US to give an update on \[PEP 703\]” and that the current status is a bit of a “chicken and egg” situation between the experimental labeling and whether users can expect free-threading in the future to drive more adoption.

Thomas provided his perspective that “maintainability” was the biggest question in his mind. The number of projects going on, JIT, faster CPython, free-threading, general interpreter development, that it is “probably inevitable there’ll be times with proposed changes that these projects will be brought into conflict”. Thomas highlighted the need for a way to resolve the tradeoffs, like performance versus stable free-threading, and that “as a community, we need to own the shared responsibility that the entire ecosystem works”.

Pablo Galindo Salgado, who is also a Steering Council member, was concerned that we were seeing the “easy part” of free-threading adoption. “Numpy and the interpreter are receiving lots of support from people who know what they’re doing”. Pablo was curious how the work to adopt free-threading in other extensions would proceed without this expertise and resourcing. Pablo didn’t think this was a blocker for free-threading, but “made him less enthusiastic about the message to ‘just do it’” and would like to avoid a situation where a decision is made but then the “long-tail of adoption takes forever because we didn’t understand how to drive \[adoption\]”.

Thomas agreed that more documentation was needed on how to debug issues like ThreadSanitizer, to set expectations for users and library maintainers, and to build tools for thread-safety for libraries and users. Thomas felt confident that this would get done and that “the work isn’t unknown work, we know what we need to do”.

“I think we’re on that precipice of scientific Python really embracing more of the free-threading” said Carol Willing, recalling the infamous Python 2 to 3 transition for scientific Python projects “which was the initial driver for greater adoption of Python 3”. Carol hoped that there would be a huge push this year on free-threading and building on the awareness and the documentation: “I was always skeptical of whether we would get the social things in-place, and I think we are and we’re doing it well.”
