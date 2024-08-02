import AddPost from "components/template/addPost/AddPost";
import PostList from "components/template/postList/PostList";

function DashboardPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <AddPost />
      <PostList />
    </div>
  );
}

export default DashboardPage;
