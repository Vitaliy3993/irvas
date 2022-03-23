import checkNumInputs from "./checkNumInputs";
import modals from "./modals";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox'),
          nextBtn = document.querySelector('.popup_calc_button');

    windowProfile[0].setAttribute("checked", "");

    nextBtn.disabled = true;
         
    document.querySelectorAll('.popup_calc_content input').forEach(item => {
        item.style.borderColor = "rgb(255, 107, 107)";

        item.addEventListener('input', () => {
            if (windowWidth[0].value !== '' && windowHeight[0].value !== '') {
                nextBtn.disabled = false;
            } else {
                nextBtn.disabled = true;
            }

            if (item.value === '') {
                item.style.borderColor = "rgb(255, 107, 107)";
            } else {
                item.style.borderColor = "";
            }

        });
    });

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElements (event, elem, prop) {
        elem.forEach((item, i) => {  
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }

    bindActionToElements('click', windowForm,'form');
    bindActionToElements('input', windowHeight,'height');
    bindActionToElements('input', windowWidth,'width');
    bindActionToElements('change', windowType,'type');
    bindActionToElements('change', windowProfile,'profile');


};

export default changeModalState;