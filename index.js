// JSON.stringify & JSON.parse

// const user = {
//     name: 'Mike',
//     surname: 'Smith',
//     age: 18
// }
//
// const stringifiedUser = JSON.stringify(user);
// const userDataFromJSON = JSON.parse(stringifiedUser);
// console.log(userDataFromJSON)

// Web storage API

// const LOCAL_STORAGE_KEY = 'comment-last-page';
//
// // localStorage.setItem('current-name', 'John');
// localStorage.setItem(LOCAL_STORAGE_KEY, 'Wow! Its amazing stuff, I would like ...');
//
// const lastCommentFromUser = localStorage.getItem(LOCAL_STORAGE_KEY) || '';
// console.log(lastCommentFromUser)
//
// console.log(localStorage);

// const LOCAL_STORAGE_KEY = 'value-input';
// const input = document.querySelector('#value-input');
//
// const valueFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

// if (valueFromLocalStorage) {
//     // const lastSavedValueHTML = `<h3 style="color: green">Saved value last time: ${valueFromLocalStorage}</h3>`;
//     // input.insertAdjacentHTML('afterend', lastSavedValueHTML);
//     input.value = valueFromLocalStorage;
// }
//
// input.addEventListener('input', () => {
//     const inputValue = input.value;
//     localStorage.setItem(LOCAL_STORAGE_KEY, inputValue);
// })

// const user = {
//     name: 'John',
//     sayHello: 5
// }
// try {
//     user.sayHello();
// } catch (e) {
//     console.error('ERROR WAS HAPPENED :( ' + e.message);
// }



// code from lection

const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error('Get state error: ', error.message);
    }
};

const contactFormEl = {}
const userInfo = {};
localStorage.setItem('userInfo', JSON.stringify({}));

const fillFormFields = () => {
    const formDataFromLS = null;
    debugger
    for (const prop in formDataFromLS) {
        if (formDataFromLS.hasOwnProperty(prop)) {
            contactFormEl.elements[prop].value = formDataFromLS[prop];
        }
    }
};

fillFormFields();

// const onFormChange = e => {
//     const { target } = e;
//     const fieldName = target.name;
//     const fieldValue = target.value;
//     userInfo[fieldName] = fieldValue;
//     // localStorage.setItem('userInfo', JSON.stringify(userInfo));
//     storageService.save('userInfo', userInfo);
// };
//
// const onFormSubmit = e => {
//     e.preventDefault();
//
//     // localStorage.removeItem('userInfo');
//     storageService.remove('userInfo');
//     contactFormEl.reset();
// };
//
// contactFormEl.addEventListener('change', onFormChange);
// contactFormEl.addEventListener('submit', onFormSubmit);
