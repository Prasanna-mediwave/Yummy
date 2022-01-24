mtUpdate.addEventListener("change", function (event) {
  console.log("Working------------->");
  // uploaded_image = this.files[0];
  imgurl = event.target.files[0].name;
  document.getElementById("RecipeImg").value = imgurl;
  path = document.getElementById("mtUpdate").value;
  console.log(path);
  console.log(imgurl);
  //let inpurl = webkitURL(inp);
  if (imgurl) {
    console.log(imgurl);
  } else {
    console.log("Working but file not uploaded");
  }
});
