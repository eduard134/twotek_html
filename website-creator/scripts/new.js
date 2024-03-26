title = document.getElementById("title")
text = document.getElementById("text")
image = document.getElementById("image")
form = document.getElementById("form")
button = document.getElementById("button")
list = document.getElementById("list")
spacer = document.getElementById("spacer")
divider = document.getElementById("divider")

main = document.getElementById("new")

title.addEventListener("click", addTitle);
text.addEventListener("click", addText);
image.addEventListener("click", addImage);
form.addEventListener("click", addForm)
button.addEventListener("click", addButton)
list.addEventListener("click", addList)
spacer.addEventListener("click", addSpacer)
divider.addEventListener("click", addDivider)




function addTitle() {
    main.innerHTML += `
    <h1>title</h1>
    `
}

function addText() {
    main.innerHTML += `
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi sit amet neque facilisis porta. Nullam tristique, neque rhoncus ullamcorper rutrum, mi nisl varius eros, eleifend fermentum diam nulla a orci. Phasellus finibus, massa quis interdum sagittis, dolor turpis rhoncus leo, a cursus dolor felis eget nisl. Sed dapibus hendrerit est. Quisque erat ipsum, mollis sit amet molestie non, semper sit amet risus. In lacus ipsum, commodo sit amet massa vitae, ullamcorper auctor nibh.</div>
    `
}

function addImage() {
    main.innerHTML += `
    <img src="/website-creator/images/notLoaded.jpg" width="300px" >
    `
}

function addForm() {
    main.innerHTML += `
    <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 
    `
}

function addButton() {
    main.innerHTML += `
    <button type="button" onclick="alert('Hello world!')">Click Me!</button>
    `
}

function addList() {
    main.innerHTML += `
    <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>  

    `
}

function addSpacer() {
    main.innerHTML += `
    <div style="height: 150px;"></div>
    `
}

function addDivider() {
    main.innerHTML += `
    <hr/>
    `
}
