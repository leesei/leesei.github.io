---
title: Policy Management/Authorization
description: Policy for accessing services
created: 2023-06-15
updated: 2025-07-07
tags:
  - authentication
  - authorization
  - devops
  - security
  - web
---

[[blockchain#Wallet/Decentralized ID (DID)]]

[Identity management - Wikiwand](https://www.wikiwand.com/en/Identity_management)
[XACML - Wikiwand](https://www.wikiwand.com/en/XACML)

[Why Every Company Needs a Data Policy - The New Stack](https://thenewstack.io/why-every-company-needs-a-data-policy/)

[Access-control list - Wikiwand](https://www.wikiwand.com/en/Access-control_list)

[Role-based access control - Wikiwand](https://www.wikiwand.com/en/Role-based_access_control) mini RBAC (RBACm) = group ACL (ACLg)
[What Is Role-Based Access Control (RBAC)? | Okta](https://www.okta.com/identity-101/what-is-role-based-access-control-rbac/)

[Attribute-based access control - Wikiwand](https://www.wikiwand.com/en/Attribute-based_access_control) policy-based access control

[RBAC vs. ABAC: Definitions & When to Use | Okta](https://www.okta.com/identity-101/role-based-access-control-vs-attribute-based-access-control/)
[Fine-Grained Access Control: Where RBAC falls short - DEV Community](https://dev.to/egeaytin/fine-grained-access-control-where-rbac-falls-short-37hp)

[Improving Enterprise Business Process Management Systems: Enrich RBAC and ABAC with ProBAC, #infosec #security #BPM](https://improving-bpm-systems.blogspot.com/2015/01/enrich-rbac-and-abac-with-probac.html)

## Server

### Lightweight JWT server

[tarent/loginsrv: JWT login microservice with plugable backends such as OAuth2, Google, Github, htpasswd, osiam, ..](https://github.com/tarent/loginsrv)

[leesei/docker-auth-server: Dockerized JWT key server](https://github.com/leesei/docker-auth-server)

### Keycloak

[Keycloak](https://www.keycloak.org/)

### Permify

[Permify | Fine-Grained Authorization](https://permify.co/)
[What is Permify? | Permify](https://docs.permify.co/docs/permify-overview/intro)
[Permify/permify: An open-source authorization as a service inspired by Google Zanzibar, designed to build and manage fine-grained and scalable authorization systems for any application.](https://github.com/Permify/permify)

[Google Zanzibar: What is it ? [2025]](https://permify.co/post/google-zanzibar-in-a-nutshell/)

### Cerbos

[Cerbos: Open-Source Authorization Layer & Access Control System](https://www.cerbos.dev/)
[cerbos/cerbos: Cerbos is the open core, language-agnostic, scalable authorization solution that makes user permissions and authorization simple to implement and manage by writing context-aware access control policies for your application resources.](https://github.com/cerbos/cerbos)

### SuperTokens

[SuperTokens, Open Source User Authentication](https://supertokens.com/)
[supertokens/supertokens-core: Open source alternative to Auth0 / Firebase Auth / AWS Cognito](https://github.com/supertokens/supertokens-core)

### FusionAuth

> Self Hosted is Always Free

[FusionAuth: Auth. Built for Devs, by Devs](https://fusionauth.io/)
[Self-Hosted - FusionAuth](https://fusionauth.io/platform/self-hosting)

### Fief

[Open-source authentication platform - Fief](https://www.fief.dev/)

### Authelia

[Authelia - The Single Sign-On Multi-Factor portal for web apps](https://www.authelia.com/)
[authelia/authelia: The Single Sign-On Multi-Factor portal for web apps](https://github.com/authelia/authelia)

### Lucia

[Lucia](https://lucia-auth.com/)
[lucia-auth/lucia: Authentication, simple and clean](https://github.com/lucia-auth/lucia)

### IndieAuth

[IndieAuth - Sign in with your domain name](https://indieauth.com/)
[IndieAuth-brainstorming - IndieWeb](https://indieweb.org/IndieAuth-brainstorming#naming_confusion)

[IndieAuth](https://indieauth.net/) the decentralized identity protocol
[OAuth for the Open Web • Aaron Parecki](https://aaronparecki.com/2018/07/07/7/oauth-for-the-open-web)

### OpenFGA

[Fine Grained Authorization | OpenFGA](https://openfga.dev/)

### Open Policy Agent

[Open Policy Agent](https://www.openpolicyagent.org/)
[Policies - Kubernetes](https://kubernetes.io/docs/concepts/policy/)
[Open Policy Agent Accepted as CNCF Incubation Level Project](https://www.infoq.com/news/2019/04/open-policy-agent-cncf)
[Open Policy Agent’s Mission to Secure the Cloud – The New Stack](https://thenewstack.io/open-policy-agents-mission-to-secure-the-cloud/)

[The Rego Playground](https://play.openpolicyagent.org/)
[Open Policy Agent | How Do I Write Policies?](https://www.openpolicyagent.org/docs/latest/how-do-i-write-policies)
[Open Policy Agent | Comparison to Other Systems](https://www.openpolicyagent.org/docs/latest/comparison-to-other-systems)

[permitio/opal: Policy and data administration, distribution, and real-time updates on top of Policy Agents (OPA, Cedar, ...)](https://github.com/permitio/opal) Open Policy Agent Layer

[open-policy-agent/opa-docker-authz: A policy-enabled authorization plugin for Docker.](https://github.com/open-policy-agent/opa-docker-authz)

#### OPA on Kubernetes

[Tremolo Security, Inc. - Tremolo Security](https://www.tremolosecurity.com/)
[Kubernetes Authorization via Open Policy Agent – ITNEXT](https://itnext.io/kubernetes-authorization-via-open-policy-agent-a9455d9d5ceb)
[Beyond RBAC in OpenShift - Open Policy Agent - Tremolo Security](https://www.tremolosecurity.com/beyond-rbac-in-openshift-open-policy-agent/)
[Simplify Kubernetes Security with Orchestra - Tremolo Security](https://www.tremolosecurity.com/kubernetes-security/) Orchestra Management portal

[OpenShift Commons Briefing: Securing OKD at Multiple Layers - Marc Boorshtein (Tremolo Security) - YouTube](https://www.youtube.com/watch?v=hICCM7ZMf-c)
[Open Policy Agent (OPA) with the Project’s Co-Creators](https://www.infoq.com/podcasts/open-policy-agent/)

## Ceder

[permitio/cedar-agent: Cedar-agent is the easiest way to deploy and run Cedar](https://github.com/permitio/cedar-agent)
[The Cedar Programming Language: Authorization Simplified - The New Stack](https://thenewstack.io/the-cedar-programming-language-authorization-simplified/)
[Demo of the Cedar Programming Language - The Open Source Language from AWS - YouTube](https://www.youtube.com/watch?v=PzmDYyyA5xM)
[Open Sourcing AWS Cedar Is a Game Changer for IAM - The New Stack](https://thenewstack.io/open-sourcing-aws-cedar-is-a-game-changer-for-iam/)

## SDK

### vakt

[kolotaev/vakt: Attribute-based access control (ABAC) SDK for Python](https://github.com/kolotaev/vakt)

### CASL

[CASL](https://casl.js.org/v6/en/)

[前端權限檢查 CASL | 六小編 Editor Leon](https://editor.leonh.space/2024/casl/)
