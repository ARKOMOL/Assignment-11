import React from 'react';
import{
    Link,
    useMatch,
    useResolvedPath,
} from 'react-router-dom'
const CustomLink = ({to,children,...props}) => {
    let resolved =useResolvedPath(to);
    let match= useMatch({path: resolved.pathname, end: true})
    return (
        <div>
          <Link
            style={{ color: match ?"underline" : "none" ? "#006E7F" : "Black" }}
            to={to}
            {...props}
          >
            {children}
          </Link>
        </div>
      );
    }

export default CustomLink;