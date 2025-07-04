const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-48 w-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};
export function FullPageLoadingSpinner() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}

export default LoadingSpinner;
