import React from 'react';

export function displayMessage (props) {
    const {isSuccess, typeSuccess , errors} = props;
  
    
    if(isSuccess===true && typeSuccess === 'addDataSuccess'){
        return (<p>
          Рецепт добавлен. Спасибо!
      </p>)
    }
    else if(isSuccess===true && typeSuccess === 'deleteDataSuccess'){
        return (<p>
        Рецепт удален. Спасибо!
    </p>)
    }
    
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
    // if(errors.type === "addDataError" ){
    //     return (<p>
    //       Сообщение было отправлено с ошибками. 
    //       Обратитесь к администратору или попробуйте отправить еще раз
    //   </p>);
    // }
    // if(errors.type === "deleteDataError" ){
    //     return (<p>
    //       Рецепт не был удален 
    //       Обратитесь к администратору или попробуйте удалить еще раз
    //   </p>);
    // }
    // if(errors.type === "fetchDataError" ){
    //     return (<p>
    //      Рецепты не были получены
    //       Обратитесь к администратору или попробуйте еще раз
    //   </p>);
    // }
}