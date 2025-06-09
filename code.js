let list1 = [["https://en.wikipedia.org/wiki/C%2B%2B","images/c.webp"],
                ["https://ru.wikipedia.org/wiki/Java","images/java.svg"],
                ["https://ru.wikipedia.org/wiki/C_Sharp","images/cs.png"],
                ["https://ru.wikipedia.org/wiki/Python","images/python.png"],
                ["https://ru.wikipedia.org/wiki/JavaScript","images/js.webp"]];
const renderItem = (item1, item2) => {
    const listElement = document.createElement('li');
    listElement.innerHTML = `<a href=${item1}><img class="plimg" src=${item2}></a>`;
    return (listElement);
}
const renderList = (element, list) => {
    const listElement = document.createElement('ul');
    const completeListElement = list.reduce((listElement, item) => {
        listElement.appendChild(renderItem(item[0], item[1]));
        return listElement;
    }, listElement);
    element.appendChild(completeListElement)
}
