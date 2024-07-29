const HomePageShimmer = () => {
    return (
        <>
            <div className="flex pt-10 px-10 justify-between flex-wrap overflow-hidden bg-black h-screen gap-6"> 
                {
                    Array(21).fill("").map((e,index)=>{
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
        </>
      );
}
export default HomePageShimmer;