import { Company } from "./Company";
import { User } from "./User";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

// type OO = User | Company;
// let obj: OO = {companyName: "a", catchPhrase: "100", location: {
//     lat: 10,
//     lng: 20
// }}

const customMap = new CustomMap("#map");

customMap.addMarker(user);
customMap.addMarker(company);
