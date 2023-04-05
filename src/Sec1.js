export default function Sec1(){
    return(<div style={{width:'700px',float:'left',border:'solid 10px rgba(29,140,242,0.2)',borderRadius:'10px',position:'relative'}} >
   <div className="window-mask">
  <div className=" window-header">
    <div className="circle-wrapper">
      <span className="circle" />
      <span className="circle" />
      <span className="circle" />
    </div>
  </div>
  <div className="content-wrapper">
    <div tabIndex={-1} className="video-component">
      <div
        className="react-player-video-component with-window-mask"
        style={{ width: "100%", height: "100%" }}
      >
        <video
          preload="auto"
          loop=""
          poster="https://dapulse-res.cloudinary.com/video/upload/so_0p/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/7_status.jpg"
          playsInline=""
          webkit-playsinline=""
          x5-playsinline=""
          style={{ width: "100%", height: "100%" }}
        >
          <source src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/7_status.mp4" />
        </video>
      </div>
    </div>
  </div>
</div>


    </div>)
}