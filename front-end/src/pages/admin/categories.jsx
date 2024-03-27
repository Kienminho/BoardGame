import { CategoriesTable, ContentLoading, Error } from "../../components";
import { useTopics } from "../../hooks/Topics/use-topics";

const CategoriesPage = () => {
  const { data: topics, isLoading, isError } = useTopics();

  if (isLoading) return <ContentLoading />;
  if (isError) return <Error />;

  return (
    <div>
      <CategoriesTable topics={topics} />
    </div>
  );
};

export default CategoriesPage;
