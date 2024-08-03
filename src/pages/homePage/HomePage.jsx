import { useQuery } from "@tanstack/react-query";
import Loader from "components/module/loader/Loader";
import Main from "components/template/main/Main";
import Sidebar from "components/template/sidebar/Sidebar";
import { getCategory } from "services/admin";
import { getAllPosts } from "services/user";

function HomePage() {
  const { data: posts, isLoading: postsLoading } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  return (
    <>
      {postsLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={{ display: "flex", columnGap: "100px" }}>
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
