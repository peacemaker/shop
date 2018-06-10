1. Применить один или более встроенных пайпов в вашем приложении, например, 
    - для форматирования цены
    - для форматирования даты обновления
    - для форматирования категории в верхний регистр

2. Изменить метод getProducts() сервиса ProductService так, чтобы он возвращал промис. 
   Применить async пайп для отображения данных, предоставленных сервисом ProductService на странице.

3. Создайте OrderByPipe для сортировки массива объектов. 
   Пайп принимает два параметра: 
   - поле в виде строки, по которому необходимо сортировать массив объектов
   - булевый флаг, который определяет порядок сортировки. По умолчанию сортировка по убыванию.

4. Зарегистрируйте OrderByPipe в SharedModule.
   Применить OrderByPipe в вашем приложении для сортировки товаров корзины, 
   реализовать возмомность сортировать массив товаров по цене, количеству, названию.

4. Описать в changelog, где применены пайпы.

# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

`## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).