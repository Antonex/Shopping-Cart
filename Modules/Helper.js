export const select = el => document.querySelector(el);
export const create = el => document.createElement(el);

export const Card = ({ name, price, id, btnName, btnEvent }) => {
  const div = create('div');
  div.className = 'card';

  const itemName = create('h1');
  const itemId = create('p');
  const button = create('button');
  const itemPrice = create('h1');

  itemName.innerText = name;
  itemPrice.innerText = price;
  itemId.innerText = id;
  button.innerText = btnName;
  itemId.className = 'itemId';

  button.addEventListener('click', () => btnEvent(id));

  div.append(itemName);
  div.append(itemPrice);
  div.append(itemId);
  div.append(button);

  return div;
};
