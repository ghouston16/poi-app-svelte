import { writable } from "svelte/store";

export let mainBar = [
  {
    title: "Create A Poi",
    icon: "fas fa-map-marker-alt fa-2x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/create",
  },
  {
  title: "Pois",
  icon: "fas fa-th-list fa-2x",
  colour: "color:rgb(63, 122, 139)",
  link: "/#/pois",
}, {
  title: "Categories",
  icon: "fas fa-folder fa-2x",
  colour: "color:rgb(14, 168, 160)",
  link: "/#/categories",
},
{
  title: "Donation Map",
  icon: "fas fa-map-marked-alt fa-3x",
  colour: "rgb(102, 153, 255)",
  link: "/#/Map",
},
{
  title: "Settings",
  icon: "fas fa-user fa-2x",
  colour: "color:rgb(150,19,210)",
  link: "/#/settings",
},{
  title: "Logout",
  icon: "fas fa-sign-out-alt fa-2x",
  colour: "color:rgb(224,15,15)",
  link: "/#/logout",
}];

export const welcomeBar = [
  {
    title: "Sign Up",
    icon: "fas fa-user-cog fa-3x",
    colour: "color:rgb(63, 160, 155)",
    link: "/#/signup",
  },
  {
    title: "Log In",
    icon: "fas fa-user-edit fa-3x",
    colour: "color:green",
    link: "/#/login",
  },
];

export const navBar = writable({
  bar: [],
});
export const user = writable({
  email: "",
  token: "",
 /* firstName: "",
  lastName: "",
  password: ""

*/
});
export const poi = writable({
        name: "",
        description: "",
        category: "",
        lat: "",
        long: "",
        creator: "",
        image: ""
});
export const category = writable({
  name: "",
  _id: "",
});

export const title = writable("");
export const subTitle = writable("");