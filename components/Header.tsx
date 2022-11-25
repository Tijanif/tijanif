import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../public/img/me.jpg'
import {siteMetadata} from "../content/meta";
import SocialIcons from "./ScocialIcons";
import Pages from "./Pages";


const Header = () => {
    return (
        <div className="block mb-6 md:flex">
            <div className="w-full max-w-150">
                <Link href="/">
                    <Image
                        src={profilePic}
                        alt={`Picture of ${siteMetadata.name}`}
                        className="rounded-full transform transition-all duration-150 hover:scale-105"
                    />
                </Link>
            </div>
            <div className="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20">
                <h1 className="text-4xl xs:text-5xl text-th-primary font-bold leading-tight hover:text-block">
                    <Link href="/">{siteMetadata.name}</Link>
                </h1>
                <p className="text-th-secondary py-1 font-serif text-lg tracking-wide">{siteMetadata.description}</p>
                <SocialIcons/>
                <Pages/>
            </div>
        </div>
    )
}

export default Header