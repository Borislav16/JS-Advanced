import {cats} from "./catSeeder.js";
import {html, render} from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById("allCats");

render(createListOfCatTemp(), root);

function createListOfCatTemp() {
    return html `
        <ul>
            ${cats.map((cat, i) => createCatTemp(cat))}
        </ul>
    `
}

function createCatTemp(cat) {
    return html `<li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click=${ToggleStatus}>Show status code</button>
                    <div class="status" style="display: none" id=${cat.id}>
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>`
}

function ToggleStatus(e) {
    const btn = e.target;
    const parent = btn.parentElement;
    const div = parent.querySelector("div");
    const currentState = div.style.display;

    if (currentState === "block") {
        div.style.display = "none";
        btn.textContent = "Show status code";
    } else {
        div.style.display = "block";
        btn.textContent = "Hide status code";
    }
}