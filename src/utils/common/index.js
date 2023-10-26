
/** 
* @description null undefine '' [] {} 都返回true
* @param  value
* @return {boolean} 
*/
export const isBlank = (value) => {
  if (typeof value === 'number') {
    return Number.isNaN(value);
  }
}

/** 
* @description null undefine '' Nan都返回true
* @param  value
* @return {boolean} 
*/
export function isRelNull(value) {
  return value === null || value === undefined || String(value).trim() === '' || Number.isNaN(value);
}