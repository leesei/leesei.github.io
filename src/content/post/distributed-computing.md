---
title: Distributed Computing
description: ""
created: 2016-09-21
tags:
  - web
---

> FIXME: some info are for distributed computing, some are for hardware (GPU) acceleration

[[data-analytics]]
[[data-analytics-python]]

[9 crushing performance problems in scalable systems | InfoWorld](http://www.infoworld.com/article/3211526/database/9-crushing-performance-problems-in-scalable-systems.html)
[Get more done at the Linux command line with GNU Parallel | Opensource.com](https://opensource.com/article/18/5/gnu-parallel)

[The Cluster Documentation Project » ADMIN Magazine](http://www.admin-magazine.com/HPC/Articles/Cluster-Documentation-Project)
[Cluster Documentation Project](https://cdp.clustermonkey.net/index.php/Main_Page)

[Multigrid method - Wikiwand](https://www.wikiwand.com/en/Multigrid_method)
[Fallacies of distributed computing - Wikiwand](https://www.wikiwand.com/en/Fallacies_of_distributed_computing)
[Fallacies of Distributed Systems](https://architecturenotes.co/fallacies-of-distributed-systems/)
[Understanding the 8 Fallacies of Distributed Systems - DZone Microservices](https://dzone.com/articles/understanding-the-8-fallacies-of-distributed-syste)

[Four Distributed Systems Architectural Patterns by Tim Berglund - YouTube](https://www.youtube.com/watch?v=tpspO9K28PM)
[Why Distributed Systems Are Hard - YouTube](https://www.youtube.com/watch?v=w9GP7MNbaRc)

[HPC » ADMIN Magazine](http://www.admin-magazine.com/HPC)
[Parallelizing Code – Loops » ADMIN Magazine](http://www.admin-magazine.com/HPC/Articles/OpenACC-Parallelizing-Loops)

[Jepsen: On the perils of network partitions](https://aphyr.com/posts/281-call-me-maybe-carly-rae-jepsen-and-the-perils-of-network-partitions)
[Strong consistency models](https://aphyr.com/posts/313-strong-consistency-models)
[The network is reliable](https://aphyr.com/posts/288-the-network-is-reliable)
[Burn the Library](https://aphyr.com/posts/254-burn-the-library)

[Tick or Tock? Keeping Time and Order in Distributed Databases| PingCAP](https://pingcap.com/blog/Time-in-Distributed-Systems/)

A split brain is what happens when you have multiple autonomous sub-clusters forming, and more than one believe they're the "master". This can cause irreconcilable changes and data loss.

[Building Your Own Consensus | Hackaday](https://hackaday.com/2022/11/30/building-your-own-consensus/)
[Episode 377: Heidi Howard on Distributed Consensus : Software Engineering Radio](https://www.se-radio.net/2019/08/episode-377-heidi-howard-on-distributed-consensus/)
[分布式系统的事务处理 | | 酷 壳 - CoolShell](https://coolshell.cn/articles/10910.html)
[Paxos (computer science) - Wikiwand](<https://www.wikiwand.com/en/Paxos_(computer_science)>)
[Paxos Made Live - An Engineering Perspective (2006 Invited Talk) – Google Research](https://research.google/pubs/pub33002/)
[Paxos Made Moderately Complex](http://www.cs.cornell.edu/courses/cs7412/2011sp/paxos.pdf)

[Raft Consensus Algorithm](https://raft.github.io/)
[Raft (computer science) - Wikiwand](<http://www.wikiwand.com/en/Raft_(computer_science)>)

[Google I/O 2009 - Transactions Across Datacenters.. - YouTube](https://www.youtube.com/watch?v=srOgpXECblk)
[Debugging Incidents in Google’s Distributed Systems - ACM Queue](https://queue.acm.org/detail.cfm?id=3404974)

[How to do distributed locking — Martin Kleppmann’s blog](https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html)
[Distributed Locks Are Dead, Long Live Distributed Locks - DZone Java](https://dzone.com/articles/distributed-locks-are-dead-long-live-distributed-l)

## Byzantine Fault Tolerance

[Byzantine fault - Wikiwand](https://www.wikiwand.com/en/Byzantine_fault)
[Byzantine Fault Tolerance Explained | Binance Academy](https://academy.binance.com/blockchain/byzantine-fault-tolerance-explained)
[The-Byzantine-Generals-Problem.pdf](https://www.microsoft.com/en-us/research/uploads/prod/2016/12/The-Byzantine-Generals-Problem.pdf)
[How does blockchain solve the Byzantine generals problem?](https://cointelegraph.com/blockchain-for-beginners/how-does-blockchain-solve-the-byzantine-generals-problem)

## Node.js

[Mostafa-Samir/klyng: A message-passing distributed computing framework for node.js](https://github.com/Mostafa-Samir/klyng)

[bithound/farm.bithound.io: “All animals are equal, but some animals are more equal than others.”](https://github.com/bithound/farm.bithound.io) a simple "framework" that bitHound used for working in a distributed environment; uses ZeroMQ

[substack/dnode: turtles all the way down rpc](https://github.com/substack/dnode)
[substack/dnode-protocol: Implements the dnode protocol abstractly in node.js](https://github.com/substack/dnode-protocol)

[substack/fleet: multi-server continuous git-based deployment and process management](https://github.com/substack/fleet)
[substack/seaport: semver service registry for clusters](https://github.com/substack/seaport)
[substack/airport: role-based port management for upnode](https://github.com/substack/airport)

## Python

[pyamgx – Accelerated Python Library » ADMIN Magazine](http://www.admin-magazine.com/HPC/Articles/pyamgx-Accelerated-Python-[[Library]]) algebraic multigrid

[Scale your pandas workflow by changing a single line of code. — Modin documentation](https://modin.readthedocs.io/en/latest/) Pandas API on Ray/Dask
[Ray documentation](https://ray.readthedocs.io/en/latest/)
[Dask: Scalable analytics in Python](https://dask.org/)

[High-Performance Python – Distributed Python » ADMIN Magazine](https://www.admin-magazine.com/HPC/Articles/High-Performance-Python-4/)

## ArrayFire

[ArrayFire | Faster Code](https://arrayfire.com/)
[Blog | ArrayFire](https://arrayfire.com/blog/)
[ArrayFire Users - Google Groups](https://groups.google.com/forum/#!forum/arrayfire-users)

[Configuring ArrayFire Environment](http://arrayfire.org/docs/configuring_environment.htm)

The API docs seems outdated, source code may provide some functions not in the doc
[Docs Overview](http://arrayfire.org/docs/index.htm)
[Docs Tutorials](http://arrayfire.org/docs/usergroup0.htm)
[Docs Functions](http://arrayfire.org/docs/modules.htm)
[Docs Complete List of ArrayFire Functions](http://arrayfire.org/docs/group__arrayfire__func.htm)

[arrayfire/arrayfire: ArrayFire: a general purpose GPU library.](https://github.com/arrayfire/arrayfire)
[arrayfire/arrayfire-python: Python bindings for ArrayFire: A general purpose GPU library.](https://github.com/arrayfire/arrayfire-python)
[arrayfire/arrayfire-rust: Rust wrapper for ArrayFire](https://github.com/arrayfire/arrayfire-rust)

### Build

[Home · arrayfire/arrayfire Wiki](https://github.com/arrayfire/arrayfire/wiki)
[Jetson/Installing ArrayFire - eLinux.org](https://elinux.org/Jetson/Installing_ArrayFire)

ArrayFire master branch (3.7) as of 20190801 reports "Unsupported compiler Intel" upon build. Use official 3.6 release.

ArrayFire 3.6

- reports "Unsupported platform" on Ubuntu 16.04, requires CMake 3.8+
- requires `glibc` 2.27 at runtime (included in Ubuntu 18.04)

CUDA 10 requires CMake 3.12.3 (need to build from source on Ubuntu 18.04)

For PC it's easiest to install the [prebuilt binary](https://arrayfire.com/download/).

## GPU

[How GPUs are Beginning to Displace Clusters for Big Data & Data Science - By Dan Voyce](https://hackernoon.com/how-gpus-are-beginning-to-displace-clusters-for-data-science-opbn36pv)

[AmgX | NVIDIA Developer](https://developer.nvidia.com/amgx) algebraic, physics
[AmgX: Multi-Grid Accelerated Linear Solvers for Industrial Applications](https://devblogs.nvidia.com/amgx-multi-grid-accelerated-linear-solvers-industrial-applications/)

[PyOpenCL](https://mathema.tician.de/software/pyopencl/)

[NVIDIA GPUDirect | NVIDIA Developer](https://developer.nvidia.com/gpudirect)
[GPU 通信技术初探（一）](https://www.infoq.cn/article/3D4MsRVS8ZOtGCj7*krT)
[How to Overlap Data Transfers in CUDA C/C++ | NVIDIA Developer Blog](https://devblogs.nvidia.com/how-overlap-data-transfers-cuda-cc/)

[What differences and relations between SVM, HSA, HMM and Unified Memory](https://lists.linuxfoundation.org/pipermail/iommu/2017-June/022391.html)

### CUDA

[[docker-nvidia]]

[CUDA - Wikiwand](https://www.wikiwand.com/en/CUDA)
[An Even Easier Introduction to CUDA | NVIDIA Developer Blog](https://developer.nvidia.com/blog/even-easier-introduction-cuda/)
[Programming Guide :: CUDA Toolkit Documentation](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html)

[CUDA Compatibility :: NVIDIA Data Center GPU Driver Documentation](https://docs.nvidia.com/deploy/cuda-compatibility/index.html)

[CUDA Toolkit Downloads | NVIDIA Developer](https://developer.nvidia.com/cuda-downloads)
[Guides - Installing the NVIDIA CUDA Toolkit | Linode](https://www.linode.com/docs/products/compute/gpu/guides/install-nvidia-cuda/)
[Installation Guide Linux :: CUDA Toolkit Documentation](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#post-installation-actions) post install, set `PATH` and `LD_LIBRARY_PATH`
[CUDA on WSL :: CUDA Toolkit Documentation](https://docs.nvidia.com/cuda/wsl-user-guide/index.html)
[Different CUDA versions shown by nvcc and NVIDIA-smi - Stack Overflow](https://stackoverflow.com/questions/53422407/different-cuda-versions-shown-by-nvcc-and-nvidia-smi)

`nvidia-smi`'s return the CUDA driver's version (around 410.48), not the CUDA runtime version, use `nvcc --version`
[Different CUDA versions shown by nvcc and NVIDIA-smi - Stack Overflow](https://stackoverflow.com/questions/53422407/different-cuda-versions-shown-by-nvcc-and-nvidia-smi) !important
[How to get the CUDA version? - Stack Overflow](https://stackoverflow.com/questions/9727688/how-to-get-the-cuda-version)

[PyCUDA](https://mathema.tician.de/software/pycuda/)

[Getting Started with NVIDIA GPU CUDA Core Programming Using Visual Studio in 2021 - YouTube](https://www.youtube.com/watch?v=8sDg-lD1fZQ)
[Intro to Parallel Programming CUDA - Udacity 458 - YouTube](https://www.youtube.com/playlist?list=PLGvfHSgImk4aweyWlhBXNF6XISY3um82_)
[CUDA Programming - YouTube](https://www.youtube.com/watch?v=xwbD6fL5qC8)
[Tutorial: CUDA programming in Python with numba and cupy - YouTube](https://www.youtube.com/watch?v=9bBsvpg-Xlk)

[Home - CUDA Tutorial](https://cuda-tutorial.readthedocs.io/en/latest/)
[Imaging and Computer Vision |NVIDIA](https://www.nvidia.com/object/imaging_comp_vision.html)

[NVIDIA Collective Communications Library (NCCL) | NVIDIA Developer](https://developer.nvidia.com/nccl) multi-GPU and multi-node collective communication primitives

### Triton

[Welcome to Triton’s documentation! — Triton documentation](https://triton-lang.org/)
[openai/triton: Development repository for the Triton language and compiler](https://github.com/openai/triton)

[Introducing Triton: Open-Source GPU Programming for Neural Networks](https://openai.com/blog/triton/)
[Wanna use your Nvidia GPU for acceleration but put off by CUDA? OpenAI has a Python-based alternative • The Register](https://www.theregister.com/2021/08/02/nvidia_cuda_openai/?td=keepreading-btm)

## MPI

[Message Passing Interface - Wikiwand](https://www.wikiwand.com/en/Message_Passing_Interface)
[Open MPI: Open Source High Performance Computing](https://www.open-mpi.org/)

[A Comprehensive MPI Tutorial Resource · MPI Tutorial](http://mpitutorial.com/)
[Performance Comparison of OpenMP, MPI, and MapReduce in Practical Problems](https://www.hindawi.com/journals/am/2015/575687/)

[MPI for Python — MPI for Python documentation](https://mpi4py.readthedocs.io/en/stable/index.html)
[mpi4py – High-Performance Distributed Python » ADMIN Magazine](https://www.admin-magazine.com/HPC/Articles/mpi4py-High-Performance-Distributed-Python)

[mpidotnet/MPI.NET: MPI.NET updated for .NET 4.0 and Linux](https://github.com/mpidotnet/MPI.NET)

## OpenMP

[OpenMP - Wikiwand](http://www.wikiwand.com/en/OpenMP)
[Home - OpenMP](https://www.openmp.org/)
[openmp - GCC Wiki](https://gcc.gnu.org/wiki/openmp)

[OpenMP Task Parallelism for Faster Genomic Data Processing](https://www.openmp.org/wp-content/uploads/OpenMP-Task-Parallelism-for-Faster-Genomic-Data-Processing.pdf)
[OpenMP Parallelization and Optimization of Graph-Based Machine Learning Algorithms](/_assets/opencv/IWOMP2016-final.pdf)
[Advancement of Computing on Large Datasets via Parallel Computing and Cyberinfrastructure](https://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=5350&context=etd)

[OpenMP » ADMIN Magazine](http://www.admin-magazine.com/HPC/Articles/Parallelizing-Loops-with-OpenMP)
[In the Loop » ADMIN Magazine](http://www.admin-magazine.com/HPC/Articles/OpenMP-Loops-and-Data-Control)

## OpenACC

OpenMP like library for NVIDIA GPU
enables hybrid CPU + GPU programming
easier to use than CUDA

[OpenACC - Wikiwand](https://www.wikiwand.com/en/OpenACC)
[Homepage | OpenACC](https://www.openacc.org/)
[OpenACC - GCC Wiki](https://gcc.gnu.org/wiki/OpenACC)

[OpenACC: More Science Less Programming | NVIDIA Developer](https://developer.nvidia.com/openacc)

[Parallel Computing: What is better and why: OpenACC or OpenMP?](https://www.quora.com/Parallel-Computing-What-is-better-and-why-OpenACC-or-OpenMP)
[OpenMP + OpenACC](https://www.pgroup.com/userforum/viewtopic.php?t=6216)

## SIMD

[xtensor-stack/xsimd: C++ wrappers for SIMD intrinsics and parallelized, optimized mathematical functions (SSE, AVX, NEON, AVX512)](https://github.com/xtensor-stack/xsimd)

[An Introduction to GCC Compiler Intrinsics in Vector Processing | Linux Journal](https://www.linuxjournal.com/content/introduction-gcc-compiler-intrinsics-vector-processing)

## Linear Algebra

[xtensor-stack/xtensor-benchmark: Easy to use benchmarks for linear algebra frameworks](https://github.com/xtensor-stack/xtensor-benchmark)

[Intel® Math Kernel Library (Intel® MKL) | Intel® Software](https://software.intel.com/en-us/mkl)
[Math Kernel Library - Wikiwand](https://www.wikiwand.com/en/Math_Kernel_Library)

[LAPACK — Linear Algebra PACKage](http://www.netlib.org/lapack/)

[OpenBLAS : An optimized BLAS library](https://www.openblas.net/)

[Armadillo: C++ library for linear algebra & scientific computing](http://arma.sourceforge.net/)

[Boosting numpy: Why BLAS Matters - Weblog](https://markus-beuckelmann.de/blog/boosting-numpy-blas.html)
[Is your Numpy optimized for speed? - Towards Data Science](https://towardsdatascience.com/is-your-numpy-optimized-for-speed-c1d2b2ba515) different backends

[clifford: Geometric Algebra for Python — Clifford 1.4.0dev0 documentation](https://clifford.readthedocs.io/en/latest/)

## Urbit

[Urbit](https://urbit.org/)

[Urbit with Galen Wolfe-Pauly - Software Engineering Daily](https://softwareengineeringdaily.com/2021/12/17/urbit-with-galen-wolfe-pauly/)

## Edge servers

[That's It, I'm Done With Serverless. - YouTube](https://www.youtube.com/watch?v=UPo_Xahee1g)
[Regional execution for ultra-low latency rendering at the edge – Vercel](https://vercel.com/blog/regional-execution-for-ultra-low-latency-rendering-at-the-edge)

Edge Location (AWS Serverless): slow cold start, your code is deployed to the specific location(s)
Edge Runtime: faster "cold start" (actually not cold); your code is deployed globally, think CDN; e.g.: Netlify, Vercel
Regional Edge Runtime: faster "cold start" (actually not cold); edge server is closer to DB, further to user

Edge Runtime Cons:

- Compatibility (no all functions of your runtime is available)
- No native runtime (cannot run Rust/Go binary from JavaScript)
