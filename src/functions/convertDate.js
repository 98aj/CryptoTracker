export const convertDate = (number)=>{
    let value = new Date(number);
    
    return value.getDate() +`/`+ (value.getMonth()+1)
}