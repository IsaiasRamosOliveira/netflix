import { closeModal } from "../../utils/closeModal.js";
import { openModal } from "../../utils/openModal.js";

const members = document.querySelector("#members");
const data = [];

members.addEventListener("click", (e) => {
  const btn = e.target.getAttribute("class");
  const modal = members.querySelector(".modalMember__newMember");
  if (btn == "add__img") {
    openModal(members, ComponentModal, submitFormOfMember);
  }
  if (btn == "newMember__close") {
    closeModal(modal);
  }
  if (btn == "form__submitMember") {
    closeModal(modal);
  }
});

function ComponentModal() {
  return `
    <div class="modalMember">
      <div class="modalMember__newMember">
        <button class="newMember__close">X</button>
        <div class="newMember__profile">
          <form class="profile__form">
            <label class="form__url" for="url">
              <input class="url__img" type="text" name="url" id="url" placeholder="Enter URL" required/>
            </label>
            <button class="form__submitMember" type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  `;
}

function ComponentMember(url) {
  return `
      <li class="groupList__item">
        <a href="/" class="item__listLink">
          <picture class="listLink__pictures">
            <img
            class="pictures__profile"
            src="${url}"
            alt="profile picture"
            />
          </picture>
        </a>
      </li>
    `;
}

function submitFormOfMember() {
  const modal = document.querySelector(".modalMember");
  const form = document.querySelector(".form__submitMember");
  form.addEventListener("click", (e) => {
    e.preventDefault();
    const url = modal.querySelector("#url").value;
    data.push({ url });
    if (url === "") {
      alert("add a valid value");
      data.pop();
      return;
    }
    data.forEach((post) => {
      const member = document.querySelector(".members__groupList");
      member.innerHTML += ComponentMember(post.url);
    });
    data.pop();
  });
}
