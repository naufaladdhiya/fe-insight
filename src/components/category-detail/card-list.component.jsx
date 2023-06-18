import CardItem from "./card-item.component";

const CardList = ({ categories }) => {
  console.log(categories);
  return (
    <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categories.map((category, index) => {
        return <CardItem key={index} id={category.id} category={category} />;
      })}
    </div>
  );
};
export default CardList;
