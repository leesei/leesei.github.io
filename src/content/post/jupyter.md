---
title: Jupyter
description: ""
created: 2025-02-04
updated: 2025-10-10
tags:
  - jupyter
  - jupyter-notebook
  - jupyterlab
---

[Project Jupyter | Home](https://jupyter.org/)
Jupyter was formerly [IPython Notebook](http://ipython.org/notebook.html)

[Jupyter Docker Stacks — Docker Stacks documentation](https://jupyter-docker-stacks.readthedocs.io/en/latest/index.html)
[jupyter/docker-stacks: Ready-to-run Docker images containing Jupyter applications](https://github.com/jupyter/docker-stacks)

````sh
docker run --rm -p 8888:8888 \
  quay.io/jupyter/scipy-notebook:latest \
  -w $(pwd):/home/jovyan/work

# use this for VSCode extension http://localhost:8888/tree?token=<token>
# or use DOCKER_STACKS_JUPYTER_CMD=notebook
```

```sh
yay -S miniconda3
conda create -n jupyter python numpy pandas
````

[Jupyter - ArchWiki](https://wiki.archlinux.org/title/Jupyter)
[What is Jupyter Notebook? | Domino Data Lab](https://domino.ai/data-science-dictionary/jupyter-notebook)
[python - What is the difference between Jupyter Notebook and JupyterLab? - Stack Overflow](https://stackoverflow.com/questions/50982686/what-is-the-difference-between-jupyter-notebook-and-jupyterlab)

[JupyterLab](https://github.com/jupyterlab) JupyterLab is a next-generation web-based user interface for Project Jupyter.
[JupyterLab Documentation — JupyterLab documentation](https://jupyterlab.readthedocs.io/en/stable/)

[Search, explore & show/display Jupyter notebooks in the terminal | Towards Data Science](https://towardsdatascience.com/rapidly-explore-jupyter-notebooks-right-in-your-terminal-67598d2265c2)
[Jupyter Notebooks in VS Code](https://code.visualstudio.com/docs/datascience/jupyter-notebooks)

[Introducing the Jupyter Extension for VS Code - Python](https://devblogs.microsoft.com/python/introducing-the-jupyter-extension-for-vs-code/)

[Jupyter Notebook: An Introduction – Real Python](https://realpython.com/jupyter-notebook-introduction/)
[Basics of Jupyter Notebook and Python | Packt Hub](https://hub.packtpub.com/basics-jupyter-notebook-python/)
[28 Jupyter Notebook tips, tricks and shortcuts](https://www.dataquest.io/blog/jupyter-notebook-tips-tricks-shortcuts/)
[Jupyter Notebooks in Visual Studio Code | Visual Studio Toolbox | Channel 9](https://channel9.msdn.com/Shows/Visual-Studio-Toolbox/Jupyter-Notebooks-in-Visual-Studio-Code)
[Get Started With Jupyter Notebook: A Tutorial](https://www.makeuseof.com/get-started-with-jupyter-notebook/)
[Introduction to Jupyter Notebooks | Programming Historian](https://programminghistorian.org/en/lessons/jupyter-notebooks)
[Top 10 Magic Commands in Python to Boost your Productivity | by Siddhesh Jadhav | Towards Data Science](https://towardsdatascience.com/top-10-magic-commands-in-python-to-boost-your-productivity-1acac061c7a9)

[A gallery of interesting Jupyter Notebooks · jupyter/jupyter Wiki](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)

[Voilà Dashboards](https://github.com/voila-dashboards)
[And Voilà!. … from Jupyter notebooks to standalone… | by QuantStack | Jupyter Blog](https://blog.jupyter.org/and-voil%C3%A0-f6a2c08a4a93)
[Dashboarding with JupyterLab 3. Project Jupyter offers a complete suite… | by Carlos Herrero | Jan, 2021 | Jupyter Blog](https://blog.jupyter.org/dashboarding-with-jupyterlab-3-789fcb1a5857)

[Hello, Colaboratory - Colaboratory](https://colab.research.google.com/notebooks/welcome.ipynb)
[Google Drive + Google Colab + GitHub; Don’t Just Read, Do It!](https://towardsdatascience.com/google-drive-google-colab-github-dont-just-read-do-it-5554d5824228)
[Microsoft Azure Notebooks](https://notebooks.azure.com/)

[scrapbook documentation](https://nteract-scrapbook.readthedocs.io/en/latest/) a library for recording a notebook’s data values and generated visual content as "scraps"

[papermill documentation](https://papermill.readthedocs.io/en/latest/) tool for parameterizing and executing Jupyter Notebooks
[nteract/papermill: 📚 Parameterize, execute, and analyze notebooks](https://github.com/nteract/papermill)
[Introduction to Papermill - Towards Data Science](https://towardsdatascience.com/introduction-to-papermill-2c61f66bea30)
[Automated Report Generation with Papermill: Part 1 - Practical Business Python](https://pbpython.com/papermil-rclone-report-1.html)
[Automated Report Generation with Papermill: Part 2 - Practical Business Python](https://pbpython.com/papermil-rclone-report-2.html)

[Project Jupyter](https://github.com/jupyter)
[The Jupyter Notebook — Jupyter Notebook documentation](https://jupyter-notebook.readthedocs.io/en/stable/)
[nbviewer](https://nbviewer.jupyter.org/) [FAQ](https://nbviewer.jupyter.org/faq)
[jupyter/nbconvert: Jupyter Notebook Conversion](https://github.com/jupyter/nbconvert)
[Binder](https://mybinder.org/) executable notebooks from URL

[jupyter-repo2docker — repo2docker documentation](https://repo2docker.readthedocs.io/en/latest/)
[Docker Without the Hassle – Towards Data Science](https://towardsdatascience.com/docker-without-the-hassle-b98447caedd8)
[Create your own GPU accelerated Jupyter Notebook Server for Google Colab using Docker | by Sascha Kirch | Apr, 2022 | Towards Data Science](https://towardsdatascience.com/create-your-own-gpu-accelerated-yupyter-notebook-server-with-google-colab-using-docker-2fa14900bab5)

[neuron - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=neuron.neuron-IPE)
[Data Science in Visual Studio Code using Neuron, a new VS Code extension | Microsoft Learn](https://learn.microsoft.com/en-us/archive/blogs/uk_faculty_connection/data-science-in-visual-studio-code-using-neuron-a-new-vs-code-extension)

## Extensions

[JupyterHub](https://github.com/jupyterhub)
[JupyterHub — JupyterHub documentation](https://jupyterhub.readthedocs.io/en/stable/)

[ipywidgets — Jupyter Widgets documentation](https://ipywidgets.readthedocs.io/en/stable/index.html)
[A very simple demo of interactive controls on Jupyter notebook](https://towardsdatascience.com/a-very-simple-demo-of-interactive-controls-on-jupyter-notebook-4429cf46aabd)
[Interactive Visualizations with Pandas, Seaborn and Ipywidgets | by Zoltan Guba | Python in Plain English](https://python.plainenglish.io/interactive-visualizations-with-pandas-seaborn-and-ipywidgets-173e5d7d6a5e)

[Jupyter Notebooks as Markdown Documents, Julia, Python or R Scripts — Jupytext documentation](https://jupytext.readthedocs.io/en/latest/)
[mwouts/jupytext: Jupyter Notebooks as Markdown Documents, Julia, Python or R scripts](https://github.com/mwouts/jupytext)

## Kernels

[Kernels (Programming Languages) — Jupyter Documentation](https://docs.jupyter.org/en/latest/projects/kernels.html) support for various languages
[Jupyter kernels · jupyter/jupyter Wiki](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels)

[Introduction — xeus documentation](https://xeus.readthedocs.io/en/latest/) framework to implement Jupyter kernels
[Jupyter Xeus](https://github.com/jupyter-xeus)

### Jupylet

[JUPYLET PROGRAMMER’S REFERENCE GUIDE — Jupylet documentation](https://jupylet.readthedocs.io/en/latest/index.html)

## Similar Projects

[Welcome to nbdev | nbdev](https://nbdev.fast.ai/)
[nbdev: use Jupyter Notebooks for everything · fast.ai](https://www.fast.ai/2019/12/02/nbdev/)

[Deepnote - Data science notebook for teams](https://deepnote.com/)

### JupyterLite

[JupyterLite — JupyterLite documentation](https://jupyterlite.readthedocs.io/en/stable/)
[jupyterlite/jupyterlite: Wasm powered Jupyter running in the browser 💡](https://github.com/jupyterlite/jupyterlite)

### Polyglot Notebook

[Polyglot Notebooks - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-interactive-vscode)

[Announcing Polyglot Notebooks! Multi-language notebooks in Visual Studio Code - .NET Blog](https://devblogs.microsoft.com/dotnet/announcing-polyglot-notebooks-harness-the-power-of-multilanguage-notebooks-in-visual-studio-code/)
[Polyglot Notebooks fully released for VS Code, with support for multiple languages - not including Python • DEVCLASS](https://devclass.com/2023/03/17/polyglot-notebooks-fully-released-for-vs-code-with-support-for-multiple-languages-not-including-python/) history of Jupyter Notebook
