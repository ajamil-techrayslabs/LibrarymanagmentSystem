
import { StoreDataToLocalStorage,getUserByUserId,getUserByUserEmailId,getAllBooks,getBookByBookId,getRoleByRoleId, getAllBookDetailByBookId} from "./api-layer.js"
import { loadComponent } from "./layout.js";

loadComponent("navbar","../../../frontend/src/components/landingNavbar.html")
loadComponent("sidebardiv","../../../frontend/src/components/landingSideBar.html")

StoreDataToLocalStorage()

// const user=getUserByUserId(1)
// console.log(user);
// const user=getUserByUserEmailId("rahul@gmail.com")
// console.log(user);
// getAllBooks()
// const specificBoot=getBookByBookId(2)
// console.log(specificBoot);
// const specificRole=getRoleByRoleId(1);
// console.log('okau');
// console.log(specificRole);

const books=getAllBooks();
const tbody=document.querySelector("tbody");

const combineAuthorsName=(authors:Array<object>)=>{
    return authors.map(author=>author.name).join(',')
}

books.forEach((element: object,index:number) => {
    // console.log(index)
    // const parsedElement=JSON.parse(element)
    // console.log(element);
    let allDetailOfABook=getAllBookDetailByBookId(element.id);
    const row:HTMLTableRowElement = document.createElement("tr");
    row.style.height='50px'
    row.id=index.toString();
    row.innerHTML = `
     <td>${allDetailOfABook.id}</td>
                    <td>${allDetailOfABook.title}</td>
                    <td>${allDetailOfABook.category.name}</td>
                    <td>${combineAuthorsName(allDetailOfABook.authors)}</td>
                    <td>&#8377; ${allDetailOfABook.pricePerWeek}</td>
                    <td>${allDetailOfABook.publishYear}</td>
                     <td>${allDetailOfABook.publisher.name}</td>
            <button id=${index}
                class="edit px-2 py-1 border border-gray-400 rounded-md bg-gray-300 text-sm hover:cursor-pointer active:bg-gray-500 mt-2">
                <i class="fa-regular fa-eye"></i>
            </button>
            
                        `
                       
    tbody?.appendChild(row)
    // console.log(parsedElement);
});







