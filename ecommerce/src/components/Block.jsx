import Article from "@/components/Article";

export default function Block() {
    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-4/5">

                {/* <div className="xl:col-start-1 xl:row-start-2 xl:col-span-2 xl:row-span-2">
                    <Article />
                </div>
                <div className="xl:col-start-3 xl:row-start-2 xl:col-span-2 xl:row-span-2">
                    <Article />
                </div>
                <div className="xl:col-start-1 xl:row-start-4 xl:col-span-1 xl:row-span-1">
                    <Article />
                </div>
                <div className="xl:col-start-2 xl:row-start-4 xl:col-span-1 xl:row-span-1">
                    <Article />
                </div>
                <div className="xl:col-start-3 xl:row-start-4 xl:col-span-1 xl:row-span-1">
                    <Article />
                </div>
                <div className="xl:col-start-4 xl:row-start-4 xl:col-span-1 xl:row-span-1">
                    <Article />
                </div> */}


                <div className="sm:col-start-2 sm:row-start-2 sm:col-span-6 sm:row-span-2 md:col-start-1 md:row-start-2 md:col-span-2 md:row-span-2 lg:col-start-1 lg:row-start-2 lg:col-span-2 lg:row-span-2 xl:col-start-1 xl:row-start-2 xl:col-span-2 xl:row-span-2">
                    <Article />
                </div>
                <div className="sm:col-start-8 sm:row-start-2 sm:col-span-3 sm:row-span-1 md:col-start-1 md:row-start-4 md:col-span-1 md:row-span-1 lg:col-start-3 lg:row-start-2 lg:col-span-1 lg:row-span-1 xl:col-start-3 xl:row-start-2 xl:col-span-2 xl:row-span-2">
                    <Article />
                </div>
                <div className="sm:col-start-8 sm:row-start-3 sm:col-span-3 sm:row-span-1 md:col-start-2 md:row-start-4 md:col-span-1 md:row-span-1 lg:col-start-3 lg:row-start-3 lg:col-span-1 lg:row-span-1 xl:col-start-1 xl:row-start-4 xl:col-span-1 xl:row-span-1">
                    <Article />
                </div>
                <div className="sm:col-start-2 sm:row-start-4 sm:col-span-3 sm:row-span-1 md:col-start-1 md:row-start-5 md:col-span-1 md:row-span-1 lg:col-start-1 lg:row-start-4 lg:col-span-1 lg:row-span-1 xl:col-start-2 xl:row-start-4 xl:col-span-1 xl:row-span-1">
                    <Article />
                </div>
                <div className="sm:col-start-5 sm:row-start-4 sm:col-span-3 sm:row-span-1 md:col-start-2 md:row-start-5 md:col-span-1 md:row-span-1 lg:col-start-2 lg:row-start-4 lg:col-span-1 lg:row-span-1 xl:col-start-3 xl:row-start-4 xl:col-span-1 xl:row-span-1">
                    <Article />
                </div>
                <div className="sm:col-start-8 sm:row-start-4 sm:col-span-3 sm:row-span-1 md:col-start-1 md:row-start-6 md:col-span-2 md:row-span-1 lg:col-start-3 lg:row-start-4 lg:col-span-1 lg:row-span-1 xl:col-start-4 xl:row-start-4 xl:col-span-1 xl:row-span-1">
                    <Article />
                </div>
            </div>
        </div>
    );
}