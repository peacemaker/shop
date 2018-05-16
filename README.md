# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

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

# Task #1

1. **DONE** Создайте бренч Task 1 для первого задания.

2. **DONE** Создайте компонент ProductComponent. Используйте его в AppComponent.
>ng generate component ProductComponent -d
 
3. Добавьте несколько простых свойств для компонента ProductComponent и несколько свойств в виде массива. Выведите их в темплейт:
    - name: string
    - description: string
    - price: number
    - category: enum (Создайте enum с несколькими категориями) https://www.typescriptlang.org/docs/handbook/enums.html
    - isAvailable: boolean
    - ...

4. Добавьте кнопку Buy. Реализуйте обработчик события клик onBuy(), который выводит в консоль сообщение о покупке товара.
   Попробуйте реализовать функционал по добавлению товара в корзину (optional).

5. Создайте сервис ProductsService, который будет возвращать товары. Модель товара опишите интерфейсом и классом, который реализует данный интерфейс.
   Зарегистрируйте сервис в AppModule. 
   Создайте компонент ProductListComponent. Используйте в нем сервис ProductsService, отобразите данные на станице c помощью директивы *ngFor.

6. Создайте компонент (ng g c cart) и используйте его в AppComponent темплейте. Компонент должен отображать список купленых товаров. 
   Организуйте список в виде отдельного сервиса - CartService.  Используйте директиву *ngIf + else для отображения корзины (CartComponent), если она не пустая.
   Если корзина пустая отображать другой альтернативный блок с сообщением о пустой корзине.

7. Реализуйте любую дополнительную функциональность.

8. Создайте файл changelog.md в корне проекта и описывайте в нем то, что реализовали.

9. Загрузите ваш проект на github и отправьте мне ссылку (Vitaliy_Zhyrytskyy@epam.com)
10. Все последующие задания выполняйте в том же проекте, но в разных ветках: Task2, Task3, ....

11. Несколько бест практисис (Возвращайтесь к этому списку в каждом домашнем задании. Если есть что добавить, предлагайте):
    1. Сначала импортируем Ангуляр пакеты, затем сторонние пакеты, например, Rxjs, затем свои. Разделяем блоки пустой строкой
    2. Поля класса описываем в следующей последовательности, блоки полей и методы отделяем пустой строкой:
        - Инпуты,
        - Аутпуты
        - Другие декорируемые свойства
        - публичные поля
        - приватные поля
        - конструктор
        - методы жизненного цикла с префиксом ng
        - обработчики событий с префиксом on
        - публичные методы
        - приватные методы
    3. Модификатор public для полей и методов не используем. Они public по-умолчанию. Для параметров конструктора используем.
    4. То, к чему нужен доступ в темплейте - public, а не private.
    5. В корневой папке приложения app должны быть только корневой компонент и корневой модуль. Остальные файлы должны быть разложены по папкам.
    6. Методам-обработчикам событий добавлять префикс on
12. Комментарии буду писать в ишьюс на гитхабе. Если комментарий понятен и Вы его применили в коде, то закрывайте ишью.
