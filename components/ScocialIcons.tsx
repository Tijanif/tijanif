import {siteMetadata} from "../content/meta";
import GitHubIcon from "../public/GitHubIcon";
import LinkedInIcon from "../public/LinkedInIcon";

const SocialIcons = () => {
  return (
      <ul className="m-1 inline-flex items-center gap-1">
          <li className="inline list-none pr-2">
              <a
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block h-4 transform transition-all duration-150 hover:scale-110"
              >
                  <GitHubIcon />
              </a>
          </li>
          <li className="inline list-none pr-2">
              <a
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block h-4 transform transition-all duration-150 hover:scale-110"
              >
                  <LinkedInIcon />
              </a>
          </li>
      </ul>
  )
}
export default SocialIcons