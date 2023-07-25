const GameCardsSkeleton = () => {
  return (
    <>
      <figure className="h-48">
        <div className="bg-slate-700 w-full h-full animate-pulse"></div>
      </figure>

      <div className="card-body">
        <div className="w-full h-6 bg-slate-700 rounded-lg animate-pulse"></div>
        <div className="w-1/2 h-6 bg-slate-700 rounded-lg animate-pulse"></div>
      </div>

      <div className="ml-2 mb-2 h-5 w-12 bg-slate-700 rounded-lg animate-pulse"></div>
      <div className="ml-2 mb-4 h-6 w-1/2 bg-slate-700 rounded-lg animate-pulse"></div>
    </>
  );
};

export default GameCardsSkeleton;
