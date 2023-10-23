const body = document.querySelector("body");
let modalBackdrop;
let modal;
let cancel;
let confirm;

const createModalBackdrop = () => {
    modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal__backdrop');
};

const createModal = question => {
    modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <p>${question}</p>
    `;
    cancel = document.createElement('button');
    cancel.innerText = 'Cancel';
    cancel.classList.add('btn', 'btn-secondary');
    confirm = document.createElement('button');
    confirm.innerText = 'Confirm';
    confirm.classList.add('btn', 'btn-primary');
    modal.addEventListener('click', event => event.stopPropagation());
    modal.append(cancel, confirm);
};

export function openModal(question) {
    createModalBackdrop();
    createModal(question);

    modalBackdrop.append(modal);
    body.append(modalBackdrop);

    return new Promise((resolve, reject) => {
        modalBackdrop.addEventListener('click', () => {
            resolve(false);
            modalBackdrop.remove();
        });
        cancel.addEventListener('click', () => {
            resolve(false);
            modalBackdrop.remove();
        });
        confirm.addEventListener('click', () => {
            resolve(true);
            modalBackdrop.remove();
        });
    });
}