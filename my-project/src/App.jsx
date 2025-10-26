import Layout from "./layout/Layout.jsx";
import HeaderSearch from "./components/HeaderSearch.jsx";

import ProfileCard from "./features/sidebar/ProfileCard.jsx";
import MentorsCard from "./features/sidebar/MentorsCard.jsx";
import CommunitiesCard from "./features/sidebar/CommunitiesCard.jsx";

import Tabs from "./features/tabs/Tabs.jsx";
import FeedList from "./features/feed/FeedList.jsx";

export default function App() {
  return (
    <Layout
      header={<HeaderSearch />}
      sidebar={
        <>
          <ProfileCard />
          <MentorsCard />
          <CommunitiesCard />
        </>
      }
    >
      <Tabs />
      <FeedList />
    </Layout>
  );
}