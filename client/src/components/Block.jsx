import Article from "../components/Article";

export default function Block() {
    return (
        <div className="grid grid-cols-11 grid-rows-[auto_repeat(4,225px)] gap-10 min-h-screen w-full">
            <div className="col-start-2 row-start-2 col-span-6 row-span-2">
                <Article />
            </div>
            <div className="col-start-8 row-start-2 col-span-3 row-span-1">
                <Article />
            </div>
            <div className="col-start-8 row-start-3 col-span-3 row-span-1">
                <Article />
            </div>
            <div className="col-start-2 row-start-4 col-span-3 row-span-1">
                <Article />
            </div>
            <div className="col-start-5 row-start-4 col-span-3 row-span-1">
                <Article />
            </div>
            <div className="col-start-8 row-start-4 col-span-3 row-span-1">
                <Article />
            </div>
        </div>
    );
}