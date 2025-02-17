const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/first-website/images/0.png") {
    myImage.setAttribute("src", "/first-website/images/pngwing.com (1).png");
  } else {
    myImage.setAttribute("src", "/first-website/images/0.png");
  }
};
