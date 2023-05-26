const list = document.querySelector("#list");
const dropdown = document.querySelector("#dropdown");
const button = document.querySelector("#toggle-dropdown");

function toggleDropdown() {
  dropdown.classList.toggle("hidden");
}

button.addEventListener("click", toggleDropdown);

async function fetchData() {
  const response = await fetch(
    "https://voodoo-sandbox.myshopify.com/products.json?limit=12"
  );
  const data = await response.json();
  return data.products;
}

async function createMarkup() {
  const data = await fetchData();
  const markup = data
    .map((element) => {
      return `
      <li class="mb-12 relative tablet:w-[348px] desktop:w-[300px]">
        <img src="${element.images[0].src}" alt="image" class="w-[100%]">
        <div class="uppercase absolute top-3 left-3 text-[12px] pl-2 pr-2 bg-black text-white rounded">Used</div>
        <div class="flex justify-between mb-3">
          <div class="flex flex-col">
            <p class="text-[14px] desktop:text-[12px] font-bold">${element.title}</p>
            <p class="text-[14px] desktop:text-[12px] font-bold">${element.variants[1].price} KR</p>
          </div>
          <div class="flex flex-col">
            <p class="text-[14px] desktop:text-[12px] ml-auto">Condition</p>
            <p class="text-[14px] desktop:text-[12px]">Slightly used</p>
          </div>
        </div>
        <button type='button' class="w-[100%] h-[42px] bg-black rounded text-white uppercase text-[14px] xl:hidden">Pick up in <span class="underline">2000</span></button>
      </li>`;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}

createMarkup();
