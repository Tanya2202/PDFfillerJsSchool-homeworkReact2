# React homework 2
Application url: [https://pdffillerjsschool-homework.firebaseapp.com/](https://pdffillerjsschool-homework.firebaseapp.com/)


### Install dependencies
```npm install```

### Build
```npm run build```

### Start application
```npm run start```

### Task
Написать приложение, которое может выводить алерты на странице.
Требования:
- На странице должен быть инпут и кнопка «Add alert»
- В инпут вводится текст, который добавится в алерт по нажатию кнопки
- Кнопка находится в состоянии disabled, если в ней нет текста
- После инициализации приложения и после нажатия на кнопку ставить фокус на инпуте (использовать refs!)
- Все алерты должны находится за пределами root’ового элемента, куда рендерится React

Подсказка: рендерить алерты нужно через портал в какой-нибудь <div class=‘alerts-list’></div>, но нужно написать HOC withPortal, c помощью которого можно будет любой компонент рендерить в любой dom элемент. Интерфейс этого HOC’а должен быть вот таким:
```
withPortal(domElem)(Component)
``` 
