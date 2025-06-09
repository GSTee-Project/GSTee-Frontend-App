import TopCandidate from '../../../dashboard/overview/leaderboard/topCandidate';
import user1 from '../../../../assets/images/leaderboard_img1.jpg';
import user2 from '../../../../assets/images/leaderboard_img2.jpg';
import user3 from '../../../../assets/images/leaderboard_img3.jpg';
import user4 from '../../../../assets/images/leaderboard_img4.jpg';
import user5 from '../../../../assets/images/leaderboard_img5.jpg';

const FriendLeaderboard = () => {
    const leaderboard = [
        {rank: 1, userImage: user1, userName: 'Helen', xp: '1561'},
        {rank: 2, userImage: user2, userName: 'Joshua', xp: '1402'},
        {rank: 3, userImage: user3, userName: 'Tara', xp: '1373'},
        {rank: 4, userImage: user4, userName: 'Laura', xp: '1296'},
        {rank: 5, userImage: user5, userName: 'Eva', xp: '1273'},
    ]

    return(
        <>
        <section>
            {leaderboard.map((user, index) => (
                <TopCandidate key={index} 
                  position={user.rank} 
                  picture={user.userImage} 
                  name={user.userName}
                  xp={user.xp}
                  variant = 'global' 
                />
            ))}
        </section>
        </>
    );
}

export default FriendLeaderboard;