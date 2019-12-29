import Home from "./Home";
import Profile from "./Profile";
import MessageFeed from "./MessageFeed";
import CreateUser from "./CreateUser";
import Feed from "./Feed";
import NotFound from "./NotFound";


export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  CreateUser: { path: "/createuser", component: CreateUser },
  Feed: { path: "/feed", component: Feed },
  NotFound: { path: "*", component: NotFound }
};
