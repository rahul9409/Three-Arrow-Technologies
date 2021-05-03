import './Video.css';
const Video = () => {
    return (
        <div>

            <br/><br/><br/><br/>
            <center>
            <video>
                <source src="https://ueno.co/static/interview-white-17edfff518080c24e6248ae5e6b232dc.mp4" type="video/mp4">
                </source>
            </video>
            </center>
            <p className="para1">Join Us</p>
            <p className="para2">Open Positions</p>
            <p className="loc">San francisco <i class='icon'></i> </p>
            <p className="loc1">New York <i class='icon'></i> </p>
            <hr/>
          <a href="/" className="footerlogo">  <h3>ueno.</h3></a>
        </div>
    );
};
export default Video;