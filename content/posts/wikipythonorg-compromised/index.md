---
title: wiki.python.org Compromised
publishDate: '2013-01-08'
updatedDate: '2013-01-08'
author: Brian Curtin
description: 'On December 28th, an unknown attacker used a previously unknown remote code exploit on http://wiki.python.org/. The attacker was able to get shell access as ...'
tags: []
published: true
legacyUrl: /2013/01/wikipythonorg-compromised.html
---

On December 28th, an unknown attacker used a previously unknown remote code exploit on [http://wiki.python.org/](http://wiki.python.org/). The attacker was able to get shell access as the "moin" user, but no other services were affected.  
  
Some time later, the attacker deleted all files owned by the "moin" user, including all instance data for both the Python and Jython wikis. The attack also had full access to all [MoinMoin](http://moinmo.in/) user data on all wikis. In light of this, the Python Software Foundation encourages all wiki users to change their password on other sites if the same one is in use elsewhere. We apologize for the inconvenience and will post further news as we bring the new and improved [wiki.python.org](http://wiki.python.org/) online.  
  
If you have any questions about this incident please contact [jnoller@python.org](mailto:jnoller@python.org). Thank you for your patience.
