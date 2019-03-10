import React from 'react';

export function displayMessage (props) {
    const {isSuccess, typeSuccess , errors} = props;
  
    if(isSuccess===true && typeSuccess === 'addDataSuccess'){
        return (<p>
          Рецепт добавлен. Спасибо!
      </p>)
    }
    if(isSuccess===true && typeSuccess === 'deleteDataSuccess'){
        return (<p>
        Рецепт удален. Спасибо!
    </p>)
    }
    if(errors.type === "addDataError" ){
        return (<p>
          Сообщение было отправлено с ошибками. 
          Обратитесь к администратору или попробуйте отправить еще раз
      </p>);
    }
    if(errors.type === "deleteDataError" ){
        return (<p>
          Рецепт не был удален 
          Обратитесь к администратору или попробуйте удалить еще раз
      </p>);
    }
    if(errors.type === "fetchDataError" ){
        return (<p>
         Рецепты не были получены
          Обратитесь к администратору или попробуйте еще раз
      </p>);
    }
}