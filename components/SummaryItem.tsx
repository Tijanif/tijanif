import {toArray} from "../utils/toArray";
import * as React from "react";
import Link from "./Link";

 interface SectionItem  {
    name: string| undefined ,
    shortDesc: string | string[],
    link: string | undefined ,
    longDesc: string |string[] | undefined ,
    tags: string[] | undefined ;
}

const SummaryItem = ({name, shortDesc,link,longDesc,tags}:SectionItem) => {
        return (
            <>
                <div className="mb-6">
                    <h3 className="font-semibold text-th-primary pb-1">
                        {link ? <Link href={link}>{name}</Link> : name}
                            </h3>
                        <div className="text-lg text-th-secondary font-light">
                            <div className={longDesc && 'italic'}>
                                {/* eslint-disable-next-line react/jsx-key */}
                                {toArray(shortDesc).map(line => <p className="pt-1">{line}</p>)}
                          </div>
                           </div>

                {
                    longDesc && tags ?  <ul className="text-xs flex flex-wrap gap-2 pt-2 pb-1"> {tags.map(line => <li className="px-2 dark:bg-th-subtle rounded-full border border-th-subtle dark:text-th-primary"> {line}</li> )} </ul> : null
                }
                         <div className="text-base text-th-tertiary pt-1">
                         {
                             // eslint-disable-next-line react/jsx-key
                             toArray(longDesc).map(line =>  <p className="pt-1 pb-1">{line}</p> )
                         }
                            </div>

                            </div>
            </>
        )
}

export default SummaryItem