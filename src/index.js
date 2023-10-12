console.log(history); // History {}

const backButton = document.querySelector('#back');
const nextButton = document.querySelector('#next');

backButton.addEventListener('click', () => {
    history.back();
});

nextButton.addEventListener('click', () => {
    history.forward()
});

// history.go(5); // = .forward x5
// history.go(-5); // = .back x5
