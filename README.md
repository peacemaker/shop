#Angular: Services and DI
 
1. **Done** Создайте/модифицируйте сервис `CartService`, который должен содержать данные корзины интернет магазина и управлять содержимым.
   
    Сервис должен хранить информацию: 
    - **Done** о добавленных товарах в корзину
    - **Done** общее количество товаров в корзине
    - **Done** общую сумму товаров в корзине
    
    Сервис должен предоставлять следующий функционал:
    - **Done** добавить в корзину товар с количеством
    - **Done** удалить указанный товар из корзины
    - **Done** увеличить/уменьшить количество для указаного товара
    - **Done** очистить корзину
    - **Done** пересчитать общее количество товара и сумму после каждой операции, которая влияет на корзину

2. **Done** Создайте сервис `LocalStorageService`, который позволит работать с `localStorage` (как класс). Он должен предоставлять методы для:
    - **Done** установки значения (setItem)
    - **Done** получения значения (getItem)
    - **Done** удаления значения (removeItem)

3. **Done** Создайте сервис `ConfigOptionsService`, который должен хранить объект настроек (`id`, `login`, `email`, `...`).

   **Done** Сервис должен предоставлять методы для установки и извлечения данных.  

4. **Done** Создайте сервис `ConstantsService`, в виде готового литерала объекта, например `{ App: "TaskManager", Ver: "1.0" }`. 
   
   **Done** Зарегистрируйте его, используя `useValue`.

5. **Done** Создайте сервис `GeneratorService`, который должен генерировать случайную последовательность символов длины n 
   из набора `a-z`, `A-Z`, `0-9` (n - здается при регистрации сервиса). Зарегистрируйте сервис используя `useFactory`.

6. Создайте или используйте ранее созданный `CoreModule` и зарегистриуйте в нем `LocalStorageService`, `ConfigOptionsService`, `ConstantsService`, `GeneratorService`
   Подключите модуль к приложению. Начиная с 6 версии можно испльовать для регистрации сервисов `@Injectable({ providedIn: ...})`

7. Создайте демо-компонент и внедрите перечисленные выше сервисы.  Используйте декоратор `@Optional()`.

8. Напишите директиву, которая добавляет обработчик события `click` к хост элементу. 
   Клик изменяет размер шрифта элемента, рамку или что-то другое на Ваше усмотрение. 
   Добавьте `@Input()` для директивы. Используйте `ElementRef`/`Renderer2`

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