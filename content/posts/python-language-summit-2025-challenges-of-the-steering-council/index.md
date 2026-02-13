---
title: 'The Python Language Summit 2025: Challenges of the Steering Council'
publishDate: '2025-06-12'
updatedDate: '2025-06-12'
author: Seth Michael Larson
description: Eric Snow opened his presentation about the Python Steering Council with an appreciation of current and former Steering Council members and all their hard wo...
tags: []
published: true
legacyUrl: /2025/06/python-language-summit-2025-challenges-of-the-steering-council.html
---

Eric Snow opened his presentation about the Python Steering Council with an appreciation of current and former Steering Council members and all their hard work, which was met with applause from Language Summit attendees. “... and the same goes for Guido, who took 5 people to replace”.

“We’ve had several years of experience with the Steering Council”, Eric opened, “this discussion is meant to be an opportunity to talk about and identify ways to make the Steering Council better”.

Eric started by listing the aspects of the Steering Council that have worked, “the language and its projects haven’t stagnated”, many PEPs have been finalized, “and most notably, sensitive issues have come up and the Steering Council has demonstrated leadership”.

In Eric’s opinion, the biggest issue was that he had been “surprised” by some responses from the Steering Council. What factors make the work of the Steering Council difficult? “...being diligent about being fair and united, which takes time and effort”.

“Effort and time are limited resources for volunteers”. Eric identified that in addition to managing the language, the Steering Council has to spend time managing the Developers’ in Residence, doing community outreach, addressing Code of Conduct violations, and creating presentations for PyCon US.

“There’s a temptation to compare core development under Guido to core development under the Steering Council,” Eric admitted he’s caught himself doing in the past. “The comparison isn’t helpful or fair”.

For Eric, it isn’t always clear whether the Steering Council is the voice of consensus or whether they are the deciders. The Steering Council is “inherently a bottleneck of core development”. “The nature of committee work combined with a volunteer schedule means it can take a while to discuss and reach a decision”. This directly impacts the pace of runtime development.

