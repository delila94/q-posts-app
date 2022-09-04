import Loading from "../components/BasicComponents/Loading";
function withLoading(Component: any) {
  return function WithLoadingComponent(props: any) {
      
    const { isLoading,loadingProps, ...otherProps } = props
    if (!isLoading) return <Component {...otherProps} />;
    return <Loading width={loadingProps?.width} height={loadingProps?.height}/>;
  };
}
export default withLoading;
