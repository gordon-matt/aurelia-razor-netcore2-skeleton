# Aurelia Skeleton Navigation for .NET Core 2.0 (using Razor views and dynamic routes)

## Instructions

1. Install [NodeJS](https://nodejs.org/en/download/)
2. Install JSPM globally: `npm install -g jspm`
3. Clone/download this project
4. Restore JSPM packages: `jspm install`
> **NOTE:** Do this from the root directory of the project (not the solution root)

5. One of the pages is a fully working CRUD demo for Kendo UI with OData. It relies on an existing MSSQL database. Change the connection string in **appsettings.json** and then run the **Update-Database** command from the **Package Manager Console**, which will create the database for you. When running the app, use the "People" link in the nav bar to test this demo.

6. That should be about it. Simply build and run the project.

> **OPTIONAL:** When working with JSPM, I recommend using the following Visual Studio extension: [Package Installer](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.PackageInstaller)

## License

This project is licensed under the [MIT license](LICENSE.txt).
