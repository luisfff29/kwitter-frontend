import Home from "./Home";
import Profile from "./Profile";
import MessageFeed from "./MessageFeed";
import CreateUser from "./CreateUser";
import Feed from "./Feed";
import Users from "./Users";
import NotFound from "./NotFound";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  CreateUser: { path: "/createuser", component: CreateUser },
  Feed: { path: "/feed", component: Feed },
  Users: { path: "/users", component: Users },
  NotFound: { path: "*", component: NotFound },
};
