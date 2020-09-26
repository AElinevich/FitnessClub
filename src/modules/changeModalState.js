const changeModalState = (state) => {
    const time = document.querySelectorAll('.time label'),
          timeInputs = document.querySelectorAll('.input-text input'),
          club = document.querySelectorAll('.club input');

function bindActionToElems (event, elem, prop) {
    elem.forEach((item) => {
        item.addEventListener(event, () => {
            state[prop] = item.textContent || item.value;
        })
    })
}
bindActionToElems('click', time, 'limit');
bindActionToElems('change', club, 'club');
bindActionToElems('change', timeInputs, 'info');

};

export default changeModalState;