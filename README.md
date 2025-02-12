<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

![NestJS Logo](https://nestjs.com/img/logo_small.svg)

# Loan Management System

📌 **Description**

The Loan Management System is a web application built with TypeScript and NestJS, designed to streamline personal loan processing. It provides a robust and scalable architecture, allowing users to apply for loans, track repayments, and manage loan statuses efficiently. The system integrates PostgreSQL as the primary database, uses Redis for caching, and follows multiple design patterns to ensure modularity and maintainability.

🚀 **Key Features**

- **User Management:** Secure registration, authentication, and authorization using JWT strategy.
- **Loan Application:** Users can apply for loans with configurable interest rates and repayment periods.
- **Risk Assessment:** Automated validation based on predefined financial criteria.
- **Payment Management:** Installments, due date tracking, and interest calculation.
- **Notifications:** Email and SMS alerts for approvals, payment due dates, and overdue loans.
- **Admin Dashboard:** A comprehensive interface to monitor loans, users, and repayments.
- **Database Switching:** The system supports seamless database switching, allowing easy migration between different database providers.

🛠 **Technologies Used**

- **Backend:** NestJS (TypeScript)
- **Database:** PostgreSQL (Primary) with a database abstraction layer
- **Authentication:** JWT-based strategy
- **ORM:** TypeORM
- **Caching:** Redis for session management and performance optimization
- **Infrastructure:** Docker

🎯 **Design Patterns Implemented**

- **Facade Pattern:** Simplifies interaction between different loan processing components, providing a unified interface.
- **Singleton Pattern:** Ensures a single instance of critical services such as database connections, Redis clients, and authentication handlers.
- **Repository Pattern (for database abstraction):** Allows switching between different databases (e.g., PostgreSQL, MySQL, MongoDB) without modifying business logic.

🔥 **Project Goal**

The goal of this project is to provide a scalable, secure, and efficient loan management system that enhances user experience while ensuring reliable financial operations.

## Instalation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Configure the development environment:
   ```bash
   cp .env.example .env
   ```
4. Start the application:
   ```bash
   yarn run dev
   ```
5. Open the project in your browser:
   ```bash
   yarn run start:debug
   ```
6. Open the console:
   ```bash
   yarn run start:debug
   ```

### Next Steps

You can copy this content into your `README.md` file. If you need any modifications or additional sections, let me know!
