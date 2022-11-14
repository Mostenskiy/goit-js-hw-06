const Numberofcategories = document.querySelectorAll('li.item');

console.log('Number of categories : ', Numberofcategories.length);

const category1 = Numberofcategories[0].firstElementChild;
console.log('Category : ' , category1.textContent);
const listAllels = category1.nextElementSibling;

const childoflist = listAllels.children.length;
console.log ('Elements : ', childoflist);

const category2 = Numberofcategories[1].firstElementChild;
console.log('Category : ' , category2.textContent);
const listAllels2 = category2.nextElementSibling;

const childoflist2 = listAllels2.children.length;
console.log ('Elements : ', childoflist2);

const category3 = Numberofcategories[2].firstElementChild;
console.log('Category : ' , category3.textContent);
const listAllels3 = category3.nextElementSibling;

const childoflist3 = listAllels3.children.length;
console.log ('Elements : ', childoflist3);
