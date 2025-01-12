---
title: HashiCorp
description: ""
created: 2016-03-19
updated: 2025-01-09
tags:
  - dev/deploy
  - devops
---

[HashiCorp: Infrastructure enables innovation](https://www.hashicorp.com)
[Tutorials | HashiCorp Developer](https://developer.hashicorp.com/tutorials)
[Tao of HashiCorp | HashiCorp](https://www.hashicorp.com/tao-of-hashicorp/)

[HashiCorp adopts Business Source License](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license) 2023-08-10
[HashiCorp Licensing FAQ](https://www.hashicorp.com/license-faq)

[#180: Otto, Vagrant, and Automation with Mitchell Hashimoto - The Changelog](https://changelog.com/180/)

## Vagrant

[[vagrant]]

## Packer

[Packer by HashiCorp](https://www.packer.io/)
Packer is a free and open source tool for creating golden images for multiple platforms from a single source configuration.

[Tutorials | Packer | HashiCorp Developer](https://developer.hashicorp.com/packer/tutorials)
[Documentation | Packer | HashiCorp Developer](https://developer.hashicorp.com/packer/docs)

[Docker? VMs? EC2? Yes! With Packer.io](http://www.kevinclarke.info/slides/c4l15/#/)

[Developing with Packer and Docker | Sam Thursfield's Blog](https://samthursfield.wordpress.com/2014/10/20/developing-with-packer-and-docker/)
[linux - Packer,Dockramp vs Dockerfile - Stack Overflow](http://stackoverflow.com/questions/31778106/packer-dockramp-vs-dockerfile)
[Packer Build - Create and Build Packer Templates and Images for AWS](https://www.middlewareinventory.com/blog/build-packer-aws-image-example/)
[Why Docker made me love Packer | Home](http://datafundamentals.com/content/why-docker-made-me-love-packer)
[Provision Infrastructure with Packer | Terraform - HashiCorp Learn](https://learn.hashicorp.com/tutorials/terraform/packer?in=terraform/provision)
[Docker and Packer playing nice: Part 1 | Home](http://datafundamentals.com/content/docker-and-packer-playing-nice-part-1)

## Serf

[Serf by HashiCorp](https://www.serf.io/)
Serf is a decentralized solution for cluster membership, failure detection, and orchestration. Lightweight and highly available.

[Internals - Serf by HashiCorp](https://www.serf.io/docs/internals/index.html)

## Consul

[Consul by HashiCorp](https://www.consul.io/)
Service discovery and configuration made easy. Distributed, highly available, and datacenter-aware. Built upon Serf.

Underlying health checks are AP
States (KV store and discovery) are CP

[Tutorials | Consul | HashiCorp Developer](https://developer.hashicorp.com/consul/tutorials)
[Consul Documentation | Consul | HashiCorp Developer](https://developer.hashicorp.com/consul/docs)

[Official Consul Docker Image - HashiCorp](https://www.hashicorp.com/blog/official-consul-docker-image.html)
[Why is service discovery important? (And what is Consul?) - O'Reilly Media](https://www.oreilly.com/learning/why-is-service-discovery-important-and-what-is-consul)

[Presentation: Service discovery in a microservice architecture | Smartjava.org](http://www.smartjava.org/content/presentation-service-discovery-microservice-architecture) [code](https://github.com/josdirksen/next-build-consul) 😴inactive
[Service Discovery with Docker and Consul: part 1 | Smartjava.org](http://www.smartjava.org/content/service-discovery-docker-and-consul-part-1)
[Service Discovery with Docker and Consul: part 2 | Smartjava.org](http://www.smartjava.org/content/service-discovery-docker-and-consul-part-2)
[GrassInWind2019/gRPCwithConsul: Use gRPC + Consul to do service discovery and RPC.](https://github.com/GrassInWind2019/gRPCwithConsul) 😴inactive

### Consul Template

[Introducing Consul Template - HashiCorp](https://www.hashicorp.com/blog/introducing-consul-template.html)
[hashicorp/consul-template: Generic template rendering and notifications with Consul](https://github.com/hashicorp/consul-template)

### Consul Connect (service mesh)

[Service Mesh on Consul | Consul | HashiCorp Developer](https://developer.hashicorp.com/consul/docs/connect)
[Register your services to Consul | Consul | HashiCorp Developer](https://developer.hashicorp.com/consul/tutorials/get-started-vms/virtual-machine-gs-service-discovery)

### Containers

Consul is often used to power load balancing of containers.

[progrium/embassy: Easy, distributed discovery and routing mesh for Docker powered by Consul](https://github.com/progrium/embassy) 😴inactive

[gliderlabs/registrator: Service registry bridge for Docker with pluggable adapters](https://github.com/gliderlabs/registrator) 😴inactive

[Scalable Architecture DR CoN: Docker, Registrator, Consul, Consul Template and Nginx](http://www.maori.geek.nz/scalable_architecture_dr_con_docker_registrator_consul_nginx/)

[Where are my containers? Dockerized service discovery with Consul – Development the way it should be](https://jlordiales.me/2015/01/23/docker-consul/)
[Automatic container registration with Consul and Registrator – Development the way it should be](https://jlordiales.me/2015/02/03/registrator/)
[Consul Template for transparent load balancing of containers – Development the way it should be](https://jlordiales.me/2015/04/01/consul-template/)

## Terraform

> change of license from MPL to BUSL in 2023-08
> caused OpenTofu fork

[Terraform by HashiCorp](https://www.terraform.io/)
Build, Combine, and Launch Infrastructure
[Understand Terraform (infra-as-code) in 5 minutes - Je suis un dev](https://www.jesuisundev.com/en/understand-terraform-infra-as-code-in-5-minutes/)
[Documentation | Terraform | HashiCorp Developer](https://developer.hashicorp.com/terraform/docs)

Declarative: define desired state, not steps

- only way to scale, computer can find more efficient strategy to reach the end state
  Output Plan before execution
  Provides scheduler, can use external one

[Manage AWS Infrastracture as Code with Terraform - M.Labouardy](http://www.blog.labouardy.com/manage-aws-infrastracture-as-code-with-terraform/)
[Manage AWS VPC as Infrastructure as Code with Terraform - M.Labouardy](http://www.blog.labouardy.com/manage-aws-vpc-as-infrastructure-as-code-with-terraform/)
[Setup Docker Swarm on AWS using Ansible & Terraform](https://hackernoon.com/setup-docker-swarm-on-aws-using-ansible-terraform-daa1eabbc27d)
[Why Terraform exceeds Chef, Puppet, Ansible, SaltStack, or CloudFormation - Level UpLevel Up](https://www.level-up.one/why-terraform-exceeds-chef-puppet-ansible-saltstack-or-cloudformation)
[Infrastructure as Code with Terraform » ADMIN Magazine](http://www.admin-magazine.com/Archive/2018/46/Infrastructure-as-Code-with-Terraform)
[Using Terraform To Manage Infrastructure Resources - DEV Community 👩‍💻👨‍💻](https://dev.to/pavanbelagatti/using-terraform-to-manage-infrastructure-resources-32da)

## Vault

[Vault by HashiCorp](https://www.vaultproject.io/)
A tool for managing secrets.

[Tutorials | Vault | HashiCorp Developer](https://developer.hashicorp.com/vault/tutorials)

[Managing Secrets with Vault and Consul | TestDriven.io](https://testdriven.io/blog/managing-secrets-with-vault-and-consul/)
[HashiCorp Vault Operator Manages Kubernetes Secrets - The New Stack](https://thenewstack.io/hashicorp-vault-operator-manages-kubernetes-secrets/)

[Introduction to Vault • Seth Vargo - YouTube](https://www.youtube.com/watch?v=yvImdLP3LEA)
[The Changelog #239: Managing Secrets Using Vault with Seth Vargo | Changelog](https://changelog.com/podcast/239)

## Nomad

> A Distributed, Highly Available, Datacenter-Aware Scheduler

[Nomad by HashiCorp](https://www.nomadproject.io/)
[Nomad by HashiCorp](https://www.nomadproject.io/use-cases/simple-container-orchestration)
[Documentation | Nomad | HashiCorp Developer](https://developer.hashicorp.com/nomad/docs)

[Is Nomad a better Kubernetes? - Chaordic](https://chaordic.io/blog/is-nomad-a-better-kubernetes/)
[Conductor: Why We Migrated from Kubernetes to Nomad – The New Stack](https://thenewstack.io/conductor-why-we-migrated-from-kubernetes-to-nomad/)

[robinovitch61/wander: A terminal app/TUI for HashiCorp Nomad](https://github.com/robinovitch61/wander)
[Wander | TUI for HashiCorp Nomad Clusters - YouTube](https://www.youtube.com/watch?v=ARhbm0npCCs)

## Otto

[Otto by HashiCorp](https://www.ottoproject.io/)
[The Successor to Vagrant - Otto by HashiCorp](https://www.ottoproject.io/intro/vagrant-successor.html)

Zero config development environment prepared by experts in the field.
Designed for production.

---

## True OpenSource alternatives

[OpenTofu](https://opentofu.org/) Terraform alternative
[OpenTofu](https://github.com/opentofu)

[OpenBao | OpenBao](https://openbao.org/) Vault alternative
[OpenBao](https://github.com/openbao)
