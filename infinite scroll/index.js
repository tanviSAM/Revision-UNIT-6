const createData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const arr = Array(25).fill(1);
      resolve(arr);
    }, 200);
  });
};

const getData = async () => {
  const data = await createData();
  appendData(data);
};

getData();
//append data to get output
const appendData = (arr) => {
  arr.forEach(() => {
    const content = document.createElement("p");
    const txt = document.createTextNode("Hello World");
    content.appendChild(txt);
    document.getElementById("container").appendChild(content);
  });
};

window.addEventListener("scroll", () => {
  const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
  if (clientHeight + scrollTop >= scrollHeight) getData();
});
