
# CA Bank API

CA Bank API is a backend application built with C# and ASP.NET Core. It provides APIs for user authentication, authorization, and other banking-related functionalities.

## Features

- **User Authentication**: Signup, login, and OTP-based verification.
- **User Management**: Manage user details and roles.
- **Email Notifications**: Send OTPs and other notifications via email.
- **Logging**: Application logs are stored using Serilog with rolling file logs.
- **Database Integration**: Uses Entity Framework Core with SQL Server for data persistence.
- **Swagger Integration**: API documentation and testing via Swagger UI.

## Project Structure

```
├── Controllers/         # API controllers
├── Data/                # Database context
├── Dtos/                # Data Transfer Objects
├── Logs/                # Application logs
├── Migrations/          # Entity Framework migrations
├── Models/              # Database models
├── Repositories/        # Data access layer
├── Services/            # Business logic services
├── Properties/          # Configuration files
├── Program.cs           # Application entry point
├── appsettings.json     # Application configuration
```

## Prerequisites

- .NET 8.0 SDK
- SQL Server
- Visual Studio or Visual Studio Code

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ca-bank-api
   ```

2. Configure the database connection in `appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=localhost;Database=CaBank;Trusted_Connection=false;TrustServerCertificate=True;User Id=sa;Password=SQLConnect1!"
   }
   ```

3. Apply migrations to set up the database:
   ```bash
   dotnet ef database update
   ```

4. Run the application:
   ```bash
   dotnet run
   ```

5. Access the Swagger UI at `http://localhost:5000/swagger`.

## Environment Configuration

- **Development**: Use `appsettings.Development.json` for development-specific settings.
- **Production**: Configure production settings in `appsettings.json`.

## Key Technologies

- **ASP.NET Core**: Web framework for building APIs.
- **Entity Framework Core**: ORM for database operations.
- **Serilog**: Logging framework.
- **AutoMapper**: Object mapping library.
- **Swagger**: API documentation and testing.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
```
