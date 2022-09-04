import MainTitle from "../components/BasicComponents/MainTitle";

function withContainer(Component: any) {
  return function WithStylingComponent(props: any) {
    const { title, ...otherProps } = props;
    return (
      <div className="max-w-5xl ma m-auto">
        <MainTitle data-testid="title" fontWeight="font-bold"
        fontSize="text-3xl"
        m={3}
        color={"text-gray-700"}>{title}</MainTitle>
        <Component {...otherProps} />
      </div>
    );
  };
}
export default withContainer;
