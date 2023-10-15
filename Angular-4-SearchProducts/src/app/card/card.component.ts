import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Book{
  ISBN: number,
  title: string,
  author: string,
  summary: string,
  image: string
  price: { currency: string, value : number, displayValue: string }
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() declare book: Book;
  // @Input() declare totalCartValue: number;
  @Output() addBookToCart: EventEmitter<Book> = new EventEmitter<Book>();
  
  addBook(book: Book){
    this.addBookToCart.emit(book);

    console.log('added this book to cart')
    console.log(book)
  }

  changeContent(event: MouseEvent){
    let ele = (event.target as HTMLInputElement).id;
    // console.log(ele)
    let element = document.getElementById(ele)!
    element.textContent = "Added to Cart"
    element.style.color = 'black'
    element.style.backgroundColor = "yellow"
  }
}
