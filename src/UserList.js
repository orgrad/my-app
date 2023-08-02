


function User({user}){
   
    return(
        <div>
            <b>{user.username}</b><br />
            <b>{user.email}</b><br />
        </div>
    );
}


function UserList() {
    const users = [
        {
            id: 1,
            username: "OrgRad",
            email: "kwy@kakao.com"
        },
        {
            id: 2,
            username: "youngs1201",
            email: "youngs1201@naver.com"
        },
        {
            id: 3,
            username: "nany",
            email: "nany@gmail.com"
        }
    ];


    return (
        <div>
            <div>
               <User user={users[0]}/>
               <User user={users[1]}/>
               <User user={users[2]}/>
            </div>
        </div>
    );
}
export default UserList;