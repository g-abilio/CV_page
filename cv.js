// functions that changes the page's language

function change_to_portuguese_page() {
    window.location.href = "cv_portuguese.html";
}

function change_to_english_page() {
    window.location.href = "cv.html";
}

function already_in_english_page() {
    alert("You are already in the english page!");
}

function already_in_portuguese_page() {
    alert("Você já está na página em português!");
}

// functions for the pop up

function welcome_en() {
    alert("Welcome to Gabriel's Curriculum Vitae!");
}

function welcome_pt_br() {
    alert("Seja bem vindo ao Curriculum Vitae de Gabriel!");
}

// function for the slider

function showColumn(value) {
    const columns = ["col_2022", "col_2023", "col_2024"];
    const infos = ["info_2022", "info_2023", "info_2024"];

    // hide all columns
    for (var i = 0; i < columns.length; i++) {
        document.getElementById(columns[i]).style.display = "none";
        document.getElementById(infos[i]).style.display = "none";
    }

    // show the selected column and make it bold
    document.getElementById(columns[value]).style.display = "table-cell";
    document.getElementById(infos[value]).style.display = "table-cell";
    document.getElementById(columns[value]).className = "th_new";
    document.getElementById(infos[value]).className = "td_new";
}