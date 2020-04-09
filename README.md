# ContactInformationApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Run Application On localhost

Run `ng serve` to run the project on locale server.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Project Folder Structure

    src
        app
            _helper
                auth.guard.ts
                error.interceptor.ts
                fake-backend.ts
                jwt.interceptor.ts
                index.ts
            _Models
                contactBookInfo.ts
                user.ts
                index.ts
            _services
                authentication.service.ts
                user.service.ts
                fake-database.service.ts
                contact-book-info.service.ts
                index.ts
            confirmation-model
                confirmation-model.component.html
                confirmation-model.component.ts
                confirmation-model.component.css    
            home
                home.component.html
                home.component.ts
                home.component.css
                index.ts
            login
                login.component.html
                login.component.ts
                login.component.css
                index.ts
            app-routing.module.ts
            app.component.html
            app.component.ts
            app.component.css
            app.module.ts
            environments
                environment.prod.ts
                environment.ts
            index.html
            main.ts
            polyfills.ts
            styles.css
        package.json
        tsconfig.json