import React from "react"
import ContentLoader from "react-content-loader"

const ContentLoaderComponent = (props) => (
  <ContentLoader 
    speed={2}
    width={476}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-6" y="8" rx="3" ry="3" width="136" height="21" /> 
    <rect x="-4" y="68" rx="0" ry="0" width="70" height="40" /> 
    <rect x="71" y="68" rx="0" ry="0" width="70" height="40" /> 
    <rect x="146" y="68" rx="0" ry="0" width="70" height="40" /> 
    <rect x="221" y="69" rx="0" ry="0" width="70" height="40" /> 
    <rect x="298" y="69" rx="0" ry="0" width="70" height="40" />
  </ContentLoader>
)

export default ContentLoaderComponent