
const WatchPageShimmer = () => {
    return (
        <>
            <div className="flex bg-black pt-10 px-10 w-screen overflow-x-hidden h-screen">
                <div className="w-11/12 flex flex-col"> 
                    <div className="h-3/5 w-4/6 py-5 bg-gray-500"></div>
                    <div className="bg-gray-300 my-3 py-2 h-3 w-1/3"></div>
                    <div className="flex">
                        <div className="flex pt-5 h-10 w-full gap-3 bg-black border-gray-400">
                            <div className="bg-gray-300  h-3 w-10"></div>
                            <div className="bg-gray-500 h-3 w-10"></div>
                            <div className="bg-gray-300 h-3 w-10"></div>
                        </div>
                        <div className="flex pt-5 h-10 w-full gap-3 bg-black border-gray-400">
                            <div className="bg-gray-300  h-3 w-10"></div>
                            <div className="bg-gray-500 h-3 w-10"></div>
                            <div className="bg-gray-300 h-3 w-10"></div>
                        </div>
                    </div>
                    <div className="bg-gray-300 mt-5 my-3 py-2 h-3 w-1/12"></div>
                    <div className="bg-gray-300 my-3 py-2 h-3 w-1/2"></div>
                </div>
                <div className="w-1/6">
                    {
                        Array(2).fill("").map((e,index)=>{
                            return (
                                <div className="flex flex-col p-2 h-52 w-40 gap-3 bg-black border-gray-400" key={"shimmer"+ index}>
                                    <div className="h-32 w-full bg-gray-500"></div>
                                    <div className="bg-gray-300  h-3 w-full"></div>
                                    <div className="bg-gray-500 h-3 w-2/4"></div>
                                    <div className="bg-gray-300 h-3 w-10"></div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
      );
}

export default WatchPageShimmer;