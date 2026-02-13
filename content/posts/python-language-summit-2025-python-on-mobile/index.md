---
title: 'The Python Language Summit 2025: Python on Mobile - Next Steps'
publishDate: '2025-06-12'
updatedDate: '2025-06-12'
author: Seth Michael Larson
description: 'Russell Keith-Magee and Malcolm Smith were at the Language Summit this year to announce the status of mobile support for Python: “After many years, this year...'
tags: []
published: true
legacyUrl: /2025/06/python-language-summit-2025-python-on-mobile.html
---

Russell Keith-Magee and Malcolm Smith were at the Language Summit this year to announce the status of mobile support for Python: “After many years, this year I can say that \[Python on mobile\] is there!” Russell proudly declared, with a large round of applause from the room.

All of the changes for [PEP 730](https://peps.python.org/pep-0730) and [PEP 738](https://peps.python.org/pep-0738) have been completed, and for Python 3.13, both iOS and Android are Tier 3 supported platforms. Continuous Integration (CI) is very stable, and failures are not because of iOS or Android.

Russell and Malcolm both wanted to know what was necessary for [Tier 2 support](https://peps.python.org/pep-0011/#tier-2) for iOS and Android. Tier 2 support means that releases are blocked when there are failures for the listed platforms, and that any breakages on those platforms during normal Python development would either need to be fixed or reverted within 24 hours of being detected by build bots.

The platforms both had the requisite 2 maintainers and stable continuous integration via buildbots. The only outstanding question was about whether official “artifacts” or “binaries” are needed for Tier 2 support, which Ned Deily dismissed, stating that “Linux is Tier 1 and doesn’t provide binary artifacts”. Knowing this, Russell and Malcolm will proceed with requesting Tier 2 support for iOS and Android.

Russell asked if iOS and Android tests could be added to the GitHub Actions CI that runs on every pull request, making failures more visible (compared to buildbots, which must be explicitly requested). Russell noted that these test runs would not affect CI times due to being shorter than an existing job: the Windows x86-64 free-threaded GitHub Action. The only downside? Running iOS would require macOS ARM runners, which are “in short supply”. Ee Durbin, Director of Infrastructure at the Python Software Foundation, was able to purchase more macOS ARM runners shortly after this issue was identified.

Russell also requested a single-process GitHub Actions run using a Linux runner to catch common issues that fail on mobile, like test cases not being annotated properly as using subprocesses. Thomas Wouters agreed with the proposal to add a single-process test run, noting that this configuration “actually captures bugs” and makes it “easier for the pull request owner to fix issues”.

As far as Python packages go, the Beeware team has made progress; pip and PyPI both support iOS and Android wheels. The build tool Meson is adding support for iOS, and Malcolm Smith is adding support for Android. Commonly used tools like “cibuildwheel” would require pre-compiled binaries in order to build mobile-friendly wheels, and “ideally these would be official CPython builds”. The team plans to work on more high-profile packages, like cryptography, to create mobile-friendly wheels.

The Beeware team is maintaining more Apple platforms than only iOS, such as the Apple tvOS, watchOS, and visionOS platforms. Each of these platforms has its own set of patches. Russell asked whether each of these platforms that are quite similar to each other needed their own Tier 3 status for the patches to be upstreamed to Python.

Russell then asked whether the top-level platform directories can be backported to previous versions of Python to accommodate the single XCode project for all platforms proposal. Thomas Wouters, release manager for Python 3.13 and 3.12, was happy to accept backported platform directories as they were unlikely to break many users. Ned Deily agreed and noted that “\[he’d\] like to get rid of everything in the Mac directory”.

The final question was regarding sysconfig data for mobile builds. Russell noted that mobile binaries are relocatable, but sysconfig data isn’t inherently relocatable and that this is “not just a mobile issue, also affects desktop relocatable and macOS framework builds”. Thomas chimed in again to say that sysconfig data was a “huge problem and not just for \[mobile\] because it’s tied to the build system”. “We should do something else and get rid of sysconfig data,” which received multiple claps and agreement amongst core developers.

Overall, the mobile story for Python is shaping up nicely, and after the Language Summit talk will likely be even more stable throughout the Python development process thanks to improvements in continuous integration and testing.
