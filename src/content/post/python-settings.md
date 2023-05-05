---
title: Python settings
description: ""
created: 2014-12-11
tags:
  - comp.lang
  - package-manager
  - pip
  - python
  - settings
---

## Package Manager

[Installing Packages — Python Packaging User Guide](https://packaging.python.org/tutorials/installing-packages/)
[Installing Python Modules — Python documentation](https://docs.python.org/latest/installing/index.html)
[PyPI - the Python Package Index : Python Package Index](https://pypi.python.org/pypi)
[What Is Pip? A Guide for New Pythonistas – Real Python](https://realpython.com/what-is-pip/)
[Python Application Dependency Management in 2018 · Homepage of Hynek Schlawack](https://hynek.me/articles/python-app-deps-2018/)
[Tool recommendations — Python Packaging User Guide](https://packaging.python.org/en/latest/guides/tool-recommendations/)

Python look up packages in this order:

- user path
- site path
- system path

On Windows Python loads according to `%PATH%` variable.

```python
python -c "import site; print(site.getsitepackages())"
```

[Python Module of the Week - Python Module of the Week](https://pymotw.com/2/index.html)
[Python 3 Module of the Week — PyMOTW 3](https://pymotw.com/3/)
[dhellmann / PyMOTW-3 — Bitbucket](https://bitbucket.org/dhellmann/pymotw-3/)

[pipx · PyPI](https://pypi.org/project/pipx/) install global dependencies to virtualenv
[pipx](https://pypa.github.io/pipx/)

[A Better Pip Workflow™ — Kenneth Reitz](https://www.kennethreitz.org/essays/a-better-pip-workflow)
[Pin Your Packages » nvie.com](https://nvie.com/posts/pin-your-packages/)
[The Nine Circles of Python Dependency Hell – Knerd – Medium](https://medium.com/knerd/the-nine-circles-of-python-dependency-hell-481d53e3e025)

`pip` issues:

- non-deterministic build (without pinning)
- manual update of sub-dependencies (with pinning)
- global dependencies (solved with virtual env)
- no dependency resolution

[How to use GitHub as a PyPi server](https://www.freecodecamp.org/news/how-to-use-github-as-a-pypi-server-1c3b0d07db2)

[my python project setup (+ all tools) (intermediate) anthony explains #396 - YouTube](https://www.youtube.com/watch?v=q8DkatMZvUs)

## Anaconda

[Anaconda Distribution | Continuum Analytics: Documentation](https://docs.continuum.io/anaconda/)
[Presentations & Blog Posts — Conda documentation](http://conda.pydata.org/docs/)

- introduces the whole root file system
- still depends on system libraries
- the conda environment could potentially leak
- could have used Docker nowadays

### Installing pip

[pip — documentation](https://pip.pypa.io/en/stable/)
[Installation — pip documentation](https://pip.pypa.io/en/latest/installing.html)

#### latest

```sh
sudo -v
curl -OL https://bitbucket.org/pypa/setuptools/raw/bootstrap/ez_setup.py
sudo python ez_setup.py
curl -OL https://bootstrap.pypa.io/get-pip.py
sudo python get-pip.py
```

### `pip` Usage

```sh
pip install package
# show all versions on PyPI
pip install package==
# install a particular version
pip install package==0.1.2

# upgrade package
pip install -U package
pip install --upgrade package

# generate requirements.txt
pip freeze > requirements.txt
# install from requirements.txt
pip install --no-cache-dir -r requirements.txt

# Useful for containers:
--disable-pip-version-check
--no-cache-dir
```

### conditions in `requirements.txt`

[pip - Is there a way to have a conditional requirements.txt file for my Python application based on platform? - Stack Overflow](https://stackoverflow.com/questions/29222269/is-there-a-way-to-have-a-conditional-requirements-txt-file-for-my-python-applica)
[PEP 508 – Dependency specification for Python Software Packages | peps.python.org](https://peps.python.org/pep-0508/)

```
package1==0.0.1; platform_system != "Windows"
package2==0.0.1; python_version < '3.7' and
```

### Poetry

[Poetry - Python dependency management and packaging made easy.](https://poetry.eustace.io/) uses `pyproject.toml`, also build and publish packages
[python-poetry/poetry: Python dependency management and packaging made easy.](https://github.com/python-poetry/poetry)

[Dependency Management With Python Poetry – Real Python](https://realpython.com/dependency-management-python-poetry/)
[How I break up with pip and fall in love with poetry my new girlfriend. - DEV Community](https://dev.to/espoir/how-i-break-up-with-pip-and-fall-in-love-with-poetry-my-new-girlfriend-4465)
[How to Create and Use Virtual Environments in Python With Poetry - YouTube](https://www.youtube.com/watch?v=0f3moPe_bhk)

[why I will never use python-poetry - YouTube](https://www.youtube.com/watch?v=Gr9o8MW_pb0)

```sh
pipx install poetry


poetry env --bin <path_to_python>
poetry config virtialenvs.in-project true
poetry shell
poetry add <package>
```

### PDM

[pdm · PyPI](https://pypi.org/project/pdm/)

- supports PEP-582, like local `node_modules/`
- uses `pyproject.toml`, also build and publish packages

[PEP 582 – Python local packages directory | peps.python.org](https://peps.python.org/pep-0582/)

### hatch

[pypa/hatch: Modern, extensible Python project management](https://github.com/pypa/hatch)

### micropipenv

[thoth-station/micropipenv: A lightweight wrapper for pip to support requirements.txt, Pipenv and Poetry lock files or converting them to pip-tools compatible output. Designed for containerized Python applications but not limited to them.](https://github.com/thoth-station/micropipenv)

- do not include resolver
- install from lock file
- do not create venv
- good for container deployment

### `pip-tools`

> principals adopted by `pipenv`

[pip-tools documentation](https://pip-tools.readthedocs.io/en/latest/)
[jazzband/pip-tools: A set of tools to keep your pinned Python dependencies fresh.](https://github.com/jazzband/pip-tools)

[Better Package Management » nvie.com](https://nvie.com/posts/better-package-management/)

### `pipreqs`

[Stop using “pip freeze” for your Python projects | by Prakhar Rathi | Jun, 2022 | Towards Data Science](https://towardsdatascience.com/stop-using-pip-freeze-for-your-python-projects-9c37181730f9)
[pipreqs · PyPI](https://pypi.org/project/pipreqs/)

## Virtual Environments

> use `poetry`, `pyenv virtualenv`

[Python Virtual Environments: A Primer – Real Python](https://realpython.com/python-virtual-environments-a-primer/)
[An Effective Python Environment: Making Yourself at Home – Real Python](https://realpython.com/effective-python-environment/)
[how do virtualenvs actually work (advanced) anthony explains #522 - YouTube](https://www.youtube.com/watch?v=XFqDHPYfTwE) simple for \*nix, explains intricacies in Windows implementation

[28.3. venv — Creation of virtual environments — Python documentation](https://docs.python.org/3/library/venv.html)
[Virtualenv — virtualenv documentation](https://virtualenv.pypa.io/en/latest/)
[Deepwalker/pundler: Python bundler-alike alternative to virtualenv](https://github.com/Deepwalker/pundler)

[Create Virtual Environment using “virtualenv” and add it to Jupyter Notebook | by B. Chen | Towards Data Science](https://towardsdatascience.com/create-virtual-environment-using-virtualenv-and-add-it-to-jupyter-notebook-6e1bf4e03415)
[Python virtualenv and venv do’s and don’ts | InfoWorld](https://www.infoworld.com/article/3306656/python-virtualenv-and-venv-dos-and-donts.html)
[Virtualenv and venv: Python virtual environments explained | InfoWorld](https://www.infoworld.com/article/3239675/python/virtualenv-and-venv-python-virtual-environments-explained.html)
[pyvenv vs virtualenv : learnpython](https://www.reddit.com/r/learnpython/comments/4hsudz/pyvenv_vs_virtualenv/)

[tox --devenv (beginner - intermediate) anthony explains #073 - YouTube](https://www.youtube.com/watch?v=flJi2N3dDk0)

[Yelp/aactivator: Automatically source and unsource a project's environment](https://github.com/Yelp/aactivator)
[what is PROMPT_COMMAND? (+aactivator) (intermediate) anthony explains #374 - YouTube](https://www.youtube.com/watch?v=GFLivv2QGI0)

[nakulj/auto-venv: Automatically activate virtual environments in fish](https://github.com/nakulj/auto-venv)

> TODO: detect and use `.activate.sh` like `aactivator`

[An Effective Python Environment: Making Yourself at Home – Real Python](https://realpython.com/effective-python-environment/)
[Python Virtual Environments – A Primer – Real Python](https://realpython.com/python-virtual-environments-a-primer/)
[Using virtual environments with Python ~ The Python Corner](https://www.thepythoncorner.com/2018/05/using-virtual-environments-withpython.html)

[A Minimalist Approach to Python Virtual Environments](https://towardsdatascience.com/a-minimalist-approach-to-python-virtual-environments-f5dacf76bfad)
[willcasey/venvtool](https://github.com/willcasey/venvtool)

### pipenv

> I have tried it and have issues with it

`pipenv` is the recommend package management tool by PyPA and the reference implementation for [Pipfile](https://github.com/pypa/pipfile) (`requirements.txt` replacement). It creates virtualenv in `~/.local/share/virtualenvs` instead of project folder.

[Pipenv: Python Dev Workflow for Humans — pipenv documentation](https://pipenv.pypa.io/en/latest/)
[pypa/pipenv: Python Development Workflow for Humans.](https://github.com/pypa/pipenv)
[Kenneth Reitz - Pipenv: The Future of Python Dependency Management - PyCon 2018 - YouTube](https://www.youtube.com/watch?v=GBQAKldqgZs)

[Pipenv: A Guide to the New Python Packaging Tool – Real Python](https://realpython.com/pipenv-guide/)
[The ABCs of Pipenv and Python Package Management | Dennis O'Keeffe Blog](https://blog.dennisokeeffe.com/blog/2020-07-04-abcs-of-pipenv)
[Managing Application Dependencies — Python Packaging User Guide](https://packaging.python.org/en/latest/tutorials/managing-dependencies/)

[Why you should use pyenv + Pipenv for your Python projects](https://hackernoon.com/reaching-python-development-nirvana-bb5692adf30c) !important
[The Python virtual environment with Pyenv & Pipenv - DEV Community 👩‍💻👨‍💻](https://dev.to/writingcode/the-python-virtual-environment-with-pyenv-pipenv-3mlo)
[Python Environment 101. How are pyenv and pipenv different and… | by Shinichi Okada | Towards Data Science](https://towardsdatascience.com/python-environment-101-1d68bda3094d)
[Pyenv support broken since version 2018.10.09 ? · Issue #3136 · pypa/pipenv](https://github.com/pypa/pipenv/issues/3136)

Issues:

- for application only, not for libraries
- py2 and py3 cannot co-exist
- locked to a single minor version of Python  
  often reporting version mismatch when running script in other environment
- no QA before release
- [Why is pipenv the recommended packaging tool by the community and PyPA? : Python](https://www.reddit.com/r/Python/comments/8jd6aq/why_is_pipenv_the_recommended_packaging_tool_by/)
- [Pyenv support broken · Issue #3551 · pypa/pipenv](https://github.com/pypa/pipenv/issues/3551)
  `pip install -e git+https://github.com/pypa/pipenv.git@master#egg=pipenv`  
  `pip install --upgrade https://github.com/pypa/pipenv/archive/master.zip`
- [different package versions for different python versions · Issue #2171 · pypa/pipenv](https://github.com/pypa/pipenv/issues/2171)  
  [Creating a Pipfile which has different installation instructions depending on operating systems (PyTorch v0.4.1 as an example) - DEV Community](https://dev.to/tomoyukiaota/creating-a-pipfile-which-has-different-installation-instructions-depending-on-operating-systems-pytorch-v041-as-an-example-56i8)

```sh
# enter the virtualenv (automatically create Pipfile)
pipenv shell

# force use your host's Python if the Python version mismatch with Pipfile
# warning: the script may use features not available on your host's Python
pipenv --python $(which python3) shell
pipenv --python $(which python2) shell

# install dependencies with `pipenv` instead of pip
# also applicable within pipenv's shell
pipenv install request numpy
# run your script
python script.py

# add dev dependencies
pipenv install pytest --dev
# *also* install dev dependencies
pipenv install --dev

# behaves as pip, for deployment
pipenv install --system --deploy

# update dependencies
pipenv update

# generate requirements.txt for release
pipenv lock -r > requirements.txt
pipenv run pip freeze > requirements.txt
# OR
pipenv lock
pipenv install --ignore-pipfile

# show dependency graphs
pipenv graph
pipenv graph --reverse
```

### pyenv

> `nvm` for Python

[Managing Multiple Python Versions With pyenv – Real Python](https://realpython.com/intro-to-pyenv/#installing-pyenv)
[Better Python version and environment management with pyenv](http://fgimian.github.io/blog/2014/04/20/better-python-version-and-environment-management-with-pyenv/)
["Python Versions and Dependencies Made Easy" - Sebastian Witowski (PyConline AU 2021) - YouTube](https://www.youtube.com/watch?v=ZF4BARKBRjc)
[Python Versions Management With pyenv](https://switowski.com/blog/pyenv/)

[pyenv/pyenv-installer: This tool is used to install `pyenv` and friends.](https://github.com/pyenv/pyenv-installer)

```sh
curl -L https://raw.github.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash
# follow the instructions
pyenv init
```

```sh
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev \
libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl
# this fix problems when compiling packages
PYTHON_CONFIGURE_OPTS="--enable-shared" pyenv install 3.9.5

pyenv virtualenv PROJECT
pyenv activate PROJECT
python -m pip install -r requirements.txt
pyenv deactivate

pyenv install -l
pyenv virtualenvs
pyenv versions
pyenv global VERSION
pyenv local VENV|VERSION
```

[Can't figure out how to build a python that uses the .SO file · Issue #65 · pyenv/pyenv](https://github.com/pyenv/pyenv/issues/65)
[wxPython Phoenix build fail ("Could not build python extensions"?) in pyenv 3.5.1 on Linux - wxPython Dev - Discuss wxPython](https://discuss.wxpython.org/t/wxpython-phoenix-build-fail-could-not-build-python-extensions-in-pyenv-3-5-1-on-linux/32810/13)

### p

> easier to use than pyenv, `bash` and `zsh` only

[qw3rtman/p: Python Version Management Made Simple](https://github.com/qw3rtman/p)

### virtualenv

> it is a little troublesome to setup

[Virtualenv](https://virtualenv.pypa.io/en/stable/) create python environment in local folder
[virtualenvwrapper documentation](https://virtualenvwrapper.readthedocs.io/en/latest/) create python environment in a centralized folder
[Virtualenv vs Virtualenvwrapper · Saurabh Kumar](https://saurabh-kumar.com/blog/virtualenv-vs-virtualenvwrapper.html) !important

[Code4ReferenceTutorial Python virtual environment .](http://code4reference.com/2014/05/python-virtual-environment/)
[Bob's Blog - Crafting Software: Getting Started with virtualenv and virtualenvwrapper in Python](http://www.silverwareconsulting.com/index.cfm/2012/7/24/Getting-Started-with-virtualenv-and-virtualenvwrapper-in-Python)
[Use pew, not virtualenvwrapper, for Python virtualenvs](http://planspace.org/20150120-use_pew_not_virtualenvwrapper_for_python_virtualenvs/)
[berdario/pew: A tool to manage multiple virtual environments written in pure python](https://github.com/berdario/pew)

```sh
sudo pip install virtualenv
source virtualenv-auto-activate.sh in .bashrc
```

Usage:

```sh
# create env in current directory
virtualenv env
. env/bin/activate
pip install -r requirements.txt  # if any
deactivate
```

## Multiple Python versions

[pyenv/pyenv: Simple Python version management](https://github.com/pyenv/pyenv)
[Managing Multiple Python Versions With pyenv – Real Python](https://realpython.com/intro-to-pyenv/)

[How to Install Python 3.7 on Ubuntu 18.04 | Linuxize](https://linuxize.com/post/how-to-install-python-3-7-on-ubuntu-18-04/)
[How to Install pip for python 3.7 on Ubuntu 18? - Stack Overflow](https://stackoverflow.com/questions/54633657/how-to-install-pip-for-python-3-7-on-ubuntu-18)

---

# Packages

[How to Evaluate the Quality of Python Packages – Real Python](https://realpython.com/python-package-quality/)

```sh
sudo yay -S python-pipenv pyenv pyenv-virtualenv
pip install --user TermRecord ngxtop bpytop
pip install --user ipython black
pip install --user python-pygame
```

[Python Extension Packages for Windows - Christoph Gohlke](https://www.lfd.uci.edu/~gohlke/pythonlibs/) if you have difficulties building packages
[Wheelodex — an Index of Wheels](https://www.wheelodex.org/)
[PyPI Download Stats](https://pypistats.org/)

[JackMcKew/awesome-python-bytes: 😎 🐍 Awesome lists about Python Bytes https://pythonbytes.fm/](https://github.com/JackMcKew/awesome-python-bytes)
[Hidden gems: 14 Python libraries too good to overlook | InfoWorld](http://www.infoworld.com/article/3164409/application-development/hidden-gems-14-python-libraries-too-good-to-overlook.html)
[6 Python libraries every programmer will love | InfoWorld](http://www.infoworld.com/article/3008915/application-development/6-python-libraries-every-programmer-will-love.html)
[4 can't-miss Python goodies from Microsoft, Google, Facebook, and Uber | InfoWorld](http://www.infoworld.com/article/3126468/application-development/4-cant-miss-python-goodies-from-microsoft-google-facebook-and-uber.html)
[Top 10 Python Libraries You Should Know | Tryolabs Blog](https://tryolabs.com/blog/2019/12/10/top-10-python-libraries-of-2019/)
[5 wicked-fast Python frameworks you have to try | InfoWorld](http://www.infoworld.com/article/3133854/application-development/5-wicked-fast-python-frameworks-you-have-to-try.html)
[The World of Zope — Zope Project and Community documentation](https://www.zope.org/world.html#tools)

[Trey Hunner](http://treyhunner.com/)
[Splinter documentation](https://splinter.readthedocs.io/en/latest/)
[Python 3 Module of the Week — PyMOTW 3](https://pymotw.com/3/)

[boltons — boltons documentation](https://boltons.readthedocs.io/en/latest/) utilities
[mahmoud/boltons: 🔩 Like builtins, but boltons. Constructs/recipes/snippets that would be handy in the standard library. Nothing like Michael Bolton.](https://github.com/mahmoud/boltons)

[zipfile — Work with ZIP archives — Python 3 documentation](https://docs.python.org/3/library/zipfile.html)
[Python's zipfile: Manipulate Your ZIP Files Efficiently – Real Python](https://realpython.com/python-zipfile/)

[ActiveState/appdirs: A small Python module for determining appropriate platform-specific dirs, e.g. a "user data dir".](https://github.com/ActiveState/appdirs)

[bwasti/cache.py: Python memoization across program runs.](https://github.com/bwasti/cache.py)

[btwael/superstring.py: A fast and memory-optimized string library for heavy-text manipulation in Python](https://github.com/btwael/superstring.py)

[Notify with Python - Towards Data Science](https://towardsdatascience.com/notify-with-python-41b77d51657e)

[santinic/pampy: Pampy: The Pattern Matching for Python you always dreamed of.](https://github.com/santinic/pampy)

[Requests: HTTP for Humans™ — Requests documentation](http://docs.python-requests.org/en/master/)
[kennethreitz/requests: Python HTTP Requests for Humans™](https://github.com/kennethreitz/requests)
[Python’s Requests Library (Guide) – Real Python](https://realpython.com/python-requests/#request-headers)
[Advanced usage of Python requests - timeouts, retries, hooks](https://hodovi.ch/blog/advanced-usage-python-requests-timeouts-retries-hooks/)

Date times
[datetime — Basic date and time types — Python 3 documentation](https://docs.python.org/3/library/datetime.html)
[A Deep Dive Into Date And Time In Python - YouTube](https://www.youtube.com/watch?v=TFa38ONq5PY)
[kennethreitz/maya: Datetimes for Humans™](https://github.com/kennethreitz/maya)
[kennethreitz/delegator.py: Subprocesses for Humans 2.0.](https://github.com/kennethreitz/delegator.py)
[Arrow: better dates and times for Python](http://arrow.readthedocs.io/en/latest/)
[dateutil/dateutil: Useful extensions to the standard Python datetime features](https://github.com/dateutil/dateutil)
[Pendulum - Python datetimes made easy](https://pendulum.eustace.io/)
[Python - Pendulum Module - GeeksforGeeks](https://www.geeksforgeeks.org/python-pendulum-module/)

## Web Frameworks

[[web-dev#WSGI]]
[[web-dev#ASGI]]

[A Beginner’s Introduction to Python Web Frameworks](https://stxnext.com/blog/2018/09/27/beginners-introduction-python-frameworks)
[I built the same app 3 times | Which Python Framework is best? Django vs Flask vs FastAPI - YouTube](https://www.youtube.com/watch?v=3vfum74ggHE)
[TypeError/secure.py: Secure 🔒 headers and cookies for Python web frameworks](https://github.com/TypeError/secure.py)

[10 Best Python Web Development Frameworks - ReadWrite](https://readwrite.com/10-best-python-web-development-frameworks/)
[Alternatives, Inspiration and Comparisons - FastAPI](https://fastapi.tiangolo.com/alternatives/)

[A familiar HTTP Service Framework — responder 1.1.3 documentation](https://python-responder.org/en/latest/)

### Flask

[Welcome | Flask (A Python Microframework)](http://flask.pocoo.org/)
[humiaozuzu/awesome-flask: A curated list of awesome Flask resources and plugins](https://github.com/humiaozuzu/awesome-flask)

[Flask Apps - Open-Source Web Apps built with automation tools - DEV Community 👩‍💻👨‍💻](https://dev.to/sm0ke/flask-apps-open-source-web-apps-built-with-automation-tools-10dh)

[Extensions Registry | Flask (A Python Microframework)](http://flask.pocoo.org/extensions/)
[Flask-RESTPlus documentation](https://flask-restplus.readthedocs.io/en/stable/)

[Python Flask From Scratch - YouTube](https://www.youtube.com/playlist?list=PLillGF-RfqbbbPz6GSEM9hLQObuQjNoj_)
[Miguel Grinberg - Flask Workshop - PyCon 2015 - YouTube](https://www.youtube.com/watch?v=DIcpEg77gdE)
[Miguel Grinberg - Flask at Scale - PyCon 2016 - YouTube](https://www.youtube.com/watch?v=tdIIJuPh3SI)
[miguelgrinberg/flack: Companion code to my PyCon 2016 "Flask at Scale" tutorial session.](https://github.com/miguelgrinberg/flack)
[Miguel Grinberg - Microservices with Python and Flask - PyCon 2017 - YouTube](https://www.youtube.com/watch?v=nrzLdMWTRMM)
[BUILDING MICROSERVICES WITH PYTHON AND FLASK - YouTube](https://www.youtube.com/watch?v=1X3_gQwfabI)
[Flask web development with Python - YouTube](https://www.youtube.com/playlist?list=PLQVvvaa0QuDcOS4l8RCWh0olq_je0OKaP)
[Practical Flask Web Development Tutorials - YouTube](https://www.youtube.com/playlist?list=PLQVvvaa0QuDc_owjTbIY4rbgXOFkUYOUB)

[Category: Flask - miguelgrinberg.com](https://blog.miguelgrinberg.com/category/Flask)

[Flask project setup: TDD, Docker, Postgres and more - Part 1 - The Digital Cat](https://www.thedigitalcatonline.com/blog/2020/07/05/flask-project-setup-tdd-docker-postgres-and-more-part-1/)
[Flask project setup: TDD, Docker, Postgres and more - Part 2 - The Digital Cat](https://www.thedigitalcatonline.com/blog/2020/07/06/flask-project-setup-tdd-docker-postgres-and-more-part-2/)
[Flask project setup: TDD, Docker, Postgres and more - Part 3 - The Digital Cat](https://www.thedigitalcatonline.com/blog/2020/07/07/flask-project-setup-tdd-docker-postgres-and-more-part-3/)

[Flask Tutorials – Real Python](https://realpython.com/tutorials/flask/)
[Welcome to Connexion’s documentation! — Connexion documentation](https://connexion.readthedocs.io/en/stable/) adds OpenAPI
[Python REST APIs With Flask, Connexion, and SQLAlchemy – Real Python](https://realpython.com/flask-connexion-rest-api/)
[Python REST APIs With Flask, Connexion, and SQLAlchemy – Part 2 – Real Python](https://realpython.com/flask-connexion-rest-api-part-2/)
[Python REST APIs With Flask, Connexion, and SQLAlchemy – Part 3 – Real Python](https://realpython.com/flask-connexion-rest-api-part-3/)
[Python REST APIs With Flask, Connexion, and SQLAlchemy – Part 4 – Real Python](https://realpython.com/flask-connexion-rest-api-part-4/)

[Creating REST Services With Flask - DZone Integration](https://dzone.com/articles/creating-rest-services-with-flask)
[Get started writing your own web services using Python Flask | Opensource.com](https://opensource.com/article/17/3/writing-web-service-using-python-flask)
[peterrus/flask-docker-debugging-vscode-example: Dockerized Flask Development Workflow in VSCode Example](https://github.com/peterrus/flask-docker-debugging-vscode-example)

```
flask-RESTful flask-restless
flask-security flask-sqlalchemy
```

[Category: Flask - miguelgrinberg.com](https://blog.miguelgrinberg.com/category/Flask)
[How Secure Is The Flask User Session? - miguelgrinberg.com](https://blog.miguelgrinberg.com/post/how-secure-is-the-flask-user-session)
["Flask At Scale" tutorial at PyCon 2016 in Portland - miguelgrinberg.com](https://blog.miguelgrinberg.com/post/flask-at-scale-tutorial-at-pycon-2016-in-portland)
[The Flask Mega-Tutorial, Part I: Hello, World! - miguelgrinberg.com](http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)
[Running Your Flask Application Over HTTPS - miguelgrinberg.com](https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https)
[Migrating from Flask-Script to the New Flask CLI - miguelgrinberg.com](https://blog.miguelgrinberg.com/post/migrating-from-flask-script-to-the-new-flask-cli)

[Build a CRUD Web App With Python and Flask – Part Two | Scotch](https://scotch.io/tutorials/build-a-crud-web-app-with-python-and-flask-part-two)
[Build a CRUD Web App With Python and Flask – Part Two | Scotch](https://scotch.io/tutorials/build-a-crud-web-app-with-python-and-flask-part-two)
[Build a CRUD Web App With Python and Flask – Part Three | Scotch](https://scotch.io/tutorials/build-a-crud-web-app-with-python-and-flask-part-three)

### Masonite

[Introduction - Masonite Documentation](https://docs.masoniteproject.com/)
[MasoniteFramework/masonite: The Modern And Developer Centric Python Web Framework](https://github.com/MasoniteFramework/masonite)
[Masonite Framework Tutorial Series Part 1 - Installation - DEV Community 👩‍💻👨‍💻](https://dev.to/josephmancuso/masonite-framework-tutorial-series-part-1-140e)
[Masonite Framework Tutorial Series Part 2 - Routing - DEV Community 👩‍💻👨‍💻](https://dev.to/josephmancuso/masonite-framework-tutorial-series-part-2---routing-1ak3)

[Masonite Python Framework - New Dashboard Package! - DEV Community 👩‍💻👨‍💻](https://dev.to/josephmancuso/masonite-python-framework---new-dashboard-package-31hb)

### Async

[[web-dev#ASGI]]
[[fastapi]]

[Sanic Framework](https://sanic.dev/en/) one of the first extremely fast Python frameworks based on `asyncio`, uses `uvloop`

[Falcon | The minimal, fast, and secure web framework for Python](https://falconframework.org/)

### Quart

[Quart documentation](https://quart.palletsprojects.com/en/latest/)
[pallets/quart: An async Python micro framework for building web applications.](https://github.com/pallets/quart)

### Django

[[django]]

### Pyramid

[Welcome to Pyramid, a Python Web Framework](https://trypyramid.com/)
[Pyramid Community Cookbook](https://docs.pylonsproject.org/projects/pyramid-cookbook/en/latest/index.html)

[Welcome to the Pylons Project](https://pylonsproject.org/) Pyramid is part of Pylons project
[Pylons Reference Documentation — Pylons Framework documentation](https://docs.pylonsproject.org/projects/pylons-webframework/en/latest/)

### Honorable Mentions

[Bottle: Python Web Framework — Bottle 0.13-dev documentation](http://bottlepy.org/docs/dev/)
[bottlepy/bottle: bottle.py is a fast and simple micro-framework for python web-applications.](https://github.com/bottlepy/bottle)

[CherryPy — A Minimalist Python Web Framework](https://cherrypy.org/)
[cherrypy/cherrypy: CherryPy is a pythonic, object-oriented HTTP framework. https://docs.cherrypy.org/](https://github.com/cherrypy/cherrypy)

[Tornado Web Server — Tornado documentation](http://www.tornadoweb.org/en/stable/)
\
[www.web2py.com](http://www.web2py.com/)
[web2py - Preface](http://web2py.com/book) the manual
[Welcome to web2py’s API documentation!](http://web2py.readthedocs.io/en/latest/)
[web2py video course 2013 on Vimeo](https://vimeo.com/album/3016728)

[channelcat/sanic: Async Python 3.5+ web server that's written to go fast](https://github.com/channelcat/sanic)
[encode/apistar: A smart Web API framework, designed for Python 3. 🌟](https://github.com/encode/apistar)
[molten: modern API framework — molten 0.1.0 documentation](https://moltenframework.com/)

## Async I/O

[Coroutines and Tasks — Python documentation](https://docs.python.org/3/library/asyncio-task.html)
[asyncio — Asynchronous I/O — Python documentation](https://docs.python.org/3/library/asyncio.html)
[asyncio — Asynchronous I/O, event loop, and concurrency tools — PyMOTW 3](https://pymotw.com/3/asyncio/)
[pymotw3/source/asyncio at master · reingart/pymotw3](https://github.com/reingart/pymotw3/tree/master/source/asyncio)
Async function can be start-and-awaited, or started by `asyncio.create_taks()` which returns a future that can be awaited on
`asyncio.to_thread()` turns a sync function to an async function

```python
results = await asyncio.gather(
  func1(), func2(), func3(),
  return_exceptions=True
)
exceptions = [ex for ex in results if ex isinstance(ex, Exception)]
# ExceptionGroup new in 3.11
if exceptions:
  raise ExceptionGroup(exceptions)
```

```python
# TaskGroup new in 3.11
async with asyncio.TaskGroup as tg:
  tg.create_task(func1())
  tg.create_task(func2())
  tg.create_task(func3())
```

[timofurrer/awesome-asyncio: A curated list of awesome Python asyncio frameworks, libraries, software and resources](https://github.com/timofurrer/awesome-asyncio)

[python - How does asyncio actually work? - Stack Overflow](https://stackoverflow.com/questions/49005651/how-does-asyncio-actually-work)
[Asynchronous I/O With Python 3](https://code.tutsplus.com/tutorials/asynchronous-io-with-python-3--cms-29045)
[Async IO in Python: A Complete Walkthrough – Real Python](https://realpython.com/async-io-python/)
[Asyncio : A tutorial for the beginners | KnowPapa](https://knowpapa.com/asyncio/)
[Hands-on Python 3 Concurrency With the asyncio Module – Real Python](https://realpython.com/courses/python-3-concurrency-asyncio-module/)
[Asynchronous Programming in Python | Asyncio (Guide)](https://djangostars.com/blog/asynchronous-programming-in-python-asyncio/)
[How to use asyncio in Python | InfoWorld](https://www.infoworld.com/article/3526429/how-to-use-asyncio-in-python.html)
[3 steps to a Python async overhaul | InfoWorld](https://www.infoworld.com/article/3562577/3-steps-to-a-python-async-overhaul.html)
[Python async/await Tutorial](https://stackabuse.com/python-async-await-tutorial)

[How To Easily Do Asynchronous Programming With Asyncio In Python - YouTube](https://www.youtube.com/watch?v=2IW-ZEui4h4)
[Next-Level Concurrent Programming In Python With Asyncio - YouTube](https://www.youtube.com/watch?v=GpqAQxH1Afc)

```python
async def find_treasure(start, end):
    global treasure_found
    for i in range(start, end):
        if treasure_found:
            return
        # Await until file is read
  await read_file(i)


async def main():
    tasks = [find_treasure(i, i+count)
            for i in range(0, N, count)]
    await asyncio.gather(
            *tasks
    )
​
asyncio.run(main())
```

[aio-libs](https://github.com/aio-libs)
[Tinche/aiofiles: File support for asyncio](https://github.com/Tinche/aiofiles)
[theelous3/asks: Async requests-like httplib for python.](https://github.com/theelous3/asks)
[vxgmichel/aiostream: Generator-based operators for asynchronous iteration](https://github.com/vxgmichel/aiostream)
[Welcome to aiochan’s documentation! — aiochan documentation](https://aiochan.readthedocs.io/en/latest/index.html) channel

[Welcome to AIOHTTP — aiohttp documentation](https://aiohttp.readthedocs.io/en/stable/)

### AnyIO

[AnyIO documentation](https://anyio.readthedocs.io/en/stable/)

### Rocketry

[Why Rocketry? — Rocketry](https://rocketry.readthedocs.io/en/stable/)
[Rocketry: Insanely Powerful Scheduler | by Mikael Koli | Jul, 2022 | ITNEXT](https://itnext.io/red-engine-insanely-powerful-scheduler-7d9d8e84b58b)

### Unsync

> `@unsync` defines tasks that automatically starts, `.result()` will wait on the task

[Unsync](http://asherman.io/projects/unsync.html) ambient event loop
[alex-sherman/unsync: Unsynchronize asyncio](https://github.com/alex-sherman/unsync)

### Curio

[Curio documentation](https://curio.readthedocs.io/en/latest/) coroutine-based library for concurrent Python systems programming
[A Tutorial Introduction — Curio documentation](https://curio.readthedocs.io/en/latest/tutorial.html)
[dabeaz/curio: Get that harness ready and hold on tight--Curio is gonna take YOU for a walk.](https://github.com/dabeaz/curio)

[#107: Python concurrency with Curio - YouTube](https://www.youtube.com/watch?v=cetvzYugGIc)

### Trio

[Trio: a friendly Python library for async concurrency and I/O](https://trio.readthedocs.io/en/latest/index.html)
[python-trio/trio: Trio – a friendly Python library for async concurrency and I/O](https://github.com/python-trio/trio)

[python - What is the core difference between asyncio and trio? - Stack Overflow](https://stackoverflow.com/questions/49482969/what-is-the-core-difference-between-asyncio-and-trio)

### Other async libs

[Comparing gevent to eventlet | Concurrency in Python](https://blog.gevent.org/2010/02/27/why-gevent/)
[What is gevent? — gevent documentation](http://www.gevent.org/) uses libev

[Eventlet Networking Library](http://eventlet.net/)

[MagicStack/uvloop: Ultra fast asyncio event loop.](https://github.com/MagicStack/uvloop) uses uvloop

## Socket programming

[socket — Low-level networking interface — Python documentation](https://docs.python.org/3/library/socket.html)
[socketserver — A framework for network servers — Python documentation](https://docs.python.org/3/library/socketserver.html)

[Socket Programming in Python (Guide) – Real Python](https://realpython.com/python-sockets/)

## Distributed Computing

[6 Python libraries for parallel processing | InfoWorld](https://www.infoworld.com/article/3542595/6-python-libraries-for-parallel-processing.html)
[Asynchronous Task Execution In Python](https://bhavaniravi.com/blog/asynchronous-task-execution-in-python/)

[execnet: Distributed Python deployment and communication](http://codespeak.net/execnet/)

[Homepage | Celery: Distributed Task Queue](http://www.celeryproject.org/)

[closeio/tasktiger: Python task queue. Because celery is gross.](https://github.com/closeio/tasktiger)

[Welcome to aio-pika’s documentation! — aio-pika documentation](https://aio-pika.readthedocs.io/en/latest/) wrapper for the aiormq for asyncio and humans

[RQ: Simple job queues for Python](https://python-rq.org/)
[rq/rq: Simple job queues for Python](https://github.com/rq/rq)
[Introducing RQ » nvie.com](https://nvie.com/posts/introducing-rq/)
[Asynchronous Tasks with Flask and Celery | TestDriven.io](https://testdriven.io/blog/flask-and-celery/)
[Asynchronous Tasks with Flask and Redis Queue | TestDriven.io](https://testdriven.io/blog/asynchronous-tasks-with-flask-and-redis-queue/)

[Welcome to PyPubSub’s Home Page! — Pypubsub v4.0.3 Documentation](https://pypubsub.readthedocs.io/en/v4.0.3/)
[schollii/pypubsub: A Python publish-subcribe library (moved here from SourceForge.net where I had it for many years)](https://github.com/schollii/pypubsub)

## Configs

[python-decouple · PyPI](https://pypi.org/project/python-decouple/) load `.env`
[Do You Really Need Environment Variables in Python? | iRead](https://iread.ga/posts/49/do-you-really-need-environment-variables-in-python)

### Dynaconf

[Dynaconf](https://www.dynaconf.com/)
[PulpCon 2021 - Dynaconf: What is it, How Pulp uses it, What is coming on v4.0 - YouTube](https://www.youtube.com/watch?v=lzgvvODsw_w)

### ConfigParser

[configparser — Configuration file parser — Python documentation](https://docs.python.org/3/library/configparser.html)

```python
import configparser

config = configparser.ConfigParser()
config.read(config_path)
print({section: dict(config[section]) for section in config.sections()})
```

## Database/ORM

[Raw SQL, SQL Query Builder, or ORM? - YouTube](https://www.youtube.com/watch?v=x1fCJ7sUXCM)
[Object-relational Mappers (ORMs) - Full Stack Python](https://www.fullstackpython.com/object-relational-mappers-orms.html)
[Why should you use an ORM (Object Relational Mapper)? - HedgeDoc](https://monadical.com/posts/why-use-orm.html)

[SQLAlchemy - The Database Toolkit for Python](http://www.sqlalchemy.org/)
[dahlia/awesome-sqlalchemy: A curated list of awesome tools for SQLAlchemy](https://github.com/dahlia/awesome-sqlalchemy)
[Data Management With Python, SQLite, and SQLAlchemy – Real Python](https://realpython.com/python-sqlite-sqlalchemy/)
[How to fix common pitfalls with the Python ORM tool SQLAlchemy | Opensource.com](https://opensource.com/article/19/9/common-pitfalls-python)
[SQLAlchemy ORM — a more “Pythonic” way of interacting with your database](https://medium.com/dataexplorations/sqlalchemy-orm-a-more-pythonic-way-of-interacting-with-your-database-935b57fd2d4d)

[encode/databases: Async database support for Python. 🗄](https://github.com/encode/databases)
[collerek/ormar: python async orm with fastapi in mind and pydantic validation](https://github.com/collerek/ormar)

[Rasgo](https://www.rasgoml.com/)
[rasgointelligence/RasgoQL: Write python locally, execute SQL in your data warehouse](https://github.com/rasgointelligence/RasgoQL)
[RasgoQL Brings the Modern Data Stack to Python Users – The New Stack](https://thenewstack.io/rasgoql-brings-the-modern-data-stack-to-python-users/)

[coleifer/peewee: a small, expressive orm -- supports postgresql, mysql and sqlite](https://github.com/coleifer/peewee)
[Peewee Tutorial - Tutorialspoint](https://www.tutorialspoint.com/peewee/index.htm)

[How to Use PostgreSQL in Python](https://www.freecodecamp.org/news/postgresql-in-python/)

[kennethreitz/records: SQL for Humans™](https://github.com/kennethreitz/records)
[MagicStack/asyncpg: A fast PostgreSQL Database Client Library for Python/asyncio.](https://github.com/MagicStack/asyncpg)

## CLI

[How to Write User-friendly Command Line Interfaces in Python | by Xiaoxu Gao | Towards Data Science](https://towardsdatascience.com/how-to-write-user-friendly-command-line-interfaces-in-python-cc3a6444af8e)

[prompt-toolkit](https://github.com/prompt-toolkit?type=source)

[MasterOdin/crayons: Text UI colors for Python.](https://github.com/MasterOdin/crayons)
[tartley/colorama: Simple cross-platform colored terminal text in Python](https://github.com/tartley/colorama)

[tabulate · PyPI](https://pypi.org/project/tabulate/) pretty print table and dict

[Pytabby: a tabbed menu system for console-based Python programs - DEV Community 👩‍💻👨‍💻](https://dev.to/prooffreader/pytabby-a-tabbed-menu-system-for-console-based-python-programs-301n)

[tqdm documentation](https://tqdm.github.io/)
[tqdm/tqdm: A fast, extensible progress bar for Python and CLI](https://github.com/tqdm/tqdm)

[peterbrittain/asciimatics: A cross platform package to do curses-like operations, plus higher level APIs and widgets to create text UIs and ASCII art animations](https://github.com/peterbrittain/asciimatics)

[Overview — Urwid](http://urwid.org/)
[urwid/urwid: Console user interface library for Python (official repo)](https://github.com/urwid/urwid)

[amoffat/sh: Python process launching](https://github.com/amoffat/sh)

### Prompt

[prompt-toolkit/python-prompt-toolkit: Library for building powerful interactive command line applications in Python](https://github.com/prompt-toolkit/python-prompt-toolkit)
[python-cmd2/cmd2: cmd2 - quickly build feature-rich and user-friendly interactive command line applications in Python](https://github.com/python-cmd2/cmd2)

[Textualize/textual: Textual is a TUI (Text User Interface) framework for Python inspired by modern web development.](https://github.com/Textualize/textual)
[Textualize/rich: Rich is a Python library for rich text and beautiful formatting in the terminal.](https://github.com/Textualize/rich)
[Welcome to Rich’s documentation!](https://rich.readthedocs.io/en/latest/)
[Make Your Python CLI Tools Pop With Rich | Hackaday](https://hackaday.com/2022/01/19/make-your-python-cli-tools-pop-with-rich/)

[Introducing Textual](https://www.willmcgugan.com/blog/tech/post/textual-progress/) uses Rich internally
[Building Rich terminal dashboards](https://www.willmcgugan.com/blog/tech/post/building-rich-terminal-dashboards/)
[Rendering a tree view in the terminal with Python and Rich](https://www.willmcgugan.com/blog/tech/post/rich-tree/)

### Parser

[Comparing Python Command-Line Parsing Libraries - Argparse, Docopt, and Click - Real Python](https://realpython.com/comparing-python-command-line-parsing-libraries-argparse-docopt-click/)
[Building Beautiful Command Line Interfaces with Python | by Oyetoke Tobi Emmanuel | codeburst](https://codeburst.io/building-beautiful-command-line-interfaces-with-python-26c7e1bb54df)

[chriskiehl/Gooey: Turn (almost) any Python command line program into a full GUI application with one line](https://github.com/chriskiehl/Gooey)

[argparse — Parser for command-line options, arguments and sub-commands — Python documentation](https://docs.python.org/3/library/argparse.html)
[Python Argparse Cookbook - mkaz.tech](https://mkaz.tech/code/python-argparse-cookbook.html)
[PEP 389 – argparse - New Command Line Parsing Module | peps.python.org](https://peps.python.org/pep-0389/)
[How to Build Command Line Interfaces in Python With argparse – Real Python](https://realpython.com/command-line-interfaces-python-argparse/)
[Python Argparse Cookbook – mkaz.blog](https://mkaz.blog/code/python-argparse-cookbook/)
[Learn Enough Python to be Useful: argparse – Towards Data Science](https://towardsdatascience.com/learn-enough-python-to-be-useful-argparse-e482e1764e05)
[How to Master Python Command Line Arguments - Towards Data Science](https://towardsdatascience.com/how-to-master-python-command-line-arguments-5d5ad4bcf985)
[Python argparse regex expression - Stack Overflow](https://stackoverflow.com/questions/41881002/python-argparse-regex-expression) `type=validator_function`

[Welcome to Click — Click Documentation](https://click.palletsprojects.com/)
[Writing Python Command-Line Tools With Click – dbader.org](https://dbader.org/blog/python-commandline-tools-with-click)
[Mastering Click: Writing Advanced Python Command-Line Apps – dbader.org](https://dbader.org/blog/mastering-click-advanced-python-command-line-apps)
[Super Easy Python CLI with Click | CODING w/RICKY](http://www.codingwithricky.com/2019/08/18/easy-python-cli-with-click/)
[How to Write Python Command-Line Interfaces like a Pro](https://towardsdatascience.com/how-to-write-python-command-line-interfaces-like-a-pro-f782450caf0d)
[click-contrib](https://github.com/click-contrib)

[Typer](https://typer.tiangolo.com/) Click with type hints instead of annotation
[tiangolo/typer: Typer, build great CLIs. Easy to code. Based on Python type hints.](https://github.com/tiangolo/typer)

[Argh: The Natural CLI — argh documentation](https://pythonhosted.org/argh/)

[mando - CLI interfaces for Humans — mando documentation](https://mando.readthedocs.io/en/latest/)
[rubik/mando: Create Python CLI apps with little to no effort at all!](https://github.com/rubik/mando)

[kbknapp/Clapp-py: A small library for quickly and easily creating command line applications in python.](https://github.com/kbknapp/Clapp-py)

[docopt—language for description of command-line interfaces](http://docopt.org/)
[Python argparse: Make at least one argument required - Stack Overflow](https://stackoverflow.com/questions/6722936/python-argparse-make-at-least-one-argument-required) docopt example

### Framework

[cliff – Command Line Interface Formulation Framework — cliff documentation](https://docs.openstack.org/cliff/latest/)
[Cement Framework](https://builtoncement.com/)
[timsavage/pyapp: A Python Application framework - Let us handle the boring stuff!](https://github.com/timsavage/pyapp)
[google/python-fire: Python Fire is a library for automatically generating command line interfaces (CLIs) from absolutely any Python object.](https://github.com/google/python-fire)

## Project Generators

[Cookiecutter: Better Project Templates — cookiecutter documentation](http://cookiecutter.readthedocs.io/en/latest/)
[cookiecutter/cookiecutter: A command-line utility that creates projects from cookiecutters (project templates), e.g. Python package projects, VueJS projects.](https://github.com/cookiecutter/cookiecutter)

[Raphael Pierzina - Kickstarting projects with Cookiecutter - YouTube](https://www.youtube.com/watch?v=nExL0SgKsDY)

[Cookiecutter Templates](http://cookiecutter-templates.sebastianruml.name/)
[nvie/cookiecutter-python-cli](https://github.com/nvie/cookiecutter-python-cli)

[bpw1621/ordained: An opinionated template for Python packages.](https://github.com/bpw1621/ordained)
[ORDAINED: The Python Project Template - KDnuggets](https://www.kdnuggets.com/2021/11/ordained-python-project-template.html)

## GUI

[[qt#Python]]
[[cross-platform-apps-desktop]]

## eBook

[Overview — Sphinx documentation](http://www.sphinx-doc.org/en/stable/)
[aerkalov/ebooklib: Python E-book library for handling books in EPUB2/EPUB3 and Kindle format -](https://github.com/aerkalov/ebooklib/)
[anqxyr/mkepub: Simple minimalistic library for creating EPUB3 files](https://github.com/anqxyr/mkepub)

## SimPy

[Overview — SimPy documentation](https://simpy.readthedocs.io/en/latest/index.html) Discrete event simulation for Python
[SimPY - YouTube](https://www.youtube.com/playlist?list=PL2Wg3oyN-jmMD39JFqejZAzi06BWo_uJa)
[Meghan Heintz: Launching a new warehouse with SimPy at Rent the Runway | PyData New York City 2019 - YouTube](https://www.youtube.com/watch?v=693UiPq6mII)
[Basics of Discrete Event Simulation using SimPy in Python](https://www.tutorialspoint.com/basics-of-discrete-event-simulation-using-simpy-in-python)

## Hydra

[Hydra | Hydra](https://hydra.cc/)
[Open-sourcing Hydra for simpler app development - Facebook Engineering](https://engineering.fb.com/open-source/hydra/)

[Hydra — A fresh look at configuration for machine learning projects | by PyTorch | PyTorch | Medium](https://medium.com/pytorch/hydra-a-fresh-look-at-configuration-for-machine-learning-projects-50583186b710)

[FLOSS Weekly 573 Hydra](https://twit.tv/shows/floss-weekly/episodes/573)

## Testing

[Top 5 Python Frameworks For Test Automation In 2019 | LambdaTest](https://www.lambdatest.com/blog/top-5-python-frameworks-for-test-automation-in-2019/)

[Getting Started With Testing in Python – Real Python](https://realpython.com/python-testing/)
[Continuous Integration With Python: An Introduction – Real Python](https://realpython.com/python-continuous-integration/)
[wily · PyPI](https://pypi.org/project/wily/)
[Testing Your Code — The Hitchhiker's Guide to Python](https://docs.python-guide.org/writing/tests/)
[An Introduction to Unit Testing in Python](https://www.freecodecamp.org/news/an-introduction-to-testing-in-python/)

[Your way out of The Lack of Testing Death Spiral - Pythoscope](http://pythoscope.wikidot.com/)
[mkwiatkowski/pythoscope: unit test generator for Python](https://github.com/mkwiatkowski/pythoscope)

[Refactoring with tests in Python: a practical example - The Digital Cat](https://www.thedigitalcatonline.com/blog/2017/07/21/refactoring-with-test-in-python-a-practical-example/)

[Automated Testing in Python with pytest, tox, and GitHub Actions - YouTube](https://www.youtube.com/watch?v=DhUpxWjOhME)

### `pytest`

[pytest: helps you write better programs — pytest documentation](https://docs.pytest.org/en/latest/)

- funtion tests
  load `test_<CASE>()` functions from arbitary test files `*_test.py`/`test_*.py`
  [Test discovery — pytest documentation](https://docs.pytest.org/en/latest/explanation/goodpractices.html#test-discovery)
- class based
  ```python
  class Test<Name>:
    def test_<CASE>():
      pass
  ```
- `unittest`
  compatible with `unittest` test cases
- use `assert <CONDITION>`
- test case filtering
- `@pytest.fixture` with context for setup/teardown
- [plugins](https://docs.pytest.org/en/latest/reference/plugin_list.html)

```sh
mkdir test/

pytest -v # pytest is too quiet by default
pytest -s # pytest hide your prints, `-s` shows them
pytest -k test_<CASE> # run one test case

pytest --collect-only  # show test cases
pytest --cov
coverage html
```

anthonywritescode
[pytest - anthonywritescode - YouTube](https://www.youtube.com/@anthonywritescode/search?query=pytest)
[getting started with pytest (beginner - intermediate) anthony explains #518 - YouTube](https://www.youtube.com/watch?v=mzlH8lp4ISA)[pytest: everything you need to know about fixtures (intermediate) anthony explains #487 - YouTube](https://www.youtube.com/watch?v=ScEQRKwUePI)

[Effective Python Testing With Pytest – Real Python](https://realpython.com/pytest-python-testing/)

[Welcome to pytest-benchmark’s documentation! — pytest-benchmark documentation](https://pytest-benchmark.readthedocs.io/en/latest/)

[How To Write Unit Tests For Existing Python Code // Part 1 of 2 - YouTube](https://www.youtube.com/watch?v=ULxMQ57engo)
[How To Write Unit Tests For Existing Python Code // Part 2 of 2 - YouTube](https://www.youtube.com/watch?v=NI5IGAim8XU)

[TDD in Python with pytest - YouTube](https://www.youtube.com/playlist?list=PLWtCrYLGt7T2REIrEcpGY6nT2t7Wcoj-m)
[TDD in Python with pytest - Part 1 - The Digital Cat](https://www.thedigitalcatonline.com/blog/2020/09/10/tdd-in-python-with-pytest-part-1/)
[TDD in Python with pytest - Part 2 - The Digital Cat](https://www.thedigitalcatonline.com/blog/2020/09/11/tdd-in-python-with-pytest-part-2/)
[TDD in Python with pytest - Part 3 - The Digital Cat](https://www.thedigitalcatonline.com/blog/2020/09/15/tdd-in-python-with-pytest-part-3/)
[TDD in Python with pytest - Part 4 - The Digital Cat](https://www.thedigitalcatonline.com/blog/2020/09/17/tdd-in-python-with-pytest-part-4/)
[TDD in Python with pytest - Part 5 - The Digital Cat](https://www.thedigitalcatonline.com/blog/2020/09/21/tdd-in-python-with-pytest-part-5/)

### tox

[Welcome to the tox automation project — tox documentation](https://tox.wiki/en/stable/index.html)

- test with different versions of Python and runtimes
- [support `pytest`](https://tox.wiki/en/stable/example/pytest.html)

[introduction to tox (beginner - intermediate) anthony explains #043 - YouTube](https://www.youtube.com/watch?v=75WBE_qbpGk) library
[Automating Build, Test and Release Workflows with tox - YouTube](https://www.youtube.com/watch?v=PrAyvH-tm8E)

### nox

[Welcome to Nox — Nox documentation](https://nox.thea.codes/en/stable/)

- like `tox` but use Python script as config

### nose

[Welcome to nose2 — nose2 documentation](https://docs.nose2.io/en/latest/)

- compatible with `unittest` test cases
- parameterization
- plugins

### `unittest`

[unittest — Unit testing framework — Python documentation](https://docs.python.org/3/library/unittest.html)

- Python stdlib
- inherit `unittest.TestCase` and write testing methods

[Improve Your Tests With the Python Mock Object Library – Real Python](https://realpython.com/courses/python-mock-object-library/) `unittest.mock`
[Python Tutorial: Unit Testing Your Code with the unittest Module - YouTube](https://www.youtube.com/watch?v=6tNS--WetLI)

## Logging

[16.6. logging — Logging facility for Python — Python documentation](https://docs.python.org/3/library/logging.html)
[Logging HOWTO — Python documentation](https://docs.python.org/3/howto/logging.html)
[Logging Cookbook — Python documentation](https://docs.python.org/3/howto/logging-cookbook.html)
[A guide to logging in Python | Opensource.com](https://opensource.com/article/17/9/python-logging)
[Python Logging: In-Depth Tutorial | Toptal](https://www.toptal.com/python/in-depth-python-logging)
[Logging in Python ~ The Python Corner](https://www.thepythoncorner.com/2018/05/logging-in-python.html)
[Logging — The Hitchhiker's Guide to Python](https://docs.python-guide.org/writing/logging/)

[Logging in Python – Real Python](https://realpython.com/python-logging/)
[Python Logging: A Stroll Through the Source Code – Real Python](https://realpython.com/python-logging-source-code/)
[How to Collect, Customize, and Centralize Python Logs | Datadog](https://www.datadoghq.com/blog/python-logging-best-practices/)

[Python logging and rotating files - Stack Overflow](https://stackoverflow.com/questions/9106795/python-logging-and-rotating-files/20755477)
[logging - How to create rolling logger in Python - Stack Overflow](https://stackoverflow.com/questions/56195040/how-to-create-rolling-logger-in-python)

[python - logger configuration to log to file and print to stdout - Stack Overflow](https://stackoverflow.com/questions/13733552/logger-configuration-to-log-to-file-and-print-to-stdout/13733863#13733863)
[acschaefer/duallog: Python package to enable simultaneous logging to console and logfile.](https://github.com/acschaefer/duallog)

```python
def logger_setup(
    filename=None, when="d", interval=1, backup_count=21, level=logging.INFO
):
    formatter = logging.Formatter(
        "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    )
    # formatter.converter = time.gmtime  # if you want UTC time
    root_logger = logging.getLogger()
    root_logger.setLevel(level)

    if filename is not None:
        file_handler = logging.handlers.TimedRotatingFileHandler(
            filename=filename,
            when=when,
            interval=interval,
            backupCount=backup_count,
        )
        file_handler.setFormatter(formatter)
        root_logger.addHandler(file_handler)

    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setFormatter(formatter)
    root_logger.addHandler(console_handler)
```

[Python's Built-In 'logging' Module - YouTube](https://www.youtube.com/watch?v=4t67SNWoPxk)

[kopensource/colored_logs](https://github.com/kopensource/colored_logs)
[apparebit/konsole: Readable, pleasing console output for Python](https://github.com/apparebit/konsole) wraps `logging` API

[gruns/icecream: 🍦 Never use print() to debug again.](https://github.com/gruns/icecream)
[Stop Using Print to Debug in Python. Use Icecream Instead | by Khuyen Tran | Towards Data Science](https://towardsdatascience.com/stop-using-print-to-debug-in-python-use-icecream-instead-79e17b963fcc)
[Do Not Use Print For Debugging In Python Anymore | by Christopher Tao | Jun, 2021 | Towards Data Science](https://towardsdatascience.com/do-not-use-print-for-debugging-in-python-anymore-6767b6f1866d)

[Do not log](https://sobolevn.me/2020/03/do-not-log)

## Modules

Module corresponds to files, package corresponds to folder.

[6. Modules — Python documentation](https://docs.python.org/3/tutorial/modules.html)
[Python Modules: Creating, Importing, and Sharing](http://stackabuse.com/python-modules-creating-importing-and-sharing/)
[Python Circular Imports](http://stackabuse.com/python-circular-imports/)
[site — Site-specific configuration hook — Python documentation](https://docs.python.org/3/library/site.html)

[Python Modules and Packages – An Introduction – Real Python](https://realpython.com/python-modules-packages/)
[Python import: Advanced Techniques and Tips – Real Python](https://realpython.com/python-import/)
[The Module Search Path – Real Python](https://realpython.com/lessons/module-search-path/)
[Python behind the scenes #11: how the Python import system works](https://tenthousandmeters.com/blog/python-behind-the-scenes-11-how-the-python-import-system-works/)

Module search path:

- current directory
- environment variable [PYTHONPATH](https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH)
- installation dependent list of directories

The resulting search path is accessible in the Python variable `sys.path` which you can manipulate

[PEP 420 – Implicit Namespace Packages | peps.python.org](https://peps.python.org/pep-0420/)
`__init__.py` be required, not anymore since 3.3
`import *` will load `__all__: list[str]` from `__init__.py` (package) or module

[Python Zip Imports: Distribute Modules and Packages Quickly – Real Python](https://realpython.com/preview/python-zip-import/)
[Live-reloading of Python Modules in the Python REPL / IPython / Jupyter Console - DEV Community 👩‍💻👨‍💻](https://dev.to/preslavrachev/live-reloading-of-python-modules-in-the-python-repl--ipython--jupyter-console-1d17)

[I don't need `__init__.py`? PEP 420 and namespace packages (intermediate) anthony explains #420 - YouTube](https://www.youtube.com/watch?v=2Xvb79hOUdM) namespace

### `importlib`

[Writing a Domain Specific Language (DSL) in Python – dbader.org](https://dbader.org/blog/writing-a-dsl-with-python)

## Packaging/Publishing

> TODO: clean up articles using `setuptools`
> TODO: clean up articles using `pyproject.toml`

[[python-the-packaging-gradient]]

[[#pip-tools]]
[[#Poetry]]
[[#PDM]]

[A tutorial on packaging up your Python code for PyPI](https://snarky.ca/a-tutorial-on-python-package-building/) 2017
[Python Packaging User Guide — Python Packaging User Guide](https://packaging.python.org/)
[Packaging Python Projects — Python Packaging User Guide](https://packaging.python.org/en/latest/tutorials/packaging-projects/)
[Tool recommendations — Python Packaging User Guide](https://packaging.python.org/en/latest/guides/tool-recommendations/)
[Publishing your own Python package - Towards Data Science](https://towardsdatascience.com/publishing-your-own-python-package-3762f0d268ec) 2019, !important
[Publishing Python Packages](https://www.manning.com/books/publishing-python-packages) 2022

[How to Publish an Open-Source Python Package to PyPI – Real Python](https://realpython.com/pypi-publish-python-package/)
[What Are Python Wheels and Why Should You Care? – Real Python](https://realpython.com/python-wheels/)
[Episode #83: Ready to Publish Your Python Packages? – The Real Python Podcast](https://realpython.com/podcasts/rpp/83/)

[How to Build a Complete Python Package Step-by-Step - YouTube](https://www.youtube.com/watch?v=5KEObONUkik)
["Publishing well-formed Python packages" - Julin S (PyConline AU 2020) - YouTube](https://www.youtube.com/watch?v=_b8D4v7YIME)

[packaging - anthonywritescode - YouTube](https://www.youtube.com/@anthonywritescode/search?query=python%20packaging%3A)

[What to do when you botch a release on PyPI](https://snarky.ca/what-to-do-when-you-botch-a-release-on-pypi/)

[Welcome to twine’s documentation! — twine documentation](https://twine.readthedocs.io/en/latest/) THE recommended publishing tool for PyPI
[pypa/twine: Utilities for interacting with PyPI](https://github.com/pypa/twine)

[The difference between setup.py (pyproject.toml) and requirements.txt (Pipfile) · Issue #27 · pypa/pipfile](https://github.com/pypa/pipfile/issues/27)
[setup.py vs requirements.txt · caremad](https://caremad.io/posts/2013/07/setup-vs-requirement/)
[Pipfile vs setup.py — pipenv documentation](https://docs.pipenv.org/advanced/#pipfile-vs-setuppy)

[The Many Layers of Packaging — Sedimental](https://sedimental.org/the_packaging_gradient.html)

[Python Wheels](http://pythonwheels.com/)
[pypa/wheel: The official binary distribution format for Python](https://github.com/pypa/wheel)
[pypa/manylinux: Python wheels that work on any linux (almost)](https://github.com/pypa/manylinux)
[pypa/python-manylinux-demo: Demo project for building Python wheels for Linux with Travis-CI](https://github.com/pypa/python-manylinux-demo)

[bump2version · PyPI](https://pypi.org/project/bump2version/) Version-bump your software with a single command!

### `setuptools`

> [Paul Ganssle - Why you shouldn't invoke setup.py directly](https://blog.ganssle.io/tag/setuptools.html) history
> use modern `pyproject.toml` based build tools

`distutil` is [deprecated](https://pypi.org/project/Distutils2/) by `setuptools`

[Welcome to Setuptools’ documentation! — setuptools documentation](https://setuptools.readthedocs.io/en/latest/)
[Python Entry Points Explained](https://amir.rachum.com/blog/2017/07/28/python-entry-points/)
[The Sheer Joy of Packaging! — The Joy of Packaging documentation](https://python-packaging-tutorial.readthedocs.io/en/latest/index.html) 2018
[Packaging and distributing projects — Python Packaging User Guide](https://packaging.python.org/en/latest/guides/distributing-packages-using-setuptools/) uses `twine`, `setup.py` and `setup.cfg`
[Building a Python API for Raspberry Pi hardware - Speaker Deck](https://speakerdeck.com/bennuttall/building-a-python-api-for-raspberry-pi-hardware) 2015

```sh
python setup.py sdist # source distribution, allows package manager to build Wheel, no control
python setup.py bdist_wheel --universial # Wheels distribution (binary), for pure Python code
python setup.py install
```

[Mahmoud Hashemi, "The Packaging Gradient", PyBay2017 - YouTube](https://www.youtube.com/watch?v=iLVNWfPWAC8) [slide](https://speakerdeck.com/mhashemi/the-packaging-gradient)
[An Introduction to Python Packages for Absolute Beginners - By Ramit Mittal](https://hackernoon.com/pip-install-abra-cadabra-or-python-packages-for-beginners-33a989834975)

[Pipenv: A Guide to the New Python Packaging Tool – Real Python](https://realpython.com/pipenv-guide/#package-distribution) Using `setuptools` with `pipenv`
Put dependencies in `setup.py` instead of `Pipfile`, use `pipenv install -e` to install package locally.

[pypa/sampleproject: A sample project that exists for PyPUG's "Tutorial on Packaging and Distributing Projects"](https://github.com/pypa/sampleproject)
[requests/setup.py at master · requests/requests](https://github.com/requests/requests/blob/master/setup.py) `setuptools`
[numpy/setup.py at master · numpy/numpy](https://github.com/numpy/numpy/blob/master/setup.py) `distutils`?

### `pyproject.toml`

Defines `pyproject.toml`, decouples from `setuptools` to allow multiple build tools.

[PEP 517 – A build-system independent format for source trees | peps.python.org](https://peps.python.org/pep-0517/) entry points for the build
[PEP 518 – Specifying Minimum Build System Requirements for Python Projects | peps.python.org](https://peps.python.org/pep-0518/) build dependencies
[PEP 631 – Dependency specification in pyproject.toml based on PEP 508 | peps.python.org](https://peps.python.org/pep-0631/)

[What the heck is pyproject.toml?](https://snarky.ca/what-the-heck-is-pyproject-toml/)
[Clarifying PEP 518 (a.k.a. pyproject.toml)](https://snarky.ca/clarifying-pep-518/)

#### Build tools

> build backend: knows how to take a source tree and turn it into a distributable artifact — a source distribution or a wheel (e.g.: setuptools or flit)
> build frontend: orchestrates the build environment and invokes the build backend, possibly creates environment for the build (e.g.: pip or build, test runners like tox or nox)

[build](https://pypa-build.readthedocs.io/en/stable/) PEP 517 frontend

[Ruff](https://beta.ruff.rs/docs/) all-in-one tool, used by many

[takluyver/flit: Simplified packaging of Python modules](https://github.com/takluyver/flit) backend, for pure Python module
[Flit — Flit documentation](https://flit.pypa.io/en/latest/#)

[dholth/enscons](https://github.com/dholth/enscons) build extensions
[enscons · PyPI](https://pypi.org/project/enscons/)

[Welcome to the tox automation project — tox documentation](https://tox.wiki/en/latest/)

[cibuildwheel · PyPI](https://pypi.org/project/cibuildwheel/)
[Home - cibuildwheel](https://cibuildwheel.readthedocs.io/en/stable/)

[David-OConnor/pyflow: An installation and dependency system for Python](https://github.com/David-OConnor/pyflow)

[ofek/hatch: A modern project, package, and virtual env manager for Python](https://github.com/ofek/hatch) build, test and upload with one CLI
[About - Hatch](https://hatch.pypa.io/latest/)

[PyBuilder — Usage Documentation](https://pybuilder.io/documentation/manual) `pbr`, not using `pyproject.toml`
[OpenStack Docs: `pbr` Usage](https://docs.openstack.org/pbr/latest/user/using.html)
Build wheel with a minimal `setup.py` and `setup.cfg`.
[Building a Python package, and a docker image via Pipenv](https://medium.com/@greut/building-a-python-package-a-docker-image-using-pipenv-233d8793b6cc)

## Packaging Application/Freezing

The act of bundling all dependencies, and optionally to make a standalone binary, is called _freezing_ in Python

[Packaging Archives - The Mouse Vs. The Python](http://www.blog.pythonlibrary.org/category/packaging/)
[Episode #245 Python packaging landscape in 2020 - [Talk Python To Me Podcast]](https://talkpython.fm/episodes/show/245/python-packaging-landscape-in-2020)
[tryexceptpass - 4 Attempts at Packaging Python as an Executable](https://tryexceptpass.org/article/package-python-as-executable/)
[Convert Python to exe - copyassignment.com](https://copyassignment.com/convert-python-to-exe/)

[schmir/bbfreeze: UNMAINTAINED](https://github.com/schmir/bbfreeze)
[A bbfreeze Tutorial – Build a Binary Series! | The Mouse Vs. The Python](https://www.blog.pythonlibrary.org/2010/08/19/a-bbfreeze-tutorial-build-a-binary-series/)

[`py2exe`](http://www.py2exe.org/) and [`py2app`](https://wiki.python.org/moin/MacPython/py2app) are Windows and OSX specific solution

osnap
pynist
nuitka

[Briefcase](https://briefcase.readthedocs.io/en/latest/)
[Nuitka the Python Compiler — Nuitka the Python Compiler documentation](https://nuitka.net/)

[linkedin/shiv: shiv is a command line utility for building fully self contained Python zipapps as outlined in PEP 441, but with all their dependencies included.](https://github.com/linkedin/shiv)

[pantsbuild/pex: A library and tool for generating .pex (Python EXecutable) files](https://github.com/pantsbuild/pex)

- shebang + zip file
- requires system Python
- OS specific (can be built for cross-platform)
- similar to wheels

### PyInstaller

[Welcome to PyInstaller official website](http://www.pyinstaller.org/)
[PyInstaller Manual — PyInstaller documentation](https://pyinstaller.readthedocs.io/en/latest/)
[pyinstaller/pyinstaller: Freeze (package) Python programs into stand-alone executables](https://github.com/pyinstaller/pyinstaller)

[brentvollebregt/auto-py-to-exe: Converts .py to .exe using a simple graphical interface](https://github.com/brentvollebregt/auto-py-to-exe)
[How to Create Executable Applications in Python | Tom's Hardware](https://www.tomshardware.com/how-to/create-python-executable-applications)

[How to deploy PyQt, Keras, Tensorflow apps with PyInstaller - YouTube](https://www.youtube.com/watch?v=fLQg8dgB7cA)
PyInstaller did what cx_Freeze failed, with 300MB less size.
This is done possibly with tree shaking.

[Introducing PyInstaller | Linux Journal](https://www.linuxjournal.com/content/introducing-pyinstaller)
[Using PyInstaller to Easily Distribute Python Applications – Real Python](https://realpython.com/pyinstaller-python/)

[FAQ · pyinstaller/pyinstaller Wiki](https://github.com/pyinstaller/pyinstaller/wiki/FAQ)
[Recipes · pyinstaller/pyinstaller Wiki](https://github.com/pyinstaller/pyinstaller/wiki/Recipes)

[When Things Go Wrong — PyInstaller documentation](https://pyinstaller.readthedocs.io/en/stable/when-things-go-wrong.html)

When debugging:

- check `build\{NAME}\` for logs
- check debug messages:

  ```sh
  pyinstaller --clean -y --log-level=DEBUG specfile 2> build.log
  ```

- run bundled app at console to see error log
- use onedir to view bundle structure easily, also `pyi-archive_viewer`

setuptools 45 breaks PyInstaller ("Failed to execute script pyi_rth_pkgres"), downgrade to 44 until this is fixed
[setuptools 45.0.0 may cause PyInstaller 3.3 packaged executable fail to launch · Issue #1963 · pypa/setuptools](https://github.com/pypa/setuptools/issues/1963)

- use latest version
  pip install <https://github.com/pyinstaller/pyinstaller/archive/master.zip>

```sh
pip install --upgrade 'setuptools<45.0.0'
```

#### Hooks

[Understanding PyInstaller Hooks — PyInstaller documentation](https://pythonhosted.org/PyInstaller/hooks.html)
[pyinstaller/PyInstaller/hooks at master · pyinstaller/pyinstaller](https://github.com/pyinstaller/pyinstaller/tree/master/PyInstaller/hooks)

[Trouble with Tensorflow 2.0 · Issue #4400 · pyinstaller/pyinstaller](https://github.com/pyinstaller/pyinstaller/issues/4400) `hook-tensorflow_core.py`
[Python, Pandas, & PyInstaller — Watch Out! - Nathan Benton - Medium](https://medium.com/@nbenton90/python-pandas-pyinstaller-watch-out-5d9af2cea867)
[Pyinstaller hooks — Kivy 1.11.1 documentation](https://kivy.org/doc/stable/api-kivy.tools.packaging.pyinstaller_hooks.html)

### cx_Freeze

[cx_Freeze](https://anthony-tuininga.github.io/cx_Freeze/)
[Welcome to cx_Freeze’s documentation!](http://cx-freeze.readthedocs.io/en/latest/)
[cx_Freeze](http://web.archive.org/web/20120622213400/http://cx-freeze.sourceforge.net/cx_Freeze.html)

Your source code is put in `lib/library.zip`, some tricks is needed to add data to the bundle.
This is the bundled folder structure:

```
build/exe.linux-x86_64-3.7/
- lib/library.zip
- ui/
- main
```

The aim is to load asset from `ui/` from scripts packaged in `lib/library.zip`.

```python
# freeze helper
from os import path
import sys

if getattr(sys, "frozen", False):
    # The application is frozen
    print(f"frozen app, exec='{sys.executable}'")
    ASSET_DIR = path.dirname(sys.executable)
else:
    # The application is not frozen
    # Change this bit to match where you store your data files:
    ASSET_DIR = path.dirname(__file__)
```

```python
# setup.py
import sys
from cx_Freeze import setup, Executable

# Dependencies are automatically detected, but it might need
# fine tuning.
includeFiles = ["ui"]
buildOptions = dict(packages=[], excludes=[], include_files=includeFiles)

base = "Win32GUI" if sys.platform == "win32" else None

executables = [Executable("main.py", base=base)]
setup(
    name="demo",
    version="1.0",
    description="",
    options=dict(build_exe=buildOptions),
    executables=executables,
)
```

```sh
python setup.py build
```

## Linters

[Python Code Quality Authority](https://github.com/PyCQA)
[An Introduction to the PyCQA](http://meta.pycqa.org/en/latest/introduction.html)
[Python Code Quality: Tools & Best Practices – Real Python](https://realpython.com/python-code-quality/) !important
[7 Python libraries for more maintainable code | Opensource.com](https://opensource.com/article/18/7/7-python-libraries-more-maintainable-code)

[Auto formatters for Python 👨‍💻🤖 - 3YOURMIND-Tech - Medium](https://medium.com/3yourmind/auto-formatters-for-python-8925065f9505)

[ambv/black: The uncompromising Python code formatter](https://github.com/ambv/black)
[The uncompromising code formatter — Black documentation](https://black.readthedocs.io/en/stable/)

[asottile/reorder_python_imports: Rewrites source to reorder python imports](https://github.com/asottile/reorder_python_imports)

```
--py37-plus --add-import "from __future__ import annotations"
```

[asottile/pyupgrade: A tool (and pre-commit hook) to automatically upgrade syntax for newer versions of the language.](https://github.com/asottile/pyupgrade)
[Python Type Hints - How to Upgrade Syntax with pyupgrade - Adam Johnson](https://adamj.eu/tech/2021/05/21/python-type-hints-how-to-upgrade-syntax-with-pyupgrade/)

[google/yapf: A formatter for Python files](https://github.com/google/yapf)

[Flake8: Your Tool For Style Guide Enforcement](http://flake8.pycqa.org/en/latest/index.html)
[Pylint User Manual](https://pylint.readthedocs.io/en/latest/) generates too much warning
[pycodestyle’s documentation](https://pycodestyle.readthedocs.io/en/latest/) pycodestyle is the new pep8

[Pylint vs flake8 detailed comparison as of 2017 - Slant](https://www.slant.co/versus/12630/12632/~pylint_vs_flake8)
[python - PyLint, PyChecker or PyFlakes? - Stack Overflow](http://stackoverflow.com/questions/1428872/pylint-pychecker-or-pyflakes)

[Refactoring Python Applications for Simplicity – Real Python](https://realpython.com/python-refactoring/)
[Python Code Quality: Tools & Best Practices – Real Python](https://realpython.com/python-code-quality/)

[What is wily? — wily develop documentation](https://wily.readthedocs.io/en/latest/)
[Anthony Shaw - Wily Python: Writing simpler and more maintainable Python - PyCon 2019 - YouTube](https://www.youtube.com/watch?v=dqdsNoApJ80)

[Welcome to Radon’s documentation! — Radon documentation](https://radon.readthedocs.io/en/latest/)
[rubik/radon: Various code metrics for Python code](https://github.com/rubik/radon)

[Pysa: Open Source static analysis for Python code - Facebook Engineering](https://engineering.fb.com/security/pysa/)

## Type hints/Typing

Python 3.5 adds type hints to functions, 3.6 extends that for variable.
3.10 support type guards/type narrowing
Type Guard: boolean value that have implication to type of variables of union type
[PEP 647 – User-Defined Type Guards | peps.python.org](https://peps.python.org/pep-0647/)

[PEP 484 – Type Hints | peps.python.org](https://peps.python.org/pep-0484/)
[PEP 561 – Distributing and Packaging Type Information | peps.python.org](https://peps.python.org/pep-0561/) `.pyi`, `py.typed`
[Our journey to type checking 4 million lines of Python | Dropbox Tech Blog](https://blogs.dropbox.com/tech/2019/09/our-journey-to-type-checking-4-million-lines-of-python/)

[Python Type Checking (Guide) – Real Python](https://realpython.com/python-type-checking/) !important
[the state of type hints in Python](https://www.bernat.tech/the-state-of-type-hints-in-python/)
[Stanford Seminar - Optional Static Typing for Python - YouTube](https://www.youtube.com/watch?v=GiZKuyLKvAA)
[Types at the edges in Python – MeadSteve's Dev Blog](https://blog.meadsteve.dev/programming/2020/02/10/types-at-the-edges-in-python/)
[Modernize Your Sinful Python Code with Beautiful Type Hints | by Eirik Berge | Jul, 2021 | Towards Data Science](https://towardsdatascience.com/modernize-your-sinful-python-code-with-beautiful-type-hints-4e72e98f6bf1?gi=85e63db703d4)
[Typechecking with a Python Library That Has No Type Hints ·](https://skeptric.com/python-type-stubs/)
[python 学习笔记：typing 和 pydantic | 小猴子 jerry](https://monkeyjerry.top/post/typing_pydantic/)

[typing — Support for type hints — Python documentation](https://docs.python.org/3/library/typing.html)
[Type hints cheat sheet (Python 3) — Mypy documentation](https://mypy.readthedocs.io/en/latest/cheat_sheet_py3.html)
[How to Use Static Type Checking in Python 3.6 – Adam Geitgey – Medium](https://medium.com/@ageitgey/learn-how-to-use-static-type-checking-in-python-3-6-in-10-minutes-12c86d72677b)
[Using Python's Type Annotations - DEV Community 👩‍💻👨‍💻](https://dev.to/dstarner/using-pythons-type-annotations-4cfe)
[Python type annotations | Caktus Group](https://www.caktusgroup.com/blog/2017/02/22/python-type-annotations/)
[python/typeshed: Collection of library stubs for Python, with static types](https://github.com/python/typeshed)

"advanced-python-typing" series
[1-minute guide to real constants in Python - DEV Community 👩‍💻👨‍💻](https://dev.to/wemake-services/1-minute-guide-to-real-constants-in-python-2bpk)

[5 Reasons Why You Should Use Type Hints In Python - YouTube](https://www.youtube.com/watch?v=dgBCEB2jVU0)
[Type-Checking Python Programs With Type Hints and mypy - YouTube](https://www.youtube.com/watch?v=2xWhaALHTvU)
[Carl Meyer - Type-checked Python in the real world - PyCon 2018 - YouTube](https://www.youtube.com/watch?v=pMgmKJyWKn8)

Mypy can be used to do static type checking on type hints.  
[mypy - Optional Static Typing for Python](http://mypy-lang.org/)
[Welcome to Mypy documentation! — Mypy documentation](https://mypy.readthedocs.io/en/latest/)
[Introducing Mypy, an Experimental Optional Static Type Checker for Python | Linux Journal](https://www.linuxjournal.com/content/introducing-mypy-experimental-optional-static-type-checker-python)
[Python's Mypy--Advanced Usage | Linux Journal](https://www.linuxjournal.com/content/pythons-mypy-advanced-usage)
[Mypy improves static type-checking for big Python apps | InfoWorld](https://www.infoworld.com/article/3066749/application-development/mypy-improves-static-type-checking-for-big-python-apps.html)

[Pyre · A performant type-checker for Python 3](https://pyre-check.org/) Facebook
[Overview · Pyre](https://pyre-check.org/docs/overview.html)
[Pieter Hooimeijer - Types, Deeper Static Analysis, and you - PyCon 2018 - YouTube](https://www.youtube.com/watch?v=hWV8t494N88)

[microsoft/pyright: Static type checker for Python](https://github.com/Microsoft/pyright) Microsoft

[google/pytype: A static type analyzer for Python code](https://github.com/google/pytype) Google

[Instagram/MonkeyType: A system for Python that generates static type annotations by collecting runtime types](https://github.com/instagram/MonkeyType)

advanced-python-typing (7 Part Series)
[1-minute guide to real constants in Python - DEV Community 👩‍💻👨‍💻](https://dev.to/wemake-services/1-minute-guide-to-real-constants-in-python-2bpk)
[Simple dependent types in Python - DEV Community 👩‍💻👨‍💻](https://dev.to/wemake-services/simple-dependent-types-in-python-4e14)
[Python exceptions considered an anti-pattern - DEV Community 👩‍💻👨‍💻](https://dev.to/wemake-services/python-exceptions-considered-an-anti-pattern-17o9)

[prechelt/typecheck-decorator: For Python3, e.g. @typecheck add_count(count: int, when: any(datetime, timedelta) = datetime.now)](https://github.com/prechelt/typecheck-decorator)

[Instagram/MonkeyType: A system for Python that generates static type annotations by collecting runtime types](https://github.com/Instagram/MonkeyType)

### Pydantic

[pydantic](https://pydantic-docs.helpmanual.io/) Data validation and settings management using python type annotations
[samuelcolvin/pydantic: Data validation using Python type hinting](https://github.com/samuelcolvin/pydantic)

[Pydantic V2 Plan - pydantic](https://pydantic-docs.helpmanual.io/blog/pydantic-v2/)

[Kludex/awesome-pydantic: A curated list of awesome things related to Pydantic! 🌪️](https://github.com/Kludex/awesome-pydantic)
[Goldziher/pydantic-factories: Pydantic based mock data generation](https://github.com/Goldziher/pydantic-factories)
[Pydantic - The Blue Book](https://lyz-code.github.io/blue-book/coding/python/pydantic/)

[Rise of the Pydantic Stack. What is the pydantic stack? | by Na'aman Hirschfeld | Python in Plain English](https://python.plainenglish.io/an-introduction-to-the-pydantic-stack-9e490d606c8d)
[The Beginner’s Guide to Pydantic. A Python package to parse and validate… | by Ng Wai Foong | Better Programming](https://betterprogramming.pub/the-beginners-guide-to-pydantic-ba33b26cde89)
<https://medium.com/swlh/cool-things-you-can-do-with-pydantic-fc1c948fbde0>

### Schematics

[Schematics — Schematics 2.1.0 documentation](https://schematics.readthedocs.io/en/latest/)

## WinPython

[WinPython](http://winpython.github.io/)

## List installed packages

```sh
pip list
pip freeze
```
