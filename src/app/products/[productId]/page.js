const DynamicProductPage = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h2>
        This is DynamicProductPage component {params.productId}{" "}
        {searchParams.category}
      </h2>
    </div>
  );
};

export default DynamicProductPage;
