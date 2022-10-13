import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
        speed={2}
        width={1200}
        height={100}
        viewBox="0 0 1200 100"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="85" y="24" rx="3" ry="3" width="107" height="7" /> 
        <rect x="89" y="43" rx="3" ry="3" width="70" height="8" /> 
        <circle cx="41" cy="41" r="36" />
    </ContentLoader>
)

export default Skeleton;