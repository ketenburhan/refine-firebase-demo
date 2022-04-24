import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/styles.min.css";
import routerProvider from "@pankod/refine-react-router-v6";
import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import {
  FirebaseDataProvider,
  FirebaseLiveProvider,
  biggestIdPlusOneStrategyIndexing,
} from "@ketenburhan/refine-firebase";
import { firebaseApp } from "./firebaseConfig";

function App() {
  const firebaseDataProvider = new FirebaseDataProvider(firebaseApp, {
    getCreateId: biggestIdPlusOneStrategyIndexing,
  }).getProvider();
  const firebaseLiveProvider = new FirebaseLiveProvider(
    firebaseApp
  ).getProvider();

  return (
    <Refine
      notificationProvider={notificationProvider}
      Layout={Layout}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      routerProvider={routerProvider}
      dataProvider={firebaseDataProvider}
      liveProvider={firebaseLiveProvider}
      liveMode="auto"
      resources={[
        {
          name: "posts",
          list: PostList,
          create: PostCreate,
          edit: PostEdit,
          show: PostShow,
        },
      ]}
    />
  );
}

export default App;
