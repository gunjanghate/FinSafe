import {account} from "../../lib/appwrite";
import generateID from "../../utils/generateID";
import { redirect } from "react-router-dom";

const registerAction = async({request}) =>{
    const formData = await request.formData();
    try{
        await account.create(
            generateID(),
            formData.get('email'),
            formData.get('password'),
            formData.get('name'),
        );
    }catch(err){
        return {
            message: err.message,
        };
    }

    try{
        await account.createEmailPasswordSession(
            formData.get('email'),
            formData.get('password'),    
        );
    }catch(err){
        console.log(`Error creating Email session : ${err.message} `);  
        return redirect("/login");
    }

    return redirect('/');
};

export default registerAction;