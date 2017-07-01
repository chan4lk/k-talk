let getCommonBrands = (userBrands, currentBrands) => {
    return null;
};

getCommonBrands = (userBrands, currentBrands) => {
    return [];
};

getCommonBrands = (userBrands, currentBrands) => {
    if(userBrands === null)
        throw new Error('user brands cannot be null');

    if(currentBrands === null)
        throw new Error('current brands cannot be null');
       
    return [];
};

/**
 * 
 * 
 * @param {string[]} userBrands 
 * @param {string[]} currentBrands 
 * @returns 
 */
getCommonBrands = (userBrands, currentBrands) => {
    if(userBrands === null)
        throw new Error('user brands cannot be null');

    if(currentBrands === null)
        throw new Error('current brands cannot be null');

    let currentBrandsasList = getCurrentBrandsAsList(currentBrands);
    let common = [];

    currentBrandsasList.forEach((currentBrand) =>{
        let isCurrentBrandCommon = userBrands.filter(userBrand => currentBrand === userBrand);
        if(isCurrentBrandCommon.length > 0)
            common.push(currentBrand);       
    });

    return common;
};

let getCurrentBrandsAsList = (currentBrands) => {
    return [];
};

/**
 * Get Current Brands
 * 
 * @param {string} currentBrands 
 * @returns {string[]} brands
 */
getCurrentBrandsAsList = (currentBrands) => {

    if(currentBrands.length > 0){        
        return ['toyota'];
    }

    return [];
};

/**
 * Get Current Brands
 * 
 * @param {string} currentBrands 
 * @returns {string[]} brands
 */
getCurrentBrandsAsList = (currentBrands) => {

    if(currentBrands.length > 0){
        let brands = currentBrands.split(',');
        return brands;
    }

    return [];
};


/**
 * Get Current Brands
 * 
 * @param {string} currentBrands 
 * @returns {string[]} brands
 */
getCurrentBrandsAsList = (currentBrands) => {

    if(currentBrands.length > 0){
        let brands = currentBrands.split(',').map((brand) => brand.trim());
        return brands;
    }

    return [];
};