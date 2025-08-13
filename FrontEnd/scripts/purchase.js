const form=document.getElementById('purchase-form');
const name=document.getElementById('name');
const email=document.getElementById('email');
const address=document.getElementById('address');
const quantity=document.getElementById('quantity');
const msg=document.querySelector('.msg');
const book=document.getElementById('book');

const booklist=['The Great Gatsby','1984','To Kill a Mockingbird','The Hobbit','Pride and Prejudice','Harry Potter']

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(name.value==='' || email.value==='' || address.value==='' || quantity.value==='' || book.value==='' ||
        (!booklist.includes(book.value)))
    {
        msg.style.color='red';
        msg.textContent = 'Please fill out all fields.';
    }
    else
    {
        msg.style.color = 'green';
        msg.textContent = `Thank you ${name.value}! Your order for "${book.value}" has been placed.`;

        name.value = '';
        address.value = '';
        book.value = '';
    }
});