#Angular 5+ Components

**Done** Создать приложение с нуля или продолжить модификацию Вашего предыдущего приложения в ветке Task2

1. Создать приложение Angular (интернет магазин) используя `Angular-CLI`, которое состоит из двух или более модулей:
    - **Done** `AppModule` 
    - **Done** `CartModule`
    - **Done** `ProductsModule` 
    - **Done** `OrdersModule` 
    - **Done** `CoreModule`    (то, что в единичном варианте)
    - **Done** `SharedModule` (то, что много раз используется)
   
2. **Done** Создайте или модифицируйте `ProductListComponent`, который делегирует отображение списка товаров
   компоненту `ProductComponent`. 
   
   **Done** Товары компоненту предоставить с помощью метода `getProducts()` сервиса `ProductService`.
   
   **Done** Создать модель сущности. Использовать одно-два необязательных полей. Интерфейс + Класс.
    
   **Done** Реализовать возможность добавления товара в корзину (click), если товар есть в наличии (доступен). 
   Товар в корзину должен добавлять `ProductListComponent`. `ProductComponent` реализовать как презентационный компонент.
   
   **Done** Если товара нет, кнопку делать недоступной. 

3. **Done** Создайте или модифицируйте CartListComponent, который отображает список купленных товаров. 
   
   **Done** Кроме списка купленных товаров, отображать количество купленных товаров и общую сумму.

4. **Done** Создайте компонент СartItemComponent, который отображает одну сущность из списка выше. 
   
   **Done** Используйте этот компонент в CartListComponent. 
   
   *In progress* Реализовать возможность изменить свойство сущности (quantity), 
   **Done** удалить сущность.

5. **Done** По возможности использовать декораторы: @Input(), @Output().

6. По возможности использовать OnPush стратегию для компонентов

7. По возможности использовать два или более метода-хука жизненого цикла компонента

8. *In progress* Использовать DOM событие (**Done** click, wheel, blur...).

9. **Done** Создать или модифицировать сервис (CartService) для предоставления данных компонентам, подсчета количества и суммы.

10. В качестве демо попробовать использовать #variable и @ViewChild и получить доступ к DOM элементу темплейта, методам(свойствам) дочернего компонента.

11. При наведении мышки или клике на пункт списка (CartItem) стилизировать его изменением фона. 
    Для этого создать директиву и зарегистрировать ее в SharedModule.
    Использовать @HostBinding, @HostListener декораторы.

12. По возможности применить директиву ngClass или ngStyle. 

13. Реализуйте свою небольшую функциональность.

14. Опишите изменения в проекте. 

Не используйте для имен событий, которые генерят компоненты префикс on. 
Используейте его для обработчиков этих событий.

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