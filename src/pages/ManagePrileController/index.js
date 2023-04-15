import ManageProfile from "../ManageProfile";


export const ManageProfileController = () => {
const {sendData, url} = ManageProfile();
console.log('controller', url);
return {
    getController: {
        sendData,
        url,
    }
}

}