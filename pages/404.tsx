import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      <h1>Ooooops....</h1>
      <p>That page can not be found🛑</p>
      <p>
        Go back to the 🏡{" "}
        <Link href='/'>
          <a>Home Page</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default PageNotFound;
