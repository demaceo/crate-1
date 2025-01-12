// App Imports
import Login from "../../modules/user/Login";
import Signup from "../../modules/user/Signup";
import Profile from "../../modules/user/Profile";
import Subscriptions from "../../modules/user/Subscriptions";
import Preferences from "../../modules/user/Preferences";

// User routes
export default {
  login: {
    path: "/user/login",
    component: Login,
  },

  signup: {
    path: "/user/signup",
    component: Signup,
  },

  profile: {
    path: "/user/profile",
    component: Profile,
    auth: true,
  },

  subscriptions: {
    path: "/user/subscriptions",
    component: Subscriptions,
    auth: true,
  },

  preferences: {
    path: "/style-preferences",
    component: Preferences,
    auth: true,
  },
};

// Here is where we will add our "/style-preferences" route
