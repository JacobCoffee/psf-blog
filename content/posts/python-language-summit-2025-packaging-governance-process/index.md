---
title: 'The Python Language Summit 2025: Packaging Governance Process (PEP 772)'
publishDate: '2025-06-12'
updatedDate: '2025-06-12'
author: Seth Michael Larson
description: PEP 772 proposes a Packaging Governance Process through a new Python Packaging Council of 5 members (similar to the Python Steering Council). The entire proj...
tags: []
published: true
legacyUrl: /2025/06/python-language-summit-2025-packaging-governance-process.html
---

[PEP 772](https://peps.python.org/pep-0772/) proposes a Packaging Governance Process through a new Python Packaging Council of 5 members (similar to the Python Steering Council). The entire project is a collaboration between Barry Warsaw, Pradyun Gedam, and Python Software Foundation Executive Director Deb Nicholson.

“Packaging is critical to Python’s success”, Barry opened, “Python has grown from a grassroots effort and now needs some formalization; now is the time for Packaging”. Barry explained that the Packaging Governance effort has grown out of the [WheelNext initiative](http://wheelnext.dev/). Wheelnext touches many aspects of Python packaging, including installers, the wheel archive format, the Python Package Index, and CPython.

The Packaging Council was modeled after PEP 13 and the Python Steering Council, with a mandate for packaging standards and [packaging.python.org](http://packaging.python.org). Authority would be given through the Python Steering Council, similar to how the Steering Council delegates packaging PEP decisions today.

There are still some open questions that were likely discussed in more detail at the Packaging Summit, also at PyCon US 2025. Barry enumerated a few issues the group was concerned with, such as how to seed the initial voting membership to form the first Packaging Council, whether to use Python Packaging Authority members, the PSF Packaging Working Group, core developer members, or likely some combination of multiple groups interested in Python packaging.

Barry shared that the Council would likely be in regular communication with the Steering Council but was weighing their options on how to best do updates to the community, either using [discuss.python.org](http://discuss.python.org), Discord, or some other method. Also suggested was being able to share some staffing resources with the Steering Council, such as the Developers-in-Residence.

Pradyun added to the motivation for a Packaging Council, such as there only being “one standing delegate” for packaging PEPs. Pradyun also added that Python packaging is difficult to reason about, “the various pieces are all over, and you need to know everything to make things happen”.

Deb Nicholson shared that the Python Software Foundation gets contacted about packaging and improvements. “We have funding for packaging work, but we don’t have an entity to ask”. What the PSF wants is a group like the Python Steering Council functions, takes the community temperature, and knows who is interested and whether that entity can work with that PSF so that ideas can get all the way across the finish line”.

Barry clarified that the Packaging Council isn’t going to mandate what third-party tools have to do. The council intends to foster standards for interoperability while “still allowing lots of room for innovation and new ideas”. “Backwards compatibility is one of the axioms of Python packaging,” noted Barry and Pradyun agreed, saying that 12-year-old Python packages “still work” with current tools.

Thomas Wouters asked what Paul Moore, the standing delegate for packaging PEPs, thought of the packaging council PEP. Pradyun responded that “Paul likes the idea”. Deb shared that she had spoken with Paul “at length” and that some of the same problems are being felt with packaging as with Python and the Steering Council. “The amount of work to do compared to 5 years ago has increased 100 times over”. The three had been speaking to many others who have done packaging governance and conducting interviews. Most importantly, “people who have put in the work get to weigh in on PEP 772”.
