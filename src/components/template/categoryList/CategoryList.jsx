import { useQuery } from "@tanstack/react-query";
import { deleteCategory, getCategory } from "services/admin";
import Loader from "components/module/loader/Loader";
import styles from "./CategoryList.module.css";

function CategoryList() {
  const { data, isFetching, refetch } = useQuery(
    ["get-categories"],
    getCategory
  );

  const deleteHandler = (id) => {
    deleteCategory(id);
    refetch();
  };

  return (
    <div className={styles.list}>
      {isFetching ? (
        <Loader />
      ) : (
        data?.data?.map((item) => (
          <div key={item._id}>
            <img src={`${item.icon}.svg`} alt="icon" />
            <h5>{item.name}</h5>
            <p>slug: {item.slug}</p>
            <button onClick={() => deleteHandler(item._id)}>
              حدف دسته‌بندی
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
