/**
 * @param {递归根据id获取对应项的值}
 * @param {*查找的数据} data
 * @param {*需要查找的id} arr
 */
const getIndustry = (data, arr) => {
  let city = [];
  let flage = 0;
  if (data && data.length > 0) {
    for (const item of data) {
      if (item.id === arr[flage]) {
        city.push(item.label);
        flage++;
        if (item.childern && item.childern.length > 0) {
          (function fn() {
            const obj = arguments[0];
            for (const item of obj) {
              if (item.id === arr[flage]) {
                flage++;
                city.push(item.label);
                if (item.childern && item.childern.length > 0) {
                  return fn(item.childern, arr); // 递归查找
                }
              }
            }
          })(item.childern, flage);
        }
      }
    }
  }
  return city;
};
export default getIndustry;