Eric also highlighted that “there’s a \[latency\] penalty for PEP authors whenever there is a new Steering Council,” which, according to PEP 13, happens on a yearly cadence. This is despite having [a relatively consistent set of people on the Steering Council](https://hugovk.github.io/python-steering-council/) year-over-year. Eric called out his own [PEP 554](https://peps.python.org/pep-0554/), being particularly affected by the Steering Council turnover.

“It’s difficult to not have feedback from \[the Steering Council\] in the midst of discussion thinking that there was consensus or that issues had settled only to be surprised by a later response from the Steering Council”. Eric shared that this had happened multiple times to him in the past and called the experience “deflating”. Eric said it seemed important to have a “sense of where the Steering Council or a delegate was on discussions as they unfolded”.

Eric was looking to discuss potential improvements, and he noted there had been a few in the past, including delegating decision-making and publishing notes.

## Discussion

Carol Willing, inaugural Steering Council member, commended Eric on “\[doing\] a great job putting together a positive presentation about the challenges”. What Carol remembered from the first Steering Council was thinking “there’s a ton of stuff to do and \[she couldn’t\] believe Guido was doing all of this on his own”. Carol identified that project management had become the biggest issue and that a “secretary or assistant role wasn’t the right terminology”. “It’s time to revisit the workload… \[the problems\] are largely due to the volume of stuff on the Steering Council’s plate”.

Brandt Bucher felt that the Steering Council appeared to have a policy of “don’t participate in discussions and only speak with one voice after the discussion had taken place”. Brandt felt this “didn’t feel like the leadership role he imagined the Steering Council would best function in”. Brandt referenced PEP 779, which received engagement from the community but hadn’t received any comments from the Steering Council.

Barry Warsaw, current Steering Council member, said he frequently asks himself, “Am I speaking as a core developer?” Barry referenced how Guido approached discussions and engaged as a core developer, not as a BDFL. Barry identified speaking with consensus as what he thought was the biggest delay, and that it “takes time and coordination”.

Pablo Galindo Salgado, also in the current Steering Council, shared that another issue was that you can’t only participate in discussions that you care about. There’s a scaling issue: “you have to participate in all PEP discussions, and not just to comment, you have to review \[the PEP\]”. Pablo also highlighted that there’s a problem of engaging with a topic as an individual core developer and then later discussing the topic within the Steering Council, having a different sentiment or reaction, thus causing surprise. “This will happen more if \[core developers\] expect the Steering Council to participate in discussions, and I am not sure that is going to fly”.

Emily Morehouse, Steering Council member, added that being on the Steering Council is a “seasonal job,” referencing the “onslaught of PEPs submitted ahead of the beta1 cut-off,” which was met with guilty laughter from core developers. Emily suggested being more transparent about a timeline for PEPs would be considered, and when PEPs would need to be submitted to be accepted in time for a particular release.

Mariatta asked about the transparency of funding for the Steering Council. “The Steering Council makes decisions about how the funding is spent, such as PyCon grants and sprints. Are there other ways that the funds can be spent? Can we request grants?”

Emily answered that much of the funding the Steering Council processes had already been “set aside” for specific goals like core developer sprints and the Developers-in-Residence program. Emily shared that “even as a Steering Council member, I want more transparency for \[funding\]” and that they are “striving for an annual report for how money is being spent”. Some of the funding is a “black box” for the Steering Council as well, so Emily agreed that there should be “more transparency, especially now that there is a substantial amount of money going through the Steering Council budget” and the ability to answer “what happens when we want to use money elsewhere?”

Carol agreed that “more transparency is needed and will solve a lot of the stress” that Steering Council members were feeling.

Guido van Rossum brought up the “Brown Act” in California, which requires that all meetings be open to the public for local government groups in charge of public infrastructure without private deliberations, barring personnel or sensitive issues. “It’s a completely different model” compared to the model set in the Steering Council charter, “but it gives a lot of transparency”. Guido liked the idea of “doing something dramatically different to get the situation unstuck”.

Pradyun Gedam commented on the continuity problem, which the [newly proposed Packaging Council](https://pyfound.blogspot.com/2025/06/python-language-summit-2025-packaging-governance-process.html), attempted to solve by “splitting the Packaging Council into two cohorts that are elected for two years each, offset by one year”. “This approach might help with some of the \[continuity issues\]”.

Thomas Wouters said when he was previously on the Steering Council that the members were “always trying to figure out what consensus was”. Thomas’s impression from a previous discussion about Zstandard was “going one way”, but after Gregory Smith ran a poll on Discourse, “the result was very different”. Thomas asked, “Does that mean we have been governing wrong, or should we be doing polls more often?”

Barry replied he thought that “polls are useful, but can’t be relied on completely” as they represented an “incomplete picture of the community”. “There are millions of users that will be affected and aren’t dialed in to Discourse, \[the Steering Council\] has to represent them, too”.

David Hewitt asked whether a majority of PEPs should be delegated, referencing the typing, packaging, and C API groups that exist already. Emily agreed that more delegation is a “good idea”, but “needed to be formal”. Emily said, “The typing council is a good example of a boundary of responsibility,” but “without a formal decision-making process, we end up with groups that want to help but don’t fulfill their responsibility”. Carol added that historically, most delegations were to individuals rather than working groups or councils.

Pablo also agreed that more delegation was good and that the Steering Council had already been delegating more and seeing success, referencing the typing council, documentation working group, and C API working group. But there are a few problems with the delegation model, like when the “people proposing the changes are a part of the council, so we can’t delegate to \[that council\].” Pablo also highlighted that delegation was sometimes difficult when there were two opposed groups on an issue. Pablo concluded by saying that “the more working groups we have, the better, but \[the Steering Council\] can’t demand a working group, so if you want to organize more, please do!”

Emily highlighted more issues with delegation, saying that “we have seen a lot of competing areas that people are working on”. “We’re trying to see how all of these projects work together. \[The Steering Council\] can’t delegate one person to be the BDFL of the JIT because they will be looking at the JIT but actually need to be looking at many other projects”.

  

“We’re in a territory that the Steering Council hasn’t had to deal with in a while”, Emily continued, suggesting that the Steering Council needed to contact folks involved in other large decisions in the Python language, such as the 2 to 3 transition.
