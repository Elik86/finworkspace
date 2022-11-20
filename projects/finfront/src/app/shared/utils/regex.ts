/* tslint:disable:max-line-length */
export const regex = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phone:
    /^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$/,
};

export const regexErrors = {
  email: 'Not a valid email address',
  phone: 'Not a phone from ukraine',
};
