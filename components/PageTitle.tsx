import {siteMetadata} from "../content/meta";
import Head from "next/head";
import * as React from "react";

type Props = {
    children?: React.ReactNode,
    title:string;
}

const PageTitle = ({title} :Props) => {
    const pageTitle = `${title} | ${siteMetadata.titlePostfix}`;
  return (
      <Head>
         <title>{pageTitle}</title>
      </Head>

  )

}

export default PageTitle