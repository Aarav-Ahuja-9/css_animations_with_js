let button = document.querySelector('button');
let selectAnimationField = document.querySelector('#AnimationList');
let previewBox = document.querySelector('#PreviewBox');
// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(selectAnimation);
// })

button.addEventListener('click', (e) => {
    e.preventDefault();
    let vlaueOfSelectAnimation = selectAnimationField.value
    previewBox.setAttribute('class', "animate__animated",vlaueOfSelectAnimation);
    console.log(vlaueOfSelectAnimation);
    console.log(previewBox.classList);

}
);