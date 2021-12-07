class Booklist{
    constructor(){
        this.booklist = [];
        this.currentIndex = 0;
        this.previousReadIndex = 0;
    }
    numberRead(){
        let contRead = 0;
        for(let book of this.booklist)
            if(book.read)
                contRead ++;
        
        return contRead;
    }
    numberNoRead(){
        return this.booklist.length - this.numberRead();
    }
    add(objBook){
        this.booklist.push(objBook);
    }
    previousBook(){//el previous es el ultimo leido
        console.log("Dentro de previousBook el indice de previous es: "+this.previousReadIndex);

        /* if(this.previousReadIndex == this.booklist.length)
            return "There aren't any books read";
        else{
            for(let keyBook in this.booklist)
                if(this.booklist[keyBook].read)
                    this.previousReadIndex = keyBook;
            
            return this.booklist[this.previousReadIndex].title;
        } */
        let title = "There aren't any book read";
        
        for(let book of this.booklist){
            if(book.read){
                title = book.title;
            }
        }
        return title;
    }
    nextBook(){//desde el indice current hasta el primer read = false
        console.log("Dentro de nextBook el indice de current es: "+this.currentIndex);

        /* if(this.currentIndex == this.booklist.length)
            return "There aren't more books to read";
        else{
            for(let keyBook in this.booklist)
                if(!this.booklist[keyBook].read){
                    this.currentIndex = keyBook;
                    break;
                }
            
            return this.booklist[this.currentIndex].title;
        } */
        let title = "There aren't more books to read";

        for(let book of this.booklist){
            if(!book.read){
                title = book.title;
                break;
            }
        }
        return title;
    }
    delete(id){
        this.booklist.splice(id,1);
        this.currentIndex = 0;
        this.previousReadIndex = 0;
    }
    finishCurrentBook(){//al primero no leido see le pone read a true y se le asigna fecha
        for(let keyBook in this.booklist){
            if(!this.booklist[keyBook].read){
                this.booklist[keyBook].read = true;
                this.booklist[keyBook].readDate = new Date().toLocaleString();
                this.previousReadIndex = keyBook;
                this.currentIndex = parseInt(keyBook,10) + 1;
                //para que no se quede con el ultimo indice, sino con el primero
                //no leido
                break;
            }  
        }
                
    }
}

export{Booklist};