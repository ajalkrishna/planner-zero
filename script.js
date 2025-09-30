const taskSubmitBtn = document.getElementById("task_btn");
const newPlan = document.getElementById("plan");
const planSection = document.getElementById("plans_section_content");
const nothingMsg = document.getElementById("nothing_msg");

const plansArray = [];
let idArray = []
taskSubmitBtn.addEventListener('click', (event) => {
    if (!newPlan.value?.trim() {
        return
    }
    plansArray.push(newPlan.value)
    insertContent();
    newPlan.value = '';
})

function handleDeleteClick(event) {
    const identifier = event.target.id;
    plansArray.splice(idArray.indexOf(identifier), 1);
    insertContent();
    if (!plansArray.length) {
        planSection.innerHTML = `<p id="nothing_msg">Nothing for today</p>`
    }
}

function insertContent() {
    let displayContent = ''
    idArray = [];
    plansArray.forEach((each, index) => {
        displayContent += `
        <div class="each_task">
               <h5 class="task_title">${index + 1}. ${each}</h5>
        <button id="delete_btn_${index}">Delete</button>
            </div>
        `
        idArray.push(`delete_btn_${index}`)

    })
    planSection.innerHTML = displayContent
    plansArray.forEach((val, index) => {
        document.getElementById(`delete_btn_${index}`).addEventListener('click', (index) => handleDeleteClick(index))
    });
}
