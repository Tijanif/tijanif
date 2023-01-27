import Link from "next/link";
import { pages } from "../content/pages";

const Pages = () => {
  const getLinkStyle: any = (route: any) => {
    return `inline-block py-2 text-xs ${
      route === pages[route]
        ? "font-bold text-th-primary"
        : "text-th-secondary hover:text-th-primary"
    }`;
  };

  return (
    <ul className='mt-6 uppercase tracking-wider'>
      {pages.map((page: any) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <li className='inline list-none pr-4'>
            <Link href={page.route}>
              <a className={getLinkStyle}>{page.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Pages;
