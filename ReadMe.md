# PAM - (Privileged Access Management)

## Overview

PAM is a microservices-based system designed to control, monitor, and secure privileged access across distributed infrastructures.
It ensures that sensitive credentials and sessions are managed with strict policies and auditable events.

### Technologies Used

- Gateway: Nginx
- Backend: Node.js + Java Quarkus
- Database: MongoDB + PostgreSQL
- ORM: Mongoose + Hibernate
- CI/CD: GitHub Actions
- Containerization: Docker
- Orchestration: Docker Swarm
- Auth: JWT + bcrypt
- Asynchronous Messaging: RabbitMQ
- Monitoring: Logging + Health Checks
- Tests: Jest + JUnit
- Documentation: Swagger

### Infrastructure Setup

- Gateway (Nginx)
- Reverse Proxy (Nginx)
- Vault (Hashicorp Vault)

### Services using Node.js

- Agent Service
- Audit Service
- Identity Service
- Secrets Service

### Services using Java Quarkus

- Authz Service
- Session Service

### Responsabilities of each service

- Identity Service, provides authentication and manages the lifecycle of user identities. It handles user registration, login including the JWT issuing, password hashing using bcrypt, refresh tokens, stores user profile and roles, sends user events using RabbitMQ.

- Authz Service, responsible for authorization and access policies. It manages roles using the approach of role-based access control, stores and manages permissions, and policies to ensure that users have the appropriate access to resources based on their identity and roles, just-in-time access validation, provides allow/deny decisions to other services.

- Secrets Service, secures the credential vault, responsible for storing, retrieving, and managing encrypted credentials, credentials leases (temporary accesses), password rotation scheduler, credential access audit events, provide short-lived credentials to Agent or Session Service.

- Session Service, manages privileged session management, start/stop SSh/RDP/Bash privileged session, validate session requests via AuthZ, consume credentials from Secrets Service, monitor session lifecycle, record session history, stream live session logs to Audit Service.

- Agent Service, remote execution and endpoint control, executes commands safely, receives credentials from Secrets Service, enforces command restrictions & policies, streams command logs during live sessions, reports suspicious activities to Audit Service.

- Audit Service, centralized logging and auditing, logs everything security-related logins, credential access, policy decisions, session activity, provides audit reports, immutable log storage, query logs by user, resource or session.
