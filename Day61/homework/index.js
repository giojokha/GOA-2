function isTeenager(age, hasPermission) {
    if (age < 18) {
        return true;
    }
    else if (age === 18) {
        return hasPermission;
    }
    else {
        return false;
    }
}

console.log(isTeenager(17, true));   
console.log(isTeenager(17, false));  
console.log(isTeenager(18, true));   
console.log(isTeenager(18, false));  
console.log(isTeenager(19, true));   
console.log(isTeenager(19, false));  