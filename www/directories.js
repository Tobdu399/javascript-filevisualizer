let directory;
let directories = [
    "/dir/a",
    "/dir/b",
    "/dir/c",
    "/root",
]

// Create an ul of the available directories
function Directory(index) {
    let ul = document.getElementById("dropdown-menu");
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(directories[index]));
    li.setAttribute("id", index);
    ul.appendChild(li);

    document.getElementById(index).onclick = () => {
        changeDir(directories[index]);
    }
}

// Show available directories
function showDir() {
    let i;

    for (i=0; i<directories.length; i++) {
        new Directory(i);
    }
}

// Change directory
function changeDir(target) {
    // TODO: check if given directory (target) exist
    if (target != null) {
        directory = target;

        // TODO: count files with node
        filesAmount = Math.floor(Math.random() * maxAmount)+1;
    } else {
        directory = "none"; filesAmount = "none";
    }

    document.getElementById("directory").innerHTML = directory
    document.getElementById("files-amount").innerHTML = filesAmount;
}