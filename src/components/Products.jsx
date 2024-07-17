import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import useDebounce from "./hooks/useDebounce";
import useSWR from "swr";

function Products() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearchValue = useDebounce(searchTerm, 1000);

  function getSearchResults(searchParam) {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchParam}`
    )
      .then((res) => res.json())
      .then((result) => {
        setSearchResults(result.drinks.slice(0, 6));
      });
  }
  const { data } = useSWR(
    debouncedSearchValue ? debouncedSearchValue : null,
    getSearchResults
  );
  console.log(data);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result.drinks.slice(10, 16));
      });
  }, []);

  return (
    <div id="product" className="my-16 scroll-mt-[64px]">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between pl-7 items-center">
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 pl-7 mb-4">
          <h1 className="font-bold text-3xl w-fit mb-4">Our Drinks</h1>
          <p className="text-gray-700">
            Bacardi Breezer, Breezer for short, is a fruit-based alcoholic drink
            which comes in many flavours.
          </p>
        </div>
        <div className="flex gap-2 items-center py-1 px-2 rounded-md border mb-4 border-gray-400 mr-7">
          <CiSearch />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" bg-transparent focus:outline-none"
          />
        </div>
      </div>
      {searchTerm !== "" ? (
        <div>
          <h2 className="pl-14 text-xl font-bold">Your Search Results:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 md:gap-9 px-20 my-4 md:my-10">
            {searchResults.map((post) => (
              <div
                key={post.idDrink}
                style={{ "--image-url": `url(${post.strDrinkThumb})` }}
                className="h-[300px] md:h-[400px] aspect-auto relative block bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat
          before:content-['']
            before:absolute
            before:inset-0
            before:block
           before:bg-gradient-to-t
            before:from-black
            before:to-transparent
            before:opacity-75
           overflow-hidden rounded-md"
              >
                <div className="flex flex-col gap-1 mt-4 p-2 text-white z-50 absolute bottom-2">
                  <span className=" text-sm">
                    <span className=" text-base "> Drink:</span> {post.strDrink}
                  </span>
                  <details>
                    <summary>Instructions:</summary>
                    <span className="text-gray-300">
                      {post.strInstructions}
                    </span>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 md:gap-9 px-20 my-4 md:my-10">
          {posts.map((post) => (
            <div
            key={post.idDrink}
            style={{ "--image-url": `url(${post.strDrinkThumb})` }}
            className="h-[300px] md:h-[400px] aspect-auto relative block bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat
      before:content-['']
        before:absolute
        before:inset-0
        before:block
       before:bg-gradient-to-t
        before:from-black
        before:to-transparent
        before:opacity-75
       overflow-hidden rounded-md"
          >
            <div className="flex flex-col gap-1 mt-4 p-2 text-white z-50 absolute bottom-2">
              <span className=" text-sm">
                <span className=" text-base "> Drink:</span> {post.strDrink}
              </span>
              <details>
                <summary>Instructions:</summary>
                <span className="text-gray-300">
                  {post.strInstructions}
                </span>
              </details>
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
