
import { servicesData } from "../../../../serviceData";


export default function handler(req, res){
    res.status(200).json(servicesData);
}