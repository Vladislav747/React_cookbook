import React from 'react';

export function displayMessage (props) {
    const {isSuccess, typeSuccess , errors} = props;
  
    var str;

    if(isSuccess===true){ 
    if(typeSuccess === 'addDataSuccess'){
        str = "Рецепт добавлен. Спасибо!";
       
    }
    else if(typeSuccess === 'deleteDataSuccess'){
        str = "Рецепт удален. Спасибо!";
        }
    }
    else{
    switch (errors.type) {
        case "addDataError" :
        str = "Сообщение было отправлено с ошибками.Обратитесь к администратору или попробуйте отправить еще раз";
            break;

         case "deleteDataError" :
         str = "Рецепт не был удален. Обратитесь к администратору или попробуйте удалить еще раз";
         break;

        case "fetchDataError" :
         str = "Рецепты не были получены. Обратитесь к администратору или попробуйте еще раз";
         break;

        default:
            break;
    }
}

return str;
}