import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  
  const HomeRightbar = () => {
    return (
      <>
       <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
         
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">
              City:
            </span>
            <span className="rightbarInfoValue">
              India
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">
              City:
            </span>
            <span className="rightbarInfoValue">
              India
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">
            From:
            </span>
            <span className="rightbarInfoValue">
                Indore
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">
           Relationship
            </span>
            <span className="rightbarInfoValue">
             Single
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <h4 className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/1.jpeg" alt="" />
            <span className="rightbarFollowingName">Yogesh Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/2.jpeg" alt="" />
            <span className="rightbarFollowingName">Yogesh Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/3.jpeg" alt="" />
            <span className="rightbarFollowingName">Yogesh Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/4.jpeg" alt="" />
            <span className="rightbarFollowingName">Yogesh Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/5.jpeg" alt="" />
            <span className="rightbarFollowingName">Yogesh Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/6.jpeg" alt="" />
            <span className="rightbarFollowingName">Yogesh Carter</span>
          </div>
        </h4>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
         {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
