# List of commands

## Create projects

```ps
cd backend

# create Solution
dotnet new sln -n Reactivities

# Create projects
dotnet new webapi -n API
dotnet new classlib -n Application
dotnet new classlib -n Domain
dotnet new classlib -n Persistence

# add projects to Solution
dotnet sln add .\API\
dotnet sln add .\Application\
dotnet sln add .\Domain\
dotnet sln add .\Persistence\
```

## Set up database

### Prepare migrations

```ps
# install/update dotnet-ef global tool
dotnet tool install --global dotnet-ef
# -or-
dotnet tool update --global dotnet-ef

# create first migration
dotnet ef migrations add InitialCreate -p .\Persistence\ -s .\API
```

### Create database

Several options here:

- manually (not covered here)
- manually using dotnet-ef tool
- in code

#### manually using dotnet-ef tool

```ps
dotnet ef database update -p .\Persistence\ -s .\API\
```
