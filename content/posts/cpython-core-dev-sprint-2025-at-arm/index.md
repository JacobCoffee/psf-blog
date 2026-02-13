---
title: 'CPython Core Dev Sprint 2025 at Arm Cambridge: The biggest one yet'
publishDate: '2025-10-20'
updatedDate: '2025-10-20'
author: Marie Nordin
description: 'Guest blog post authored by Diego Russo, Python Core Developer and Principal Software Engineer at Arm. Sprint overview For one week, Arm’s Cambridge headquar...'
tags: []
published: true
legacyUrl: /2025/10/cpython-core-dev-sprint-2025-at-arm.html
---

*Guest blog post authored by [Diego Russo](https://www.linkedin.com/in/diegor), Python Core Developer and Principal Software Engineer at [Arm](https://www.arm.com/).*

## Sprint overview

For one week, [Arm](https://www.arm.com/)’s Cambridge headquarters became the heart of Python development. Contributors from around the world came together for the CPython Core Developer Sprint. It was the largest gathering in the project’s history, with 35 core developers and 13 invited guests collaborating in person.  

[![](./image-1.jpeg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwbdL1M7vONMEs9F5EKnDZbcw2OHl5KG1krLfJ27XJcasncqct5PlAp04iXcNSGsPEoW1Q_EuphwQ1b2v_e4D5-m7BAow2NcgzfSpk0T6DxyFQfE-OVF3W_J0B93AVrY2JS3sMHO1ApY9EiV92JfX8baSB_IzwxIIhLvTnWAPA5daxbF7ReA/s5712/IMG_6658.jpeg)

Unlike a conference, the sprint is a working retreat. There are no spectators or formal keynotes, just space for deep technical debate, design, coding, and consensus-building.

[![](./image-2.jpeg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLUa9U6yipn5w8t-cnK-03uXw6O4cLkP7y-6c1CHQFUoDS_x-aifjrRIP8CjJ8ZNa4WDuo9EJfJFQckBwnE3aQpGeaEhVWgD6UZtn97GqsYM6JvhF2OOiT8jX0FY0Vu6IJ0DkYV8xUxgIu_We_ulh1HAlRMiq8oUxmijfCGh7Z4L91gmkKmw/s5712/IMG_6628.jpeg)

The sprint offers a rare chance for real-time dialogue. Ideas can be sketched on whiteboards, trade-offs debated face-to-face, and tricky issues given momentum.

[![](./image-3.jpeg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsZQuzdZEOSukwTQEIirtLEcE5Zjm0EsO0XfQGgVRYlrgC1OWq45X9z5J_vfMZphhSu-EZRmA5QaA-VZRzVvP9GwqzBeov27bcjHcsaGZzVKfYvecD9OurKvqZtmuTK3agiOswtT0u2Ew9U8tm-TanotzAj0E2WdhyLGAMc1Rf5vsLVbbvPQ/s5712/IMG_6642.jpeg)  

## What happened

The week included technical presentations, collaborative work, and community events. Talks and presentations were grouped around key themes:

-   JIT and performance

-   Ken Jin Ooi – Building a Community Around the JIT Compiler and demo of the new C API
-   Antonio Cuni – Tracing JITs in the Real World, highlighting challenges such as trace blockers, control flow, and async behavior

-   Packaging and distribution

-   Russell Keith-Magee – Managing Cross-Platform Wheel Builds
-   Brett Cannon – Precompiled Binaries from python.org

-   Language design and standards

-   Steering Council – PEP 793 and abi3/abi3t/abi4
-   Matthew Parkinson – Designing Deep Immutability

-   Ecosystem and infrastructure

-   Brett Cannon – WASI Update
-   Hood Chatham – Upstreaming the Pyodide FFI
-   Gregory P. Smith – Claude Code and Agents for Good in OSS

-   Lightning talks

-   Guido van Rossum – A New Python History Project
-   Ee Durbin – PSF Infrastructure Next Gen
-   Steve Dower – Python Install Manager
-   Larry Hastings – A Missing Fundamental Data Structure
-   Adam Turner – Bring Out Yer Dead (Issues)
-   Greg Smith – Async Exception Group Tracebacks

-   Arm contributions

-   James Greenhalgh – Arm Neoverse: Overview
-   Martin Weidmann – A Brief History of the Arm Architecture
-   Peter Smith – Compilers, ABI, and Optimizations

The program also included a Q&A with the Steering Council, where Barry Warsaw and Emily Morehouse joined remotely. It also featured a mentorship discussion led by Tania Allard on how to welcome and support new contributors.

[![](./image-4.jpeg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9y4eFNIeESejm4GM368lDA0zLopP5idYtFD70Jx7ZsagJwoK7P8JIrsEtLNnewzHmqmxKE2RZiD2iEsiIP5K-BJk4EY3qzYPSYj6OMp3gkat3c_JcWJZO4UiDTvASubrk6iI1iAvZAcFCgCPgBhifY2gVjUAGKbqLtoeDTZXNJc4Zm_T8dQ/s5374/IMG_6723.jpeg)

Beyond presentations, the sprint fostered hands-on collaboration. Developers had advanced JIT planning, explored progress on free threading, and discussed improvements to documentation and translations. They also strengthened testing and CI across platforms, and refined governance and contributor onboarding processes.

Antonio Cuni highlighted real-world JIT pitfalls, which informed many of these discussions.

[![](./image-5.jpeg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh68dNdZn6kd94YCSfgPyzS8oidQ__SkQgdU39gh97LleGUPqzt1ybETTkce2_R8z8prayZ9iA9cMWYcwEVyhwBxMGoreuUXg5vz-IinzkU14kl1jVyoFQUzj5eEtkto5ujID-0KAZYwLbx252Qf_Ts-U5GpodnEMRR1dKPywiuEd4qcfZfyg/s5712/IMG_6728.jpeg)  
Finally, the sprint included community activities that helped balance the technical intensity with moments of connection. The Python Guild at Arm hosted an Ask Me Anything (AMA) session, giving local engineers the chance to interact with core developers.

[![](./image-6.jpeg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhuNpALITqPzTqyvv3DN_hAkSadjR_b22IyekwRlGEH4q6gnVBQ-tlSikh1Jc6DoMWBz_OaIhqtyK5G-lM90m1SNxENGxKKoi41nYeHXRqomyXiJM46QSsKQiswO92cqBpgAXrFCwuWhiIZIlnLxmwDcaB16e-stku5XOWfzOBBQySBEiiIQ/s4646/IMG_76311.jpeg)  
A formal dinner at Jesus College reflected Cambridge traditions, while a punting trip on the River Cam offered a relaxed opportunity to connect outside of work.

[![](./image-7.jpeg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWaI9ejEC00j0yNeLS_1e0tX6xrRO6bMZVEd99btG8ibV0wgzhmQ8QNo20hcOfhCRAQY-6bn8T40mkzc8dGF2PyUBbnpwzIyTqpm5NJvSgIdBcAfgA4twd4jXyoIhenNiu6jcP72EYv4wpVjmpWWhQXoyuiDDLP2MmFTwyUakL5Ly82aVegQ/s5516/IMG_6700.jpeg)  

## A Team Effort

The Python Software Foundation coordinated the event, making the sprint possible. We thank Phyllis Dobbs for managing the RSVP process and the travel grants that enabled many contributors to join us in Cambridge.

Hosting the CPython Sprint at Arm’s Cambridge offices shows a shared commitment and we send huge thanks to everyone at Arm who made the sprint possible. Arm shares,  

> *“Hosting the latest CPython sprint was more than providing a venue. It was an investment in strengthening one of the most influential open-source communities. Python’s reach is vast, and ensuring its modern components run smoothly on Arm platforms helps the language stay inclusive and performant across architectures. Hosting the sprint gave Arm a way to give back, reinforce bonds with the core team, and invest in Python’s future.”*

The Arm Software Communities team led the effort from start to finish, handling logistics, sponsorship, and every detail that kept things running smoothly. Their support, along with the help of Central Engineering, Facilities, Workplace, People, IT, Developer Marketing, and the Python Guild organizers, ensured a successful and well-organized week for all participants.

[](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFP_CiYxoHCWgaZ41foj7-gaL0kS2zB4DdSQiaOdV5Y6I6OuhXr6zte78R8a44TWg_qlSR3HEpnr7-X3dn6DVjhWb9H8BDTpqreGLOmKaqNO3LjQOXxTRn8qVIRnQed0tiI6cu0euG2awp5NJFMe1hBgPMc6nR_9UPq6ne_G2Ebw9MYFc_HQ/s4032/IMG_6754.jpeg)[](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFP_CiYxoHCWgaZ41foj7-gaL0kS2zB4DdSQiaOdV5Y6I6OuhXr6zte78R8a44TWg_qlSR3HEpnr7-X3dn6DVjhWb9H8BDTpqreGLOmKaqNO3LjQOXxTRn8qVIRnQed0tiI6cu0euG2awp5NJFMe1hBgPMc6nR_9UPq6ne_G2Ebw9MYFc_HQ/s4032/IMG_6754.jpeg)[![](./image-8.jpeg)![](./image-9.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKNsOU9QkbfWZ8tAd0WwY6_kBtfwWqMnhuwyvDgn2Zdvc-Fuio4eMEJ2D70QDplsiyp4wEaJT292ypwDvoQhgjAgZdhyphenhyphenOEs1MHcAwX7XCWh-b9vCww8oATXETa5CXSzs8C4k-m3LdlBLdU3_0KImFOaV88ARQPEdjubFEnmcQalwo8s-9cHQ/s5712/IMG_9026.jpg) Finally, a huge thank you to all the attendees who traveled from across the world to spend a week in Cambridge. Some came from nearby in the UK and neighboring countries. Many others journeyed across Europe, several crossed the Atlantic, and a few took long-haul and even ultra-long-haul flights of more than 10,000 km. That dedication and commitment to the Python community is what truly made this sprint special.

[![](./image-10.jpeg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh41GONKt-5VAvyO9SoLKDxGB8rnV9QRepkG8vVt9WVI3D5HuMZD8ePqlChqEmXp6phGtW_CSjIdlHX_qIhkiWXRUfUHEXPnzeLsBA-eqfFhbP_em56YGqXg4CZaeMcE8o5-iXpBt5AgUdkhp5dq9Q5M_0D5hf9Aoi5yJb8Owhc4HGA5JvKGQ/s5134/IMG_6666.jpeg)

Organizing a sprint of this scale takes many hands. From sponsors to volunteers, organizers to attendees, everyone contributed in their own way. This sprint was a reminder that Python is more than a programming language. It is a community that works together, supports one another, and achieves more as a team than any individual could alone.

## Conclusion

The sprint was widely regarded as a success. Attendees described it as productive, well-organized, and an excellent community experience. Even so, some aspects could have been improved, and these are valuable lessons to take forward for future events.  
Sessions such as the Steering Council Q&A, the mentorship discussion led by Tania Allard, and the lightning talks stood out as highlights. They reinforced the value of bringing the community together in person.

Python is undergoing important technical transitions. Sprints like this accelerate evolution, resolve difficult challenges, and align the community. The concentration of expertise enabled focused, collaborative progress. The ripple effects of this sprint will shape code, discussion, and design decisions for months to come. We look forward to coming together again as a community.
