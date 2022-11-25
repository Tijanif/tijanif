import * as React from "react"
import { SVGProps } from "react"

const DotPattern = (props: SVGProps<SVGSVGElement>) => (
    <svg
        className="hidden fixed transform right-0 top-5 z-0 xl:block"
        width={404}
        height={784}
        fill="none"
        {...props}
    >
        <defs>
            <pattern
                id="a"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
            >
                <path className="text-th-subtle" fill="currentColor" d="M0 0h4v4H0z" />
            </pattern>
        </defs>
        <path fill="url(#a)" d="M0 0h404v784H0z" />
    </svg>
)

export default DotPattern
