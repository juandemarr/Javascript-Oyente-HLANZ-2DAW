/*Create a class BookList

* Create another class called Book

* BookLists should have the following properties:
  x Number of books marked as read
  x Number of books marked not read yet
  x A reference to the next book to read (book object)
  x A reference to the current book being read (book object)
  x A reference to the last book read (book object)
  x An array of all the Books

* Each Book should have several properties:
  x Title
  x Genre
  x Author
  x Read (true or false)
  x Read date, can be blank, otherwise needs to be a JS Date() object

* Every Booklist should have a few methods:
.add(book)
        should add a book to the books list.
.finishCurrentBook()
    should mark the book that is currently being read as "read"
    Give it a read date of new Date(Date.now())
    Change the last book read to be the book that just got finished
    Change the current book to be the next book to be read
    Change the next book to be read property to be the first unread book you find in the 
    list of books

* Booklists and Books might need more methods than that. Try to think of more that 
might be useful.*/

import {Book} from "./book.js";
import {Booklist} from "./booklist.js";

function createEmptyTable(){
    let newTable = document.createElement("table");
    let trHead = document.createElement("tr");
    let thTitle = document.createElement("th");
    thTitle.appendChild(document.createTextNode("Title"));
    let thGenre = document.createElement("th");
    thGenre.appendChild(document.createTextNode("Genre"));
    let thAuthor = document.createElement("th");
    thAuthor.appendChild(document.createTextNode("Author"));
    let thRead = document.createElement("th");
    thRead.appendChild(document.createTextNode("Read"));
    let thReadDate = document.createElement("th");
    thReadDate.appendChild(document.createTextNode("Read date"));
    let thActions = document.createElement("th");
    thActions.appendChild(document.createTextNode("Actions"));
    trHead.appendChild(thTitle);
    trHead.appendChild(thGenre);
    trHead.appendChild(thAuthor);
    trHead.appendChild(thRead);
    trHead.appendChild(thReadDate);
    trHead.appendChild(thActions);
    newTable.appendChild(trHead);
    newTable.setAttribute("id","table");
    divTable.appendChild(newTable);
}

function paintTable(){//borro la tablay la creo de nuevo
    divTable.removeChild(divTable.firstChild);
    createEmptyTable();
    let table = document.getElementById("table");
    for(let keyBook = 0; keyBook < booklist.booklist.length ; keyBook++){

        //A cada tr le asigno como id el indice del libro en el array booklist, para saber cual editar
        let tr = document.createElement("tr");
        tr.setAttribute("id",keyBook);

        let tdTitle = document.createElement("td");
        let inputTitle = document.createElement("input");
        inputTitle.setAttribute("type","text");
        inputTitle.value = booklist.booklist[keyBook].title;
        tdTitle.appendChild(inputTitle);

        let tdGenre = document.createElement("td");
        let inputGenre = document.createElement("input");
        inputGenre.setAttribute("type","text");
        inputGenre.value = booklist.booklist[keyBook].genre;
        tdGenre.appendChild(inputGenre);

        let tdAuthor = document.createElement("td");
        let inputAuthor = document.createElement("input");
        inputAuthor.setAttribute("type","text");
        inputAuthor.value = booklist.booklist[keyBook].author;
        tdAuthor.appendChild(inputAuthor);

        let tdRead = document.createElement("td");
        tdRead.appendChild(document.createTextNode(booklist.booklist[keyBook].read));
        let tdReadDate = document.createElement("td");
        tdReadDate.appendChild(document.createTextNode(booklist.booklist[keyBook].readDate));

        //BUTTONS

        let tdButtons = document.createElement("td");
        let btnEdit = document.createElement("button");
        btnEdit.appendChild(document.createTextNode("Edit"));
        btnEdit.addEventListener("click",editBook);
        let btnDelete = document.createElement("button");
        btnDelete.appendChild(document.createTextNode("Delete"));
        btnDelete.addEventListener("click",deleteBook);

        tdButtons.appendChild(btnEdit);
        tdButtons.appendChild(btnDelete);

        tr.appendChild(tdTitle);
        tr.appendChild(tdGenre);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdRead);
        tr.appendChild(tdReadDate);
        tr.appendChild(tdButtons);
        table.appendChild(tr);
    }
}

function setNumberOfRead(){
    try{//en caso de no existir, como la primera vez, no daria error
        pRead.removeChild(pRead.firstChild);
        pNoRead.removeChild(pNoRead.firstChild);
    }catch{}
    
    pRead.appendChild(document.createTextNode(booklist.numberRead()+" books read"));
    pNoRead.appendChild(document.createTextNode(booklist.numberNoRead()+" books no read"));
}

function setPreviousNextBook(){
    try{
        previousBook.removeChild(previousBook.firstChild);
        nextBook.removeChild(nextBook.firstChild);
    }catch{}

    previousBook.appendChild(document.createTextNode("Last book read: "+booklist.previousBook()));
    nextBook.appendChild(document.createTextNode("Next book to read: "+booklist.nextBook()));
}

function addBook(title,genre,author){
    let book = new Book(title,genre,author);
    booklist.add(book);
    paintTable();
}

function editBook(e){
    //cojo el padre(td) y su padre(tr), luego su id, y ese indice dentro de booklist es el libro a editar
    let tr = e.target.parentNode.parentNode;
    let keyBook = tr.getAttribute("id");
    //desde el tr obtenido cojo los td y el valor de su input para asignar ese valor al libro
    booklist.booklist[keyBook].title = tr.getElementsByTagName("td")[0].querySelector("input").value;
    booklist.booklist[keyBook].author = tr.getElementsByTagName("td")[1].querySelector("input").value;
    booklist.booklist[keyBook].genre = tr.getElementsByTagName("td")[2].querySelector("input").value;
    
    paintTable();
}

function deleteBook(e){//Hacer delete en booklist
    let tr = e.target.parentNode.parentNode;
    let keyBook = tr.getAttribute("id");
    booklist.delete(keyBook);

    paintTable();//la pinto de nuevo para que los nuevos indices de los libros se asignen bien a los tr
    //en lugar de borrar solo la fila
    setNumberOfRead();
    setPreviousNextBook();
}

function cleanForm(){
    title.value = "";
    genre.value = "";
    author.value = "";
    title.focus();
}

function finishBook(){
    
    if(booklist.booklist.length > 0 && (booklist.previousReadIndex != booklist.booklist.length-1 || booklist.previousReadIndex == 0)){
        //si no hay mas libros que no haga nada
        //que previous no sea el ultimo indice de booklist, menos en el primer caso
        //si solo hay uno, longitud de previous == 0. No afecta a la fecha ya que en el metodo se comprueba los read a false
        booklist.finishCurrentBook();
        paintTable();
        setNumberOfRead();
        setPreviousNextBook();
    }
}

///////////////////// APP
var booklist = new Booklist();

let divTable = document.getElementById("divTable");
let pRead = document.getElementById("numberRead");
let pNoRead = document.getElementById("numberNoRead");

let title = document.getElementById("title");
let genre = document.getElementById("genre");
let author = document.getElementById("author");
let previousBook = document.getElementById("previousBook");
let nextBook = document.getElementById("nextBook");

title.focus();

const btnAdd = document.querySelector("form input[type='submit']");
btnAdd.addEventListener("click",(e)=>{
    e.preventDefault();
    if(title.value == "" || genre.value == "" || author.value == ""){
        alert("Complete the text fields");
    }else{
        addBook(title.value,genre.value,author.value);
        cleanForm();
        setNumberOfRead();
    }
    
});
const btnRead = document.querySelector("#read");
btnRead.addEventListener("click",finishBook);

