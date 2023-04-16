import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={490}
    viewBox="0 0 280 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="244" rx="20" ry="20" width="280" height="28" /> 
    <circle cx="130" cy="112" r="113" /> 
    <rect x="0" y="303" rx="11" ry="11" width="280" height="88" /> 
    <rect x="0" y="415" rx="10" ry="10" width="95" height="30" /> 
    <rect x="237" y="431" rx="0" ry="0" width="0" height="16" /> 
    <rect x="123" y="413" rx="25" ry="25" width="155" height="45" />
  </ContentLoader>
)

export default Skeleton