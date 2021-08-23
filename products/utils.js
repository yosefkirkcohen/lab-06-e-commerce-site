function renderItem(cereal) {
    const li = document.createElement('li');
    const cerealName = document.createElement('h3');
    const image = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');

    li.append(cerealName, image, description, price);
    cerealName.textContent = cereal.name;
    image.src = cereal.image;
    description.textContent = cereal.description;
    price.textContent = cereal.price;

    return li;
}
