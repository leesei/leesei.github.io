---
title: Python notes
description: ""
created: 2014-12-11
updated: 2025-06-24
tags:
  - comp/lang
  - python
---

Compared with Node.js, Python has more "batteries" included and we can write functional script without external dependencies. This is a great boom for deployment.

It's also easier to create a single binary with all dependencies bundled for distribution, see [[python-settings#Packaging Application/Freezing]].

[Welcome to Python.org](https://www.python.org/)
[Python Insider](https://blog.python.org/)
[Python Tutorials – Real Python](https://realpython.com/)
[Python Training by Dan Bader – dbader.org](https://dbader.org/)

[VSCode's Python Interactive mode is AMAZING! - YouTube](https://www.youtube.com/watch?v=lwN4-W1WR84)
[Advanced Visual Studio Code for Python Developers – Real Python](https://realpython.com/advanced-visual-studio-code-python/)

[filiplajszczak/awesome-zen-of-python: awesome list of so called python philosophy resources](https://github.com/filiplajszczak/awesome-zen-of-python)
[The Zen Of Python Is A Joke And Here Is Why (You Should Not Take It Too Seriously) - DEV Community](https://dev.to/abdurrahmaanj/the-zen-of-python-is-a-joke-and-here-is-why-you-should-not-take-it-too-seriously-508d)

[Clean Code in Python | TestDriven.io](https://testdriven.io/blog/clean-code-python/)
[Stop Writing Messy Python: A Clean Code Crash Course - KDnuggets](https://www.kdnuggets.com/stop-writing-messy-python-a-clean-code-crash-course)

All python code are executed statements, no such thing as declaration
[Where is Python heading in 2018/19? When is version 4 coming out and what new features and improvements can we expect in next two years? - Quora](https://www.quora.com/Where-is-Python-heading-in-2018-19-When-is-version-4-coming-out-and-what-new-features-and-improvements-can-we-expect-in-next-two-years)
[The creator of Python on how the programming language is learning from TypeScript - TechRepublic](https://www.techrepublic.com/article/the-creator-of-python-on-how-the-programming-language-is-learning-from-typescript/)
[Why is Python So Popular Among Programmers?](https://blog.eduonix.com/software-development/python-popular-among-programmers/)

[The Hitchhiker’s Guide to Python!](https://docs.python-guide.org/) [source](https://github.com/realpython/python-guide) ❗!important
[BeginnersGuide - Python Wiki](https://wiki.python.org/moin/BeginnersGuide)

[vinta/awesome-python: A curated list of awesome Python frameworks, libraries, software and resources](https://github.com/vinta/awesome-python)
[trananhkma/fucking-awesome-python: awesome-python with and](https://github.com/trananhkma/fucking-awesome-python)
[Awesome Python](https://python.libhunt.com/)
[Python Central | Python Programming Examples, Tutorials and Recipes](https://www.pythoncentral.io/)
[trekhleb/learn-python: 📚 Playground and cheatsheet for learning Python. Collection of Python scripts that are split by topics and contain code examples with explanations.](https://github.com/trekhleb/learn-python)
[TheAlgorithms/Python: All Algorithms implemented in Python](https://github.com/TheAlgorithms/Python)

[Why Python? - DEV Community 👩‍💻👨‍💻](https://dev.to/thisisrgaurav/why-python-3o39)
[What Can I Do With Python? – Real Python](https://realpython.com/what-can-i-do-with-python/)

[Python 3.7 beginner's cheat sheet | Opensource.com](https://opensource.com/article/18/9/python-37-beginners-cheat-sheet)
[Welcome to Python Cheatsheet! — pysheeet](https://www.pythonsheets.com/index.html)
[An A-Z of useful Python tricks](https://www.freecodecamp.org/news/an-a-z-of-useful-python-tricks-b467524ee747)

[From Anaconda Python to PyPy: Know your Python distributions | InfoWorld](https://www.infoworld.com/article/3267976/python/anaconda-cpython-pypy-and-more-know-your-python-distributions.html)

[How we rolled out one of the largest Python 3 migrations ever – Dropbox Tech Blog](https://blogs.dropbox.com/tech/2018/09/how-we-rolled-out-one-of-the-largest-python-3-migrations-ever/)

[Russell Keith-Magee - Keynote - PyCon 2019 - YouTube](https://youtu.be/ftP5BQh1-YM?t=1271) Black swan of Python

## Changelog/Features History

[A reverse chronology of some Python features](https://snarky.ca/a-reverse-chronology-of-some-python-features/)
[Python 3.11: Cool New Features for You to Try – Real Python](https://realpython.com/python311-new-features/) better error messages; performance improvements; better async syntax; TOML; ExceptionGroup
[Python 3.10: Cool New Features for You to Try – Real Python](https://realpython.com/python310-new-features/) structural pattern matching; type unions, aliases guards;
[Python 3.9: Cool New Features for You to Try – Real Python](https://realpython.com/python39-new-features/) type hinting generics in standard collections; union on `dict`
[Cool New Features in Python 3.8 – Real Python](https://realpython.com/python38-new-features/) `:=` operator; positional-only parameters; `=` in f-strings
[Cool New Features in Python 3.7 – Real Python](https://realpython.com/python37-new-features/) `dataclasses`; `asyncio`
[Cool new features in Python 3.6 – dbader.org](https://dbader.org/blog/cool-new-features-in-python-3-6)

## Python on Windows

[Episode #243 Python on Windows is OK, actually - [Talk Python To Me Podcast]](https://talkpython.fm/episodes/show/243/python-on-windows-is-ok-actually)
[Steve Dower - Python on Windows is Okay, Actually - PyCon 2019 - YouTube](https://www.youtube.com/watch?v=uoI57uMdDD4)

1. Windows store (Python 3.7+)

[3. Using Python on Windows — Python documentation](https://docs.python.org/3/using/windows.html#the-microsoft-store-package)
[Python 3.8 - Microsoft Store Apps](https://apps.microsoft.com/store/detail/python-38/9MSSZTT1N39L?hl=en-us&gl=us&activetab=pivot%3Aoverviewtab)

This provides `python3.exe` already on PATH

1. Installer (any version)

[How To Install Python 3 on Windows {Quickstart}](https://phoenixnap.com/kb/how-to-install-python-3-windows)
The installer has a "Add Python to PATH" option
`%LOCALAPPDATA%\Programs\Python\Python37-32;%LOCALAPPDATA%\Programs\Python\Python37-32\Scripts`

Adding to path may cause an app with embedded
This provides `py.exe`, `python.exe`

.NET app uses whichever Python distribution on `PATH`
This is different from embedded Python (c.f. SublimeText), <https://docs.python.org/3/using/windows.html#the-embeddable-package>
This however may be a plus for our app as we can use [Intel Distribution for Python](https://software.intel.com/en-us/distribution-for-python)

## Runtime/Distributions

> it's impossible to install multiple distros without coming to a mess, pick one

[PythonDistributions - Python Wiki](https://wiki.python.org/moin/PythonDistributions)

[Download Python | Python.org](https://www.python.org/downloads/) CPython, the official Python implementation

[Individual Edition | Anaconda](https://www.anaconda.com/products/individual)

[Intel® Distribution for Python | Intel® Software](https://software.intel.com/en-us/distribution-for-python) optimized for Intel CPUs

[IronPython.net](https://ironpython.net/) .NET Core, Python 2.7 only

Don't hardcode `python3.7` as executable name
Python version should be a requirement to be satisfied (by pinning particular version or `venv`), `python` or `python3` can be assumed to be the correct version

## Learn

[Perfect Your Python Development Setup (Learning Path) – Real Python](https://realpython.com/learning-paths/perfect-your-python-development-setup/)
[Getting started with... Python - Stack Overflow Blog](https://stackoverflow.blog/2021/07/14/getting-started-with-python/)
[simeonfranklin.com - Python Fundamentals](http://simeonfranklin.com/python-fundamentals/) [PDF 2013](http://simeonfranklin.com/python_fundamentals.pdf)
4 day comprehensive tutorial, target audiences are not advanced
[Python in Plain English](https://python.plainenglish.io/)
[The 35 Words You Need to Python | yawpitchroll](https://yawpitchroll.com/posts/the-35-words-you-need-to-python/) ❗!important
[Learn Python By Example - PythonForBeginners.com](https://www.pythonforbeginners.com/)
[Python tutorial - beginner Python tutorial](http://zetcode.com/lang/python/)
[9 Free Online Courses for Python Beginners](https://www.makeuseof.com/python-online-course-free/)

[【python】B站没人讲过的CodeObject，python底层实现一点都不简单！ - YouTube](https://www.youtube.com/watch?v=2ifX3yAnAFc&list=PLSo-C2L8kdSNAdlCQQ84dlszsiD-gRM5J&index=7) ❗!important

[PY4E - Python for Everybody](https://www.py4e.com/)
[Programming for Everybody (Getting Started with Python) | Coursera](https://www.coursera.org/learn/python)
[Python for Everybody - Full University Python Course - YouTube](https://www.youtube.com/watch?v=8DvywoWv6fI)
[Python Tutorial for Beginners - YouTube](https://www.youtube.com/watch?v=8124kv-632k) freeCodeCamp, 2:52:12

[trinket - Python 3](https://trinket.io/features/python3) playground, with Skulpt
[python-utils.com](https://www.python-utils.com/)

[The best Python websites and resources - The MagPi MagazineThe MagPi Magazine](https://www.raspberrypi.org/magpi/best-python-websites-resources/)
[Everything About Python — Beginner To Advanced - FinTechExplained - Medium](https://medium.com/fintechexplained/everything-about-python-from-beginner-to-advance-level-227d52ef32d2)
[Learning Python: Best free books, tutorials and videos - TechRepublic](https://www.techrepublic.com/article/learning-python-best-free-books-tutorials-and-videos/)
[Practical Business Python -](https://pbpython.com/)
[Data Structures & Algorithms in Python - Self Paced](https://practice.geeksforgeeks.org/courses/Data-Structures-With-Python)

[Preface - Python resources for everybody](https://learnbyexample.github.io/py_resources/)
[Intermediate to Advanced resources - Python resources for everybody](https://learnbyexample.github.io/py_resources/intermediate.html)

[Python Basics – Real Python](https://realpython.com/tutorials/basics/)
[Intermediate Python Tutorials – Real Python](https://realpython.com/tutorials/intermediate/)
[Learn Python Programming | Python Tutorial](https://pythonbasics.org/)
[Python Tutorials - Python Tutorial](https://pythonspot.com/)

[Automate with Python – Full Course for Beginners - YouTube](https://www.youtube.com/watch?v=PXMJ6FS7llk)
[What Does It Take To Be An Expert At Python? - YouTube](https://www.youtube.com/watch?v=7lmCu8wz8ro)
[Expert Python Tutorials - YouTube](https://www.youtube.com/playlist?list=PLzMcBGfZo4-kwmIcMDdXSuy_wSqtU-xDP) Tech With Tim
[anthony explains - YouTube](https://www.youtube.com/playlist?list=PLWBKAf81pmOaP9naRiNAqug6EBnkPakvY) intermediate topics
[Talk Python Training - Python tutorials and courses for developers](https://training.talkpython.fm/) I've bought some courses here
[Python Practice Problems: Get Ready for Your Next Interview – Real Python](https://realpython.com/python-practice-problems/#python-practice-problem-3-caesar-cipher-redux)

[Python Tutorial for Beginners - Learn Python Programming from Scratch - DataFlair](https://data-flair.training/blogs/python-tutorials-home/) ❗!important
[Learn Python through the Master Guide - Python Notes for Beginner to Advanced Learners - DataFlair](https://data-flair.training/blogs/learn-python-notes/) ❗!important
[Python Tutorial - Python for Beginners [Full Course] - YouTube](https://www.youtube.com/watch?v=_uQrJ0TkZlc) 2019
[Python For Data Science Full Course - 9 Hours | Data Science With Python | Python Training | Edureka - YouTube](https://www.youtube.com/watch?v=-6RqxhNO2yY) 2020

[Python Tutorials – Real Python](https://realpython.com/) I've bought some books here
[Python Programming Language: Guides, Tutorials, and Downloads](https://insights.dice.com/2019/05/15/python-language-guides-tutorials/amp/)
[Teaching Python and more with open educational resources | Opensource.com](https://opensource.com/education/16/4/teaching-python-and-more-with-oer)
[Pynative Python Tutorials: Learn Python With Examples and Exercises](https://pynative.com/)
[Blog - Python Simplified](https://pythonsimplified.com/blog/)

[Python For Beginners | Python.org](https://www.python.org/about/gettingstarted/)
[The Python Tutorial — Python documentation](https://docs.python.org/3/tutorial/index.html)
[The Python Standard Library — Python documentation](https://docs.python.org/3/library/index.html#library-index)
[The Python Language Reference — Python documentation](https://docs.python.org/3/reference/index.html)

[How To Python - Explore the World of Python Programming](https://www.howtopython.org/)
[Write Pythonic Code Like a Seasoned Developer - [Talk Python Training - Python tutorials and courses for developers]](https://training.talkpython.fm/courses/details/write-pythonic-code-like-a-seasoned-developer) From Humble Bundle
[Write More Pythonic Code (Learning Path) – Real Python](https://realpython.com/learning-paths/writing-pythonic-code/)

[Intro to Computer Science | Udacity](https://www.udacity.com/course/intro-to-computer-science--cs101)
[Python for Everybody | Coursera](https://www.coursera.org/specializations/python)
[Python 3 Programming | Coursera](https://www.coursera.org/specializations/python-3-programming)
[Introduction to Scripting in Python | Coursera](https://www.coursera.org/specializations/introduction-scripting-in-python)
[Introduction to Computer Science and Programming Using Python | edX](https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x7)
[Introduction to Computing using Python | edX](https://www.edx.org/course/introduction-computing-using-python-gtx-cs1301x)
[Introduction to Python for Data Science | edX](https://www.edx.org/course/introduction-python-data-science-microsoft-dat208x-6)
[Composing Programs](http://www.composingprograms.com/)
[Programming for Everybody (Getting Started with Python) - Online Course](https://www.futurelearn.com/courses/programming-for-everybody-python)
[Data Science Courses: R & Python Analysis Tutorials | DataCamp](https://www.datacamp.com/courses/tech:python)
[Python Programming For Data Science Course | Dataquest](https://www.dataquest.io/course/python-for-data-science-fundamentals)

[Modern Python LiveLessons: Big Ideas and Little Code in Python](https://learning.oreilly.com/library/view/modern-python-livelessons/9780134743400/)
[Modern Python LiveLessons: Big Ideas and Little Code in Python(英文字幕 CC)\_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili](https://www.bilibili.com/video/av39782604/)

[Python Core and Advanced | Udemy](https://www.udemy.com/python-core-and-advanced/)
[Learn Python Programming](https://www.programiz.com/python-programming)
[Python3 Tutorial: Python Online Course](http://www.python-course.eu/python3_course.php)
[How to Think Like a Computer Scientist — How to Think Like a Computer Scientist: Learning with Python 3](https://openbookproject.net/thinkcs/python/english3e/) 3rd edition
[Table of Contents — How to Think like a Computer Scientist: Interactive Edition](https://runestone.academy/runestone/static/thinkcspy/index.html)
[Computer Science Circles | 01000011 01010011 01000011](http://cscircles.cemc.uwaterloo.ca/)
[Learn Python for Data Science - Online Course](https://www.datacamp.com/courses/intro-to-python-for-data-science)
[Python Central | Python Programming Examples, Tutorials and Recipes](http://pythoncentral.io/)
[Learn Python - Free Interactive Python Tutorial](https://www.learnpython.org/)
[Python 201 | The Mouse Vs. The Python](https://www.blog.pythonlibrary.org/tag/python-201/)
[Python 101 | The Mouse Vs. The Python](https://www.blog.pythonlibrary.org/tag/python-101/)
[Learn Python, it's CAKE (Beginners) | Udemy](https://www.udemy.com/learning-python-not-the-snake/)
[Python for Data Science Course - Free Course](https://courses.analyticsvidhya.com/courses/introduction-to-data-science?utm_source=blog&utm_medium=data-structures-python)

[Python Fundamentals Training - YouTube](https://www.youtube.com/playlist?list=PL26BA8B9FC33789FF) !good Python 2.6
[Google's Python Class - Google for Education](https://developers.google.com/edu/python/) Python 2.5

[Introducing "Dead Simple Python" - DEV Community 👩‍💻👨‍💻](https://dev.to/codemouse92/introducing-dead-simple-python-563o)
[How to Do a Binary Search in Python – Real Python](https://realpython.com/binary-search-python/)

[All You Need To Know on APIs With Python | by James Briggs | Towards Data Science](https://towardsdatascience.com/all-you-need-to-know-on-apis-with-python-927fb572d723) working with RESTful API

[The Mouse Vs. The Python - Python Programming from the Frontlines](http://www.blog.pythonlibrary.org/)
[Python Programming Tutorials](https://pythonprogramming.net/)
[BeginnersGuide - Python Wiki](https://wiki.python.org/moin/BeginnersGuide)
[Learning Python: From Zero to Hero – freeCodeCamp](https://www.freecodecamp.org/news/learning-python-from-zero-to-hero-120ea540b567)
[IBM developerWorks : Linux : Technical library](http://www.ibm.com/developerworks/views/linux/libraryview.jsp?type_by=Articles?sort_order=desc&expand=&sort_by=Date&show_abstract=true&view_by=Search&search_by=charming+python%3A) Charming Python, mostly Python 2

[Hidden features of Python - Stack Overflow](http://stackoverflow.com/questions/101268/hidden-features-of-python)
[Advanced Python Features](https://tech.io/playgrounds/500/advanced-python-features)
[mdipierro/nlib: The book "Annotated Algorithms in Python" and the nlib.py library](https://github.com/mdipierro/nlib)
[Problem Solving with Algorithms and Data Structures using Python — Problem Solving with Algorithms and Data Structures](https://runestone.academy/runestone/static/pythonds/index.html)

[Python Resources – Python Tips](https://pythontips.com/python-resources/)

## Books

[PythonBooks - Learn Python the easy way !](http://pythonbooks.revolunet.com/)

[Python 3 Patterns, Recipes and Idioms — Python 3 Patterns, Recipes and Idioms](http://python-3-patterns-idioms-test.readthedocs.io/en/latest/index.html)
[A Byte of Python - GitBook](https://www.gitbook.com/book/swaroopch/byte-of-python/details)
[PY4E - Python for Everybody](https://www.py4e.com/book) 2016, Python 3
[Dive Into Python 3](http://www.diveintopython3.net/)
[Intermediate Python — Python Tips](https://book.pythontips.com/en/latest/index.html)
[Object-Oriented Programming in Python](https://python-textbok.readthedocs.io/en/latest/index.html)
[Welcome to Python 101! — Python 101 documentation](http://python101.pythonlibrary.org/)
[Think Python 2e – Green Tea Press](https://greenteapress.com/wp/think-python-2e/)
[Think Python](http://greenteapress.com/thinkpython/html/index.html)
[Think DSP – Green Tea Press](http://greenteapress.com/wp/think-dsp/)
[AllenDowney/ThinkDSP: Think DSP: Digital Signal Processing in Python, by Allen B. Downey.](https://github.com/AllenDowney/ThinkDSP)
[Python 201 | Leanpub](https://leanpub.com/python201/read)
[Cover - 100 Page Python Intro](https://learnbyexample.github.io/100_page_python_intro/cover.html)
[Intermediate Python | Leanpub](https://leanpub.com/intermediatepython/read)
[Python Data Science Handbook | Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/)
[Introduction · A Byte of Python](https://python.swaroopch.com/)

[Python for Informatics: Exploring Information](http://www.pythonlearn.com/html-270/)
[Nick Coghlan’s Python Notes](http://python-notes.curiousefficiency.org/en/latest/index.html)

[High Performance Python [Book]](https://www.oreilly.com/library/view/high-performance-python/9781449361747/) Python 2
[Python Practice Book — Python Practice Book](http://anandology.com/python-practice-book/index.html) Python 2.7
[Dive Into Python](http://www.diveintopython.net/) Python 2

[python 3.7 极速入门教程 9 最佳 python 中文工具书籍下载](https://china-testing.github.io/python3_quick9.html)

### Al Sweigart

[Invent with Python](https://inventwithpython.com/) free books by Al Sweigart
[Get the Best Python Books for Free - YouTube](https://www.youtube.com/watch?v=7iBqoc-DzTQ) interview with Al Sweigart

[Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) 2nd edition, 2019
[Hacking Secret Ciphers with Python](http://inventwithpython.com/hacking/chapters/) 2013
[Cracking Codes with Python](http://inventwithpython.com//cracking/) 2nd edition of "Hacking Secret Ciphers with Python" 2018
[The Big Book of Small Python Projects](https://inventwithpython.com/bigbookpython/) 2021, mostly single file console apps
[The Recursive Book of Recursion](https://inventwithpython.com/recursion/) 2022
[Beyond the Basic Stuff with Python](https://inventwithpython.com/beyond/) 2020

## Video

[PyVideo.org](https://pyvideo.org/index.html)
[anthonywritescode - YouTube](https://www.youtube.com/@anthonywritescode)
[ArjanCodes - YouTube](https://www.youtube.com/@ArjanCodes)
[mCoding - YouTube](https://www.youtube.com/@mCoding)

[Harvard CS50’s Introduction to Programming with Python – Full University Course - YouTube](https://www.youtube.com/watch?v=nLRL_NcnK-4) 15:57:47
[Real Python - YouTube](https://www.youtube.com/@realpython)
[6.0001 Introduction to Computer Science and Programming in Python. Fall 2016 - YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP63WbdFxL8giv4yhgdMGaZNA)
[Python 3 Basics Tutorial Series - YouTube](https://www.youtube.com/playlist?list=PLQVvvaa0QuDe8XSftW-RAxdo6OmaeL85M)
[Python Basics - Jose Portilla - YouTube](https://www.youtube.com/playlist?list=PL6cactdCCnTJipK3hwMbq1DXeQcWZ_qOv)
[Python Tutorials - Ardit Sulce - YouTube](https://www.youtube.com/playlist?list=PL6cactdCCnTILYB7O-T65zx3wt876ieNr)
[Python (all parts in one) - YouTube](https://www.youtube.com/watch?v=Ajmj5itd2s8) Python 3, CodeSchool.org, compares 2.x and 3.x, quite good
[Learn Python - Full Course for Beginners [Tutorial] - YouTube](https://www.youtube.com/watch?v=rfscVS0vtbw) Python 3, ❗!important
[Python – Intermediate and Advanced Features - YouTube](https://www.youtube.com/playlist?list=PLP8GkvaIxJP0VAXF3USi9U4JnpxUvQXHx) Python 3, Real Python

[A new video series for beginners to learn Python programming - Open Source Blog](https://cloudblogs.microsoft.com/opensource/2019/09/19/new-python-training-video-series-beginners/) by Microsoft
[Python for Beginners - YouTube](https://www.youtube.com/playlist?list=PLlrxD0HtieHhS8VzuMCfQD4uJ9yne1mE6)
[More Python for Beginners - YouTube](https://www.youtube.com/playlist?list=PLlrxD0HtieHiXd-nEby-TMCoUNwhbLUnj)
[Python for Beginners | Channel 9](https://channel9.msdn.com/Series/Intro-to-Python-Development?WT.mc_id=python-c9-niner)
[microsoft/c9-python-getting-started: Sample code for Channel 9 Python for Beginners course](https://github.com/microsoft/c9-python-getting-started)

[PyCon Australia - YouTube](https://www.youtube.com/@PyConAU)
[PyCon 2017 - YouTube](https://www.youtube.com/@pycon2017)
[PyCon 2018 - YouTube](https://www.youtube.com/@pycon2018)
[PyCon 2018 - YouTube](https://www.youtube.com/playlist?list=PLW7hU4yo78_OoK53W8TIMba6GUhAtcNoQ)
[PyCon 2019 - YouTube](https://www.youtube.com/@pycon2019)

## Blogs

[miguelgrinberg.com](https://blog.miguelgrinberg.com/index)
[Python Tutorials – Real Python](https://realpython.com/)
[Python Tutorials – dbader.org](https://dbader.org/blog/)
[Python Programming](https://jeffknupp.com/)
[Python Adventures | Welcome to the Jungle!](https://pythonadventures.wordpress.com/)
[Python Tips – Your daily dose of bite sized python tips](https://pythontips.com/)
[Python | Abu Ashraf Masnun](http://masnun.com/category/python)
[Python · Abu Ashraf Masnun](http://masnun.rocks/tags/python/)
[Python Archives – Polyglot.Ninja()](http://polyglot.ninja/category/python/)

[Python Awesome](https://pythonawesome.com/)

[30 Days of Python 👨‍💻 - Day 1 - Introduction - DEV](https://dev.to/arindamdawn/30-days-of-python-day-1-5ghh)

[Master Python through building real-world applications](https://morioh.com/p/c6db04ec70ab)

## Reference

[Overview — Python documentation](https://docs.python.org/3/)
[FrontPage - Python Wiki](https://wiki.python.org/moin/)

## History

[Python 2.7 & Python 3: A Sacred Love Story - YouTube](https://www.youtube.com/watch?v=skYBOXE02OQ)
[Lesson Directory | Programming Historian](https://programminghistorian.org/en/lessons/?topic=python)

## Governance

[Mariatta Wijaya - What is a Python Core Developer? - PyCon 2018 - YouTube](https://www.youtube.com/watch?v=hhj7eb6TrtI)
[Episode #153 How Python Evolves - [Talk Python To Me Podcast]](https://talkpython.fm/episodes/show/153/how-python-evolves)

[PEP 13 – Python Language Governance | peps.python.org](https://peps.python.org/pep-0013/)
[PEP 8000 – Python Language Governance Proposal Overview | peps.python.org](https://peps.python.org/pep-8000/)
[PEP 8016 – The Steering Council Model | peps.python.org](https://peps.python.org/pep-8016/) adopted as PEP 13

## Python Enhancement Proposals (PEP)

[PEP-Explorer find and filter Python Enhancement Proposals](https://tonybaloney.github.io/pep-explorer/)
[PEP 0 – Index of Python Enhancement Proposals (PEPs) | peps.python.org](https://peps.python.org/pep-0000/)
[PEP 572 – Assignment Expressions | peps.python.org](https://peps.python.org/pep-0572/)

## IDE

[Which IDE is used for Python programming in software companies? - Quora](https://www.quora.com/Which-IDE-is-used-for-Python-programming-in-software-companies)
[Top 8 IDEs for Raspberry Pi - Open Source For You](https://opensourceforu.com/2017/06/top-ides-raspberry-pi/)
[7 sweet Python IDEs you might have missed | InfoWorld](https://www.infoworld.com/article/3430323/7-sweet-python-ides-you-might-have-missed.html)
[raspbian - Are there any Python IDEs for Raspberry Pi 3 with step-through capability? - Raspberry Pi Stack Exchange](https://raspberrypi.stackexchange.com/questions/72290/are-there-any-python-ides-for-raspberry-pi-3-with-step-through-capability)

[prompt-toolkit/ptpython: A better Python REPL](https://github.com/prompt-toolkit/ptpython)
[Home - the bpython interpreter](https://bpython-interpreter.org/)

[Code With Mu](https://codewith.mu/) a simple Python editor for beginner programmers, supports MicroPython
[Getting started with Mu, a Python editor for beginners | Opensource.com](https://opensource.com/article/18/8/getting-started-mu-python-editor-beginners)

[IDLE — Python documentation](https://docs.python.org/3/library/idle.html)
[Getting Started With Python IDLE – Real Python](https://realpython.com/python-idle/?__s=9yjm1swp7s426a4xisnd)

[PyCharm](http://www.jetbrains.com/pycharm/) with Linter and Mypy integrated
[PyCharm for Productive Python Development (Guide) – Real Python](https://realpython.com/pycharm-guide/)

[NINJA IDE | Ninja-ide Is Not Just Another IDE](http://www.ninja-ide.org/)
[Thonny, Python IDE for beginners](https://thonny.org/) view stack, variable and AST
[Wing Python IDE](https://wingware.com/downloads)
[Vim as a Python IDE - Martin Brochhaus - YouTube](https://www.youtube.com/watch?v=YhqsjUUHj6g)

[Kite - AI Autocomplete and Docs for Python](https://kite.com/)
[Python - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

[Spyder IDE](https://www.spyder-ide.org/)
[ŷhat | Data Science Operations](https://www.yhat.com/products/rodeo/) an Python IDE written with Electron

## IPython

> see [[jupyter]]

[Jupyter and the future of IPython — IPython](http://ipython.org/index.html)
[IPython Documentation — IPython documentation](https://ipython.readthedocs.io/en/stable/index.html)
[IPython Documentation - Jupyter Notebook Viewer](http://nbviewer.jupyter.org/github/ipython/ipython/blob/master/examples/Index.ipynb)

[IPython Cookbook - IPython Cookbook, Second Edition (2018)](https://ipython-books.github.io/)
[ipython/ipython-in-depth: IPython and Jupyter in-depth Tutorial, first presented at PyCon 2012](https://github.com/ipython/ipython-in-depth)

[IPython Cookbook - IPython Cookbook, Second Edition (2018)](https://ipython-books.github.io/)
[IPython Cookbook - IPython Cookbook, Second Edition (2018)](https://ipython-books.github.io/) [source](https://github.com/ipython-books/cookbook-2nd) [code](https://github.com/ipython-books/cookbook-2nd-code)
[IPython Cookbook - IPython Minibook, Second Edition (2015)](https://github.com/ipython-books/minibook-2nd-code)

## Terminology

| Python           | Java            |
| ---------------- | --------------- |
| object           | Object          |
| type             | Class           |
| attributes       | member/field    |
| try-except-raise | try-catch-throw |

> c.f. JavaScript objects are inherently a dict, non-local declarations are made global

## Builtin types

[Common Python Data Structures (Guide) – Real Python](https://realpython.com/python-data-structures/)
[Learn Programming with Python — An Introduction | by Richard Quinn | The Startup | Medium](https://medium.com/swlh/learn-programming-with-python-an-introduction-ee9115d52dbd)
[Understanding Data Types in Python | Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/02.01-understanding-data-types.html)

- `list []`: mutable
- `tuple ()`: immutable, `()` are _optional_
- `dict {key: value}`: map of key, value pairs, `items()`, `keys()`, `values()`
- `set(list), {}`: un-ordered collection of unique items in list
- `zip(lists)`: return the columns of matrix formed using the lists as row

insertion-order preservation of `dict` object is part of language spec since 3.7 with the adoption of PyPy's `dict` implementation in 3.6.

`type` and `object` are instances of each other and themselves
module objects represents `.py` files, created by `import`, each global variables in file added as attributes

[Lists in Python - Towards Data Science](https://towardsdatascience.com/lists-in-python-d1ec8b61ee06)
[5 Python Slicing Tricks That Will Make Your Code More Elegant | TechToFreedom](https://medium.com/techtofreedom/5-python-slicing-tricks-that-will-make-your-code-more-elegant-bd5e27c73f7)
[Seven Intermediate-Level Tips and Tricks for Python Lists | by Richard Quinn | Python In Plain English | Medium](https://medium.com/python-in-plain-english/seven-intermediate-level-tips-and-tricks-for-python-lists-a81876ef6f33)
[Python List Vs. Tuple: An In-Depth Comparison | by Chetan Ambi | Towards AI](https://pub.towardsai.net/python-list-vs-tuple-an-in-depth-comparison-42c59348d8a8)
[Python List Vs Tuple - Python Simplified](https://pythonsimplified.com/python-list-vs-tuple/)

[Python '!=' Is Not 'is not': Comparing Objects in Python – Real Python](https://realpython.com/python-is-identity-vs-equality/)
`is`/`is not` test for identity, invokes (`id()`)
`==`/`!=` test for equality, invokes (`__eq__()`)
small integer (`-5` to `256` inclusive) and short strings are interned, use `intern(a)` to get the interned address
[Interning in CPython - Blog | luminousmen](https://luminousmen.com/post/interning-in-cpython)

[3. Data model — Python documentation](https://docs.python.org/3/reference/datamodel.html)
[graphlib — Functionality to operate with graph-like structures — Python documentation](https://docs.python.org/3.9/library/graphlib.html)

[Dictionaries in Python – Real Python](https://realpython.com/courses/dictionaries-python/)
[5 Expert Tips to Skyrocket Your Dictionary Skills in Python 🚀 | by Eirik Berge | Jul, 2021 | Towards Data Science](https://towardsdatascience.com/5-expert-tips-to-skyrocket-your-dictionary-skills-in-python-1cf54b7d920d)

[array — Efficient arrays of numeric values — Python documentation](https://docs.python.org/3/library/array.html)

[collections — Container datatypes — Python documentation](https://docs.python.org/3/library/collections.html)
[A tactile guide to Python Collections - Towards Data Science](https://towardsdatascience.com/a-tactile-guide-to-python-collections-final-4a25039deea9)
[Python's collections: A Buffet of Specialized Data Types – Real Python](https://realpython.com/python-collections-module/?__s=9yjm1swp7s426a4xisnd)

[Data Structures in Python | Different Types of Data Structures in Python](https://www.analyticsvidhya.com/blog/2020/06/data-structures-python/)
[How to Implement a Python Stack – Real Python](https://realpython.com/how-to-implement-python-stack/)

[The Python math Module: Everything You Need to Know – Real Python](https://realpython.com/python-math-module/)

### Operators

[How to Use the Python or Operator – Real Python](https://realpython.com/python-or-operator/)
[The Walrus Operator: Python 3.8 Assignment Expressions – Real Python](https://realpython.com/python-walrus-operator/)
[How (Not) To Use Python’s Walrus Operator - KDnuggets](https://www.kdnuggets.com/how-not-to-use-pythons-walrus-operator)

[Martin Heinz | The Unknown Features of Python's Operator Module](https://martinheinz.dev/blog/54)
[operator — Standard operators as functions — Python documentation](https://docs.python.org/3/library/operator.html#mapping-operators-to-functions)
[3 and Function Overloading in Custom Python Classes – Real Python](https://realpython.com/operator-function-overloading/) dunder functions

### Exceptions

[Built-in Exceptions — Python 3 documentation](https://docs.python.org/3/library/exceptions.html#bltin-exceptions)
[8. Errors and Exceptions — Python 3 documentation](https://docs.python.org/3/tutorial/errors.html)

[Exception Handling Tips in Python ⚠ Write Better Python Code Part 7 - YouTube](https://www.youtube.com/watch?v=ZsvftkbbrR0)

Never use catch all `except`, `Ctrl+C` generates `KeyboardInterrupt`
[Using except: is a HUGE mistake - YouTube](https://www.youtube.com/watch?v=zrVfY9SuO64)
You can catch `Exception` (non-system-exiting and user exception)

```py
try:
    json = orjson.load(jsonstr)
    # read value from `json`
except (orjson.JSONDecodeError, KeyError, ValueError) as err:
    print(f"{type(err).__name__}: {err}")
finally:
    # cleanup
    pass

```

### Packing/unpacking

Packing/unpacking is similar to JavaScript's destructuring and rest/spread operator.
They can be used whenever assignment is performed.

[Unpacking Nested Data Structures in Python – dbader.org](https://dbader.org/blog/python-nested-unpacking)

```python
a, *b, c = (1, 2, 3, 4)
# a, b, c = (1, [2, 3], 4)

for (key, value) in dictionary.items():
    print(key, value)
```

### string

[Strings and Character Data in Python – Real Python](https://realpython.com/python-strings/)
[Unicode & Character Encodings in Python: A Painless Guide – Real Python](https://realpython.com/python-encodings-guide/)
[unicodedata — Unicode Database — Python documentation](https://docs.python.org/3/library/unicodedata.html)
[codecs — Codec registry and base classes — Python documentation](https://docs.python.org/3/library/codecs.html#standard-encodings)

[Python Idioms: Multiline Strings](https://amir.rachum.com/amp/blog/2018/06/23/python-multiline-idioms.html)
[textwrap — Text wrapping and filling — Python documentation](https://docs.python.org/3/library/textwrap.html)

[22 Pythonic Tricks for Working with Strings | by Richard Quinn | Python In Plain English | Medium](https://medium.com/python-in-plain-english/22-pythonic-tricks-for-working-with-strings-8b893776743c)

### string formatting

[The 4 Major Ways to Do String Formatting in Python – dbader.org](https://dbader.org/blog/python-string-formatting)
[Python String Formatting Best Practices – Real Python](https://realpython.com/python-string-formatting/)
[Python 3 F-Strings: The Advanced Guide (2021) - Miguel Brito](https://miguendes.me/73-examples-to-help-you-master-pythons-f-strings?x-host=miguendes.me)

[2.4.3. Formatted string literals — Python documentation](https://docs.python.org/3/reference/lexical_analysis.html#f-strings) `f""`, Python 3.6+
[Python 3's f-Strings: An Improved String Formatting Syntax (Guide) – Real Python](https://realpython.com/python-f-strings/)
[PEP 498 – Literal String Interpolation | peps.python.org](https://peps.python.org/pep-0498/)
[PEP 502 – String Interpolation - Extended Discussion | peps.python.org](https://peps.python.org/pep-0502/)

[4.7.2. printf-style String Formatting](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting) `"" % ()`

[6.1.3. Format String Syntax — Python documentation](https://docs.python.org/3/library/string.html#format-string-syntax) `string.format()`
[6.1.3.1. Format Specification Mini-Language — Python documentation](https://docs.python.org/3/library/string.html#format-specification-mini-language)

```python
"{key}={value:.3}".format(**{'key': 'foo', 'value': 3.14})
```

[6.1.4. Template strings — Python documentation](https://docs.python.org/3/library/string.html#template-strings) `string.Template`
[PEP 292 – Simpler String Substitutions | peps.python.org](https://peps.python.org/pep-0292/)
[Python Template String Formatting Method | by Vinicius Monteiro | Towards Data Science](https://towardsdatascience.com/python-template-string-formatting-method-df282510a87a)

### `Pathlib`

[pathlib — Object-oriented filesystem paths — Python 3 documentation](https://docs.python.org/3/library/pathlib.html)

[Python 3's pathlib Module: Taming the File System – Real Python](https://realpython.com/python-pathlib/)
[How to Get a List of All Files in a Directory With Python – Real Python](https://realpython.com/get-all-files-in-directory-python/)
[Should You Use Python pathlib or os? | by Adam Green | Better Programming](https://betterprogramming.pub/should-you-be-using-pathlib-6f3a0fddec7e)

[Starting With Python's pathlib Module - YouTube](https://www.youtube.com/watch?v=S5UOze6T1jg)

### `shutil`

[shutil — High-level file operations — Python 3 documentation](https://docs.python.org/3/library/shutil.html)
[shutil: The Ultimate Python File Management Toolkit - YouTube](https://www.youtube.com/watch?v=sXzezIK0d7c)

### `defaultdict`

[collections.defaultdict — Container datatypes — Python documentation](https://docs.python.org/3//library/collections.html#collections.defaultdict)
[defaultdict — Missing Keys Return a Default Value — PyMOTW 3](https://pymotw.com/3/collections/defaultdict.html)
[Python defaultdict | freeCodeCamp Guide](https://guide.freecodecamp.org/python/defaultdict/)

The first param of `defaultdict` is a callable to be called to generate the value when a key is first accessed.
Note this function does not take parameter, for more complex behavior overrite the `__missing__(key)` method.
[dictionary - python: defaultdict with non-default argument - Stack Overflow](https://stackoverflow.com/questions/25951966/python-defaultdict-with-non-default-argument)

```python
from collections import defaultdict

base_dict = { 'Alice': 'Chocolate' }
ice_cream = defaultdict(lambda: 'Vanilla', base_dict)

print(ice_cream['Alice'])  # 'Chocolate'
print(ice_cream['Joe'])  # 'Vanilla'
```

```python
>>> from collections import defaultdict

>>> s = 'mississippi'
>>> d = defaultdict(int)
>>> for k in s:
...     d[k] += 1
...
>>> d.items()
[('i', 4), ('p', 2), ('s', 4), ('m', 1)]
```

```python
colors = ['red', 'green', 'red', 'blue', 'green', 'red']

# manual init
d = {}
for color in colors:
 if color not in d:
  d[color] = 0
 d[color] += 1

# dict.get()
d = {}
for color in colors:
 d[color] = d.get(color, 0) + 1

# defaultdict
d = defaultdict(int)
for color in colors:
 d[color]  += 1
```

### ChainMaps

Lookup values according to the chain, no need to merge dicts

[collections — Container datatypes — Python documentation](https://docs.python.org/3/library/collections.html#collections.ChainMap)
[ChainMap — Search Multiple Dictionaries — PyMOTW 3](https://pymotw.com/3/collections/chainmap.html)
[ChainMap in Python - GeeksforGeeks](https://www.geeksforgeeks.org/chainmap-in-python/)

### `namedtuple`

[collections.namedtuple — Container datatypes — Python documentation](https://docs.python.org/3//library/collections.html#namedtuple-factory-function-for-tuples-with-named-fields)
[namedtuple — Tuple Subclass with Named Fields — PyMOTW 3](https://pymotw.com/3/collections/namedtuple.html)
[Namedtuple in Python - GeeksforGeeks](https://www.geeksforgeeks.org/namedtuple-in-python/)
[Writing Clean Python With Namedtuples – dbader.org](https://dbader.org/blog/writing-clean-python-with-namedtuples)
[Python namedtuple - JournalDev](https://www.journaldev.com/22439/python-namedtuple)

[Understand how to use NamedTuple and Dataclass in Python](https://towardsdatascience.com/understand-how-to-use-namedtuple-and-dataclass-in-python-e82e535c3691) with benchmarks

Use `_make()` to create from iterator, `_asdict()` to convert to a `dict`

### deque

When you're removing from the head of a list, use `deque`

[collections — Container datatypes — Python documentation](https://docs.python.org/3/library/collections.html#collections.deque)
[Python's deque: Implement Efficient Queues and Stacks – Real Python](https://realpython.com/python-deque/)
[deque — Double-Ended Queue — PyMOTW 3](https://pymotw.com/3/collections/deque.html)
[Deque in Python - GeeksforGeeks](https://www.geeksforgeeks.org/deque-in-python/)

### `dataclasses`

[[python-settings#Pydantic]]

[dataclasses — Data Classes — Python documentation](https://docs.python.org/3/library/dataclasses.html)
[The Ultimate Guide to Data Classes in Python 3.7 – Real Python](https://realpython.com/python-data-classes/) `@dataclass` dramatically ease class creation

```python
from dataclasses import dataclass

@dataclass(kw_only=True, slots=True, frozen=True)
class Person:
    name: str
    _password: str(init=False, repr=False)
    id: str = field(init=False, default_factory=random_id)
    tags: list[str] = field(default_factory=list)

    def __post_init__(self) -> None:
        self._password  = gen_password(name)
```

[Introducing Python 3.7's Dataclasses | Linux Journal](https://www.linuxjournal.com/content/introducing-python-37s-dataclasses)
[Understanding Python Dataclasses — Part 1 – Mindorks – Medium](https://medium.com/mindorks/understanding-python-dataclasses-part-1-c3ccd4355c34)
[Dataclasses In Python - DEV Community 👩‍💻👨‍💻](https://dev.to/btaskaya/dataclasses-in-python-4hli)
[Python3.7 dataclass guide](http://www.codestudyblog.com/cnb/0319193536.html)
[JSON Encoding Python Dataclasses](https://www.bruceeckel.com/2018/09/16/json-encoding-python-dataclasses/)

[Which Python @dataclass is best? Feat. Pydantic, NamedTuple, attrs... - YouTube](https://www.youtube.com/watch?v=vCLetdhswMg)
[Attrs, Pydantic, or Python Data Classes: Which One Is The Best? - YouTube](https://www.youtube.com/watch?v=zN4VCb0LbQI)
[Why I prefer attrs over dataclasses - YouTube](https://www.youtube.com/watch?v=1S2h11XronA) `__slots__` by default

[konradhalas/dacite: Simple creation of data classes from dictionaries.](https://github.com/konradhalas/dacite) with type checking

[Dataclass Wizard — Dataclass Wizard documentation](https://dataclass-wizard.readthedocs.io/en/latest/index.html)
[rnag/dataclass-wizard: A simple, yet elegant, set of wizarding tools for interacting with Python dataclasses.](https://github.com/rnag/dataclass-wizard)

[PEP 681 – Data Class Transforms | peps.python.org](https://peps.python.org/pep-0681/)
[typing — Support for type hints — Python 3.11.0b3 documentation](https://docs.python.org/3.11/library/typing.html#typing.dataclass_transform)

[Raymond Hettinger - Dataclasses: The code generator to end all code generators - PyCon 2018 - YouTube](https://www.youtube.com/watch?v=T-TwcmT6Rcw)
[This Is Why Python Data Classes Are Awesome - YouTube](https://www.youtube.com/watch?v=CvQ7e6yUtnw)
[Python dataclasses will save you HOURS, also featuring attrs - YouTube](https://www.youtube.com/watch?v=vBH6GRJ1REM)

[python - Data Classes vs typing.NamedTuple primary use cases - Stack Overflow](https://stackoverflow.com/questions/51671699)

### `datetime`

[Deciphering Glyph :: Dates And Times And Types](https://blog.glyph.im/2022/06/dates-and-times-and-types.html)
[glyph/DateType: A type wrapper for the standard library `datetime` that supplies stricter checks, such as making 'datetime' not substitutable for 'date', and separating out Naive and Aware datetimes into separate, mutually-incompatible types.](https://github.com/glyph/DateType)

## docstring

[Docstring - Wikiwand](https://www.wikiwand.com/en/Docstring#/Python)

[27.2. pydoc — Documentation generator and online help system — Python documentation](https://docs.python.org/3/library/pydoc.html)
[Charming Python: pydoc and distutils modules](https://www.ibm.com/developerworks/linux/library/l-cpmod/index.html)
[pydoc — Online Help for Modules — PyMOTW 3](https://pymotw.com/3/pydoc/)
[Documenting Python Code: A Complete Guide – Real Python](https://realpython.com/documenting-python-code/)

> see `dev-testing.md#python`

## Internals

[Python Developer’s Guide](https://devguide.python.org/)
[Articles in tag "Python internals"](https://eli.thegreenplace.net/tag/python-internals)
[Ten thousand meters - Python behind the scenes](https://tenthousandmeters.com/tag/python-behind-the-scenes/)
[CPython Internals Book – Real Python](https://realpython.com/products/cpython-internals-book/)
[Python as C++’s limiting case - Brandon Rhodes - code::dive 2018 - YouTube](https://www.youtube.com/watch?v=9ZxtaccqyWA)

[Demystifying Python’s Internals - presented by Sebastiaan Zeeff - YouTube](https://www.youtube.com/watch?v=f8nTJp_k7U8) [repo](https://github.com/SebastiaanZ/pypethon)

Get context with stack frame:

```python
frame = inspect.currentframe()
caller_locals = frame.f_back.f_locals
```

[dis — Disassembler for Python bytecode — Python documentation](https://docs.python.org/3/library/dis.html)
[Lifecycle of a Python Code - CPython's Execution Model - DEV Community 👩‍💻👨‍💻](https://dev.to/btaskaya/lifecycle-of-a-python-code---cpythons-execution-model-85i)
Use `dis.dis()` to pretty print a function's byte code; see `adaptive`, `show_caches` arguments
[Dragon taming with Tailbiter, a bytecode compiler for Python](https://codewords.recurse.com/issues/seven/dragon-taming-with-tailbiter-a-bytecode-compiler)
[PyBites – Under the Hood: Python Comparison Breakdown](https://pybit.es/guest-python-comparison-breakdown.html)

[zrax/pycdc: C++ python bytecode disassembler and decompiler](https://github.com/zrax/pycdc)
[rocky/python-xdis: Python cross-version bytecode library and disassembler](https://github.com/rocky/python-xdis)
[pycdc compared with uncompyle6 · rocky/python-uncompyle6 Wiki](https://github.com/rocky/python-uncompyle6/wiki/pycdc-compared-with-uncompyle6)
[rocky/python-xasm: Python cross version bytecode/wordcode assembler](https://github.com/rocky/python-xasm)
[rocky/python-uncompyle6: A cross-version Python bytecode decompiler](https://github.com/rocky/python-uncompyle6)

[Python lists remember what you did to them - YouTube](https://www.youtube.com/watch?v=rdlQzhP71pQ)

[Your Guide to the CPython Source Code – Real Python](https://realpython.com/cpython-source-code-guide/)

[Slightly Advanced Python: Some Python Internals - YouTube](https://www.youtube.com/watch?v=23s9Wc3aWGY) Python 2.4, class construction, attr lookup, bytecode (assembly)
[Advanced Python or Understanding Python - YouTube](https://www.youtube.com/watch?v=E_kZDvwofHY) Python 2.4

### Memory Management

[Memory Management — Python documentation](https://docs.python.org/3/c-api/memory.html)
[Memory Management in Python – Real Python](https://realpython.com/python-memory-management/)
[A Short Overview of CPython's Memory Management - DEV Community 👩‍💻👨‍💻](https://dev.to/btaskaya/a-short-overview-of-cpythons-memory-management-1goi)
[Pointers in Python: What's the Point? – Real Python](https://realpython.com/pointers-in-python/)
[Python memoryview()](https://www.programiz.com/python-programming/methods/built-in/memoryview)
[Garbage Collector with Pandas DataFrame | Apratim Biswas | Dec 2020 | Towards Data Science](https://towardsdatascience.com/python-garbage-collection-article-4a530b0992e3)

### Global Interpreter Lock/GIL

[What is the Python Global Interpreter Lock (GIL)? – Real Python](https://realpython.com/python-gil/)
[Dabeaz: The Python GIL Visualized](http://dabeaz.blogspot.com/2010/01/python-gil-visualized.html)

[PEP 684 – A Per-Interpreter GIL | peps.python.org](https://peps.python.org/pep-0684/)
[PEP 554 – Multiple Interpreters in the Stdlib | peps.python.org](https://peps.python.org/pep-0554/) Python API for interpreters
[PEP 489 – Multi-phase extension module initialization | peps.python.org](https://peps.python.org/pep-0489/) for extensions sharing global states to support multiple interpreters
[Talks - Eric Snow: A Per-Interpreter GIL: Concurrency and Parallelism with Subinterpreters - YouTube](https://www.youtube.com/watch?v=3ywZjnjeAO4)

[PEP 703 – Making the Global Interpreter Lock Optional in CPython | peps.python.org](https://peps.python.org/pep-0703/)
[Python moves to remove the GIL and boost concurrency | InfoWorld](https://www.infoworld.com/article/3704248/python-moves-to-remove-the-gil-and-boost-concurrency.html)
[Talks - Łukasz Langa: Working Around the GIL with asyncio - YouTube](https://www.youtube.com/watch?v=oVhJAVS3g00)
[python is removing the GIL! (PEP 703) (advanced) anthony explains #550 - YouTube](https://www.youtube.com/watch?v=OC2gnyfmwL8)

[Python Thread Safety: Using a Lock and Other Techniques – Real Python](https://realpython.com/python-thread-lock/)

[Understanding the Python GIL - YouTube](https://www.youtube.com/watch?v=Obt-vMVdM8s)
[Talks - Alireza Farhidzadeh: Getting Around the GIL: Parallelizing Python for Better Performance - YouTube](https://www.youtube.com/watch?v=7d2FLFu2zJY)
[PyVideo.org · to GIL or not to GIL: the Future of Multi-Core (C)Python](https://pyvideo.org/pycon-us-2019/to-gil-or-not-to-gil-the-future-of-multi-core-cpython.html) [slides](https://docs.google.com/presentation/d/1BuU6e-CKdZxDL5z9VBp19LAaIY8Ys2-jlcz-mD0Vr3c/mobilepresent?slide=id.p)
[Python is NOT Single Threaded (and how to bypass the GIL) - YouTube](https://www.youtube.com/watch?v=m2yeB94CxVQ)
[Keynote: Multithreaded Python without the GIL - presented by Sam Gross - YouTube](https://www.youtube.com/watch?v=9OOJcTp8dqE)

## Syntax

[syntactic sugar - Tall, Snarky Canadian](https://snarky.ca/tag/syntactic-sugar/)

[The Python return Statement: Usage and Best Practices – Real Python](https://realpython.com/python-return-statement/)

## `typing.Protocols`

> added in 3.8

[PEP 544 – Protocols: Structural subtyping (static duck typing) | peps.python.org](https://peps.python.org/pep-0544/)

[Protocol Or ABC In Python - When to use which one? - YouTube](https://www.youtube.com/watch?v=xvb5hGLoK0A)

- ABC: nominal typing, derived class has to import abc, error at object construction
- Prototype: structural/duck typing, better, smaller interface, abstract 3rd library, error at object usage

Protocol name can be `Iterable`, `PathLike`, `Ducky`

[Deciphering Glyph :: I Want A New Duck](https://blog.glyph.im/2020/07/new-duck.html) structural vs nominal typing
[Deciphering Glyph :: Interfaces and Protocols](https://blog.glyph.im/2021/03/interfaces-and-protocols.html)
[Protocol Types in Python 3.8](https://auth0.com/blog/protocol-types-in-python/)
[Protocols and structural subtyping - mypy documentation](https://mypy.readthedocs.io/en/stable/protocols.html)

## TypeVar/Generics

[Generics are VITAL in typed Python - YouTube](https://www.youtube.com/watch?v=ChRDzldOz8g)

## Functions

[Glossary parameter — Python documentation](https://docs.python.org/3/glossary.html#term-parameter)
[Understanding '*', '*args', '**' and '**kwargs' - Agiliq Blog | Django web app development](http://agiliq.com/blog/2012/06/understanding-args-and-kwargs/)
[Python args and kwargs: Demystified – Real Python](https://realpython.com/python-kwargs-and-args/)
[Stop Abusing \*args and \*\*kwargs in Python | by Eden Au | Better Programming | Medium](https://medium.com/better-programming/stop-abusing-args-and-kwargs-in-python-560ce6645e14)

[Python Inner Functions—What Are They Good For? – Real Python](https://realpython.com/inner-functions-what-are-they-good-for/)

[Positional-Only Arguments – Real Python](https://realpython.com/lessons/positional-only-arguments/)

`/` indicates end of positional-only arguments
`\*`` indicates start of keyword-only arguments

```python
def headline(text, /, border="~", *, width=50):
    return f" {text} ".center(width, border)
```

`text` is positional-only
`border` can be specified both with and without the keyword
`width` must be specified using the keyword

### Parameters

- positional parameter: `a`
- keyword parameter: `b=default`
- variable positional parameter: `*args`
- variable keyword parameter: `**kwargs`

### Calling

arguments can always be passes as keyword arguments regardless of their definition
`*list`/`*tuple` can unpack list/tuple as positional arguments
`**dict` can unpack dict as keyword arguments

### Default for mutable parameter

[Python Pitfall: Mutable Default Arguments | by Don Cross | Towards Data Science](https://towardsdatascience.com/python-pitfall-mutable-default-arguments-9385e8265422)

Function parameter are attributes of _function object instance_
Default value is only applied upon function definition

```python
def foo(a, b=[]):  # wrong,
    # default list persists in `foo` object after 1st call
    b.append(a)
    print(a, b)

def foo(a, b=None):  # correct
    if b is None: b = []
    b.append(a)
    print(a, b)
```

### Overloading (single/multiple dispatch)

[Providing Multiple Constructors in Your Python Classes – Real Python](https://realpython.com/python-multiple-constructors/)

[functools — singledispatch](https://docs.python.org/dev/library/functools.html#functools.singledispatch)
[functools — singledispatchmethod](https://docs.python.org/3/library/functools.html#functools.singledispatchmethod)

[multipledispatch · PyPI](https://pypi.org/project/multipledispatch/)
[multimethod · PyPI](https://pypi.org/project/multimethod/)

## Variable Namespace

Only functions, class and modules create namespaces
variables first used in flow controls are actually hoisted to their scope

**LEGB**: Local -> Enclosed -> Global -> Built-in

[Python Scope & the LEGB Rule: Resolving Names in Your Code – Real Python](https://realpython.com/python-scope-legb-rule/)

### Assignment (lvalue)

if object not found in local scope, creates it
use `nonlocal` (enclosed)/`global` keywords to override

### Reference (rvalue/function)

need `nonlocal`/`global` keywords when referencing non-local variables
[nonlocal statement in Python](https://blog.araj.me/til-nonlocal-statement-in-python/)

## Classes

[3. Data model — Python documentation](https://docs.python.org/3/reference/datamodel.html)
[Understanding Python Class Instantiation](https://amir.rachum.com/blog/2016/10/03/understanding-python-class-instantiation/)
[Python object creation sequence - Eli Bendersky's website](https://eli.thegreenplace.net/2012/04/16/python-object-creation-sequence)
[Classes in Python. Understanding Object Oriented… | by Sadrach Pierre, Ph.D. | Towards Data Science](https://towardsdatascience.com/classes-in-python-e31c21120c3d)

[Enriching Your Python Classes With Dunder (Magic, Special) Methods – dbader.org](https://dbader.org/blog/python-dunder-methods)
[Python Dunder Methods: The Ugliest Awesome Sauce - CodeSolid.com](https://codesolid.com/dunder-methods-in-python-the-ugliest-awesome-sauce/)
[3 practical Python tools: magic methods, iterators and generators, and method magic | Opensource.com](https://opensource.com/article/18/4/elegant-solutions-everyday-python-problems)
[Using Magic Methods in Python - Towards Data Science](https://towardsdatascience.com/using-magic-methods-in-python-48f31685bc18)
[Magic Methods in Python, by example - Towards Data Science](https://towardsdatascience.com/magic-methods-in-python-by-example-16b6826cae5c)
[5 Pairs of Magic Methods in Python That You Should Know | by Yong Cui | Better Programming | Medium](https://medium.com/better-programming/5-pairs-of-magic-methods-in-python-you-should-know-f98f0e5356d6)
[**getitem** and **setitem** in Python - GeeksforGeeks](https://www.geeksforgeeks.org/__getitem__-and-__setitem__-in-python/) for indexed attributes

[python - Difference between @staticmethod and @classmethod - Stack Overflow](https://stackoverflow.com/questions/136097/difference-between-staticmethod-and-classmethod) `classmethod` may be overridden by subclass

[type(obj) vs. obj.**class** in Python, and changing an object's class. - YouTube](https://www.youtube.com/watch?v=5vpdzRbfTIM)

### OOP

[Talks - Hynek Schlawack: Subclassing, Composition, Python, and You - YouTube](https://www.youtube.com/watch?v=k8MT5liCQ7g) author of `attrs`
[Why COMPOSITION is better than INHERITANCE - detailed Python example - YouTube](https://www.youtube.com/watch?v=0mcP8ZpUR38)

[Object-Oriented Programming (OOP) in Python 3 – Real Python](https://realpython.com/python3-object-oriented-programming/)
[Inheritance and Composition: A Python OOP Guide – Real Python](https://realpython.com/inheritance-composition-python/)
[Object-Oriented Programming (OOP) in Python 3 – Real Python](https://realpython.com/python3-object-oriented-programming/)
[Object-Oriented Programming in Python](https://www.freecodecamp.org/news/object-oriented-programming-in-python/)
[Learn object-oriented programming with Python | Opensource.com](https://opensource.com/article/19/7/get-modular-python-classes)
[Python Metaclasses ~ The Python Corner](https://www.thepythoncorner.com/2018/05/python-metaclasses.html)
[super, Python's most misunderstood feature. - YouTube](https://www.youtube.com/watch?v=X1PQ7zzltz4) Method Resolution Order (MRO), also applicable to attribute
[Object-oriented programming in Python - YouTube](https://www.youtube.com/playlist?list=PLWtCrYLGt7T3DUFPYdqrdEqzt-OCfBQ5O)

Inherit classes from object to signal usage of new style classes
Avoid multiple inheritance with exception to mix-ins (for non-overridden functions not representing IS-A relationship)

### attribute/descriptor/`@property`

Use `@property` declaration to abstract member access or derived/computed attribute (simpler then `__getattribute__`/`__setattr__`)
[The @property Decorator in Python: Its Use Cases, Advantages, and Syntax](https://www.freecodecamp.org/news/python-property-decorator/)
[the python @property decorator (beginner - intermediate) anthony explains #005 - YouTube](https://www.youtube.com/watch?v=orp6bhe4i00) `cached_property`
[python typing: @property (beginner - intermediate) anthony explains #117 - YouTube](https://www.youtube.com/watch?v=Q0K8CKn5htI)

[Python's property(): Add Managed Attributes to Your Classes – Real Python](https://realpython.com/python-property/)
[Python: Declaring Dynamic Attributes](https://amir.rachum.com/python-dynamic-attributes/)
[Python Attribute Access and the Descriptor Protocol](https://amir.rachum.com/amp/blog/2019/10/16/descriptors.html)
[8 things in Python you didn't realize are descriptors - YouTube](https://www.youtube.com/watch?v=mMbVs17Vmo4) 3.0, Descriptor, `__getattribute__()`,`__getattr__()`
[python descriptors! (advanced) anthony explains #519 - YouTube](https://www.youtube.com/watch?v=vBys0SwYvCQ)

[attrs: Classes Without Boilerplate — attrs documentation](http://www.attrs.org/en/stable/) annotation and frozen class, more powerful than `dataclasses`
[python-attrs/attrs: Python Classes Without Boilerplate](https://github.com/python-attrs/attrs/)
[Deciphering Glyph :: The One Python Library Everyone Needs](https://glyph.twistedmatrix.com/2016/08/attrs.html)

### `__file__`

Prints the path the module is form

### `__repr__`

`__repr__` is supposed to reconstruct the object via `eval()`

`object == eval(repr(object))`

[Python String Conversion 101: Why Every Class Needs a “repr” – dbader.org](https://dbader.org/blog/python-repr-vs-str)
[When Should You Use .**repr**() vs .**str**() in Python? – Real Python](https://realpython.com/python-repr-vs-str/)
[Can someone explain what **repr**() does a little more thoroughly please? | Codecademy](https://www.codecademy.com/en/forum_questions/551c137f51b887bbc4001b73)
[python - Difference between **str** and **repr**? - Stack Overflow](https://stackoverflow.com/questions/1436703/difference-between-str-and-repr)

### `__slots__`

> can be used in `dataclass` declarator easily in 3.10

[UsingSlots - Python Wiki](https://wiki.python.org/moin/UsingSlots)
[Python | Use of `__slots__` - GeeksforGeeks](https://www.geeksforgeeks.org/python-use-of-__slots__/)
Use named tuple rather than `__dict__` for faster access, cannot add new attributes

[A Simple & Effective Way To Improve Python Class Performance - YouTube](https://www.youtube.com/watch?v=Fot3_9eDmOs)
slots breaks multiple inheritance
some libraries may depends of `__dict__`

[Python `__slots__` and object layout explained - YouTube](https://www.youtube.com/watch?v=Iwf17zsDAnY)

### Abstract Base Classes

[30.8. abc — Abstract Base Classes — Python documentation](https://docs.python.org/3/library/abc.html)
[abc — Abstract Base Classes — PyMOTW 3](https://pymotw.com/3/abc/)
[Python Tutorial: 'The ABC' of Abstract Base Classes](https://www.python-course.eu/python3_abstract_classes.php)

[Interfaces, Mixins and Building Powerful Custom Data Structures in Python | Red’s Digressions](https://rednafi.github.io/digressions/python/2020/07/03/python-mixins.html)

ABC can have concrete method and fields

## Arithmetic

```python
8/3 = 2.666666
8//3 = 2
-8//3.0 = -3 # rounded down!!
```

`int(float)` is rounding, use `floor()` for C-like casting
use open delimiters to override indentation rules

## Context Managers

[contextlib — Utilities for with-statement contexts — Python documentation](https://docs.python.org/3/library/contextlib.html)
[contextlib — Context Manager Utilities — PyMOTW 3](https://pymotw.com/3/contextlib/)
[27. Context Managers — Python Tips 0.1 documentation](https://book.pythontips.com/en/latest/context_managers.html)

[Context Manager in Python - GeeksforGeeks](https://www.geeksforgeeks.org/context-manager-in-python/)
[with statement in Python - GeeksforGeeks](https://www.geeksforgeeks.org/with-statement-in-python/?ref=lbp)

This can be implemented by a class with `__enter__()` and `__exit__()`.
However it is better with `@contextmanager` decorator

```python
@contextmanager
def context_manager_example():
    print("__enter__")
    try:
        yield
    finally:
        print("__exit__")

with context_manager_example():
    print("Run operations with the context")
```

[Context Managers and the “with” Statement in Python – dbader.org](https://dbader.org/blog/python-context-managers-and-with-statement)
[Python Context Managers and the "with" Statement (**enter** & **exit**) - YouTube](https://www.youtube.com/watch?v=iba-I4CrmyA)
[Python Context Managers and the "with" Statement – Real Python](https://realpython.com/courses/python-context-managers-and-with-statement/)
[Context Managers and Python's with Statement – Real Python](https://realpython.com/python-with-statement/)

[Martin Heinz - The Magic of Python Context Managers](https://martinheinz.dev/blog/34)
[Introduction to Context Managers in Python](http://eigenhombre.com/introduction-to-context-managers-in-python.html)
[Python with Context Managers](https://jeffknupp.com/blog/2016/03/07/python-with-context-managers/)
[Context Managers — Python Tips documentation](https://book.pythontips.com/en/latest/context_managers.html)
[Context Managers in Python — Go Beyond “with open() as file” | by Yong Cui | Better Programming | Medium](https://medium.com/better-programming/context-managers-in-python-go-beyond-with-open-as-file-85a27e392114)

### Ignore errors

[Python: “ignored” context manager - Ruslan Osipov](https://www.rosipov.com/blog/python-ignored-context-manager/)

```python
with ignored(OSError):
  os.remove('somefile.tmp')
```

## Structural Pattern Matching (~= switch)

[Python 3.10: Cool New Features for You to Try – Real Python](https://realpython.com/python310-new-features/#structural-pattern-matching)
[The real purpose of Python's match statement, feat. CSTs - YouTube](https://www.youtube.com/watch?v=ASRqxDGutpA)

[PEP 634 – Structural Pattern Matching: Specification | peps.python.org](https://peps.python.org/pep-0634/)
[PEP 635 – Structural Pattern Matching: Motivation and Rationale | peps.python.org](https://peps.python.org/pep-0635/)
[PEP 636 – Structural Pattern Matching: Tutorial | peps.python.org](https://peps.python.org/pep-0636/)
["Structural pattern matching" for Python, part 1 [LWN.net]](https://lwn.net/Articles/827179/)
["Structural pattern matching" for Python, part 2 [LWN.net]](https://lwn.net/Articles/828486/)

[Python Switches to Match-Case - DEV Community](https://dev.to/vickilanger/python-switches-to-match-case-4mmb)
[A Closer Look At Structural Pattern Matching // New In Python 3.10! - YouTube](https://www.youtube.com/watch?v=scNNi4860kk)
[The Hottest New Feature Coming In Python 3.10 - Structural Pattern Matching / Match Statement - YouTube](https://www.youtube.com/watch?v=-79HGfWmH_w)

## Decorators

[[#Functional]]

[Primer on Python Decorators – Real Python](https://realpython.com/primer-on-python-decorators/)
[Python Decorators: A Step-By-Step Introduction – dbader.org](https://dbader.org/blog/python-decorators)
[Python | functools.wraps() function - GeeksforGeeks](https://www.geeksforgeeks.org/python-functools-wraps-function/) usually used with `functools.wrap()`
[Why we should use Python Decorator more often | by Donald Le | Jul, 2020 | Towards Data Science](https://towardsdatascience.com/why-we-should-use-python-decorator-more-often-e59b56b2b8df) with arguments
[How to Use Decorators in Python, by example | by Stephen Fordham | Towards Data Science](https://towardsdatascience.com/how-to-use-decorators-in-python-by-example-b398328163b)
[Decorators — Python 3 Patterns, Recipes and Idioms](https://python-3-patterns-idioms-test.readthedocs.io/en/latest/PythonDecorators.html)
[Level up your code with Python decorators | by Alexander Bailey | Towards Data Science](https://towardsdatascience.com/level-up-your-code-with-python-decorators-c1966d78607)
[Tutorial: Geir Arne Hjelle - Introduction to Decorators: Power Up Your Python Code - YouTube](https://www.youtube.com/watch?v=T8CQwGIsrx4)
[10 Python Decorators To Take Your Code To The Next Level | by Ahmed Besbes | Towards Data Science](https://towardsdatascience.com/12-python-decorators-to-take-your-code-to-the-next-level-a910a1ab3e99)

[Python's Instance, Class, and Static Methods Demystified – Real Python](https://realpython.com/instance-class-and-static-methods-demystified/)
[Instance vs. Static vs. Class Methods in Python: The Important Differences](https://www.makeuseof.com/tag/python-instance-static-class-methods/) `@staticmethod`, `@classmethod`
[Python staticmethod() - Python Standard Library](https://www.programiz.com/python-programming/methods/built-in/staticmethod)
[Python classmethod() - Python Standard Library](https://www.programiz.com/python-programming/methods/built-in/classmethod)
[Instance vs. Static vs. Class Methods in Python: The Important Differences](https://www.makeuseof.com/tag/python-instance-static-class-methods/)

[Py in 5: Decorators - DEV Community 👩‍💻👨‍💻](https://dev.to/kaelscion/py-in-5-decorators-14k6)
[Python 修饰器的函数式编程 | | 酷 壳 - CoolShell](https://coolshell.cn/articles/11265.html)
[Are you using Python with APIs? Learn how to use a retry decorator!](https://towardsdatascience.com/are-you-using-python-with-apis-learn-how-to-use-a-retry-decorator-27b6734c3e6)
[Decorator inside Python class. Let’s suppose we need a decorator that… | by Vadim Pushtaev | Medium](https://medium.com/@vadimpushtaev/decorator-inside-python-class-1e74d23107f6)

[Custom Python Decorator Patterns Worth Copy-Pasting Forever - KDnuggets](https://www.kdnuggets.com/custom-python-decorator-patterns-worth-copy-pasting-forever)
[Python Decorators: The Complete Guide - YouTube](https://www.youtube.com/watch?v=QH5fw9kxDQA) ❗!important

```python
def logging_decorator(func: Callable[..., Any]):
    @functools.wraps(func)
    def wrapper(*args: Any, **kwargs: Any):
        print(f'calling {func.__name__}')
        value =  func(*args, **kwargs)
        print(f'called {func.__name__}')
        return value

    return wrapper
```

[Tutorial: Geir Arne Hjelle - Introduction to Decorators: Power Up Your Python Code - YouTube](https://www.youtube.com/watch?v=T8CQwGIsrx4)

[Bytepawn - Marton Trencseni – Python decorator patterns](https://bytepawn.com/python-decorator-patterns.html#python-decorator-patterns)
[Bytepawn - Marton Trencseni – Useful Python decorators for Data Scientists](https://bytepawn.com/python-decorators-for-data-scientists.html)

## Debugging

[pdb — The Python Debugger — Python documentation](https://docs.python.org/3/library/pdb.html)
[Your Guide to the Python Print Function – Real Python](https://realpython.com/python-print/)
[Understanding the Python Traceback – Real Python](https://realpython.com/python-traceback/)

[Working with pdb to Debug Python Code | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-the-python-debugger)
[Debugging memory usage in a live Python web app – dbader.org](https://dbader.org/blog/debugging-python-memory-usage)
[How to use the Python debugger | InfoWorld](https://www.infoworld.com/article/3327196/python/how-to-use-the-python-debugger.html)

[【python】这个十多年的bug，没点黑魔法还真解决不了 - YouTube](https://www.youtube.com/watch?v=Mp_f1sBckjU) debugger don't work well with closure, a custom wrapper is needed to generate closure bytecode for pdb's eval

```sh
python -m pdb script.py
```

[pudb documentation](https://documen.tician.de/pudb/)
[inducer/pudb: Full-screen console debugger for Python](https://github.com/inducer/pudb)

[robdmc/behold: A Debugging Tool](https://github.com/robdmc/behold)

## Iterables/Generator

_iterable_: object with `__iter__()` which returns an iterator (better use `iter(object)` to get the iterator); for container class a new iterator is returned for each `iter(object)` call
_iterator_: object with `_ _next__()` which returns a value, can call `next()` on it; it raises `StopIteration` exception when there are no more items; `iterator.__iter__()` returns itself
_generator_: syntax sugar for declaring iterator and iterable as a function with `yield` expression, allows bidirection communication with `send()`

You can iterate over a list as many times as you want but you can iterate over an iterator only once.
`for-in` loop creates the iterable and catch `StopIteration` automatically.

[The Iterator Protocol: How for Loops Work in Python - Trey Hunner](http://treyhunner.com/2016/12/python-iterator-protocol-how-for-loops-work/) ❗!important, see "The Iterator Protocol"
[Learn To Loop The Python Way: Iterators And Generators Explained | Hackaday](https://hackaday.com/2018/09/19/learn-to-loop-the-python-way-iterators-and-generators-explained/) ❗!important
[Introduction to Python Generators – Real Python](https://realpython.com/introduction-to-python-generators/)
[Iterables vs. Iterators vs. Generators » nvie.com](https://nvie.com/posts/iterators-vs-generators/)
[Glossary iterable — Python documentation](https://docs.python.org/3/glossary.html#term-iterable)
[Built-in Types — Python documentation](https://docs.python.org/3/library/stdtypes.html#typeiter) iterator
[Built-in Types — Python documentation](https://docs.python.org/3/library/stdtypes.html#generator-types) generator
[Expressions — Python documentation](https://docs.python.org/3/reference/expressions.html#yieldexpr) Yield expressions
[Iterators & Iterables in Python. Introduction to Iterators and Iterables | by Sadrach Pierre, Ph.D. | Towards Data Science](https://towardsdatascience.com/iterators-iterables-in-python-e713a55dfe1f)

async iterator in 3.10
[PEP 492 – Coroutines with async and await syntax | peps.python.org](https://peps.python.org/pep-0492/)
[PEP 525 – Asynchronous Generators | peps.python.org](https://peps.python.org/pep-0525/)

[Tour of Python Itertools - Martin Heinz](https://martinheinz.dev/blog/16)
[A Deep Dive Into Iterators and Itertools in Python - YouTube](https://www.youtube.com/watch?v=aumxFs2DO5o)

- `compress` - one iterator to another eliminating elements that fail a bool expression
- `accumulate` - like `functools.reduce` but returns all intermediate values
- `cycle` - so cool, create a never ending repeating iterable
- `tee` - multiple references to one iterable
- `divide` - divides iterable into sub-iterables
- `partition` - split into two based on a predicate bool expression
- `side_effect` - attach a side effect function to an iterable that gets called with each element
- `collapse` - like flatten
- `split_at` - multiple iterables splitting at divider items, specified with predicate
- `bucket` - multiple iterables based on multi-return-value expression
- `map_reduce` - specify 3 functions: _key_ function (for categorizing), _value_ function (for transforming) and finally _reduce_ function (for reducing).
- `sort_together`
- `seekable`
- `filter_except`
- `unique_to_each`

[itertools — Functions creating iterators for efficient looping — Python documentation](https://docs.python.org/3/library/itertools.html) [recipes](https://docs.python.org/3/library/itertools.html#itertools-recipes)
[itertools — Iterator Functions — PyMOTW 3](https://pymotw.com/3/itertools/index.html)
[Itertools in Python 3, By Example – Real Python](https://realpython.com/python-itertools/)
[A gentle introduction to itertools · Justin Duke](http://jmduke.com/posts/a-gentle-introduction-to-itertools/)
[Python 201: An Intro to itertools | The Mouse Vs. The Python](https://www.blog.pythonlibrary.org/2016/04/20/python-201-an-intro-to-itertools/)
[Tour of Python Itertools - Towards Data Science](https://towardsdatascience.com/tour-of-python-itertools-2af84db18a5e)
[dictionary - python groupby behaviour? - Stack Overflow](https://stackoverflow.com/questions/6236081/python-groupby-behaviour)
[5 Advanced Functions in Itertools To Simplify Iterations in Python](https://towardsdatascience.com/5-advanced-functions-in-itertools-to-simplify-iterations-in-python-c6213312ca47)
[7 Python Iterators You (Maybe) Didn’t Know About | by Branislav Holländer | Towards Data Science](https://towardsdatascience.com/7-python-iterators-you-maybe-didnt-know-about-a8f4c9aea981)

[Python Generators](http://stackabuse.com/python-generators/)
[Understanding Python's "yield" Keyword](http://stackabuse.com/understanding-pythons-yield-keyword/)
[Generators - Python Wiki](https://wiki.python.org/moin/Generators)
[How do Generators Work? | Towards Data Science](https://towardsdatascience.com/cpython-internals-how-do-generators-work-ba1c4405b4bc)
[Python Generators - YouTube](https://www.youtube.com/watch?v=tmeKsb2Fras)

[What Are Python Generators? – dbader.org](https://dbader.org/blog/python-generators)
[Generator Expressions in Python: An Introduction – dbader.org](https://dbader.org/blog/python-generator-expressions)
[Iterator Chains as Pythonic Data Processing Pipelines – dbader.org](https://dbader.org/blog/python-iterator-chains)

[Iterables vs. Iterators vs. Generators » nvie.com](https://nvie.com/posts/iterators-vs-generators/)
[Use More Iterators » nvie.com](https://nvie.com/posts/use-more-iterators/)

[Generator Tricks for Systems Programmers](http://www.dabeaz.com/generators/index.html)
[Generator Tricks for Systems Programmers - Version 2.0](http://www.dabeaz.com/generators-uk/)
[Generators: The Final Frontier](http://www.dabeaz.com/finalgenerator/)

[Cleaning Up in a Python Generator Can Be Dangerous](https://amir.rachum.com/blog/2017/03/03/generator-cleanup/)

[design - Why do python generators and functions share the "def" keyword? - Software Engineering Stack Exchange](https://softwareengineering.stackexchange.com/questions/271356/why-do-python-generators-and-functions-share-the-def-keyword)

## Concurrency

> threading in Python is not effective due to GIL, focus on multiprocessing

[Is Python Really Scalable? - Bobby - Medium](https://medium.com/@trungluongquang/is-python-really-scalable-90e0d028ba4a)
[threading vs multiprocessing in python - YouTube](https://www.youtube.com/watch?v=AZnGRKFUU0c)

[Ray – Fast and Simple Distributed Computing](https://ray.io/)
[Modern Parallel and Distributed Python: A Quick Tutorial on Ray | by Robert Nishihara | Towards Data Science](https://towardsdatascience.com/modern-parallel-and-distributed-python-a-quick-tutorial-on-ray-99f8d70369b8)
[10x Faster Parallel Python Without Python Multiprocessing | by Robert Nishihara | Towards Data Science](https://towardsdatascience.com/10x-faster-parallel-python-without-python-multiprocessing-e5017c93cce1)
[How to Run Python Functions in Parallel Using Ray API | by Konstantinos Patronas | Better Programming](https://betterprogramming.pub/python-use-ray-to-run-functions-in-parallel-871f7a6678c4)
[python concurrent.futures.ProcessPoolExecutor: Performance of .submit() vs .map() - Stack Overflow](https://stackoverflow.com/questions/42074501/python-concurrent-futures-processpoolexecutor-performance-of-submit-vs-map)

[David Beazley - Python Concurrency From the Ground Up: LIVE! - PyCon 2015 - YouTube](https://www.youtube.com/watch?v=MCs5OvhV9S4)

[Super Fast Python – making you awesome at concurrency](https://superfastpython.com/) ❗!important
[Multiprocessing in Python: The Complete Guide](https://superfastpython.com/multiprocessing-in-python/)
[Threading vs Multiprocessing in Python](https://superfastpython.com/threading-vs-multiprocessing-in-python/)
[ProcessPoolExecutor in Python: The Complete Guide](https://superfastpython.com/processpoolexecutor-in-python/)
[Parallel Nested For-Loops in Python](https://superfastpython.com/parallel-nested-for-loops-in-python/)

[Concurrency in Python Tutorial - Tutorialspoint](https://www.tutorialspoint.com/concurrency_in_python/index.htm)
[A Curious Course on Coroutines and Concurrency](http://www.dabeaz.com/coroutines/) [PDF](http://www.dabeaz.com/coroutines/Coroutines.pdf)
[Python Concurrency: The Tricky Bits -](https://python.hamel.dev/concurrency/)
[Async Python: The Different Forms of Concurrency · Abu Ashraf Masnun](http://masnun.rocks/2016/10/06/async-python-the-different-forms-of-concurrency/)
[Asynchronous Python – Hacker Noon](https://hackernoon.com/asynchronous-python-45df84b82434)
[Python & Async Simplified - Aeracode](https://www.aeracode.org/2018/02/19/python-async-simplified/)
[Getting Started With Async Features in Python – Real Python](https://realpython.com/python-async-features/) concurrency model, queue, asyncio, aiohttp
[Speeding Up Python with Concurrency, Parallelism, and asyncio | TestDriven.io](https://testdriven.io/blog/concurrency-parallelism-asyncio/)
[Async Python Tutorial: Foundations for those with no prior async experience - YouTube](https://www.youtube.com/watch?v=6kNzG0T44SI)
[Fast & Asynchronous in Python - Towards Data Science](https://towardsdatascience.com/fast-and-async-in-python-accelerate-your-requests-using-asyncio-62dafca83c33)
[Hands-on Python 3 Concurrency With the asyncio Module – Real Python](https://realpython.com/courses/python-3-concurrency-asyncio-module/)
[import asyncio: Learn Python's AsyncIO - YouTube](https://www.youtube.com/playlist?list=PLhNSoGM2ik6SIkVGXWBwerucXjgP1rHmB)

[Python 3 Concurrency – The concurrent.futures Module | The Mouse Vs. The Python](https://www.blog.pythonlibrary.org/2016/08/03/python-3-concurrency-the-concurrent-futures-module/#comment-217653) `ThreadPoolExecutor`
[An Intro to Threading in Python – Real Python](https://realpython.com/intro-to-python-threading/)
[Speed Up Your Python Program With Concurrency – Real Python](https://realpython.com/python-concurrency/)
[ThreadPoolExecutor | Python Adventures](https://pythonadventures.wordpress.com/tag/threadpoolexecutor/)
[Python: A quick introduction to the concurrent.futures module | Abu Ashraf Masnun](http://masnun.com/2016/03/29/python-a-quick-introduction-to-the-concurrent-futures-module.html)
[Python threading and subprocesses explained | InfoWorld](https://www.infoworld.com/article/3315121/python/python-threading-and-subprocesses-explained.html)
[Threading in Python | Linux Journal](https://www.linuxjournal.com/content/threading-python)
[python concurrent.futures.ProcessPoolExecutor: Performance of .submit() vs .map() - Stack Overflow](https://stackoverflow.com/questions/42074501/python-concurrent-futures-processpoolexecutor-performance-of-submit-vs-map)
[Ultimate Python Multithreading Guide - Programming Geeks Club](https://programmingeeksclub.com/ultimate-python-multithreading-guide/)

[Raymond Hettinger, Keynote on Concurrency, PyBay 2017 - YouTube](https://www.youtube.com/watch?v=9zinZmE3Ogk)
[Raymond Hettinger Keynote — PyBay 2017 Keynote documentation](https://pybay.com/site_media/slides/raymond2017-keynote/index.html)

[Threading Tutorial #1 - Concurrency, Threading and Parallelism Explained - YouTube](https://www.youtube.com/watch?v=olYdb0DdGtM)
[Threading Tutorial #2 - Implementing Threading in Python 3 (Examples) - YouTube](https://www.youtube.com/watch?v=cdPZ1pJACMI)

[chryswoods.com | Parallel Programming with Python](https://chryswoods.com/parallel_python/)
[Parallel Processing in Python](http://stackabuse.com/parallel-processing-in-python/)
[Simple parallel map in python](https://gist.github.com/bstellato/569f7d6de12d6ffdb643631de840e67f)
[Python and fast HTTP clients](https://julien.danjou.info/python-and-fast-http-clients/)
[Python Parallel Computing (in 60 Seconds or less) – dbader.org](https://dbader.org/blog/python-parallel-computing-in-60-seconds)
[Parallelisation In Python — An Alternative Approach](https://medium.com/idealo-tech-blog/parallelisation-in-python-an-alternative-approach-b2749b49a1e)
[Here’s how you can get a 2–6x speed-up on your data pre-processing with Python](https://towardsdatascience.com/heres-how-you-can-get-a-2-6x-speed-up-on-your-data-pre-processing-with-python-847887e63be5) `ProcessPoolExecutor`
[17.2. multiprocessing — Process-based parallelism — Python documentation](https://docs.python.org/3/library/multiprocessing.html)
[multiprocessing — Manage Processes Like Threads — PyMOTW 3](https://pymotw.com/3/multiprocessing/)
[python - Dead simple example of using Multiprocessing Queue, Pool and Locking - Stack Overflow](https://stackoverflow.com/questions/20887555/dead-simple-example-of-using-multiprocessing-queue-pool-and-locking)
[Multiprocessing in Python | Linux Journal](https://www.linuxjournal.com/content/multiprocessing-python)

[zeehio/parmap: Easy to use map and starmap python equivalents](https://github.com/zeehio/parmap)
easier to use than `map()`, `starmap()`, with partial support

> see [[python-settings#Async I/O]]

## Subprocess

[subprocess — Subprocess management — Python 3 documentation](https://docs.python.org/3/library/subprocess.html)
[Python's os and subprocess Popen Commands](http://stackabuse.com/pythons-os-and-subprocess-popen-commands/)
[Launching External Processes in Python | Linux Journal](https://www.linuxjournal.com/content/launching-external-processes-python)
[How to Execute Shell Commands with Python - Parametric Thoughts](https://janakiev.com/blog/python-shell-commands/)

```python
import subprocess

p1 = subprocess.Popen('ls -a', shell=True, stdin=None,
                      stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                      universal_newlines=True)
p2 = subprocess.Popen('sort -r', shell=True, stdin=p1.stdout)

p1.stdout.close()
out, err = p2.communicate() # blocks

# poll
while True:
    output = process.stdout.readline()
    print(output.strip())
    # Do something
    return_code = process.poll()
    if return_code is not None:
        print('RETURN CODE', return_code)
        # Process has finished, read rest of the output
        for output in process.stdout.readlines():
            print(output.strip())
        break
```

### sh

> full-fledged subprocess replacement

[sh documentation](http://amoffat.github.io/sh/)
[amoffat/sh: Python process launching](https://github.com/amoffat/sh)

## Functional

Python3 is more function in that the built-in `map()`, `filter()` returns `iterator` instead of `list` (as in Python2's `itertool`)

see `functools` and `itertool`

list comprehensions is a syntactic sugar to `map()`
[Comprehending the ‘Comprehensions’ in Python - Towards Data Science](https://towardsdatascience.com/comprehending-the-concept-of-comprehensions-in-python-c9dafce5111)

```python
list(map(lambda x: x**2, [1,2,3,4,5]))
[x**2 for x in [1,2,3,4,5]]

list(filter(lambda x: x>2, [1,2,3,4,5]))
[x for x in [1,2,3,4,5] if x>2]

list(map(pow, [2, 3, 4], [10, 11, 12])) # takes N-th element from each seq for each call

mymax = lambda x, y: x if x > y else y
[mymax(x,y) for (x,y) in [(1,4),(8,3),(6,5)]]
```

Partial:

```python
import functools

def log(message, subsystem):
    """Write the contents of `message` to the specified `subsystem`."""
    print("%s: %s".format(subsystem, message))
    ...

server_log = functools.partial(log, subsystem='server')
server_log('Unable to open socket')
```

Don't use class as attribute container:

```python
import functools

def greet(greeting, target):
    return "{greet}! {name}".format(greet=greeting, name=target)

hola = functools.partial(greet, "hola")
```

[Functional Python | ActiveState](http://www.activestate.com/blog/2016/10/functional-python) ❗!important
[Functional Programming HOWTO — Python documentation](https://docs.python.org/3/howto/functional.html)
[Why does Functional Python Programming matters: Interview insights](https://hub.packtpub.com/functional-python-programming-interview-steven-lott/)
[Python - Functional Programming [Gerardnico]](http://gerardnico.com/wiki/python/functional_programming)
[Functional Programming with Python](http://kachayev.github.io/talks/uapycon2012/index.html) Python2

[PyFunctional by EntilZha](http://www.pyfunctional.org/)
[Underscore.py by serkanyersen](http://serkanyersen.github.io/underscore.py/)
[Top 3 Python Functions You Don’t Know About (Probably)](https://towardsdatascience.com/top-3-python-functions-you-dont-know-about-probably-978f4be1e6d) `map()`, `filter()`, `reduce()`

[functools — Higher-order functions and operations on callable objects — Python documentation](https://docs.python.org/3/library/functools.html)
[functools — Tools for Manipulating Functions — PyMOTW 3](https://pymotw.com/3/functools/index.html)
[Martin Heinz | Functools - The Power of Higher-Order Functions in Python](https://martinheinz.dev/blog/52)

[PyToolz API Documentation — Toolz documentation](https://toolz.readthedocs.io/en/latest/)
[pytoolz/toolz: A functional standard library for Python.](https://github.com/pytoolz/toolz)

[Python 3 - Function Overloading with singledispatch - Mouse Vs Python](https://www.blog.pythonlibrary.org/2016/02/23/python-3-function-overloading-with-singledispatch/)

[Mutable And Immutable Objects | Python For The Lab](https://www.pythonforthelab.com/blog/mutable-and-immutable-objects/)

Charming Python, Python 2
[Charming Python: Functional programming in Python, Part 1](http://www.ibm.com/developerworks/library/l-prog/)
[Charming Python: Functional programming in Python, Part 2](http://www.ibm.com/developerworks/library/l-prog2/)
[Charming Python: Functional programming in Python, Part 3](http://www.ibm.com/developerworks/linux/library/l-prog3)

```python
# Same syntax as PySpark
class FunctionalWrapper(object):
    def __init__(self, data):
        self.data = data
    def map(self, function):
        """Call `map` on the items in `data` using the provided `function`"""
        return FunctionalWrapper(map(function, self.data))
    def reduce(self, function):
        """Call `reduce` on the items in `data` using the provided `function`"""
        return reduce(function, self.data)
    def filter(self, function):
        """Call `filter` on the items in `data` using the provided `function`"""
        return FunctionalWrapper(filter(function, self.data))
    def __eq__(self, other):
        return (isinstance(other, self.__class__)
            and self.__dict__ == other.__dict__)
    def __getattr__(self, name):  return getattr(self.data, name)
    def __getitem__(self, k):  return self.data.__getitem__(k)
    def __repr__(self):  return 'FunctionalWrapper({0})'.format(repr(self.data))
    def __str__(self):  return 'FunctionalWrapper({0})'.format(str(self.data))
```

```python
def memoize(f):
    cache = {}

    def inner(*args, **kwargs):
        if args not in cache:
            cache[args] = f(*args, **kwargs)
        return cache[args]

    inner.__name__ = 'memoized_' + f.__name__
    return inner

# alternatively
class memoize:
    def __init__(self, f):
        self.f = f
        self.dict = {}
    def __call__(self, *args):
        if not args in self.dict:
            self.dict[args] = self.f(*args)
        return self.dict[args]

@memoize
def find_path(source, graph=graph, path=[]):
...

```

[How to make your code faster by using a cache in Python ~ The Python Corner](https://www.thepythoncorner.com/2018/05/how-to-make-your-code-faster-by-using.html)

## Tips and Tricks

[Deciphering Glyph :: Modularity for Maintenance](https://glyph.twistedmatrix.com/2020/02/modules-for-maintenance.html)

[amirgamil/Python-Interview-Tricks: A collection of useful python data structures, tricks, and must-knows for coding interviews](https://github.com/amirgamil/Python-Interview-Tricks)

[7 Easter Eggs in Python. Countless Ways to Entertain Yourself at… | by Eden Au | Towards Data Science](https://towardsdatascience.com/7-easter-eggs-in-python-7765dc15a203)
[Master the 5 Ways to Use Underscores in Python! | by Eirik Berge | Geek Culture | Jul, 2021 | Medium](https://medium.com/geekculture/master-the-5-ways-to-use-underscores-in-python-cfcc7fa53734)
[Mastering Python: 7 Strategies for Writing Clear, Organized, and Efficient Code - KDnuggets](https://www.kdnuggets.com/mastering-python-7-strategies-for-writing-clear-organized-and-efficient-code)
[Lesser-Known Python Functions That Are Super Useful - KDnuggets](https://www.kdnuggets.com/lesser-known-python-functions-that-are-super-useful)

[5 Tips To Achieve Low Coupling In Your Python Code - YouTube](https://www.youtube.com/watch?v=qR4-PBLUZNw)

[What are the 10 best features of Python? - Quora](https://www.quora.com/What-are-the-10-best-features-of-Python)
[Can you amaze me with a Python trick? - Quora](https://www.quora.com/Can-you-amaze-me-with-a-Python-trick)
[6 essential Python libraries for Python programming | InfoWorld](https://www.infoworld.com/article/3230202/python/6-essential-libraries-for-every-python-developer.html)
[15 Python tips and tricks, so you don’t have to look them up on Stack Overflow](https://medium.com/@george.seif94/15-python-tips-and-tricks-so-you-dont-have-to-look-them-up-on-stack-overflow-90cec02705ae)
[Python progression path - From apprentice to guru - Stack Overflow](https://stackoverflow.com/questions/2573135/python-progression-path-from-apprentice-to-guru)
[Code Like a Pythonista: Idiomatic Python](http://python.net/~goodger/projects/pycon/2007/idiomatic/handout.html)
[Transforming Code into Beautiful, Idiomatic Python - YouTube](https://www.youtube.com/watch?v=OSGv2VnC0go)
[Python Readability Series - Julio Merino](http://julio.meroh.net/series.html#Readability)

[Martin Heinz - Writing More Idiomatic and Pythonic Code](https://martinheinz.dev/blog/32)
[Martin Heinz - Python Tips and Trick, You Haven't Already Seen](https://martinheinz.dev/blog/1)
[Martin Heinz - Python Tips and Trick, You Haven't Already Seen, Part 2](https://martinheinz.dev/blog/4)
[Martin Heinz - Ultimate Setup for Your Next Python Project](https://martinheinz.dev/blog/14) [repo](https://github.com/MartinHeinz/python-project-blueprint)

[30 Magical Python Tricks to Write Better Code | by Felix Antony | Towards Data Science](https://towardsdatascience.com/30-magical-python-tricks-to-write-better-code-e54d1642c255)
[12 Python Tips and Tricks For Writing Better Code | by Pavel Tech | Towards Data Science](https://towardsdatascience.com/12-python-tips-and-tricks-for-writing-better-code-b57e7eea580b)
[8 Advanced Python Tricks Used by Seasoned Programmers](https://towardsdatascience.com/8-advanced-python-tricks-used-by-seasoned-programmers-757804975802)
[Five Advanced Python Features. Curly brace scopes, autovivification… | by James Briggs | Jul, 2020 | Towards Data Science](https://towardsdatascience.com/five-advanced-python-features-169c96682350)
[The Most Undervalued Standard Python Library - Towards Data Science](https://towardsdatascience.com/the-most-undervalued-standard-python-library-14021632f692)
[Python tricks 101, what every new programmer should know.](https://towardsdatascience.com/python-tricks-101-what-every-new-programmer-should-know-c512a9787022)

[Python Application Layouts: A Reference – Real Python](https://realpython.com/python-application-layouts/)
[Top Python Tips & Tricks - FinTechExplained - Medium](https://medium.com/fintechexplained/top-python-tips-tricks-dd996b807865)

[Martin Heinz - Python Pitfalls - Expecting The Unexpected](https://martinheinz.dev/blog/37)

[Python HOWTOs — Python documentation](https://docs.python.org/3/howto/index.html)
[PEP8: The Style Guide for Python Code](http://pep8.org/)

[styleguide | Style guides for Google-originated open-source projects](https://google.github.io/styleguide/pyguide.html)

[Popular Python recipes « ActiveState Code](http://code.activestate.com/recipes/langs/python/)
[faif/python-patterns](https://github.com/faif/python-patterns)

[Bash to Python Converter – zwischenzugs](https://zwischenzugs.com/2016/08/29/bash-to-python-converter/)

[How to Use sorted() and sort() in Python – Real Python](https://realpython.com/python-sort/)

### One-liners

Gist:
`| python3 -c 'import sys; for line in sys.stdin.read() print(line)'`

[Powerful Python One-Liners - Python Wiki](<https://wiki.python.org/moin/Powerful Python One-Liners>)

[Sony Pictures Imageworks - Open Source - PYP (Python Power at the Prompt)](http://opensource.imageworks.com/?p=pyp)
[The Pyed Piper (pyp) Tutorial - YouTube](https://www.youtube.com/watch?v=eWtVWF0JSJA)
[zenlc2000/pyp3: Pyed Piper tool by Toby Rosen at Sony Imageworks converted to Python 3](https://github.com/zenlc2000/pyp3)

[piep — piep 0.8.0 documentation](http://gfxmonk.net/dist/doc/piep/)

[ksamuel/Pyped: Let you apply a Python expression to a command output like Perl or Awk would do](https://github.com/ksamuel/Pyped)

### Tar Vulnerability

[[Python-Dev] tarfile and directory traversal vulnerability](https://mail.python.org/pipermail/python-dev/2007-August/074290.html)
[Unpatched 15-year old Python bug allows code execution in 350k projects](https://www.bleepingcomputer.com/news/security/unpatched-15-year-old-python-bug-allows-code-execution-in-350k-projects/)
[Tarfile: Exploiting the World With a 15-Year-Old Vulnerability](https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/tarfile-exploiting-the-world.html)

### Project

[Automating Every Aspect of Your Python Project - Towards Data Science](https://towardsdatascience.com/automating-every-aspect-of-your-python-project-6517336af9da)
[Martin Heinz - Automating Every Aspect of Your Python Project](https://martinheinz.dev/blog/17) [repo](https://github.com/MartinHeinz/python-project-blueprint)
[Ultimate Setup for Your Next Python Project - Towards Data Science](https://towardsdatascience.com/ultimate-setup-for-your-next-python-project-179bda8a7c2c)

## Derivatives

[vindarel/languages-that-compile-to-python: List of languages that compile to python](https://github.com/vindarel/languages-that-compile-to-python)
[virtual machine - Why aren't there other programming languages that compile to Python bytecode? - Software Engineering Stack Exchange](https://softwareengineering.stackexchange.com/questions/148959/why-arent-there-other-programming-languages-that-compile-to-python-bytecode) Python bytecode format is not stable

## Security

[PyCQA/bandit: Bandit is a tool designed to find common security issues in Python code.](https://github.com/PyCQA/bandit)

## #perfmatters

[PythonSpeed - Python Wiki](https://wiki.python.org/moin/PythonSpeed)
[Ship better Python software, faster](https://pythonspeed.com/)

[Writing Faster Python 3 - presented by Sebastian Witowski - YouTube](https://www.youtube.com/watch?v=6P68IBou_cg) [code](https://github.com/switowski/writing-faster-python3)
[Writing Faster Python - Sebastian Witowski](https://switowski.com/tags/writing-faster-python/)

[10 hard-core coding tips for faster Python | InfoWorld](http://www.infoworld.com/article/3044088/application-development/10-hard-core-coding-tips-for-faster-python.html?upd=1467079778194)
[A Python Optimization Anecdote | Dropbox Tech Blog](https://blogs.dropbox.com/tech/2011/10/a-python-optimization-anecdote/)
[Workshop: Advanced Python Software Development](https://mainekuehn.github.io/workshop-advanced_python/)

[Deciphering Glyph :: You Should Compile Your Python And Here’s Why](https://blog.glyph.im/2022/04/you-should-compile-your-python-and-heres-why.html)

[Making Python Programs Blazingly Fast - Towards Data Science](https://towardsdatascience.com/making-python-programs-blazingly-fast-c1cd79bd1b32)
[Ten Tricks To Speed Up Your Python Codes - Towards Data Science](https://towardsdatascience.com/ten-tricks-to-speed-up-your-python-codes-c38abdb89f18)
[10 Techniques to Speed Up Python Efficiency | Towards Data Science | Towards Data Science](https://towardsdatascience.com/10-techniques-to-speed-up-python-runtime-95e213e925dc)

[Python mmap: Improved File I/O With Memory Mapping – Real Python](https://realpython.com/python-mmap/)

[Fastest Way to Flatten a List in Python - Chris Conlan](https://chrisconlan.com/fastest-way-to-flatten-a-list-in-python/)

[Loops in Python – comparison, and performance - DEV Community 👩‍💻👨‍💻](https://dev.to/duomly/loops-in-python-comparison-and-performance-4f2m)

[IPython Cookbook - Chapter 4 : Profiling and Optimization](https://ipython-books.github.io/chapter-4-profiling-and-optimization/)
[IPython Cookbook - Chapter 5 : High-Performance Computing](https://ipython-books.github.io/chapter-5-high-performance-computing/)

[Profiling in Python: How to Find Performance Bottlenecks – Real Python](https://realpython.com/preview/python-profiling/)
[Python 3.12 Preview: Support For the Linux perf Profiler – Real Python](https://realpython.com/python312-perf-profiler/) ❗!important

[Python decorator to measure the execution time of methods](https://medium.com/pythonhive/python-decorator-to-measure-the-execution-time-of-methods-fa04cb6bb36d)

### Faster CPython

> official project to make CPython fast

[Guido And Microsoft Want To Make Python x2 Faster](https://www.i-programmer.info/news/216-python/14573-guido-and-microsoft-want-to-make-python-x2-faster.html)
[Faster CPython at PyCon, part one [LWN.net]](https://lwn.net/Articles/930705/)
[Faster CPython at PyCon, part two [LWN.net]](https://lwn.net/Articles/931197/)
[faster-cpython · GitHub](https://github.com/faster-cpython/)

[How we are making Python 3.11 faster - presented by Mark Shannon - YouTube](https://www.youtube.com/watch?v=xKk7IXm0XO0)
[Making Python 5x FASTER with Guido van Rossum and Mark Shannon - Talk Python To Me - YouTube](https://www.youtube.com/watch?v=_r6bFhl6wR8)
[Talks - Mark Shannon: How we are making CPython faster. Past, present and future. - YouTube](https://www.youtube.com/watch?v=wyty6sFMWI0)

[Talks - Brandt Bucher: Inside CPython 3.11's new specializing, adaptive interpreter - YouTube](https://www.youtube.com/watch?v=shQtrn1v7sQ) quickening (specialized instructions in JIT compiler)
[brandtbucher/specialist: Visualize CPython 3.11's specializing, adaptive interpreter. :fire:](https://github.com/brandtbucher/specialist)
[PEP 659 – Specializing Adaptive Interpreter | peps.python.org](https://peps.python.org/pep-0659/)

### Runtime

[6 Python interpreters to try in 2022 | Opensource.com](https://opensource.com/article/22/9/python-interpreters-2022)

[PyPy](https://www.pypy.org/) runtime with JIT
[What is PyPy? Faster Python without pain | InfoWorld](https://www.infoworld.com/article/3385127/what-is-pypy-faster-python-without-pain.html)
[PyPy Status Blog: PyPy for low-latency systems](https://morepypy.blogspot.com/2019/01/pypy-for-low-latency-systems.html)
[Experiments with new low latency PyPy garbage collector in a thread.](https://renesd.blogspot.com/2019/01/experiments-with-new-low-latency-pypy.html)
[Run Your Python Code as Fast as C | by Marcel Moosbrugger | Apr, 2021 | Towards Data Science](https://towardsdatascience.com/run-your-python-code-as-fast-as-c-4ae49935a826)

[facebookincubator/cinder: Instagram's performance oriented fork of CPython.](https://github.com/facebookincubator/cinder)

[Using IPython for parallel computing — ipyparallel dev documentation](https://ipyparallel.readthedocs.io/en/latest/)

[PyParallel](http://pyparallel.org/) experimental fork of Python 3 that removes GIL

[Pythran — Pythran documentation](https://pythran.readthedocs.io/en/latest/)
[serge-sans-paille/pythran: a claimless python to c++ converter](https://github.com/serge-sans-paille/pythran)

[Pyjion - A Python JIT Compiler](https://www.trypyjion.com/)
[Pyjion main documentation](https://pyjion.readthedocs.io/en/latest/)
[tonybaloney/Pyjion: Pyjion - A JIT for Python based upon CoreCLR](https://github.com/tonybaloney/pyjion)

[Pyston | Python Performance](https://www.pyston.org/)
[pyston/pyston: A faster and highly-compatible implementation of the Python programming language.](https://github.com/pyston/pyston)
only supports 2.7 and lacked the performance improvements originally intended, abandoned by Dropbox; forked from 3.8 in 2021
[Pyston 2.2 Goes Open Source Again](https://www.i-programmer.info/news/216-python/14581-pyston-22-goes-open-source-again.html) 2021-05
[Programming languages: 'Faster Python' Pyston takes a step forward | ZDNet](https://www.zdnet.com/article/programming-languages-faster-python-pyston-takes-a-step-forward/)
[Pyston To Merge With CPython?](https://www.i-programmer.info/news/216-python/16122-pyston-to-merge-with-cpython.html)

### Compiler

[Welcome to mypyc documentation! — mypyc documentation](https://mypyc.readthedocs.io/en/latest/) use type hints
[mypyc/mypyc: Compile type annotated Python to fast C extensions](https://github.com/mypyc/mypyc)

```sh
pip install mypy
mypyc .../module.py
python -c "import module"
```

[Exaloop](https://exaloop.io/)
[Welcome to Codon - Codon](https://docs.exaloop.io/codon)
[exaloop/codon: A high-performance, zero-overhead, extensible Python compiler using LLVM](https://github.com/exaloop/codon)
[Python-based compiler achieves orders-of-magnitude speedups | MIT News | Massachusetts Institute of Technology](https://news.mit.edu/2023/codon-python-based-compiler-achieve-orders-magnitude-speedups-0314)

#### Nuitka

> convert to C and compile

[Nuitka the Python Compiler — Nuitka the Python Compiler](https://nuitka.net/)
[Nuitka/Nuitka: Nuitka is a Python compiler written in Python. It's fully compatible with Python 2.6, 2.7, 3.4-3.13. You feed it your Python app, it does a lot of clever things, and spits out an executable or extension module.](https://github.com/Nuitka/Nuitka)

[新一代Python打包+加速神器：nuitka - YouTube](https://www.youtube.com/watch?v=kjG92Mb76s8)

### C-binding

[[data-analytics-python#Numba]]

[CPython Compilers](http://compilers.pydata.org/)

[Python/C API Reference Manual — Python 3 documentation](https://docs.python.org/3/c-api/index.html)
[CFFI documentation](https://cffi.readthedocs.io/en/latest/) better than [Ctypes](https://docs.python.org/3/library/ctypes.html) in standard library
[Building a Python C Extension Module – Real Python](https://realpython.com/build-python-c-extension-module/?__s=9yjm1swp7s426a4xisnd)
[Interfacing Python and C: The CFFI Module – dbader.org](https://dbader.org/blog/python-cffi)
[Extending Python With C Libraries and the “ctypes” Module – dbader.org](https://dbader.org/blog/python-ctypes-tutorial)
[Interfacing Python and C: Advanced “ctypes” Features – dbader.org](https://dbader.org/blog/python-ctypes-tutorial-part-2)
[Cython tutorial: How to speed up Python | InfoWorld](https://www.infoworld.com/article/3252209/python/cython-tutorial-how-to-speed-up-python.html)
[Importing with ctypes in Python: fighting overflows – Python Tips](https://pythontips.com/2017/03/10/importing-with-ctypes-in-python-fighting-overflows/)
[Python Bindings: Calling C or C++ From Python – Real Python](https://realpython.com/python-bindings-overview/)

[Cython: C-Extensions for Python](http://cython.org/) compiled Python C, sacrificing Python features
[Cython Offers the Ease of Python, the Speed of C++ - The New Stack](https://thenewstack.io/cython-offers-the-ease-of-python-the-speed-of-c/)
[Use Cython to get more than 30X speedup on your Python code](https://towardsdatascience.com/use-cython-to-get-more-than-30x-speedup-on-your-python-code-f6cb337919b6)
[An Introduction to Just Enough Cython to be Useful | Peter Baumgartner](https://www.peterbaumgartner.com/blog/intro-to-just-enough-cython-to-be-useful/)
[An Introduction to Cython, the Secret Python Extension with Superpowers](https://okigiveup.net/tutorials/an-introduction-to-cython/)
[PEP 579 – Refactoring C functions and methods | peps.python.org](https://peps.python.org/pep-0579/)
[Buffer Protocol — Python documentation](https://docs.python.org/3/c-api/buffer.html)
[Iterator Protocol — Python documentation](https://docs.python.org/3/c-api/iter.html)
[Argument Clinic How-To — Python documentation](https://docs.python.org/3/howto/clinic.html) preprocessor for CPython C files

[Intro — pybind11 documentation](https://pybind11.readthedocs.io/en/stable/index.html)
[pybind/pybind11: Seamless operability between C++11 and Python](https://github.com/pybind/pybind11)
[Ivan Smirnov - pybind11 - seamless operability between C++11 and Python - YouTube](https://www.youtube.com/watch?v=jQedHfF1Jfw)
[Python wrappers for C++ with pybind11 — LSST DM Developer Guide Current documentation](https://developer.lsst.io/pybind11/how-to.html)
[C++ in Python the Easy Way! - YouTube](https://www.youtube.com/watch?v=_5T70cAXDJ0) easier than Boost.Python

[nanobind documentation](https://nanobind.readthedocs.io/en/latest/) by author of pybind11
[wjakob/nanobind: nanobind: tiny and efficient C++/Python bindings](https://github.com/wjakob/nanobind)

[Boost.Python](https://www.boost.org/doc/libs/release/libs/python/doc/html/index.html)
[Using C++ with Python 3 in 2018 - Keith Whitley - Medium](https://medium.com/@keithwhitley/using-c-with-python-3-in-2018-480f3e46c8c) build with Docker

#### SIP

> originally developed for PyQt

[Python-SIP/sip: A Python bindings generator for C/C++ libraries](https://github.com/Python-SIP/sip)
[sip documentation](https://python-sip.readthedocs.io/en/stable/index.html)

### Rust binding

[Introduction - PyO3 user guide](https://pyo3.rs/)
[PyO3/pyo3: Rust bindings for the Python interpreter](https://github.com/PyO3/pyo3)
[Writing Python Extensions In Rust Using PyO3](https://www.benfrederickson.com/writing-python-extensions-in-rust-using-pyo3/)
[Rust in Python: Fixing Regular Expressions - YouTube](https://www.youtube.com/watch?v=bNFcArfC1dQ)

[Speed up your Python using Rust - Red Hat Developer](https://developers.redhat.com/blog/2017/11/16/speed-python-using-rust/)
[How to use Rust with Python, and Python with Rust | InfoWorld](https://www.infoworld.com/article/3664124/how-to-use-rust-with-python-and-python-with-rust.html)
[Why you should use Python and Rust together | Opensource.com](https://opensource.com/article/23/3/python-loves-rust)
[Let’s build and optimize a Rust extension for Python](https://pythonspeed.com/articles/intro-rust-python-extensions/)

[dgrunwald/rust-cpython: Rust <-> Python bindings](https://github.com/dgrunwald/rust-cpython)

[getsentry/milksnake: A setuptools/wheel/cffi extension to embed a binary data in wheels](https://github.com/getsentry/milksnake)
[Evolving Our Rust With Milksnake | Product Blog • Sentry](https://blog.sentry.io/2017/11/14/evolving-our-rust-with-milksnake)

[PyO3/setuptools-rust: Setuptools plugin for Rust support](https://github.com/PyO3/setuptools-rust)

[vigneshwer dhinakaran - Pumping up Python modules using Rust - PyCon 2018 - YouTube](https://www.youtube.com/watch?v=UYpWVfTng4s) [slide](https://speakerdeck.com/pycon2018/vigneshwer-dhinakaran-pumping-up-python-modules-using-rust)

### Go binding

[Python and Go : Part I - gRPC](https://www.ardanlabs.com/blog/2020/06/python-go-grpc.html)
[Python and Go : Part II - Extending Python With Go](https://www.ardanlabs.com/blog/2020/07/extending-python-with-go.html)
[Python and Go : Part III - Packaging Python Code](https://www.ardanlabs.com/blog/2020/08/packaging-python-code.html)
[Python and Go : Part IV - Using Python in Memory](https://www.ardanlabs.com/blog/2020/09/using-python-memory.html)

### profiling

[Python Timer Functions: Three Ways to Monitor Your Code – Real Python](https://realpython.com/python-timer/#a-python-timer-class)

```python
import codetiming

with codetiming.Timer(text="item: {:0.4f} s") as timer:
      # code to be profiled
      ...
```

```python
start = time.perf_counter()
# code to be profiled
elapsed = time.perf_counter() - start
```

[Python 101: An Intro to Benchmarking your code - The Mouse Vs. The Python](http://www.blog.pythonlibrary.org/2016/05/24/python-101-an-intro-to-benchmarking-your-code/)
[Python 102: How to Profile Your Code - The Mouse Vs. The Python](http://www.blog.pythonlibrary.org/2014/03/20/python-102-how-to-profile-your-code/)

[The Python Profilers — Python documentation](https://docs.python.org/3/library/profile.html?highlight=cprofile)
[Profiling Python Code » ADMIN Magazine](http://www.admin-magazine.com/HPC/Articles/Profiling-Python-Code)
[Profiling python code · The COOP Blog](https://cerfacs.fr/coop/python-profiling)
[Not just CPU: writing custom profilers for Python](https://pythonspeed.com/articles/custom-python-profiler/)

```sh
python -m cProfile filename
python3.7 -X importtime import_typing.py
perf stat -r 1000 python3.7 import_typing.py
```

```python
import cProfile, pstats, StringIO
pr = cProfile.Profile()
pr.enable()

# ... do something ...

pr.disable()
s = StringIO.StringIO()
ps = pstats.Stats(pr, stream=s).sort_stats(‘cumulative’)
ps.print_stats()
print s.getvalue()

# or run single statement
cProfile.run('sum([i * 2 for i in range(10000)])')
cProfile.run('sum((i * 2 for i in range(10000)))')
```

[Diagnose slow Python code. (Feat. async/await) - YouTube](https://www.youtube.com/watch?v=m_a0fN48Alw)

```python
# 3.8+
import cProfile
import pstats

with cProfile.Profile() as profiler:
      # code to be profiled
      ...

stats = pstats.Stats(profiler)
stats.sort_stats(pstats.SortKey.TIME)
stats.print_stats()
stats.dump_stats(filename='profile.prof')
```

[timeit — Measure execution time of small code snippets — Python documentation](https://docs.python.org/3/library/timeit.html)

```python
# https://dbader.org/blog/python-reverse-string
>>> import timeit
>>> s = 'abcdefghijklmnopqrstuvwxyz' * 10

>>> timeit.repeat(lambda: reverse_string1(s))
[0.6848115339962533, 0.7366074129968183, 0.7358982900041156]

>>> timeit.repeat(lambda: reverse_string2(s))
[5.514941683999496, 5.339547180992668, 5.319950777004124]

>>> timeit.repeat(lambda: reverse_string3(s))
[48.74324739299482, 48.637329410004895, 49.223478018000606]
```

[nschloe/perfplot: Performance plots for Python code](https://github.com/nschloe/perfplot/)
[rkern/line_profiler: Line-by-line profiling for Python](https://github.com/rkern/line_profiler)

[The Python Performance Benchmark Suite — Python Performance Benchmark Suite documentation](https://pyperformance.readthedocs.io/)
[Python pyperf module — pyperf documentation](https://pyperf.readthedocs.io/en/latest/)

[benfred/py-spy: Sampling profiler for Python programs](https://github.com/benfred/py-spy)
[An awesome new Python profiler: py-spy! - Julia Evans](https://jvns.ca/blog/2018/09/08/an-awesome-new-python-profiler--py-spy-/)
[Profiling With Cpu Sampling And Speedscope](https://kimsereylam.com/python/2021/03/05/profiling-with-cpu-sampling-and-speedscope.html)

[profilehooks - Decorators for profiling Python functions](https://mg.pov.lt/profilehooks/)
[Timing Functions With Decorators – Real Python](https://realpython.com/lessons/timing-functions-decorators/)
[Python Timer Functions: Three Ways to Monitor Your Code – Real Python](https://realpython.com/python-timer/)

[pythonprofilers/memory_profiler: Monitor Memory usage of Python code](https://github.com/pythonprofilers/memory_profiler)

```py
# ipython
%load_ext memory_profiler
%memit sum([n*n for n in range(1_000_000)])
%memit sum(n*n for n in range(1_000_000))
```

[Fil: A memory profiler for Python](https://pythonspeed.com/fil/docs/)
[Reduce your Python program’s memory usage with Fil](https://pythonspeed.com/fil/)

### Snakeviz

> graphical viewer for cProfile dummp

[SnakeViz](https://jiffyclub.github.io/snakeviz/)

```sh
uv run python -m cProfile -o profile.out -m your_script_or_package
uv add --dev snakeviz
uv run snakeviz profile.out
```

## Embedded System

[[iot#MicroPython]]
