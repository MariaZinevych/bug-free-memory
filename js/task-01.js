const categoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(function (element) {
  console.log(`Category:${element.firstElementChild.textContent} `);
  console.log(`Elements:${element.children[1].children.length}`);
});
