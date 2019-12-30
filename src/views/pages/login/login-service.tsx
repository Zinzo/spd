
const comfirmUser = (data:any):void => {
    const { path, history } = data;
    history.push(path);
}
  
export default comfirmUser;