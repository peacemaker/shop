**DONE** Создайте бренч Task 1 для первого задания.

**DONE** Создайте компонент ProductComponent. Используйте его в AppComponent.
>ng generate component Product

**DONE** Добавьте несколько простых свойств для компонента ProductComponent и несколько свойств в виде массива. Выведите их в темплейт:
 - name: string
 - description: string
 - price: number
 - category: enum (Создайте enum с несколькими категориями) https://www.typescriptlang.org/docs/handbook/enums.html
 - isAvailable: boolean
 - ...

**DONE** Добавьте кнопку Buy. Реализуйте обработчик события клик onBuy(), который выводит в консоль сообщение о покупке товара.

*In progress* Попробуйте реализовать функционал по добавлению товара в корзину (optional).

**DONE** Создайте сервис ProductsService, который будет возвращать товары. Модель товара опишите интерфейсом и классом, который реализует данный интерфейс. Зарегистрируйте сервис в AppModule. Создайте компонент ProductListComponent. Используйте в нем сервис ProductsService, отобразите данные на станице c помощью директивы *ngFor.

>ng generate service Products

>ng generate component ProductList

*In progress* Создайте компонент (ng g c cart) и используйте его в AppComponent темплейте. Компонент должен отображать список купленых товаров. Организуйте список в виде отдельного сервиса - CartService. Используйте директиву *ngIf + else для отображения корзины (CartComponent), если она не пустая. Если корзина пустая отображать другой альтернативный блок с сообщением о пустой корзине.

>ng generate component Cart

>ng generate service Cart