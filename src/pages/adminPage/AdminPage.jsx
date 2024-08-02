import CategoryForm from "components/template/categoryForm/CategoryForm";
import CategoryList from "components/template/categoryList/CategoryList";

function AdminPage() {
  return (
    <div>
      <CategoryList />
      <CategoryForm />
    </div>
  );
}

export default AdminPage;
