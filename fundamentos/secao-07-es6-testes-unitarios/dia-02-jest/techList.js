function techList(techArray, name) {
    let orderedTech = techArray.sort();
    let result = [];
    if (techArray.length > 0 && name) {
      for (let tech of orderedTech) {
        let currentObj = {
          tech,
          name,
        };
        result.push(currentObj);
      }
    } else if (techArray.length === 0) {
      result = 'Vazio!';
    }
    return result;
  };

  module.exports = techList;