import { Component, OnInit } from '@angular/core';
import {Book} from '.././book';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  books = BOOKS;
  constructor() { }

  ngOnInit() {
  }

}
export const BOOKS: Book[] = [
  {id: 1, name: 'qqq', rate: 5, src: 'https://ozon-st.cdn.ngenix.net/multimedia/1012543307.jpg',
  description: 'Чтя Рек сию тих лов Наш. Бог око ему верою пар Див Парки твоих синие мху. Пот ком беседу сад камень убоюсь гремел Рцы истина. Дай это Лей Вся. Мои тут пел яви. Зевы мать полк Жить луна. Чуд лес Пук жил Или сии. . Их Тя ум мя. ' },
  {id: 2, name: 'www', rate: 5, src: 'http://loveread.ec/img/photo_books/2460.jpg',
  description: 'Свирепой Не ею крестном Ко те ту просвети во спасенью смертные. Ты их гл Те же. Дела века Дают угль хлад льву. Рек иду чад над жег злодеями светлеет рыб Слиянный Тот ней. Зубов сие чтя где судом СЛАВЫ храня никто лиц конца. Но из ко та До ея ах Ту. Всевышнему исхожденье распростря Ту предызбрал ту об Аз Склонитеся уж. Вино ту ах очам Луна яд та НА лить Се мета. ' },
  {id: 3, name: 'eee', rate: 5, src: 'https://be2.aldebaran.ru/static/bookimages/11/39/25/11392513.bin.dir/11392513.cover.jpg',
  description: 'Чистою провел высший верных скотам законы. Превыше любящих царевна. . Быстрее Стадами высоких чудесам. . Обыдет Глагол ах мешало не яд Им Не. ' },
  {id: 4, name: 'rrr', rate: 5, src: 'https://files.books.ru/pic/816001-817000/816546/765853023c.jpg',
  description: 'Мы яр то на ад уз До Те. Век тук уха Бог Пук дни дум. То Уж чада Тя Пред им же об выше. . Дар нам тощ тем миг. Яр Вы гл расстилает страданьем приготовил До бы. . ' },
  {id: 1, name: 'qqq', rate: 5, src: 'https://ozon-st.cdn.ngenix.net/multimedia/1012543307.jpg',
  description: 'Чтя Рек сию тих лов Наш. Бог око ему верою пар Див Парки твоих синие мху. Пот ком беседу сад камень убоюсь гремел Рцы истина. Дай это Лей Вся. Мои тут пел яви. Зевы мать полк Жить луна. Чуд лес Пук жил Или сии. . Их Тя ум мя. ' },
  {id: 2, name: 'www', rate: 5, src: 'http://loveread.ec/img/photo_books/2460.jpg',
  description: 'Свирепой Не ею крестном Ко те ту просвети во спасенью смертные. Ты их гл Те же. Дела века Дают угль хлад льву. Рек иду чад над жег злодеями светлеет рыб Слиянный Тот ней. Зубов сие чтя где судом СЛАВЫ храня никто лиц конца. Но из ко та До ея ах Ту. Всевышнему исхожденье распростря Ту предызбрал ту об Аз Склонитеся уж. Вино ту ах очам Луна яд та НА лить Се мета. ' },
  {id: 3, name: 'eee', rate: 5, src: 'https://be2.aldebaran.ru/static/bookimages/11/39/25/11392513.bin.dir/11392513.cover.jpg',
  description: 'Чистою провел высший верных скотам законы. Превыше любящих царевна. . Быстрее Стадами высоких чудесам. . Обыдет Глагол ах мешало не яд Им Не. ' },
  {id: 4, name: 'rrr', rate: 5, src: 'https://files.books.ru/pic/816001-817000/816546/765853023c.jpg',
  description: 'Мы яр то на ад уз До Те. Век тук уха Бог Пук дни дум. То Уж чада Тя Пред им же об выше. . Дар нам тощ тем миг. Яр Вы гл расстилает страданьем приготовил До бы. . ' },
 
];
