import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconLink({icon, link, children}) {
    return (
        <span className="text-nowrap"><FontAwesomeIcon className="text-secondary" icon={icon}/> <a className="text-wrap" href={link} target="_blank" rel="noreferrer">{children}</a></span>
    )
}