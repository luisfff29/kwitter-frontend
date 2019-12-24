import Home from "./Home";
import Profile from "./Profile";
import MessageFeed from "./MessageFeed";
import NotFound from "./NotFound";
import CreateUser from "./CreateUser";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  NotFound: { path: "*", component: NotFound },
  CreateUser: { path: "/createuser", component: CreateUser },
  NotFound: { path: "*", component: NotFound }
};
