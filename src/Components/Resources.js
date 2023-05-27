import React from 'react';
import "./Resources.css";

function Resources() {
  return (
    <div className="page Resources flex-c-se-c">
        <div className="page Gallery-Cont flex-c-se-c">
        <span className="page-title">Gallery</span>
          <span className="theme-title">Gallery are being uploaded soon.</span>
        </div>
        <div className="page News-Cont flex-c-se-c">
          <span className="page-title">News</span>
          <span className="theme-text">New updates..</span>
          <span className="theme-text">News will be updated here soon..</span>
        </div>
        <div className="page Blog-Cont flex-c-se-c">
          <span className="page-title">Blog</span>
          <span className="theme-text">Blog from our vehcile..</span>
          <span className="theme-text">Blog regrading our research will be there soon..</span>
        </div>
    </div>
  )
}

export default Resources