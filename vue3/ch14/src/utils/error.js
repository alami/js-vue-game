const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'нет пользовательской записи',
    INVALID_PASSWORD: 'пароль недействителен',
    USER_DISABLED: 'учетная запись пользователя отключена',
    auth: 'Пожалуйста войдите в систему'
}
export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'неизвестная ошибка'
}