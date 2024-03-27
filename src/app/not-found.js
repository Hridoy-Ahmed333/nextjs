import Link from "next/link";

function NotFound() {
  return (
    <div>
      <div>Page Not Found</div>
      <Link href={"/"}>Go back to the home page</Link>
    </div>
  );
}

export default NotFound;
//Press Ctrl + shift + r to refresh
