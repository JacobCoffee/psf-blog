---
title: 'Python package maintainers, help test the new PyPI!'
publishDate: '2018-02-26'
updatedDate: '2018-02-27'
author: A. Jesse Jiryu Davis
description: Warehouse is a next-generation Python Package Repository which will replace the existing code base that currently powers PyPI. (See the source code on GitHub...
tags:
  - pypi
published: true
legacyUrl: /2018/02/python-package-maintainers-help-test.html
---

[![](./image-1.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvk2k4d3vk_MhS-JdyunPK3FZZjwyTRljefr3u7DfN3Z33nuklBd74LJRNRJlyVqNs9Qt6Gpkvs3lHEdtcqg0R1PLI_qsVsM8j0aSocVzfG-XfmiSWyAmYLn5LHjVxTALYYA/s1600/warehouse.jpg)  
Warehouse is a next-generation Python Package Repository which will replace the existing code base that currently powers [PyPI](https://pypi.python.org/). (See the [source code on GitHub](https://github.com/pypa/warehouse), and [roadmap](https://wiki.python.org/psf/WarehouseRoadmap) for details.) We are seeking maintainers of projects on PyPI to test it and send us bug reports, and we're seeking new contributors to Warehouse. Since Warehouse must be a reimplementation of the existing PyPI, please focus initially on any differences, missing features, or incorrect behavior that is exhibited on [pypi.org](https://pypi.org/) that affect your workflows for account management and package maintainership. We'll be soliciting feedback on other concerns soon! Feedback on user experience, accessibility, and overall ease of use are welcome. Go to [the pre-production deployment at pypi.org](https://pypi.org/) and try it out!

## Background


Last year, [the PSF's Packaging Working Group successfully applied for a grant from Mozilla's Open Source Support program](https://pyfound.blogspot.com/2017/11/the-psf-awarded-moss-grant-pypi.html). Mozilla awarded USD 170,000 to get PyPI upgraded. The team's been working since early December—see [our progress reports](https://wiki.python.org/psf/PackagingWG) and [roadmap](https://wiki.python.org/psf/WarehouseRoadmap)—and [pypi.org](https://pypi.org/) now has the essential features that package maintainers, and most other users, need.  

## Guidelines for Participation


By participating, you agree to abide by the [PyPA Code of Conduct](https://www.pypa.io/en/latest/code-of-conduct/).  
You should sign up for the [PyPI Announcement Mailing List](https://mail.python.org/mm3/mailman3/lists/pypi-announce.python.org/) for updates.

## Things to test


Most of these you can test [on pypi.org](https://pypi.org/), using the same login as you use on [pypi.python.org](http://pypi.python.org/) (legacy PyPI). For testing destructive actions, like removing an owner, deleting a project, or deleting a release, please use [test.pypi.org](https://test.pypi.org/), which has an entirely separate package index.

### Workflows

-   Add/Remove Maintainer
-   Add/Remove Owner
-   Transition Ownership
-   User Registration and Confirmation
-   Login/Logout
-   Password Reset
-   Remove a project
-   Remove a release
-   View Journals for a Project
-   View Journals for a Release

Warehouse has handled new projects and new release uploads since last summer, so those workflows are not the most important to test now. The list of workflows above are the ones we request you to exercise.

## Security


If you find any potential security vulnerabilities, please [follow our published security policy](https://pypi.org/security/). Please don't report security issues in Warehouse via GitHub, IRC, or mailing lists. Instead, please directly email one or more of our maintainers.

## IRC livechat hours


Warehouse developers will be in IRC, in [#pypa-dev on Freenode](https://webchat.freenode.net/?channels=#pypa-dev), and available to talk about problems you run into, or about how to hack on Warehouse:  

1.  Tuesday Feb 27th: [1700 UTC / noon-1pm EST](https://www.timeanddate.com/worldclock/meetingdetails.html?year=2018&month=2&day=27&hour=17&min=0&sec=0&p1=24&p2=198&p3=90)
2.  Tuesday Feb 27th: [2300 UTC / 6pm-7pm EST](https://www.timeanddate.com/worldclock/meetingdetails.html?year=2018&month=2&day=27&hour=23&min=0&sec=0&p1=24&p2=198&p3=90)
3.  Thursday March 1st: [1700 UTC / noon-1pm EST](https://www.timeanddate.com/worldclock/meetingdetails.html?year=2018&month=3&day=1&hour=17&min=0&sec=0&p1=24&p2=198&p3=90)
4.  Thursday March 1st: [2300 UTC / 6pm-7pm EST](https://www.timeanddate.com/worldclock/meetingdetails.html?year=2018&month=3&day=1&hour=23&min=0&sec=0&p1=24&p2=198&p3=90%20)

Feel free to drop in!

## Notice


We're working hard on nearly every aspect of the Warehouse codebase to get it ready for production deployment and we are shipping features nearly every day, so check back and maybe even try using [pypi.org](https://pypi.org/) for your maintainer activities full time. Due to the rate of change some errors, downtime, and outright broken features may occur. We have some automated reporting of the scenarios in place, but let us know! Reminder: Sign up for the [PyPI Announcement Mailing List](https://mail.python.org/mm3/mailman3/lists/pypi-announce.python.org/) to be kept in the loop as we continue this process.

## Dive into the code


We've improved Warehouse's developer experience substantially in the last few months. We have [several open "good first contribution" issues](https://github.com/pypa/warehouse/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) and [a guide to getting started](https://warehouse.readthedocs.io/development/getting-started/). One of our maintainers, Ernest W. Durbin III, wants to help you dive in and to give you Warehouse stickers, and [has 30-minute 1:1 slots available to mentor you](https://twitter.com/EWDurbin/status/955415184339849217). We'll also be [running a sprint at PyCon North America in May](https://us.pycon.org/2018/community/sprints/)!

## Contact us



-   Security issues: [email Donald Stufft or Ernest W. Durbin III](https://pypi.org/security/)
-   [GitHub for all other bug reports & feature requests](https://github.com/pypa/warehouse/issues/new).
-   IRC: [#pypa-dev on Freenode](https://webchat.freenode.net/?channels=#pypa-dev) (someone's usually there 10am-5pm Central Time on weekdays, or come to the [livechat hours](https://wiki.python.org/psf/WarehousePackageMaintainerTesting#IRC_livechat_hours))
-   Email: [pypa-dev mailing list](https://groups.google.com/forum/#!forum/pypa-dev)


Thank you for testing Warehouse! You're helping us launch sooner and future users of PyPI will appreciate it. — The PyPI Team  

* * *

[Photo © Mark Hunter](https://www.flickr.com/photos/toolstop/4324416999)
