import { writable } from "svelte/store";

export let mainBar = [
  {
    title: "Create A Poi",
    icon: "fas fa-hand-holding-usd fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/create",
  },
  {
    title: "Pois so far",
    icon: "fas fa-th-list fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/pois",
  },
  {
  title: "Pois",
  icon: "fas fa-hand-holding-usd fa-3x",
  colour: "color:rgb(153, 196, 74)",
  link: "/#/pois",
}, {
  title: "Categories",
  icon: "fas fa-clipboard-list fa-3x",
  colour: "color:rgb(63, 122, 139)",
  link: "/#/categories",
},{
  title: "Logout",
  icon: "fas fa-sign-out-alt fa-3x",
  colour: "color:rgb(156, 70, 128)",
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
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  _id: ""
});

export const title = writable("");
export const subTitle = writable("");