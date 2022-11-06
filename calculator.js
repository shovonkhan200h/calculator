    //Getting DOM
    const screenElement = document.querySelector(`.screen`);
    const buttons = document.querySelectorAll(`.btn`);
    const clearButton = document.querySelector(`.clear`);
    const equalButton = document.querySelector(`.btn-equal`);
    //
        buttons.forEach((button)=>{
            button.addEventListener(`click`, (e)=>{
                let value = e.target.dataset.num;
                screenElement.value += value;
                
            });
        });
        
        equalButton.addEventListener(`click`, (e)=>{
            if(screenElement.value === ``){
                screenElement.value=``;
            }else{
                let answer= eval(screenElement.value);
                screenElement.value=answer;
            };
        });
        clearButton.addEventListener(`click`, (e)=>{
            screenElement.value='';
        })
