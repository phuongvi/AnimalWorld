import {DefaultLayout} from './layout/defaultLayout'
import { Route, Switch, Redirect } from "react-router-dom";
import {Permission} from './pages/login_register/index'
import {Results} from './pages/results/index'
import {Detail} from './pages/detail/index'
import {HomePage} from './pages/home/mainHome'
import {Posting} from './pages/posting/index'
import {ManagePosts} from "./pages/dashboard/posts"
import {ManageAccount} from './pages/dashboard/profile'
import SetProFile from './pages/dashboard/setting/index'
function App() {
  return (
    <DefaultLayout>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" component={HomePage} />
        <Redirect exact path="/" to="/detail" />
        <Route path="/detail/:idMotel" component={Detail} />
        <Redirect exact path="/" to="/result" />
        <Route path="/result" component={Results} />
        <Redirect exact path="/" to="/permission" />
        <Route path="/permission" component={Permission} />
        <Redirect exact path="/" to="/manage/account" />
        <Route path="/manage/account" component={ManageAccount} />
        <Redirect exact path="/" to="/manage/posts" />
        <Route path="/manage/posts" component={ManagePosts} />
        {/* <Redirect exact path="/" to="/profile" /> */}
        <Redirect exact path="/" to="/setting" />
        <Route path="/setting" component={SetProFile} />


        {/* <ProtectedRoute path="/profile/edit" component={EditProfile} />
        <ProtectedRoute path="/profile/index" component={ListRoom} /> */}

        {/* <Redirect exact path="/" to="/posting" /> */}

        <Redirect exact path="/" to="/posting" />
        <Route path="/posting" component={Posting} />

        {/* <Redirect exact path="/" to="/update/post/:idPost" />
        <ProtectedRoute path="/update/post/:idPost" component={Posts} /> */}
      </Switch>
    </DefaultLayout>
  );
}

export default App;