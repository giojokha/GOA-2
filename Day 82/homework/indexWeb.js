document.getElementById('addinganElement').addEventListener('click', function() {
    const elementName = prompt("Enter The Element Name:");
    if (elementName) {
        const newElement = document.createElement('div');
        newElement.textContent = elementName;
        newElement.style.border = "1px solid #ccc";
        newElement.style.padding = "10px";
        newElement.style.margin = "10px 0";
        document.getElementById('elementDiv').appendChild(newElement);
    }
});
