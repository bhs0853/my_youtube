import React from 'react'

const SearchPageShimmer = () => {
    return (
        <>
            <div className="pt-10 px-10 w-screen justify-between flex-wrap overflow-hidden bg-black h-screen gap-6"> 
                {
                    Array(5).fill("").map((e,index)=>{
                        return (
                            <div className="flex p-2 h-52 w-96 gap-3 bg-black border-gray-400" key={"shimmer"+ index}>
                                <div className="h-24 w-3/4 bg-gray-500"></div>
                                <div className='h-24 w-full'>
                                <div className="bg-gray-300 my-3  h-3 w-full"></div>
                                <div className="bg-gray-500 my-3 h-3 w-2/4"></div>
                                <div className="bg-gray-300 my-3 h-3 w-10"></div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
      );
}

export default SearchPageShimmer