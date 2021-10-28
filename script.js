const tagEl = document.getElementById('tags');
const textareaEl = document.getElementById('textarea');

textareaEl.focus();

const createTags = (input) => { 
    const tags = input.split(',').filter((val) => val.trim() !== '').map((tag) => tag.trim());
    tagEl.innerHTML = '';
    tags.forEach((val) => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = val;
        tagEl.appendChild(tag);
    })
};

const highlight = (tag) => {
    tag.classList.add('highlight')
};

const pickRandomTag = () => {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

const unhighlight = (tag) => {
    tag.classList.remove('highlight')
};

const randomSelect = () => {
    const time = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlight(randomTag)
        setTimeout(() => {
            unhighlight(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        const randomTag = pickRandomTag();
        highlight(randomTag);
    }, time * 100);
};


textareaEl.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomSelect();
    }
});


// const randomSelect = () => {
//     const times = 30;
//     const interval = setInterval(() => {
//         const randomTag = pickRandomTag();
//         highlight(randomTag);

//         setTimeout(() => {
//             unhighlight(randomTag);
//         }, 100);
//     }, 100);

//     setTimeout(() => {
//         clearInterval(interval);
//         setTimeout(() => {
//             const randomTag = pickRandomTag();
//             highlight(randomTag);
//         }, 100);
//     }, times * 100);
// }
// textareaEl.addEventListener('keyup', (e) => {
//     createTags(e.target.value)
//     if(e.key === 'Enter') {
//         setTimeout(() => {
//             e.target.value = '';
//         }, 10)
//         randomSelect();
//     }
// });

// const pickRandomTag = () => {
//     const tags = document.querySelectorAll('.tag');
//     return tags[Math.floor(Math.random() * tags.length)];
// };

// const highlight = (tag) => {
//     tag.classList.add('highlight');
// }

// const unhighlight = (tag) => {
//     tag.classList.remove('highlight')
// }