import React from 'react';

export function displayMessage (props) {
    const {isSuccess, typeSuccess , errors} = props;
  
    var str;

    if(isSuccess===true){ 
    if(typeSuccess === 'addDataSuccess'){
        str = "Рецепт добавлен. Спасибо!";
        return str;
    }
    else if(typeSuccess === 'deleteDataSuccess'){
        str = "Рецепт удален. Спасибо!";
        return str;
        }
    }
    else{
    switch (errors.type) {
        case "addDataError" :
        return (<p>
            Сообщение было отправлено с ошибками. 
            Обратитесь к администратору или попробуйте отправить еще раз
        </p>);
         case "deleteDataError" :
         return (<p>
            Рецепт не был удален 
            Обратитесь к администратору или попробуйте удалить еще раз
        </p>);  
        case "fetchDataError" :
        return (<p>
            Рецепты не были получены
             Обратитесь к администратору или попробуйте еще раз
         </p>);
        default:
            break;
    }
}
}